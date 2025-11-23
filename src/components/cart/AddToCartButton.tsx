'use client';

import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/types";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { TranslatedText } from "../TranslatedText";

type AddToCartButtonProps = {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        addToCart(product);
        toast({
            title: "Added to cart",
            description: `${product.name} has been added to your cart.`,
        });
    }

    return (
        <Button size="lg" onClick={handleAddToCart}>
            <TranslatedText>Add to Cart</TranslatedText>
        </Button>
    )
}
