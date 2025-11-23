
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { getFeaturedProducts, categories } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { TranslatedText } from '@/components/TranslatedText';
import { CategoryCard } from '@/components/CategoryCard';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <div className="flex flex-col">
      <section className="relative flex h-[70vh] w-full flex-col items-center justify-center bg-background text-center text-foreground">
        <div className="container px-4">
          <h1 className="font-headline text-5xl md:text-7xl">
            <TranslatedText fr="L'Élégance Redéfinie">Eleganz Neu Definiert</TranslatedText>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            <TranslatedText fr="Découvrez des pièces intemporelles où le savoir-faire artisanal rencontre un design d'exception.">
              Entdecken Sie zeitlose Stücke, in denen handwerkliches Können auf außergewöhnliches Design trifft.
            </TranslatedText>
          </p>
          <Button size="lg" asChild className="mt-8 rounded-full">
            <Link href="/products/all">
              <TranslatedText fr="Explorer la collection">Die Kollektion entdecken</TranslatedText>
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-4xl md:text-5xl text-black">
                <TranslatedText fr="Menu Maison">Menu Maison</TranslatedText>
            </h2>
            <div className="flex gap-8 overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex-none w-[80vw] md:w-[30vw]">
                    <CategoryCard 
                        pretitle="PRÉCISION SARTORIALE"
                        title="Atelier Tailoring"
                        description="Costumes architecturés et précision sartoriale."
                        linkText="EXPLORER HOMMES"
                        href="/products/mens-clothing"
                        imageId="mens-category"
                    />
                </div>
                <div className="flex-none w-[80vw] md:w-[30vw]">
                    <CategoryCard 
                        pretitle="MAISON LUMIÈRE"
                        title="Couture & Soirée"
                        description="Robes fluides, soies lumineuses et couture contemporaine."
                        linkText="EXPLORER FEMMES"
                        href="/products/womens-clothing"
                        imageId="womens-category"
                    />
                </div>
                <div className="flex-none w-[80vw] md:w-[30vw]">
                    <CategoryCard 
                        pretitle="GALERIE SÉLECTION"
                        title="Salon Accessoires"
                        description="Bags iconiques, parfums signature et bijoux modernes."
                        linkText="EXPLORER ACCESSOIRES"
                        href="/products/accessories"
                        imageId="accessories-category"
                    />
                </div>
                <div className="flex-none w-[80vw] md:w-[30vw]">
                    <CategoryCard
                        pretitle="ART DE LA MARCHE"
                        title="Studio Chaussures"
                        description="Souliers d'exception, entre savoir-faire et design audacieux."
                        linkText="EXPLORER CHAUSSURES"
                        href="/products/shoes"
                        imageId="shoes-category"
                    />
                </div>
                <div className="flex-none w-[80vw] md:w-[30vw]">
                    <CategoryCard
                        pretitle="REFUGE D'HIVER"
                        title="Collection Neige"
                        description="Pièces chaudes et luxueuses pour affronter le froid avec style."
                        linkText="EXPLORER HIVER"
                        href="/products/winter-clothing"
                        imageId="winter-category"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl md:text-5xl text-black">
            <TranslatedText fr="Produits Phares">Ausgewählte Produkte</TranslatedText>
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
