
'use client';

import { createContext, useContext, useState, type ReactNode, useEffect, useCallback } from 'react';
import type { CartItem, Product } from '@/lib/types';
import { useUser, useFirestore } from '@/firebase';
import { collection, doc, getDocs, writeBatch, query, where } from 'firebase/firestore';

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  isCartLoading: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const getCartFromLocalStorage = useCallback(() => {
    try {
      const storedCart = localStorage.getItem('ezcentials-cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Failed to parse cart from localStorage', error);
      return [];
    }
  }, []);

  const syncFirestoreCart = useCallback(async () => {
    if (!user || !firestore) return;
    setIsCartLoading(true);
    const localCart = getCartFromLocalStorage();
    const cartColRef = collection(firestore, 'userProfiles', user.uid, 'cartItems');

    const batch = writeBatch(firestore);
    
    // Clear remote cart first
    const remoteSnapshot = await getDocs(cartColRef);
    remoteSnapshot.forEach(doc => batch.delete(doc.ref));

    // Add local items to remote
    localCart.forEach((item: CartItem) => {
        const docRef = doc(cartColRef, item.product.id);
        batch.set(docRef, {
            quantity: item.quantity,
            // Storing some product details for convenience, though it can be just the ID
            name: item.product.name,
            price: item.product.price,
            imageUrl: item.product.images[0] 
        });
    });

    await batch.commit();
    setCart(localCart);
    localStorage.removeItem('ezcentials-cart');
    setIsCartLoading(false);

  }, [user, firestore, getCartFromLocalStorage]);


  // Effect for initial load and user changes
  useEffect(() => {
    if (isUserLoading) {
        setIsCartLoading(true);
        return;
    }

    if (user && firestore) {
      // User is logged in, sync local cart to Firestore then load from Firestore
      syncFirestoreCart().then(async () => {
        const cartColRef = collection(firestore, 'userProfiles', user.uid, 'cartItems');
        const querySnapshot = await getDocs(cartColRef);
        // We'd need a way to get full product details here.
        // This simplified version will just store partial data.
        // A real implementation would fetch product details based on stored IDs.
        const fetchedCart: CartItem[] = []; // This needs to be built properly
        setCart(fetchedCart);
        setIsCartLoading(false);
      });
    } else {
      // User is not logged in, load from local storage
      const localCart = getCartFromLocalStorage();
      setCart(localCart);
      setIsCartLoading(false);
    }
  }, [user, isUserLoading, firestore, getCartFromLocalStorage, syncFirestoreCart]);

  // Save to localStorage for anonymous users
  useEffect(() => {
    if (!user) {
      try {
        localStorage.setItem('ezcentials-cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Failed to save cart to localStorage', error);
      }
    }
  }, [cart, user]);


  const addToCart = useCallback(async (product: Product, quantity: number = 1) => {
    const newCart = [...cart];
    const existingItemIndex = newCart.findIndex(item => item.product.id === product.id);

    if (existingItemIndex > -1) {
      newCart[existingItemIndex].quantity += quantity;
    } else {
      newCart.push({ product, quantity });
    }
    setCart(newCart);

    if (user && firestore) {
      const cartItemRef = doc(firestore, 'userProfiles', user.uid, 'cartItems', product.id);
      const batch = writeBatch(firestore);
      batch.set(cartItemRef, { quantity: newCart[existingItemIndex !== -1 ? existingItemIndex : newCart.length - 1].quantity });
      await batch.commit();
    }
  }, [cart, user, firestore]);

  const removeFromCart = useCallback(async (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    if (user && firestore) {
      const cartItemRef = doc(firestore, 'userProfiles', user.uid, 'cartItems', productId);
      await writeBatch(firestore).delete(cartItemRef).commit();
    }
  }, [user, firestore]);

  const updateQuantity = useCallback(async (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => prevCart.map(item => item.product.id === productId ? { ...item, quantity } : item));
    if (user && firestore) {
       const cartItemRef = doc(firestore, 'userProfiles', user.uid, 'cartItems', productId);
       await writeBatch(firestore).update(cartItemRef, { quantity }).commit();
    }
  }, [removeFromCart, user, firestore]);

  const clearCart = useCallback(async () => {
    setCart([]);
    if (user && firestore) {
      const cartColRef = collection(firestore, 'userProfiles', user.uid, 'cartItems');
      const snapshot = await getDocs(cartColRef);
      const batch = writeBatch(firestore);
      snapshot.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    }
  }, [user, firestore]);


  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, isCartLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
