import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Laptop, Search, ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force solid background on category pages, wishlist page, and cart page
  const isCategoryPage = location.pathname.startsWith('/category/');
  const isWishlistPage = location.pathname === '/wishlist';
  const isCartPage = location.pathname === '/cart';

  const useSolidBackground = isScrolled || isCategoryPage || isWishlistPage || isCartPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidBackground ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-3xl font-extrabold"
          >
            <Laptop className={`mr-3 ${useSolidBackground ? 'text-teal-600' : 'text-teal-500'}`} />
            <span className={`${useSolidBackground ? 'text-slate-800' : 'text-white'}`}>
              TechFinder
            </span>
          </Link>
          
          {/* Wishlist and Cart Icons */}
          <div className="hidden md:flex items-center space-x-4 absolute right-0">
            <Link
              to="/wishlist"
              className={`p-2 rounded-full ${
                useSolidBackground ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              } transition-colors duration-300`}
              aria-label="Wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </Link>
            <button
              onClick={() => navigate('/cart')}
              className={`p-2 rounded-full ${
                useSolidBackground ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              } transition-colors duration-300`}
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={useSolidBackground ? 'text-slate-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={useSolidBackground ? 'text-slate-800' : 'text-white'} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/category/gaming" 
                className="text-slate-700 hover:text-teal-600 font-medium p-2"
              >
                Gaming
              </Link>
              <Link 
                to="/category/productivity" 
                className="text-slate-700 hover:text-teal-600 font-medium p-2"
              >
                Productivity
              </Link>
              <Link 
                to="/category/daily" 
                className="text-slate-700 hover:text-teal-600 font-medium p-2"
              >
                Daily Use
              </Link>
              <div className="flex items-center space-x-4 pt-2 border-t border-slate-100">
                <button className="p-2 text-slate-700 hover:bg-slate-100 rounded-full">
                  <Search size={20} />
                </button>
                <button
                  onClick={() => navigate('/cart')}
                  className="p-2 text-slate-700 hover:bg-slate-100 rounded-full"
                  aria-label="Cart"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
