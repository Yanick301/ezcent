
'use client';

import { useEffect, useState, useMemo } from 'react';
import type { User } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase/provider';
import { doc } from 'firebase/firestore';
import { useDoc } from '../firestore/use-doc';

export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
  isProfileLoading: boolean;
  userError: Error | null;
}

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

  const { isLoading: isProfileLoading } = useDoc(userProfileRef);

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

  return { user, isUserLoading, isProfileLoading, userError };
};
