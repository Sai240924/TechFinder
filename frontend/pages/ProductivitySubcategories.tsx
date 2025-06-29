import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import * as LucideIcons from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

const ProductivitySubcategories: React.FC = () => {
  const productivityCategory = categories.find(cat => cat.path === 'productivity');
  
  if (!productivityCategory || !productivityCategory.subcategories) {
    return null;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/"
            className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            {productivityCategory.name}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose your specific creative or professional focus to find the perfect tools
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productivityCategory.subcategories.map((subcat) => {
            const IconComponent = ((LucideIcons as unknown) as Record<string, React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>>)[
              subcat.icon.charAt(0).toUpperCase() + subcat.icon.slice(1)
            ];

            return (
              <Link
                key={subcat.path}
                to={`/category/productivity/${subcat.path}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between h-full"
              >
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 mb-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent
                        size={32}
                        className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">
                    {subcat.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {subcat.description}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 py-3 px-6 text-white font-medium flex items-center justify-between">
                  <span>Explore Tools</span>
                  <LucideIcons.ArrowRight 
                    size={18} 
                    className="transform group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductivitySubcategories;