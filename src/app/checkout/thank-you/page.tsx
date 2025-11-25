
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TranslatedText } from '@/components/TranslatedText';
import { Loader2, PackageCheck } from 'lucide-react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isUserLoading) return;
    if (!user) {
      router.push('/login');
    } else {
        // This page is likely no longer needed in the new flow,
        // but we'll keep it for now. Redirecting to orders might be better.
        // setTimeout(() => router.push('/account/orders'), 5000);
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <Loader2 className="h-20 w-20 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-col items-center text-center">
        <PackageCheck className="h-20 w-20 text-green-500" />
        <h1 className="mt-6 font-headline text-4xl md:text-5xl">
          <TranslatedText
            fr="Paiement en cours de validation"
            en="Payment Under Review"
          >
            Zahlung wird überprüft
          </TranslatedText>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          <TranslatedText
            fr="Merci ! Votre preuve de paiement a été soumise. Nous la vérifierons sous peu. Vous pouvez suivre le statut de votre commande dans votre espace client."
            en="Thank you! Your proof of payment has been submitted. We will review it shortly. You can track the status of your order in your account area."
          >
            Vielen Dank! Ihr Zahlungsnachweis wurde übermittelt. Wir werden ihn in Kürze prüfen. Sie können den Status Ihrer Bestellung in Ihrem Kundenbereich verfolgen.
          </TranslatedText>
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <Link href="/account/orders">
            <TranslatedText fr="Voir mes commandes" en="View My Orders">
              Meine Bestellungen anzeigen
            </TranslatedText>
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/products/all">
            <TranslatedText fr="Continuer les achats" en="Continue Shopping">
              Weiter einkaufen
            </TranslatedText>
          </Link>
        </Button>
      </div>
    </div>
  );
}
