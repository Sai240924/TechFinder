import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToCategories = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const preventScrollTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center text-xl font-bold mb-4">
              TechFinder
            </Link>
            <p className="text-slate-300 mb-4">
              Find the perfect tech product for your needs, whether it's for gaming, productivity, or daily use.
            </p>
          </div>
          
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/gaming" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Gaming
                </Link>
              </li>
              <li>
                <Link to="/category/productivity" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Productivity
                </Link>
              </li>
              <li>
                <Link to="/category/daily" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Daily Use
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Device Types */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Devices</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" onClick={scrollToCategories} className="text-slate-300 hover:text-teal-400 transition-colors">Laptops</a>
              </li>
              <li>
                <a href="#" onClick={scrollToCategories} className="text-slate-300 hover:text-teal-400 transition-colors">Desktops</a>
              </li>
              <li>
                <a href="#" onClick={scrollToCategories} className="text-slate-300 hover:text-teal-400 transition-colors">Mobiles</a>
              </li>
              <li>
                <a href="#" onClick={scrollToCategories} className="text-slate-300 hover:text-teal-400 transition-colors">Tablets</a>
              </li>
              <li>
                <a href="#" onClick={scrollToCategories} className="text-slate-300 hover:text-teal-400 transition-colors">Accessories</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" onClick={preventScrollTop} className="text-slate-300 hover:text-teal-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" onClick={preventScrollTop} className="text-slate-300 hover:text-teal-400 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-700 flex justify-center">
          <p className="text-sm text-slate-400 text-center w-full">
            &copy; 2025 TechFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
