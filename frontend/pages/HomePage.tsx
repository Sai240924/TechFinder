import React from 'react';
import { Link } from 'react-router-dom';
import { CpuIcon, TrendingUp, Zap } from 'lucide-react';
import { categories } from '../data/categories';
import CategoryCard from '../components/ui/CategoryCard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Find the Perfect Tech for Your <span className="text-teal-400">Specific Needs</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Browse our collection of tech products categorized by use case. Whether you're a gamer, professional, or casual user, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
            <Link
              to="#categories"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('categories');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Categories
            </Link>
            {/* Removed View Categories button */}
            {/* <Link
              to="#categories"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors duration-300"
            >
              View Categories
            </Link> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Browse By Category</h2>
            <p className="max-w-xl mx-auto text-slate-600">
              Our tech products are organized into these main categories to help you find exactly what you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.path} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose TechFinder?</h2>
            <p className="max-w-xl mx-auto text-slate-600">
              We help you navigate the complex world of tech products with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CpuIcon size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Purpose-Based Categories</h3>
              <p className="text-slate-600">
                Instead of overwhelming technical specs, we organize products based on how you'll use them.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Expert Recommendations</h3>
              <p className="text-slate-600">
                Our tech experts curate product recommendations based on real-world performance and value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={28} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Intuitive Filtering</h3>
              <p className="text-slate-600">
                Find exactly what you need with our smart filtering system that focuses on what matters for your use case.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your perfect tech match?</h2>
          <p className="max-w-xl mx-auto mb-8 text-white/80">
            Browse our extensive collection of products categorized by your specific needs.
          </p>
          <Link
            to="/category/gaming"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Start Exploring
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;