
'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  LayoutDashboard,
  LogOut,
  Loader2,
  ShieldOff,
} from 'lucide-react';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
    // Show a loading state or a splash screen while verifying auth and admin status
    return (
      <div className="flex h-screen w-full items-center justify-center bg-muted">
        <div className="text-center">
          {isUserLoading ? (
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          ) : (
            <>
              <ShieldOff className="mx-auto h-12 w-12 text-destructive" />
              <p className="mt-4 text-lg font-semibold">Accès non autorisé</p>
              <p className="text-sm text-muted-foreground">
                Vous allez être redirigé...
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <LayoutDashboard className="h-6 w-6" />
            <span>EZCENTIALS Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              Tableau de bord
            </Link>
          </div>
        </nav>
        <div className="mt-auto border-t p-4">
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </Button>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background px-6 sm:justify-end">
            <span className="font-semibold sm:hidden">EZCENTIALS Admin</span>
            <Button variant="ghost" className="sm:hidden" onClick={handleSignOut}>
                <LogOut className="h-5 w-5" />
            </Button>
            <div className="hidden sm:block">
                <span className="font-medium">{user.email}</span>
            </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
