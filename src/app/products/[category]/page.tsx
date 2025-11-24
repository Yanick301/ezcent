
'use client';

import { ProductCard } from '@/components/ProductCard';
import { notFound, useParams } from 'next/navigation';
import { TranslatedText } from '@/components/TranslatedText';
import { useMemo } from 'react';
import type { Product } from '@/lib/types';
import { categories, products as allProducts, getProductsByCategory } from '@/lib/data';


type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  
  const category = useMemo(() => {
    return categories.find((c) => c.slug === categorySlug);
  }, [categorySlug]);
  
  const products = useMemo(() => {
    if (!categorySlug) return [];
    const filtered = getProductsByCategory(allProducts, categorySlug);
    // Sort products to ensure a stable order between server and client rendering
    return filtered.sort((a, b) => a.id.localeCompare(b.id));
  }, [categorySlug]);


  const title = categorySlug === 'all' ? 'Alle Produkte' : category?.name;
  const titleFr = categorySlug === 'all' ? 'Tous les produits' : category?.name_fr;
  const titleEn = categorySlug === 'all' ? 'All Products' : category?.name_en;

  if (products.length === 0 && categorySlug !== 'all') {
    const categoryExists = categories.some(c => c.slug === categorySlug);
    if (!categoryExists) {
        notFound();
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center font-headline text-4xl md:text-5xl">
        <TranslatedText fr={titleFr || 'Produits'} en={titleEn || 'Products'}>{title || 'Produkte'}</TranslatedText>
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-muted-foreground">
          <TranslatedText fr="Aucun produit trouvé dans cette catégorie." en="No products found in this category.">Keine Produkte in dieser Kategorie gefunden.</TranslatedText>
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
