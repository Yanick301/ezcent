
import Link from 'next/link';
import { TranslatedText } from './TranslatedText';

export function Footer() {
  const footerSections = [
    {
      title: 'Hilfe',
      title_fr: 'Aide',
      links: [
        { name: 'Kontaktieren Sie uns', name_fr: 'Contactez-nous', href: '#' },
        { name: 'FAQs', name_fr: 'FAQs', href: '#' },
        { name: 'Produktpflege', name_fr: 'Entretien des produits', href: '#' },
        { name: 'Rechtliche Hinweise', name_fr: 'Mentions légales', href: '#' },
      ],
    },
    {
      title: 'Dienstleistungen',
      title_fr: 'Services',
      links: [
        { name: 'Reparaturen', name_fr: 'Réparations', href: '#' },
        { name: 'Personalisierung', name_fr: 'Personnalisation', href: '#' },
        { name: 'Geschenkkarten', name_fr: 'Cartes cadeaux', href: '#' },
      ],
    },
    {
      title: 'Über EZCENTIALS',
      title_fr: 'À propos d\'EZCENTIALS',
      links: [
        { name: 'Modehäuser', name_fr: 'Maisons de mode', href: '#' },
        { name: 'Nachhaltigkeit', name_fr: 'Durabilité', href: '#' },
        { name: 'Karriere', name_fr: 'Carrières', href: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:flex lg:justify-between">
            <div className="col-span-2 mb-8 lg:mb-0 lg:col-span-1">
                <h5 className="font-headline text-xl font-semibold tracking-wider">EZCENTIALS</h5>
            </div>
            <div className="grid grid-cols-2 gap-8 col-span-2 md:col-span-4 lg:flex lg:gap-16">
                {footerSections.map((section) => (
                <div key={section.title}>
                    <h5 className="font-headline text-lg font-semibold tracking-wider">
                    <TranslatedText fr={section.title_fr}>{section.title}</TranslatedText>
                    </h5>
                    <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                        <li key={link.name}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                            <TranslatedText fr={link.name_fr}>{link.name}</TranslatedText>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
           <p>&copy; {new Date().getFullYear()} <TranslatedText fr="EZCENTIALS. Tous droits réservés.">EZCENTIALS. Alle Rechte vorbehalten.</TranslatedText></p>
        </div>
      </div>
    </footer>
  );
}
