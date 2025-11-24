'use client';

import { useEffect, useState, useMemo } from 'react';
import type { User } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase/provider';
import { doc } from 'firebase/firestore';
import { useDoc } from '../firestore/use-doc';

export interface UserHookResult {
  user: User | null;
  isAdmin: boolean;
  isUserLoading: boolean;
  userError: Error | null;
}

const ADMIN_EMAIL = 'ezcentials@gmail.com';

export const useUser = (): UserHookResult => {
  const auth = useAuth();
  const firestore = useFirestore();
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [userError, setUserError] = useState<Error | null>(null);

  const userProfileRef = useMemo(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [user, firestore]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc(userProfileRef);

  useEffect(() => {
    if (!auth) {
      setIsUserLoading(false);
      return;
    }

    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        // The final loading state will be determined by both auth and profile loading
      },
      (error) => {
        setUserError(error);
        setIsUserLoading(false);
      }
    );

    return () => unsubscribe();
  }, [auth]);

  const isAdmin = useMemo(() => {
    if (!user) return false;
    // Check based on email for directness
    if (user.email === ADMIN_EMAIL) return true;
    // Fallback to check profile document, if available
    return (userProfile as any)?.isAdmin === true;
  }, [user, userProfile]);

  // The overall loading state depends on both auth and profile fetching
  const finalIsLoading = isUserLoading || (user && isProfileLoading);


  return { user, isAdmin, isUserLoading: finalIsLoading, userError };
};
