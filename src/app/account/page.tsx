import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TranslatedText } from '@/components/TranslatedText';

export default function AccountPage() {
  return (
    <div>
      <h1 className="mb-6 font-headline text-3xl">
        <TranslatedText>Account Details</TranslatedText>
      </h1>
      <Card>
        <CardHeader>
          <CardTitle><TranslatedText>Welcome, User!</TranslatedText></CardTitle>
          <CardDescription>
            <TranslatedText>
              Here you can view and edit your account information.
            </TranslatedText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold"><TranslatedText>Name</TranslatedText></h3>
            <p className="text-muted-foreground">Alex Doe</p>
          </div>
          <div>
            <h3 className="font-semibold"><TranslatedText>Email</TranslatedText></h3>
            <p className="text-muted-foreground">alex.doe@example.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
