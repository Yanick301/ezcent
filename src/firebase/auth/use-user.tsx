'use client';

import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { useAuth } from '@/firebase/provider';

export interface UserHookResult {
  user: User | null;
  isAdmin: boolean;
  isUserLoading: boolean;
  userError: Error | null;
}

const ADMIN_EMAIL = 'ezcentials@gmail.com';

export const useUser = (): UserHookResult => {
  const auth = useAuth();
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [isAdmin, setIsAdmin] = useState(false);
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
        if (user) {
          // Check if the user's email is the admin email
          setIsAdmin(user.email === ADMIN_EMAIL);
        } else {
          setIsAdmin(false);
        }
        setIsUserLoading(false);
      },
      (error) => {
        setUserError(error);
        setIsAdmin(false);
        setIsUserLoading(false);
      }
    );

    return () => unsubscribe();
  }, [auth]);

  return { user, isAdmin, isUserLoading, userError };
};
