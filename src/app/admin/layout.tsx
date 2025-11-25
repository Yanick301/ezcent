'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { TranslatedText } from '@/components/TranslatedText';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile, isUserLoading, isProfileLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Don't do anything while user and profile are loading.
    if (isUserLoading || isProfileLoading) {
      return;
    }

    // After loading, if there's no user or the user is not an admin, redirect.
    if (!user || !profile?.isAdmin) {
      router.push('/login');
    }
  }, [user, profile, isUserLoading, isProfileLoading, router]);

  // While loading, show a full-screen loader.
  if (isUserLoading || isProfileLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground"><TranslatedText fr="Vérification des autorisations..." en="Verifying permissions...">Berechtigungen werden überprüft...</TranslatedText></p>
        </div>
      </div>
    );
  }

  // If the user is loaded and is an admin, show the admin content.
  if (user && profile?.isAdmin) {
    return <>{children}</>;
  }

  // Fallback for the brief moment before the redirect happens.
  // Or if the logic somehow fails, this prevents showing the children.
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground"><TranslatedText fr="Redirection..." en="Redirecting...">Weiterleitung...</TranslatedText></p>
      </div>
    </div>
  );
}
