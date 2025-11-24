'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TranslatedText } from '@/components/TranslatedText';
import { Loader2, ShieldX } from 'lucide-react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminDashboardPage() {
  const { user, isAdmin, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !isAdmin) {
      router.push('/account');
    }
  }, [user, isAdmin, isUserLoading, router]);

  if (isUserLoading) {
    return (
      <div className="container mx-auto flex h-[60vh] items-center justify-center p-12 text-center">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="border-2 border-dashed border-destructive shadow-none">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <ShieldX className="h-16 w-16 text-destructive" />
            <h3 className="mt-4 text-xl font-semibold text-destructive">
              <TranslatedText fr="Accès non autorisé" en="Unauthorized Access">
                Unbefugter Zugriff
              </TranslatedText>
            </h3>
            <p className="mt-2 text-muted-foreground">
              <TranslatedText
                fr="Vous n'avez pas les permissions nécessaires pour accéder à cette page."
                en="You do not have the required permissions to access this page."
              >
                Sie haben nicht die erforderlichen Berechtigungen, um auf diese
                Seite zuzugreifen.
              </TranslatedText>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>
            <TranslatedText
              fr="Tableau de bord administrateur"
              en="Admin Dashboard"
            >
              Admin-Dashboard
            </TranslatedText>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <TranslatedText fr="En cours de construction..." en="Under construction...">
              In Arbeit...
            </TranslatedText>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
