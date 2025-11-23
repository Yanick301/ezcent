
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { categories, getFeaturedProducts } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import placeholderImagesData from '@/lib/placeholder-images.json';
import { TranslatedText } from '@/components/TranslatedText';

const { placeholderImages } = placeholderImagesData;

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <div className="flex flex-col">
      <section className="relative flex h-[90vh] w-full flex-col items-center justify-center bg-background text-center text-foreground">
        <div className="container px-4">
            <h1 className="font-headline text-5xl md:text-7xl">
                <TranslatedText fr="L'Élégance Redéfinie">Eleganz Neu Definiert</TranslatedText>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                <TranslatedText fr="Découvrez des pièces intemporelles où le savoir-faire artisanal rencontre un design d'exception.">
                Entdecken Sie zeitlose Stücke, in denen handwerkliches Können auf außergewöhnliches Design trifft.
                </TranslatedText>
            </p>
            <Button size="lg" asChild className="mt-8">
                <Link href="/products/all">
                <TranslatedText fr="Explorer la collection">Die Kollektion entdecken</TranslatedText>
                </Link>
            </Button>
        </div>
      </section>

      <section className="w-full bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl md:text-5xl">
            <TranslatedText fr="Produits Phares">Ausgewählte Produkte</TranslatedText>
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl md:text-5xl">
            <TranslatedText fr="Acheter par catégorie">Nach Kategorie einkaufen</TranslatedText>
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {categories.slice(0, 3).map((category) => {
                const categoryImage = placeholderImages.find(
                  (p) => p.id === category.imageId
                );
                return (
                  <Link
                      key={category.id}
                      href={`/products/${category.slug}`}
                      className="group block overflow-hidden text-center"
                    >
                      <div className="relative aspect-video w-full bg-gray-100 rounded-lg">
                        {categoryImage && (
                          <Image
                            src={categoryImage.imageUrl}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            data-ai-hint={categoryImage.imageHint}
                          />
                        )}
                      </div>
                      <h3 className="mt-4 font-headline text-2xl text-foreground">
                        <TranslatedText fr={category.name_fr}>{category.name}</TranslatedText>
                      </h3>
                    </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
