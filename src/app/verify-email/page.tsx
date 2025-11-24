
'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TranslatedText } from '@/components/TranslatedText';
import { useAuth, useUser } from '@/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { MailCheck } from 'lucide-react';

export default function VerifyEmailPage() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user?.emailVerified) {
      router.push('/account');
    }
  }, [user, isUserLoading, router]);


  const handleResendEmail = async () => {
    if (!auth.currentUser) {
        toast({
            variant: "destructive",
            title: "Fehler",
            description: "Kein Benutzer angemeldet.",
        });
        return;
    }
    try {
      await sendEmailVerification(auth.currentUser);
      toast({
        title: language === 'fr' ? 'E-mail renvoyé' : language === 'en' ? 'Email Resent' : 'E-Mail erneut gesendet',
        description: language === 'fr' ? 'Un nouveau lien de vérification a été envoyé.' : language === 'en' ? 'A new verification link has been sent.' : 'Ein neuer Bestätigungslink wurde gesendet.',
      });
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Fehler',
        description: error.message,
      });
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MailCheck className="h-6 w-6" />
          </div>
          <CardTitle className="mt-4 text-2xl font-headline">
            <TranslatedText fr="Vérifiez votre adresse e-mail" en="Verify Your Email Address">Bestätigen Sie Ihre E-Mail-Adresse</TranslatedText>
          </CardTitle>
          <CardDescription>
            <TranslatedText fr="Nous avons envoyé un lien de vérification à votre adresse e-mail. Veuillez cliquer sur ce lien pour activer votre compte. Si vous n'avez rien reçu, vérifiez votre dossier de courrier indésirable." en="We've sent a verification link to your email address. Please click that link to activate your account. If you didn't receive anything, check your spam folder.">
              Wir haben einen Bestätigungslink an Ihre E-Mail-Adresse gesendet. Bitte klicken Sie auf diesen Link, um Ihr Konto zu aktivieren. Wenn Sie nichts erhalten haben, überprüfen Sie Ihren Spam-Ordner.
            </TranslatedText>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={handleResendEmail} className="w-full">
            <TranslatedText fr="Renvoyer l'e-mail de vérification" en="Resend Verification Email">Bestätigungs-E-Mail erneut senden</TranslatedText>
          </Button>
          <Button variant="ghost" asChild className="w-full">
            <Link href="/login"><TranslatedText fr="Retour à la connexion" en="Back to Login">Zurück zum Login</TranslatedText></Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
