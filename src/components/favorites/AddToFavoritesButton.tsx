'use client';

import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TranslatedText } from '../TranslatedText';

type AddToFavoritesButtonProps = {
  productId: string;
  className?: string;
};

export function AddToFavoritesButton({
  productId,
  className,
}: AddToFavoritesButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(productId);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('h-8 w-8', className)}
      onClick={(e) => {
        e.preventDefault(); // Prevent link navigation on product card
        e.stopPropagation();
        toggleFavorite(productId);
      }}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={cn('h-5 w-5 transition-colors', {
          'fill-primary text-primary': isFav,
          'text-muted-foreground': !isFav,
        })}
      />
       <span className="sr-only"><TranslatedText>Add to favorites</TranslatedText></span>
    </Button>
  );
}
