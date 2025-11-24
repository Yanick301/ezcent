
'use client';

import { ProductCard } from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import { TranslatedText } from '@/components/TranslatedText';
import { useMemo, useState, useEffect } from 'react';
import type { Product } from '@/lib/types';
import { categories, products as allProducts, getProductsByCategory } from '@/lib/data';


type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const categoryProducts = getProductsByCategory(allProducts, categorySlug);
    setProducts(categoryProducts);
    setIsLoading(false);
  }, [categorySlug]);
  
  const category = categories.find((c) => c.slug === categorySlug);

  const title = categorySlug === 'all' ? 'Alle Produkte' : category?.name;
  const titleFr = categorySlug === 'all' ? 'Tous les produits' : category?.name_fr;
  const titleEn = categorySlug === 'all' ? 'All Products' : category?.name_en;

  if (isLoading) {
      return <div className="text-center py-12">Chargement des produits...</div>;
  }
  
  if (!isLoading && !products) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center font-headline text-4xl md:text-5xl">
        <TranslatedText fr={titleFr || 'Produits'} en={titleEn || 'Products'}>{title || 'Produkte'}</TranslatedText>
      </h1>
      {products && products.length === 0 ? (
        <p className="text-center text-muted-foreground">
          <TranslatedText fr="Aucun produit trouvé dans cette catégorie." en="No products found in this category.">Keine Produkte in dieser Kategorie gefunden.</TranslatedText>
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
