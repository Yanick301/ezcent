
'use client';

import { useEffect, useState, useMemo } from 'react';
import type { User } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase/provider';
import { doc } from 'firebase/firestore';
import { useDoc, type WithId } from '../firestore/use-doc';

export type UserProfile = {
  isAdmin?: boolean;
  // other profile fields...
};


export interface UserHookResult {
  user: User | null;
  profile: WithId<UserProfile> | null;
  isUserLoading: boolean;
  isProfileLoading: boolean; 
  userError: Error | null;
  profileError: Error | null;
}

export const useUser = (): UserHookResult => {
  const auth = useAuth();
  const firestore = useFirestore();

  const [user, setUser] = useState<User | null>(() => auth.currentUser);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [userError, setUserError] = useState<Error | null>(null);

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

  const userProfileRef = useMemo(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [user, firestore]);
  
  const { data: profile, isLoading: isProfileLoading, error: profileError } = useDoc<UserProfile>(userProfileRef);
  
  return { user, profile, isUserLoading, isProfileLoading, userError, profileError };
};
