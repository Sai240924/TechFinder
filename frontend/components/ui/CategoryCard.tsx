import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { CategoryConfig } from '../../types';

interface CategoryCardProps {
  category: CategoryConfig;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically get the icon component from Lucide
  const IconComponent = ((LucideIcons as unknown) as Record<string, React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>>)[
    category.icon.charAt(0).toUpperCase() + category.icon.slice(1)
  ];

  return (
    <Link
      to={`/category/${category.path}`}
      className="block w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between h-full"
    >
      <div className="p-8 flex flex-col items-center text-center flex-grow">
        <div className="w-24 h-24 mb-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
          {IconComponent && (
            <IconComponent
              size={48}
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
            />
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-800">{category.name}</h3>
        <p className="text-slate-600">{category.description}</p>
      </div>
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 py-3 px-6 text-white font-medium flex items-center justify-between min-h-[48px] gap-2">
        <span>Explore</span>
        <LucideIcons.ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default CategoryCard;