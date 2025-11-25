
'use client';

import {
  useDoc,
  useFirestore,
  useUser,
  useMemoFirebase,
  errorEmitter,
  FirestorePermissionError,
} from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useParams, useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Loader2,
  CheckCircle,
  Ban,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';
import { TranslatedText } from '@/components/TranslatedText';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const getSafeDate = (order: any): Date => {
  if (!order || !order.orderDate) {
    return new Date();
  }
  if (order.orderDate && typeof order.orderDate.toDate === 'function') {
    return order.orderDate.toDate();
  }
  return new Date(order.orderDate);
};

export default function OrderValidationPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.userId as string;
  const orderId = params.orderId as string;

  const firestore = useFirestore();
  const { user } = useUser();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const orderRef = useMemoFirebase(() => {
    if (!userId || !orderId || !firestore) return null;
    return doc(firestore, `userProfiles/${userId}/orders/${orderId}`);
  }, [userId, orderId, firestore]);

  const {
    data: order,
    isLoading,
    error,
  } = useDoc(orderRef);

  const handleUpdateStatus = (status: 'completed' | 'rejected') => {
    if (!orderRef) return;
    setIsProcessing(true);

    updateDoc(orderRef, { paymentStatus: status })
      .then(() => {
        toast({
          title: `Commande ${status === 'completed' ? 'confirmée' : 'rejetée'}`,
        });
        router.push('/account/orders'); // Redirect after action
      })
      .catch((e) => {
        const permissionError = new FirestorePermissionError({
          path: orderRef.path,
          operation: 'update',
          requestResourceData: { paymentStatus: status },
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => setIsProcessing(false));
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8 text-center">
        <Card className="max-w-md bg-destructive/10">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20 text-destructive">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <CardTitle className="mt-4 text-destructive">
              Erreur de Permission
            </CardTitle>
            <CardDescription className="text-destructive/80">
              Impossible de charger les détails de la commande. Vous n'avez
              peut-être pas les permissions nécessaires.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Commande introuvable.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-center font-headline text-3xl">
        Validation de Commande
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Commande #{order.id}</CardTitle>
          <CardDescription>
            Passée le{' '}
            {format(getSafeDate(order), 'PPP')} par {order.shippingInfo.name} (
            {order.shippingInfo.email})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <h3 className="mb-2 font-semibold">Récapitulatif</h3>
              <ul className="divide-y">
                {order.items.map((item: any) => (
                  <li
                    key={item.productId}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="flex-grow pr-4">
                      {item.quantity} x {item.name}
                    </span>
                    <span className="font-medium">
                      €{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-4 text-lg font-semibold">
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>€{order.totalAmount.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {order.receiptImageURL ? (
              <div className="space-y-2">
                <h3 className="font-semibold">Preuve de Paiement</h3>
                <div className="overflow-hidden rounded-lg border">
                  <img
                    src={order.receiptImageURL}
                    alt="Preuve de paiement"
                    className="h-auto w-full"
                  />
                </div>
                <Button variant="outline" asChild>
                    <a href={order.receiptImageURL} target="_blank" rel="noopener noreferrer" className="w-full">
                        Voir en taille réelle <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-amber-500 bg-amber-50 p-4 text-center text-amber-800">
                <p>Aucune preuve de paiement n'a été téléversée pour cette commande.</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4 pt-6">
          <Button
            variant="destructive"
            onClick={() => handleUpdateStatus('rejected')}
            disabled={isProcessing || order.paymentStatus !== 'processing'}
          >
            {isProcessing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Ban className="mr-2 h-4 w-4" />
            )}
            Rejeter
          </Button>
          <Button
            onClick={() => handleUpdateStatus('completed')}
            disabled={isProcessing || order.paymentStatus !== 'processing'}
            className="bg-green-600 hover:bg-green-700"
          >
            {isProcessing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle className="mr-2 h-4 w-4" />
            )}
            Confirmer la Commande
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
