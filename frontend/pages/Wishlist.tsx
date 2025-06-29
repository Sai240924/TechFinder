import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products'; // Correct import without categories
import { ProductCard } from '../components/ui/ProductCard';

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();

  // Filter products that are in the wishlist
  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Wishlist is Empty</h2>
          <p className="text-slate-600">Add products to your wishlist to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Your Wishlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlistProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
