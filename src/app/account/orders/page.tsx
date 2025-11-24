'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { TranslatedText } from '@/components/TranslatedText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag, Upload, CheckCircle } from 'lucide-react';
import { useCollection, useFirestore, useUser } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { fr, de } from 'date-fns/locale';
import { useLanguage } from '@/context/LanguageContext';

export default function OrdersPage() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { language } = useLanguage();

  const ordersQuery = useMemo(() => {
    if (!user) return null;
    return collection(firestore, `users/${user.uid}/orders`);
  }, [firestore, user]);

  const { data: orders, isLoading } = useCollection(ordersQuery as any);

  const handleUploadReceipt = (orderId: string) => {
    // Logic to open file dialog and upload will be added later
    alert(`Téléverser le reçu pour la commande ${orderId}`);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'pending':
        return 'secondary';
      case 'processing':
        return 'default';
      case 'completed':
        return 'default';
      default:
        return 'outline';
    }
  };

  if (isLoading) {
    return <div className="text-center"><TranslatedText fr="Chargement des commandes...">Bestellungen werden geladen...</TranslatedText></div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-headline text-3xl">
        <TranslatedText fr="Historique des commandes">Bestellverlauf</TranslatedText>
      </h1>
      {orders && orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order: any) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">
                          <TranslatedText fr={`Commande du ${order.orderDate ? format(order.orderDate.toDate(), 'PPP', { locale: fr }) : ''}`}>
                            Bestellung vom {order.orderDate ? format(order.orderDate.toDate(), 'PPP', { locale: de }) : ''}
                          </TranslatedText>
                        </CardTitle>
                        <CardDescription>
                          <TranslatedText fr="ID de commande">Bestell-ID</TranslatedText>: {order.id}
                        </CardDescription>
                    </div>
                     <Badge variant={getStatusVariant(order.paymentStatus)}>
                        <TranslatedText fr={order.paymentStatus === 'pending' ? 'En attente' : order.paymentStatus}>{order.paymentStatus === 'pending' ? 'Ausstehend' : order.paymentStatus}</TranslatedText>
                    </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-border mb-4">
                  {order.items.map((item: any) => (
                    <li key={item.productId} className="flex justify-between items-center py-2 text-sm">
                      <span>{item.quantity} x <TranslatedText fr={item.name_fr}>{item.name}</TranslatedText></span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <p><TranslatedText fr="Total">Gesamt</TranslatedText></p>
                    <p className="font-bold text-foreground">${order.totalAmount.toFixed(2)}</p>
                  </div>
                </div>

                {order.paymentStatus === 'pending' && (
                  <div className="mt-6 border-t pt-4 text-center">
                    <h4 className="font-semibold"><TranslatedText fr="Action requise">Aktion erforderlich</TranslatedText></h4>
                    <p className="text-sm text-muted-foreground mb-4"><TranslatedText fr="Veuillez téléverser votre preuve de paiement.">Bitte laden Sie Ihren Zahlungsnachweis hoch.</TranslatedText></p>
                    <Button onClick={() => handleUploadReceipt(order.id)}>
                      <Upload className="mr-2 h-4 w-4" />
                      <TranslatedText fr="Téléverser le reçu">Beleg hochladen</TranslatedText>
                    </Button>
                  </div>
                )}
                 {order.paymentStatus === 'completed' && (
                    <div className="mt-6 flex items-center justify-center text-green-600">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        <p className="text-sm font-semibold"><TranslatedText fr="Paiement confirmé">Zahlung bestätigt</TranslatedText></p>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-2 border-dashed shadow-none">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              <h3 className="mt-4 text-xl font-semibold"><TranslatedText fr="Aucune commande pour le moment">Noch keine Bestellungen</TranslatedText></h3>
              <p className="mt-2 text-muted-foreground"><TranslatedText fr="Explorez nos collections et trouvez quelque chose qui vous plaît.">Entdecken Sie unsere Kollektionen und finden Sie etwas, das Ihnen gefällt.</TranslatedText></p>
              <Button asChild className="mt-6">
                  <Link href="/products/all"><TranslatedText fr="Continuer les achats">Weiter einkaufen</TranslatedText></Link>
              </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
