import React, { useState } from 'react';
import { Search, Phone, AlignJustify, X } from 'lucide-react';
import { Link } from "react-router-dom";


const HeaderMain = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12 relative container mx-auto">
      <div className="text-2xl font-bold text-lime-400">
        Turfhub
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="text-white hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4">Home</Link>
         <Link to="/about" className="text-gray-300 hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4">About</Link>
        <Link to="/services" className="text-gray-300 hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4">Service</Link>
        {/*<Link to="/courts" className="text-gray-300 hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4">Court</Link>
        <Link to="/products" className="text-gray-300 hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4">Shop</Link>
        <Link to="/testimonials" className="text-gray-300 hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4">Testmonials</Link> */}

      </nav>


      {/* Desktop Right Section */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent text-white placeholder-gray-300 outline-none text-sm w-32 lg:w-40"
          />
          <Search size={18} className="text-gray-300 ml-2" />
        </div>

        <button className="flex items-center bg-white text-black px-6 py-2 rounded-full hover:bg-lime-400 transition-colors">
          <span className="mr-2">Contact</span>
          <Phone size={16} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center space-x-3">
        <button className="flex items-center bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-400 transition-colors">
          <Phone size={16} />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-lime-400 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-t border-gray-700 lg:hidden">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a href="#" className="text-white hover:text-lime-400 transition-colors py-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors py-2">About</a>
            <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors py-2">Service</a>
            <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors py-2">Court</a>
            <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors py-2">Shop</a>

            {/* Mobile Search */}
            <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 mt-4">
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent text-white placeholder-gray-300 outline-none text-sm flex-1"
              />
              <Search size={18} className="text-gray-300 ml-2" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderMain;
