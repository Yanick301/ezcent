
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Loader2 } from 'lucide-react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection } from '@/firebase/firestore/use-collection';
import { format } from 'date-fns';
import { fr, de, enUS } from 'date-fns/locale';
import { useLanguage } from '@/context/LanguageContext';
import { TranslatedText } from '@/components/TranslatedText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AdminClientsPage() {
  const { isAdmin, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { language } = useLanguage();

  const usersQuery = useMemoFirebase(() => {
    if (!isAdmin || !firestore) return null;
    return query(
      collection(firestore, 'userProfiles'),
      orderBy('registrationDate', 'desc')
    );
  }, [isAdmin, firestore]);

  const { data: users, isLoading } = useCollection(usersQuery);

  const getDateLocale = () => {
    switch (language) {
      case 'fr':
        return fr;
      case 'en':
        return enUS;
      default:
        return de;
    }
  };

  const getSafeDate = (user: any): Date => {
    if (user?.registrationDate?.toDate) {
      return user.registrationDate.toDate();
    }
    return new Date();
  };
  
  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  if (isUserLoading || isLoading) {
    return (
      <div className="container mx-auto flex h-[60vh] items-center justify-center p-12 text-center">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 font-headline text-4xl">
        <TranslatedText fr="Gestion des Clients" en="Client Management">
          Kundenverwaltung
        </TranslatedText>
      </h1>
      <p className="mb-8 text-muted-foreground">
        Liste de tous les utilisateurs enregistrés sur la plateforme.
      </p>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden lg:table-cell">Date d'inscription</TableHead>
                <TableHead className="text-right">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users && users.length > 0 ? (
                (users as any[]).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                         <Avatar className="h-9 w-9">
                            <AvatarImage src={user.photoURL || undefined} alt={user.firstName || 'User'} />
                            <AvatarFallback>{getInitials(`${user.firstName} ${user.lastName}`)}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{user.firstName} {user.lastName}</div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {format(getSafeDate(user), 'PPP', {
                        locale: getDateLocale(),
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {user.isAdmin ? (
                        <span className="font-semibold text-destructive">Admin</span>
                      ) : (
                        <span className="text-muted-foreground">Client</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    Aucun client trouvé.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
