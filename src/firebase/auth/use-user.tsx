
'use client';

import { useEffect, useState, useMemo } from 'react';
import type { User } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase/provider';
import { doc, onSnapshot, DocumentData } from 'firebase/firestore';

export type UserProfile = {
  isAdmin?: boolean;
  // other profile fields...
};

export type WithId<T> = T & { id: string };

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

  const [profile, setProfile] = useState<WithId<UserProfile> | null>(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState<Error | null>(null);

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

  useEffect(() => {
    if (!firestore || !user) {
      setProfile(null);
      setIsProfileLoading(false);
      return;
    }
    
    setIsProfileLoading(true);
    const userProfileRef = doc(firestore, 'userProfiles', user.uid);
    
    const unsubscribe = onSnapshot(userProfileRef, (docSnap) => {
      if (docSnap.exists()) {
        setProfile({ id: docSnap.id, ...(docSnap.data() as UserProfile) });
      } else {
        setProfile(null);
      }
      setIsProfileLoading(false);
      setProfileError(null);
    }, (error) => {
      console.error("Error fetching user profile:", error);
      setProfileError(error);
      setProfile(null);
      setIsProfileLoading(false);
    });

    return () => unsubscribe();
  }, [user, firestore]);
  
  return { user, profile, isUserLoading, isProfileLoading, userError, profileError };
};
