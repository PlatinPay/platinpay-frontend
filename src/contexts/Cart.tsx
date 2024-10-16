"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { v4 as uuidv4 } from "uuid";

import toast from "react-hot-toast";

interface CartContextType {
  cart: any[];
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // const [cart, setCart] = useState<any[]>(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = (product: any) => {
    // const toastId = toast.loading("Adding to cart...");

    const cartItem = {
      ...product,
      cart_id: uuidv4(),
      quantity: 1,
    };

    setCart((prevCart) => {
      return [...prevCart, cartItem];
    });

    // toast.success("Added to cart", { id: toastId });
  };

  const removeFromCart = (product: any) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.cart_id !== product.cart_id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
