
'use client';

import { TranslatedText } from '@/components/TranslatedText';

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl">
          <TranslatedText fr="Mentions Légales" en="Legal Notice">
            Rechtliche Hinweise
          </TranslatedText>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          <TranslatedText
            fr="Informations concernant l'éditeur du site."
            en="Information concerning the site publisher."
          >
            Informationen zum Herausgeber der Website.
          </TranslatedText>
        </p>
      </div>

      <div className="prose prose-lg mx-auto mt-12 max-w-none text-foreground prose-headings:font-headline prose-headings:text-foreground">
        <h2 className='text-2xl'>
          <TranslatedText fr="Éditeur du Site" en="Site Publisher">
            Herausgeber der Website
          </TranslatedText>
        </h2>
        <p>
          EZCENTIALS
          <br />
          Adresse : 123 Rue de la Mode, 75001 Paris, France
          <br />
          Email : contact-info@ezcentials.com
          <br />
          SIRET : 123 456 789 00010
          <br />
           <TranslatedText fr="Directeur de la publication :" en="Director of Publication:">
             Veröffentlichungsdirektor:
           </TranslatedText>{' '}
           Sabine Menke
        </p>

        <h2 className='text-2xl'>
          <TranslatedText fr="Hébergement" en="Hosting">
            Hosting
          </TranslatedText>
        </h2>
        <p>
          <TranslatedText
            fr="Ce site est hébergé par Firebase, un service de Google."
            en="This site is hosted by Firebase, a Google service."
          >
            Diese Seite wird von Firebase, einem Dienst von Google, gehostet.
          </TranslatedText>
          <br />
          Google LLC
          <br />
          1600 Amphitheatre Parkway,
          <br />
          Mountain View, CA 94043, USA
        </p>

        <h2 className='text-2xl'>
          <TranslatedText fr="Propriété Intellectuelle" en="Intellectual Property">
            Geistiges Eigentum
          </TranslatedText>
        </h2>
        <p>
          <TranslatedText
            fr="L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication."
            en="This entire site is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations. The reproduction of all or part of this site on any electronic medium whatsoever is formally prohibited without the express authorization of the director of publication."
          >
            Diese gesamte Website unterliegt der französischen und internationalen Gesetzgebung zum Urheberrecht und zum geistigen Eigentum. Alle Vervielfältigungsrechte sind vorbehalten, einschließlich der herunterladbaren Dokumente und der ikonografischen und fotografischen Darstellungen. Die Vervielfältigung der gesamten oder eines Teils dieser Website auf einem beliebigen elektronischen Medium ist ohne ausdrückliche Genehmigung des Veröffentlichungsdirektors strengstens untersagt.
          </TranslatedText>
        </p>
        
        <h2 className='text-2xl'>
          <TranslatedText fr="Données Personnelles" en="Personal Data">
            Persönliche Daten
          </TranslatedText>
        </h2>
        <p>
          <TranslatedText fr="Conformément à la loi 'Informatique et Libertés', vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent. Pour l'exercer, adressez-vous à EZCENTIALS par email à l'adresse contact-privacy@ezcentials.com." 
          en="In accordance with the 'Informatique et Libertés' law, you have the right to access, modify, rectify and delete data concerning you. To exercise this right, please contact EZCENTIALS by email at contact-privacy@ezcentials.com."
          >
            Gemäß dem Gesetz 'Informatik und Freiheiten' haben Sie das Recht auf Zugang, Änderung, Berichtigung und Löschung der Sie betreffenden Daten. Um dieses Recht auszuüben, wenden Sie sich bitte per E-Mail an EZCENTIALS unter contact-privacy@ezcentials.com.
          </TranslatedText>
        </p>
      </div>
    </div>
  );
}
