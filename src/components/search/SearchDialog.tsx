
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TranslatedText } from '../TranslatedText';
import { categories } from '@/lib/data';
import type { Product } from '@/lib/types';
import placeholderImagesData from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query } from 'firebase/firestore';

const { placeholderImages } = placeholderImagesData;

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [queryTerm, setQueryTerm] = useState('');
  const router = useRouter();
  const firestore = useFirestore();

  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'));
  }, [firestore]);

  const { data: products, isLoading } = useCollection<Product>(productsQuery);

  const searchResults = useMemo(() => {
    if (!queryTerm.trim() || !products) {
      return [];
    }
    const lowerCaseQuery = queryTerm.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.name_fr.toLowerCase().includes(lowerCaseQuery) ||
        product.description_fr.toLowerCase().includes(lowerCaseQuery)
    ).slice(0, 5); // Limit to 5 results
  }, [queryTerm, products]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (queryTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(queryTerm.trim())}`);
      setIsOpen(false);
    }
  };

  // Reset query when opening/closing
  useEffect(() => {
    if (isOpen) {
      setQueryTerm('');
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only"><TranslatedText fr="Rechercher">Suche</TranslatedText></span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle><TranslatedText fr="Rechercher des produits">Nach Produkten suchen</TranslatedText></DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
            <Input
                value={queryTerm}
                onChange={(e) => setQueryTerm(e.target.value)}
                aria-label="Suche"
                className="text-base"
            />
            <Button type="submit" size="icon" aria-label="Suche durchführen">
                <Search className="h-4 w-4" />
            </Button>
            </form>
        </div>

        <div className="px-6 pb-6 space-y-4">
          {queryTerm.trim() === '' ? (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4"><TranslatedText fr="Catégories populaires">Beliebte Kategorien</TranslatedText></h4>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map(cat => (
                    <Button key={cat.id} variant="outline" size="sm" asChild onClick={() => setIsOpen(false)}>
                        <Link href={`/products/${cat.slug}`}>
                            <TranslatedText fr={cat.name_fr}>{cat.name}</TranslatedText>
                        </Link>
                    </Button>
                ))}
              </div>
            </div>
          ) : isLoading ? (
            <p className="text-center text-sm text-muted-foreground py-8">
              <TranslatedText fr="Recherche en cours...">Recherche...</TranslatedText>
            </p>
          ) : searchResults.length > 0 ? (
            <ul className="divide-y divide-border -mx-6">
              {searchResults.map((product) => {
                const productImage = placeholderImages.find(p => p.id === product.images[0]);
                return (
                  <li key={product.id}>
                    <Link 
                        href={`/product/${product.slug}`} 
                        className="flex items-center gap-4 px-6 py-3 hover:bg-muted/50 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        {productImage && (
                          <img
                            src={productImage.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm"><TranslatedText fr={product.name_fr}>{product.name}</TranslatedText></p>
                        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="text-center text-sm text-muted-foreground py-8">
              <TranslatedText fr="Aucun produit ne correspond à votre recherche.">Keine Produkte entsprechen Ihrer Suche.</TranslatedText>
            </p>
          )}

          {queryTerm.trim() !== '' && searchResults.length > 0 && (
            <>
                <Separator />
                <Button variant="ghost" className="w-full" onClick={handleSearchSubmit}>
                    <TranslatedText fr={`Voir tous les résultats pour "${queryTerm}"`}>Alle Ergebnisse für "{queryTerm}" anzeigen</TranslatedText>
                </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

    
