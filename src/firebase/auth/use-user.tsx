
'use client';

import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { useFirebase } from '@/firebase/provider';
import { doc, onSnapshot } from 'firebase/firestore';

export type UserProfile = {
  isAdmin?: boolean;
  // other profile fields...
};

export type WithId<T> = T & { id: string };

export interface UserHookResult {
  user: User | null;
  profile: WithId<UserProfile> | null;
  isLoading: boolean;
  error: Error | null;
}

export const useUser = (): UserHookResult => {
  const { auth, firestore } = useFirebase();

  const [user, setUser] = useState<User | null>(() => auth.currentUser);
  const [profile, setProfile] = useState<WithId<UserProfile> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }

    const unsubscribeAuth = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        if (!user) {
          // If user logs out, clear profile and stop loading
          setProfile(null);
          setIsLoading(false);
        }
      },
      (error) => {
        console.error("Auth Error:", error);
        setError(error);
        setUser(null);
        setProfile(null);
        setIsLoading(false);
      }
    );

    return () => unsubscribeAuth();
  }, [auth]);

  useEffect(() => {
    // Don't do anything until we have a user object
    if (!user || !firestore) {
      setIsLoading(false); // If no user, we are done loading
      return;
    }

    // We have a user, start loading profile
    setIsLoading(true);
    const userProfileRef = doc(firestore, 'userProfiles', user.uid);
    
    const unsubscribeProfile = onSnapshot(userProfileRef, (docSnap) => {
      if (docSnap.exists()) {
        setProfile({ id: docSnap.id, ...(docSnap.data() as UserProfile) });
      } else {
        setProfile(null);
      }
      // Profile is loaded (or confirmed not to exist), so we are done loading
      setIsLoading(false);
      setError(null);
    }, (err) => {
      console.error("Firestore Profile Error:", err);
      setError(err);
      setProfile(null);
      setIsLoading(false);
    });

    return () => unsubscribeProfile();
  }, [user, firestore]);
  
  const { isUserLoading: isAuthLoading } = useFirebase();

  return { user, profile, isLoading: isLoading || isAuthLoading, error };
};
