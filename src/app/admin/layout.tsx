
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
  const { user, profile, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Wait until loading is fully complete before making any decisions
    if (isLoading) {
      return;
    }

    // After loading, if there's no user or the user is not an admin, redirect.
    if (!user || !profile?.isAdmin) {
      router.replace('/login');
    }
  }, [user, profile, isLoading, router]);

  // While loading, show a full-screen loader.
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground"><TranslatedText fr="Vérification des autorisations..." en="Verifying permissions...">Berechtigungen werden überprüft...</TranslatedText></p>
        </div>
      </div>
    );
  }

  // If loading is complete and user is an admin, show the content.
  // This prevents flashing the content for non-admins before the redirect.
  if (user && profile?.isAdmin) {
    return <>{children}</>;
  }

  // Otherwise, show a loading/redirecting screen as a fallback
  // This covers the brief moment before the useEffect redirect kicks in
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground"><TranslatedText fr="Redirection..." en="Redirecting...">Weiterleitung...</TranslatedText></p>
      </div>
    </div>
  );
}

    