
'use client';

import { createContext, useContext, useState, type ReactNode, useEffect, useCallback } from 'react';
import type { CartItem, Product } from '@/lib/types';
import { useUser, useFirestore } from '@/firebase';
import { collection, doc, getDocs, writeBatch, query, where, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { products as allProducts } from '@/lib/data'; // Assuming products are available for lookup

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

  const fetchCartFromFirestore = useCallback(async (userId: string) => {
    if (!firestore) return [];
    const cartColRef = collection(firestore, 'userProfiles', userId, 'cartItems');
    const snapshot = await getDocs(cartColRef);
    const remoteCart: CartItem[] = [];
    for (const doc of snapshot.docs) {
      const product = allProducts.find(p => p.id === doc.id);
      if (product) {
        remoteCart.push({ product, quantity: doc.data().quantity });
      }
    }
    return remoteCart;
  }, [firestore]);
  
  const getCartFromLocalStorage = useCallback(() => {
    try {
      const storedCart = localStorage.getItem('ezcentials-cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Failed to parse cart from localStorage', error);
      return [];
    }
  }, []);

  const syncCarts = useCallback(async (userId: string, localCart: CartItem[]) => {
      if (!firestore) return localCart;

      const remoteCart = await fetchCartFromFirestore(userId);
      const mergedCartMap = new Map<string, CartItem>();

      remoteCart.forEach(item => mergedCartMap.set(item.product.id, item));
      localCart.forEach(localItem => {
          const existing = mergedCartMap.get(localItem.product.id);
          if (existing) {
              // Simple merge: local quantity wins if different
              if (existing.quantity !== localItem.quantity) {
                  mergedCartMap.set(localItem.product.id, localItem);
              }
          } else {
              mergedCartMap.set(localItem.product.id, localItem);
          }
      });
      
      const mergedCart = Array.from(mergedCartMap.values());
      const batch = writeBatch(firestore);
      const cartColRef = collection(firestore, 'userProfiles', userId, 'cartItems');
      
      // Sync merged cart back to firestore
      mergedCart.forEach(item => {
          const docRef = doc(cartColRef, item.product.id);
          batch.set(docRef, { quantity: item.quantity });
      });

      // Clear remote items that are not in the merged cart
      const remoteIds = new Set(remoteCart.map(i => i.product.id));
      const mergedIds = new Set(mergedCart.map(i => i.product.id));
      remoteIds.forEach(id => {
          if (!mergedIds.has(id)) {
              batch.delete(doc(cartColRef, id));
          }
      });

      await batch.commit();
      localStorage.removeItem('ezcentials-cart');
      return mergedCart;
  }, [firestore, fetchCartFromFirestore]);


  useEffect(() => {
    const loadCart = async () => {
      setIsCartLoading(true);
      if (isUserLoading) return;

      if (user && firestore) {
        const localCart = getCartFromLocalStorage();
        if (localCart.length > 0) {
          const syncedCart = await syncCarts(user.uid, localCart);
          setCart(syncedCart);
        } else {
          const remoteCart = await fetchCartFromFirestore(user.uid);
          setCart(remoteCart);
        }
      } else {
        setCart(getCartFromLocalStorage());
      }
      setIsCartLoading(false);
    };

    loadCart();
  }, [user, isUserLoading, firestore, getCartFromLocalStorage, fetchCartFromFirestore, syncCarts]);

  useEffect(() => {
    if (!user && !isCartLoading) {
      try {
        localStorage.setItem('ezcentials-cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Failed to save cart to localStorage', error);
      }
    }
  }, [cart, user, isCartLoading]);

  const addToCart = useCallback(async (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
        const existingItemIndex = prevCart.findIndex(item => item.product.id === product.id);
        const newCart = [...prevCart];
        if (existingItemIndex > -1) {
            newCart[existingItemIndex].quantity += quantity;
        } else {
            newCart.push({ product, quantity });
        }

        if (user && firestore) {
            const itemToUpdate = newCart.find(item => item.product.id === product.id)!;
            const cartItemRef = doc(firestore, 'userProfiles', user.uid, 'cartItems', product.id);
            setDoc(cartItemRef, { quantity: itemToUpdate.quantity }, { merge: true });
        }
        return newCart;
    });
  }, [user, firestore]);

  const removeFromCart = useCallback(async (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    if (user && firestore) {
      const cartItemRef = doc(firestore, 'userProfiles', user.uid, 'cartItems', productId);
      await deleteDoc(cartItemRef);
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
       await setDoc(cartItemRef, { quantity }, { merge: true });
    }
  }, [removeFromCart, user, firestore]);

  const clearCart = useCallback(async () => {
    setCart([]);
    if (user && firestore) {
      const cartColRef = collection(firestore, 'userProfiles', user.uid, 'cartItems');
      const snapshot = await getDocs(cartColRef);
      if (!snapshot.empty) {
          const batch = writeBatch(firestore);
          snapshot.forEach(doc => batch.delete(doc.ref));
          await batch.commit();
      }
    } else {
        localStorage.removeItem('ezcentials-cart');
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
