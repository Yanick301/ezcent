'use client';

import { useLanguage } from '@/context/LanguageContext';
import type { ReactNode } from 'react';

type TranslatedTextProps = {
  fr: ReactNode;
  en: ReactNode;
  children: ReactNode; // German is the default
};

export function TranslatedText({ children, fr, en }: TranslatedTextProps) {
  const { language } = useLanguage();

  if (language === 'fr') {
    return <>{fr}</>;
  }

  if (language === 'en') {
    return <>{en}</>;
  }
  
  return <>{children}</>;
}
