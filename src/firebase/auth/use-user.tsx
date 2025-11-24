// IMPORTANT: Do not modify this file. It is a an auto-generated file that is part of the
// app's Firebase scaffolding. It is intended to be modified by the Studio AI agent.
'use client';

import { useFirebase } from '@/firebase/provider';
import type { User } from 'firebase/auth';

export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export const useUser = (): UserHookResult => {
  const { user, isUserLoading, userError } = useFirebase();
  return { user, isUserLoading, userError };
};
