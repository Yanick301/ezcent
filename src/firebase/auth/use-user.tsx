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

    const unsubscribe = auth.onIdTokenChanged(
      async (user) => {
        setUser(user);
        if (user) {
          const tokenResult = await user.getIdTokenResult();
          const claims = tokenResult.claims;
          setIsAdmin(!!claims.isAdmin);
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
