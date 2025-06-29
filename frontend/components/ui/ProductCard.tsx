import React, { useState } from 'react';
import { Product } from '../../types';
import { Star, Tag, ShoppingCart, Heart, HeartOff } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import Toast from './Toast';

interface ProductCardProps {
  product: Product;
  quantity?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onIncrement, onDecrement }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [showToast, setShowToast] = useState(false);
  const [showAddToCartToast, setShowAddToCartToast] = useState(false);

  // Helper to format price
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  // Get primary product specs based on category and device
  const getPrimarySpecs = (): { label: string; value: string }[] => {
    const specs: { label: string; value: string }[] = [];
    
    if (product.category === 'gaming') {
      if (product.device === 'laptop' || product.device === 'desktop') {
        specs.push(
          { label: 'CPU', value: product.specs.cpu as string },
          { label: 'GPU', value: product.specs.gpu as string },
          { label: 'RAM', value: `${product.specs.ram}GB` }
        );
      } else if (product.device === 'mobile') {
        specs.push(
          { label: 'Processor', value: product.specs.processor as string },
          { label: 'RAM', value: `${product.specs.ram}GB` },
          { label: 'Refresh Rate', value: `${product.specs.refreshRate}Hz` }
        );
      }
    } else if (product.category === 'productivity') {
      if (product.device === 'laptop') {
        specs.push(
          { label: 'CPU', value: product.specs.cpu as string },
          { label: 'RAM', value: `${product.specs.ram}GB` },
          { label: 'Display', value: product.specs.display as string }
        );
      } else if (product.device === 'tablet') {
        specs.push(
          { label: 'Processor', value: product.specs.processor as string },
          { label: 'Storage', value: `${product.specs.storage}GB` },
          { label: 'Stylus', value: product.specs.stylus ? 'Yes' : 'No' }
        );
      }
    } else if (product.category === 'daily') {
      if (product.device === 'laptop') {
        specs.push(
          { label: 'Battery', value: `${product.specs.batteryLife}+ hrs` },
          { label: 'Weight', value: product.specs.weight as string },
          { label: 'OS', value: product.specs.os as string }
        );
      } else if (product.device === 'mobile') {
        specs.push(
          { label: 'Battery', value: `${product.specs.batteryCapacity}mAh` },
          { label: 'Camera', value: `${product.specs.camera}MP` },
          { label: 'OS', value: product.specs.os as string }
        );
      }
    }
    
    return specs;
  };

  const primarySpecs = getPrimarySpecs();

  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
      setShowToast(true);
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId: product.id })
      });
      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }
      setShowAddToCartToast(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.category === 'gaming' ? 'Gaming' : 
             product.category === 'productivity' ? 'Pro' : 'Daily'}
          </div>
          <button
            onClick={toggleWishlist}
            className="absolute top-2 left-2 p-1 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-colors duration-300"
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {inWishlist ? (
              <Heart size={20} className="text-red-500" />
            ) : (
              <HeartOff size={20} className="text-gray-400" />
            )}
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-slate-800 mb-1 truncate" title={product.name}>
              {product.name}
            </h3>
            <div className="flex items-center text-amber-500">
              <Star size={16} className="fill-current" />
              <span className="ml-1 text-sm font-medium">4.8</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2 mb-3">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <ul className="space-y-1 mt-3 mb-4">
            {primarySpecs.map((spec, index) => (
              <li key={index} className="text-sm flex justify-between">
                <span className="text-slate-500">{spec.label}:</span>
                <span className="font-medium text-slate-700">{spec.value}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="font-bold text-xl text-slate-800">
              {formatPrice(product.price)}
            </div>
            {quantity !== undefined && onIncrement && onDecrement ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={onDecrement}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  -
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={onIncrement}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center transition-colors duration-300"
              >
                <ShoppingCart size={16} className="mr-1" />
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
      {showToast && <Toast message="Added to Wishlist" onClose={() => setShowToast(false)} />}
      {showAddToCartToast && <Toast message="Added to Cart" icon={<ShoppingCart className="text-teal-500" size={20} />} onClose={() => setShowAddToCartToast(false)} />}
    </>
  );
};
