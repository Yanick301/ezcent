'use client';

import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { TranslatedText } from '../TranslatedText';

export function UserButton() {
  // Mock user state
  const isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
           <Button variant="ghost" className="w-full justify-start gap-2 px-0 text-base font-normal">
            <User className="h-5 w-5" />
            <TranslatedText fr="Mon compte">Mein Konto</TranslatedText>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/account"><TranslatedText fr="Mon compte">Mein Konto</TranslatedText></Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/favorites"><TranslatedText fr="Mes favoris">Meine Favoriten</TranslatedText></Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem><TranslatedText fr="Se déconnecter">Abmelden</TranslatedText></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
       <Button variant="outline" asChild className="justify-start">
        <Link href="/login"><User className="mr-2" /> <TranslatedText fr="Se connecter">Anmelden</TranslatedText></Link>
       </Button>
        <Button variant="ghost" asChild className="justify-start">
            <Link href="/register"><TranslatedText fr="S'inscrire">Registrieren</TranslatedText></Link>
        </Button>
    </div>
  );
}
