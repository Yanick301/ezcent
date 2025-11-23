
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import placeholderImagesData from '@/lib/placeholder-images.json';
import { TranslatedText } from './TranslatedText';
import { AddToFavoritesButton } from './favorites/AddToFavoritesButton';

const { placeholderImages } = placeholderImagesData;

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = placeholderImages.find(p => p.id === product.images[0]);

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg border-none bg-transparent shadow-none transition-shadow hover:shadow-lg">
        <CardHeader className="p-0">
          <Link href={`/product/${product.slug}`} className="relative block aspect-[3/4] w-full overflow-hidden">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={productImage.imageHint}
              />
            )}
            <div className="absolute top-2 right-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
               <AddToFavoritesButton productId={product.id} className="bg-white/70 hover:bg-white dark:bg-black/70 dark:hover:bg-black" />
            </div>
          </Link>
        </CardHeader>
        <Link href={`/product/${product.slug}`} className="flex flex-col flex-grow">
            <CardContent className="flex-grow p-4">
            <h3 className="font-semibold leading-snug">
                <TranslatedText>{product.name}</TranslatedText>
            </h3>
            </CardContent>
            <CardFooter className="p-4 pt-0">
            <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
            </CardFooter>
        </Link>
    </Card>
  );
}
