import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TranslatedText } from '@/components/TranslatedText';

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">
            <TranslatedText>Forgot Password</TranslatedText>
          </CardTitle>
          <CardDescription>
            <TranslatedText>
              Enter your email and we'll send you a link to reset your password.
            </TranslatedText>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email"><TranslatedText>Email</TranslatedText></Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <Button className="w-full"><TranslatedText>Send Reset Link</TranslatedText></Button>
          <Button variant="ghost" asChild>
            <Link href="/login"><TranslatedText>Back to Log In</TranslatedText></Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
