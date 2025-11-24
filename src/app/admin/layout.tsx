
'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  LayoutDashboard,
  LogOut,
  Loader2,
  ShieldOff,
  Users,
} from 'lucide-react';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TranslatedText } from '@/components/TranslatedText';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAdmin, isUserLoading } = useUser();
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (isUserLoading) {
      return; // Wait until user status is resolved
    }
    if (!user) {
      router.push('/login'); // Not logged in, redirect to login
      return;
    }
    if (!isAdmin) {
      router.push('/account'); // Logged in but not an admin, redirect to account
      return;
    }
  }, [user, isAdmin, isUserLoading, router]);

  if (isUserLoading || !isAdmin || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-muted">
        <div className="text-center">
          {isUserLoading ? (
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          ) : (
            <>
              <ShieldOff className="mx-auto h-12 w-12 text-destructive" />
              <p className="mt-4 text-lg font-semibold"><TranslatedText fr="Accès non autorisé" en="Unauthorized Access">Accès non autorisé</TranslatedText></p>
              <p className="text-sm text-muted-foreground">
                <TranslatedText fr="Vous allez être redirigé..." en="You will be redirected...">Vous allez être redirigé...</TranslatedText>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    if (!auth) return;
    await signOut(auth);
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
       <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-6">
        <nav className="flex items-center gap-6 text-lg font-medium">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <LayoutDashboard className="h-6 w-6" />
            <span className="sr-only">Tableau de bord</span>
          </Link>
          <Link
            href="/admin/dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Commandes
          </Link>
          <Link
            href="/admin/clients"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Clients
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="font-medium">{user.email}</span>
          <Button variant="ghost" size="icon" onClick={handleSignOut}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only"><TranslatedText fr="Se déconnecter" en="Log Out">Se déconnecter</TranslatedText></span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
}
