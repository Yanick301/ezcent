'use client';

import { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translateContent } from '@/ai/flows/translate-content';

type TranslatedTextProps = {
  children: string;
};

// A simple in-memory cache for translations
const translationCache = new Map<string, string>();
const apiKeyIsSet = !!process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export function TranslatedText({ children }: TranslatedTextProps) {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(children);
  const [isLoading, setIsLoading] = useState(false);

  const cacheKey = useMemo(() => `${language}:${children}`, [language, children]);

  useEffect(() => {
    // Do not translate on the server or if the key is not set
    if (typeof window === 'undefined' && !apiKeyIsSet) {
      return;
    }

    if (language === 'en') {
      setTranslatedText(children);
      return;
    }
    
    if (translationCache.has(cacheKey)) {
        setTranslatedText(translationCache.get(cacheKey)!);
        return;
    }

    let isCancelled = false;
    const doTranslate = async () => {
      setIsLoading(true);
      try {
        const result = await translateContent({ text: children, targetLanguage: language });
        if (!isCancelled) {
          translationCache.set(cacheKey, result.translatedText);
          setTranslatedText(result.translatedText);
        }
      } catch (error) {
        console.error('Translation failed:', error);
        if (!isCancelled) {
          setTranslatedText(children); // Fallback to original text on error
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    doTranslate();

    return () => {
      isCancelled = true;
    };
  }, [children, language, cacheKey]);

  if (isLoading) {
    return <span className="opacity-75 animate-pulse">...</span>;
  }

  return <>{translatedText}</>;
}
