import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TranslatedText } from '@/components/TranslatedText';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <CheckCircle2 className="h-20 w-20 text-green-500" />
      <h1 className="mt-6 font-headline text-4xl md:text-5xl">
        <TranslatedText>Thank You for Your Order!</TranslatedText>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        <TranslatedText>
          Your order has been placed successfully. A confirmation email has been sent to you with the order details. We'll notify you once your items have shipped.
        </TranslatedText>
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/products/all"><TranslatedText>Continue Shopping</TranslatedText></Link>
      </Button>
    </div>
  );
}
