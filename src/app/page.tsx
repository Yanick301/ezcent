
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { TranslatedText } from '@/components/TranslatedText';
import { CategoryCard } from '@/components/CategoryCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { CollectionHighlight } from '@/components/CollectionHighlight';
import { categories } from '@/lib/data';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);
  const mensCategory = categories.find(c => c.slug === 'mens-clothing');
  const womensCategory = categories.find(c => c.slug === 'womens-clothing');
  const accessoriesCategory = categories.find(c => c.slug === 'accessories');
  const shoesCategory = categories.find(c => c.slug === 'shoes');
  const winterCategory = categories.find(c => c.slug === 'winter-clothing');


  return (
    <div className="flex flex-col">
      <section className="relative flex h-[70vh] w-full flex-col items-center justify-center bg-header-background bg-cover bg-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, hsl(30 80% 85% / 0.2), transparent 40%), linear-gradient(to top, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.2))'
          }} 
        />
        <div className="container px-4 z-10">
          <p className="text-sm uppercase tracking-widest text-white animate-fade-in-up">
             <TranslatedText fr="BIENVENUE CHEZ EZCENTIALS">WILLKOMMEN BEI EZCENTIALS</TranslatedText>
          </p>
          <h1 className="mt-4 font-headline text-6xl md:text-9xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <TranslatedText fr="L'Excellence du Luxe">Die Exzellenz des Luxus</TranslatedText>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             <TranslatedText fr="Découvrez notre sélection exclusive de vêtements et accessoires haut de gamme.">Entdecken Sie unsere exklusive Auswahl an hochwertiger Kleidung und Accessoires.</TranslatedText>
          </p>
          <Button size="lg" asChild className="mt-8 bg-white text-black hover:bg-white/90 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/products/all">
              <TranslatedText fr="Explorer la collection">Die Kollektion entdecken</TranslatedText>
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-3xl md:text-5xl text-foreground">
                <TranslatedText fr="Menu Maison">Menu Maison</TranslatedText>
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mensCategory && (
                    <div className="lg:col-span-1">
                        <CategoryCard 
                            pretitle={<TranslatedText fr="PRÉCISION SARTORIALE">SARTORIALE PRÄZISION</TranslatedText>}
                            title={<TranslatedText fr="Atelier Tailoring">Atelier Schneiderei</TranslatedText>}
                            description={<TranslatedText fr="Costumes architecturés et précision sartoriale.">Strukturierte Anzüge und satoriale Präzision.</TranslatedText>}
                            linkText={<TranslatedText fr="EXPLORER HOMMES">HERREN ENTDECKEN</TranslatedText>}
                            href={`/products/${mensCategory.slug}`}
                            imageId={mensCategory.imageId}
                        />
                    </div>
                )}
                {womensCategory && (
                     <div className="lg:col-span-2">
                        <CategoryCard 
                            pretitle={<TranslatedText fr="MAISON LUMIÈRE">MAISON LUMIÈRE</TranslatedText>}
                            title={<TranslatedText fr="Couture & Soirée">Couture & Abendmode</TranslatedText>}
                            description={<TranslatedText fr="Robes fluides, soies lumineuses et couture contemporaine.">Fließende Kleider, leuchtende Seide und zeitgenössische Couture.</TranslatedText>}
                            linkText={<TranslatedText fr="EXPLORER FEMMES">DAMEN ENTDECKEN</TranslatedText>}
                             href={`/products/${womensCategory.slug}`}
                            imageId={womensCategory.imageId}
                        />
                    </div>
                )}
                {accessoriesCategory && (
                    <div className="lg:col-span-2">
                        <CategoryCard 
                            pretitle={<TranslatedText fr="GALERIE SÉLECTION">GALERIE AUSWAHL</TranslatedText>}
                            title={<TranslatedText fr="Salon Accessoires">Accessoires Salon</TranslatedText>}
                            description={<TranslatedText fr="Bags iconiques, parfums signature et bijoux modernes.">Ikonische Taschen, Signature-Düfte und moderner Schmuck.</TranslatedText>}
                            linkText={<TranslatedText fr="EXPLORER ACCESSOIRES">ACCESSOIRES ENTDECKEN</TranslatedText>}
                            href={`/products/${accessoriesCategory.slug}`}
                            imageId={accessoriesCategory.imageId}
                        />
                    </div>
                )}
                {shoesCategory && (
                    <div className="lg:col-span-1">
                        <CategoryCard
                            pretitle={<TranslatedText fr="ART DE LA MARCHE">KUNST DES GEHENS</TranslatedText>}
                            title={<TranslatedText fr="Studio Chaussures">Schuhstudio</TranslatedText>}
                            description={<TranslatedText fr="Souliers d'exception, entre savoir-faire et design audacieux.">Außergewöhnliche Schuhe, zwischen Handwerkskunst und kühnem Design.</TranslatedText>}
                            linkText={<TranslatedText fr="EXPLORER CHAUSSURES">SCHUHE ENTDECKEN</TranslatedText>}
                            href={`/products/${shoesCategory.slug}`}
                            imageId={shoesCategory.imageId}
                        />
                    </div>
                )}
                 {winterCategory && (
                    <div className="lg:col-span-3">
                        <CategoryCard
                            pretitle={<TranslatedText fr="REFUGE D'HIVER">WINTER-REFUGIUM</TranslatedText>}
                            title={<TranslatedText fr="Collection Neige">Schneekollektion</TranslatedText>}
                            description={<TranslatedText fr="Pièces chaudes et luxueuses pour affronter le froid avec style.">Warme und luxuriöse Stücke, um der Kälte mit Stil zu trotzen.</TranslatedText>}
                            linkText={<TranslatedText fr="EXPLORER HIVER">WINTER ENTDECKEN</TranslatedText>}
                            href={`/products/${winterCategory.slug}`}
                            imageId={winterCategory.imageId}
                        />
                    </div>
                )}
            </div>
        </div>
      </section>

      <section className="w-full bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-5xl text-foreground">
              <TranslatedText fr="Nos Pièces Signatures">Unsere Signature-Stücke</TranslatedText>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              <TranslatedText fr="Une sélection de nos créations les plus emblématiques, choisies pour leur design intemporel et leur savoir-faire exceptionnel.">
                Eine Auswahl unserer ikonischsten Kreationen, ausgewählt für ihr zeitloses Design und ihre außergewöhnliche Handwerkskunst.
              </TranslatedText>
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/products/all"><TranslatedText fr="Voir tous les produits">Alle Produkte anzeigen</TranslatedText></Link>
            </Button>
          </div>
        </div>
      </section>

      <CollectionHighlight 
        supertitle={<TranslatedText fr="COLLECTION HIVER">WINTER KOLLEKTION</TranslatedText>}
        title={<TranslatedText fr="Élégance Hivernale">Winterliche Eleganz</TranslatedText>}
        description={<TranslatedText fr="Nos collections d'hiver allient confort, chaleur et style intemporel. Chaque pièce est sélectionnée pour sa qualité exceptionnelle et ses finitions impeccables.">Unsere Winterkollektionen vereinen Komfort, Wärme und zeitlosen Stil. Jedes Stück wird aufgrund seiner außergewöhnlichen Qualität und tadellosen Verarbeitung ausgewählt.</TranslatedText>}
        stats={[
          { value: '40+', label: <TranslatedText fr="PRODUITS">PRODUKTE</TranslatedText> },
          { value: '4.9/5', label: <TranslatedText fr="ÉVALUATION">BEWERTUNG</TranslatedText> },
          { value: '100%', label: 'PREMIUM' },
        ]}
        imageIds={[
          'manteau-long-laine-hugo-boss',
          'doudoune-matelassee-moncler',
          'parka-arctic-canada-goose',
          'pull-col-roule-laine-merinos-paul-smith',
        ]}
        primaryActionLink="/products/winter-clothing"
        primaryActionText={<TranslatedText fr="Voir la Collection">Kollektion ansehen</TranslatedText>}
        secondaryActionLink="/products/all"
        secondaryActionText={<TranslatedText fr="Explorer">Erkunden</TranslatedText>}
      />

    </div>
  );
}

    