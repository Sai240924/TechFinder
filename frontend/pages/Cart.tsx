import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';

interface CartItem {
  productId: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('/api/cart');
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      setCartItems(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleIncrement = async (productId: string) => {
    try {
      const item = cartItems.find(ci => ci.productId === productId);
      const newQuantity = item ? item.quantity + 1 : 1;
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity: newQuantity }),
      });
      if (!response.ok) {
        throw new Error('Failed to increment cart item quantity');
      }
      fetchCartItems();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleDecrement = async (productId: string) => {
    try {
      const item = cartItems.find(ci => ci.productId === productId);
      if (!item) return;

      if (item.quantity > 1) {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId, quantity: item.quantity - 1 }),
        });
        if (!response.ok) {
          throw new Error('Failed to decrement cart item quantity');
        }
      } else {
        const response = await fetch(`/api/cart/${productId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to remove cart item');
        }
      }
      fetchCartItems();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Map productId to quantity for quick lookup
  const quantityMap = new Map(cartItems.map(item => [item.productId, item.quantity]));

  // Filter products that are in the cart
  const cartProducts = products.filter(product => quantityMap.has(product.id));

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">Loading cart items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Cart is Empty</h2>
          <p className="text-slate-600">Add products to your cart to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={quantityMap.get(product.id)}
              onIncrement={() => handleIncrement(product.id)}
              onDecrement={() => handleDecrement(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
