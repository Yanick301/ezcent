
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
  isProfileLoading: boolean;
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
        setIsUserLoading(false);
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
    // Primary check: user's email. This is immediate.
    if (user.email === ADMIN_EMAIL) return true;
    // Fallback check: Firestore profile document. This might take a moment to load.
    return (userProfile as any)?.isAdmin === true;
  }, [user, userProfile]);

  return { user, isAdmin, isUserLoading, isProfileLoading, userError };
};
