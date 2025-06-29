import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductivitySubcategories from './pages/ProductivitySubcategories';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import ScrollToTop from '../src/components/layout/ScrollToTop';
import { WishlistProvider } from './context/WishlistContext';

const App: React.FC = () => {
  return (
    <WishlistProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/productivity" element={<ProductivitySubcategories />} />
              <Route path="/category/productivity/:subcategory" element={<CategoryPage />} />
              <Route path="/category/:categoryPath" element={<CategoryPage />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WishlistProvider>
  );
};

export default App;
