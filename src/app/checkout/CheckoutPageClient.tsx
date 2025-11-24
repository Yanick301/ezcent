
'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import placeholderImagesData from '@/lib/placeholder-images.json';
import { TranslatedText } from '@/components/TranslatedText';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Banknote, Loader2 } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useFirestore, useUser } from '@/firebase';
import { addDoc, collection, serverTimestamp, writeBatch, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const { placeholderImages } = placeholderImagesData;

const shippingSchemaDE = z.object({
  name: z.string().min(1, { message: 'Name ist erforderlich.' }),
  email: z.string().email({ message: 'Ungültige E-Mail-Adresse.' }),
  address: z.string().min(1, { message: 'Adresse ist erforderlich.' }),
  city: z.string().min(1, { message: 'Stadt ist erforderlich.' }),
  zip: z.string().min(1, { message: 'Postleitzahl ist erforderlich.' }),
  country: z.string().min(1, { message: 'Land ist erforderlich.' }),
});

const shippingSchemaFR = z.object({
  name: z.string().min(1, { message: 'Le nom est requis.' }),
  email: z.string().email({ message: 'Adresse e-mail invalide.' }),
  address: z.string().min(1, { message: "L'adresse est requise." }),
  city: z.string().min(1, { message: 'La ville est requise.' }),
  zip: z.string().min(1, { message: 'Le code postal est requis.' }),
  country: z.string().min(1, { message: 'Le pays est requis.' }),
});

const shippingSchemaEN = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  zip: z.string().min(1, { message: 'ZIP code is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
});


type ShippingFormInputs = z.infer&lt;typeof shippingSchemaDE&gt;;

export default function CheckoutPageClient() {
  const { cart, subtotal, clearCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() =&gt; {
    if (isUserLoading) return;
    if (!user) {
      router.push(`/login?redirect=${encodeURIComponent('/checkout')}`);
    }
  }, [user, isUserLoading, router]);

  const getValidationSchema = (lang: string) =&gt; {
    switch (lang) {
      case 'fr':
        return shippingSchemaFR;
      case 'en':
        return shippingSchemaEN;
      default:
        return shippingSchemaDE;
    }
  };

  const form = useForm&lt;ShippingFormInputs&gt;({
    resolver: zodResolver(getValidationSchema(language)),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      country: '',
    },
  });
  
  useEffect(() =&gt; {
    form.reset(undefined, { keepValues: true });
  }, [language, form]);

  useEffect(() =&gt; {
    if (cart.length === 0 &amp;&amp; !form.formState.isSubmitSuccessful) {
      const redirectUrl = searchParams.get('redirect') || '/products/all';
      router.push(redirectUrl);
    }
  }, [cart, router, form.formState.isSubmitSuccessful, searchParams]);

  useEffect(() =&gt; {
    if (user) {
        form.setValue('name', user.displayName || '');
        form.setValue('email', user.email || '');
    }
  }, [user, form]);


  if (isUserLoading || !user) {
    return (
      <div className="container mx-auto flex h-[60vh] items-center justify-center text-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (cart.length === 0 &amp;&amp; !form.formState.isSubmitSuccessful) {
    return (
      <div className="container mx-auto flex h-[60vh] items-center justify-center text-center">
        <p&gt;<TranslatedText fr="Votre panier est vide. Vous allez être redirigé..." en="Your cart is empty. You will be redirected...">Ihr Warenkorb ist leer. Sie werden weitergeleitet...</TranslatedText&gt;</p>
      </div>
    );
  }

  const shipping = 5.00;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  const handlePlaceOrder: SubmitHandler&lt;ShippingFormInputs&gt; = async (data) =&gt; {
    setIsSubmitting(true);
    if (!user || !firestore) { 
        toast({
            variant: "destructive",
            title: language === 'fr' ? "Authentification requise" : language === 'en' ? "Authentication Required" : "Authentifizierung erforderlich",
            description: language === 'fr' ? "Vous devez être connecté pour passer une commande." : language === 'en' ? "You must be logged in to place an order." : "Sie müssen angemeldet sein, um eine Bestellung aufzugeben.",
        });
        router.push('/login?redirect=/checkout');
        setIsSubmitting(false);
        return;
    }
    
    try {
      const orderData = {
          userId: user.uid,
          shippingInfo: data,
          items: cart.map(item =&gt; ({
              productId: item.product.id,
              name: item.product.name,
              name_fr: item.product.name_fr,
              name_en: item.product.name_en,
              price: item.product.price,
              quantity: item.quantity,
          })),
          subtotal,
          shipping,
          taxes,
          totalAmount: total,
          orderDate: serverTimestamp(),
          paymentStatus: 'pending',
          receiptImageURL: '',
      };

      const batch = writeBatch(firestore);

      // 1. Create order in the global collection
      const globalOrderRef = doc(collection(firestore, 'orders'));
      batch.set(globalOrderRef, orderData);

      // 2. Create order in the user's subcollection with the SAME ID
      const userOrderRef = doc(firestore, `userProfiles/${user.uid}/orders`, globalOrderRef.id);
      batch.set(userOrderRef, orderData);
      
      await batch.commit();

      clearCart();
      router.push('/checkout/thank-you');

    } catch (error) {
        console.error("Error creating order: ", error);
        toast({
            variant: "destructive",
            title: language === 'fr' ? "Erreur lors de la création de la commande" : language === 'en' ? "Error Creating Order" : "Fehler bei der Bestellerstellung",
            description: language === 'fr' ? "Une erreur est survenue. Veuillez réessayer." : language === 'en' ? "An error occurred. Please try again." : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center font-headline text-4xl md:text-5xl">
        <TranslatedText fr="Paiement" en="Checkout">Kasse</TranslatedText>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlePlaceOrder)} className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Shipping and Payment */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle&gt;<TranslatedText fr="Informations de livraison" en="Shipping Information">Versandinformationen</TranslatedText&gt;</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                   <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) =&gt; (
                        <FormItem>
                          <FormLabel&gt;<TranslatedText fr="Nom complet" en="Full Name">Vollständiger Name</TranslatedText&gt;</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                <div className="sm:col-span-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) =&gt; (
                            <FormItem>
                            <FormLabel&gt;<TranslatedText fr="Email" en="Email">Email</TranslatedText&gt;</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="sm:col-span-2">
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) =&gt; (
                            <FormItem>
                            <FormLabel&gt;<TranslatedText fr="Adresse" en="Address">Adresse</TranslatedText&gt;</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) =&gt; (
                            <FormItem>
                            <FormLabel&gt;<TranslatedText fr="Ville" en="City">Stadt</TranslatedText&gt;</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                     <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) =&gt; (
                            <FormItem>
                            <FormLabel&gt;<TranslatedText fr="Code postal" en="ZIP / Postal Code">PLZ / Postleitzahl</TranslatedText&gt;</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="sm:col-span-2">
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) =&gt; (
                            <FormItem>
                            <FormLabel&gt;<TranslatedText fr="Pays" en="Country">Land</TranslatedText&gt;</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Order Summary and Payment Instructions */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle&gt;<TranslatedText fr="Résumé de la commande" en="Order Summary">Bestellübersicht</TranslatedText&gt;</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-border">
                  {cart.map((item) =&gt; {
                    const productImage = placeholderImages.find(p =&gt; p.id === item.product.images[0]);
                    return (
                      <li key={item.product.id} className="flex items-center py-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                          {productImage &amp;&amp; (
                            <img
                              src={productImage.imageUrl}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          )}
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-sm font-medium">{item.quantity}</span>
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="font-medium&gt;<TranslatedText fr={item.product.name_fr} en={item.product.name_en}>{item.product.name}</TranslatedText&gt;</p>
                          <p className="text-sm text-muted-foreground">
                              €{item.product.price.toFixed(2)}
                          </p>
                        </div>
                        <p className="font-medium">€{(item.product.price * item.quantity).toFixed(2)}</p>
                      </li>
                    );
                  })}
                </ul>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground&gt;<TranslatedText fr="Sous-total" en="Subtotal">Zwischensumme</TranslatedText&gt;</p>
                    <p>€{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground&gt;<TranslatedText fr="Livraison" en="Shipping">Versand</TranslatedText&gt;</p>
                    <p>€{shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground&gt;<TranslatedText fr="Taxes" en="Taxes">Steuern</TranslatedText&gt;</p>
                    <p>€{taxes.toFixed(2)}</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-bold text-lg">
                    <p&gt;<TranslatedText fr="Total" en="Total">Gesamt</TranslatedText&gt;</p>
                    <p>€{total.toFixed(2)}</p>
                  </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle&gt;<TranslatedText fr="Instructions de Paiement" en="Payment Instructions">Zahlungsanweisungen</TranslatedText&gt;</CardTitle>
                <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                        <Banknote className="h-4 w-4" />
                        <TranslatedText fr="Veuillez effectuer un virement bancaire pour finaliser votre commande." en="Please make a bank transfer to finalize your order.">Bitte tätigen Sie eine Banküberweisung, um Ihre Bestellung abzuschließen.</TranslatedText>
                    </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                 <div>
                    <p className="font-semibold text-muted-foreground&gt;<TranslatedText fr="Titulaire du compte" en="Account Holder">Kontoinhaber</TranslatedText&gt;</p>
                    <p>Sabine Menke</p>
                 </div>
                 <div>
                    <p className="font-semibold text-muted-foreground&gt;<TranslatedText fr="Banque" en="Bank">BANQUE</TranslatedText&gt;</p>
                    <p>BBVA</p>
                 </div>
                 <div>
                    <p className="font-semibold text-muted-foreground">IBAN</p>
                    <p>DE78500319000014630686</p>
                 </div>
                 <div>
                    <p className="font-semibold text-muted-foreground">BIC / SWIFT</p>
                    <p>BBVADEFFXXX</p>
                 </div>
                 <div>
                    <p className="font-semibold text-muted-foreground&gt;<TranslatedText fr="Référence de la commande" en="Order Reference">Bestellreferenz</TranslatedText&gt;</p>
                    <p>Gifts</p>
                 </div>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                  &lt;&gt;
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <TranslatedText fr="Création de la commande..." en="Creating order...">Bestellung wird erstellt...</TranslatedText>
                  &lt;/{&gt;&lt;&gt;&lt;{&gt;}
              ) : (
                  <TranslatedText fr="Créer la commande" en="Create Order">Bestellung erstellen</TranslatedText>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
