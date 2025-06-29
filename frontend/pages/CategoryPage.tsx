import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { Product, DeviceType, CategoryType, Filter } from '../types';
import DeviceSelector from '../components/ui/DeviceSelector';
import FilterPanel from '../components/ui/FilterPanel';
import { ProductCard } from '../components/ui/ProductCard';
import { AlertCircle } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryPath, subcategory } = useParams<{ categoryPath: string; subcategory: string }>();
  
  // Find the category from the path
  const category = categories.find((cat) => {
    if (subcategory && cat.path === 'productivity') {
      return cat.subcategories?.some(sub => sub.path === subcategory);
    }
    return cat.path === categoryPath;
  });
  
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>(
    category?.devices[0] || 'laptop'
  );
  
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Reset filters when category or device changes
  useEffect(() => {
    setActiveFilters({});
  }, [categoryPath, selectedDevice, subcategory]);
  
  // Update filtered products when category, device, or filters change
  useEffect(() => {
    if (!category) return;
    
    let filtered = products.filter(product => {
      if (subcategory) {
        return product.category === 'productivity' && 
               product.subcategory === subcategory && 
               product.device === selectedDevice;
      }
      return product.category === categoryPath as CategoryType && 
             product.device === selectedDevice;
    });
    
    // Apply active filters
    Object.entries(activeFilters).forEach(([filterId, value]) => {
      if (!value) return;
      
      const filter = category.filters[selectedDevice]?.find(f => f.id === filterId);
      if (!filter) return;
      
      filtered = filtered.filter((product) => {
        const productValue = String(product.specs[filter.specKey]);
        
        if (filter.type === 'checkbox') {
          return value === 'yes' ? !!productValue : !productValue;
        }
        
        // For select filters, do a direct comparison
        return productValue === value;
      });
    });
    
    setFilteredProducts(filtered);
  }, [categoryPath, selectedDevice, activeFilters, category, subcategory]);
  
  // Handle filter changes
  const handleFilterChange = (filterId: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterId]: value,
    }));
  };
  
  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilters({});
  };

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-md max-w-md">
          <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Category Not Found</h1>
          <p className="text-slate-600 mb-6">
            The category you're looking for doesn't exist. Please check the URL and try again.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  // Get available filters for the selected device
  const availableFilters: Filter[] = category.filters[selectedDevice] || [];

  // Get the title based on whether it's a subcategory or main category
  const pageTitle = subcategory 
    ? category.subcategories?.find(sub => sub.path === subcategory)?.name 
    : category.name;

  const pageDescription = subcategory
    ? category.subcategories?.find(sub => sub.path === subcategory)?.description
    : category.description;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">{pageTitle}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {pageDescription}
          </p>
        </div>
        
        {/* Device Selector */}
        <DeviceSelector
          devices={category.devices}
          selectedDevice={selectedDevice}
          onSelectDevice={setSelectedDevice}
        />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Filters */}
          {availableFilters.length > 0 && (
            <FilterPanel
              filters={availableFilters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          )}
          
          {/* Products Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">
                {filteredProducts.length} Products Found
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-slate-600 mr-2">Sort by:</span>
                <select className="border border-slate-300 rounded-md text-sm p-1.5">
                  <option value="featured">Featured</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <AlertCircle size={40} className="mx-auto mb-4 text-amber-500" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">No Products Found</h3>
                <p className="text-slate-600 mb-4">
                  Try adjusting your filters to find products that match your criteria.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;