import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, Phone } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  onSelectCategory: (category: Category) => void;
  onViewChange?: (view: 'home' | 'privacy' | 'terms') => void;
  currentView?: 'home' | 'privacy' | 'terms';
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory, onViewChange, currentView = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (onViewChange && currentView !== 'home') {
      onViewChange('home');
      // wait for home view to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 120);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (category: Category) => {
    setIsOpen(false);
    setDropdownOpen(false);
    
    if (onViewChange && currentView !== 'home') {
      onViewChange('home');
    }
    
    onSelectCategory(category);
    
    // Smooth scroll to catalog
    setTimeout(() => {
      const element = document.getElementById('produk');
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-rose-100 py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              if (onViewChange && currentView !== 'home') {
                onViewChange('home');
              }
              handleNavClick(e, 'hero-section');
            }}
            className="flex items-center gap-1 group focus:outline-none"
            id="brand-logo"
          >
            <img
  src="/images/transparent.png"
  alt="Global Sosis Haurgeulis"
  className="h-16"
/>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" id="desktop-nav">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'tentang-kami')}
              className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 transition-all"
            >
              Tentang Kami
            </a>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 flex items-center gap-1 transition-all"
              >
                Produk
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-48 bg-white border border-stone-100 rounded-xl shadow-xl py-2 z-50 animate-fade-in"
                >
                  <button
                    onClick={() => handleCategoryClick('sosis')}
                    className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 font-medium transition-colors"
                  >
                    🍢 Sosis Premium
                  </button>
                  <button
                    onClick={() => handleCategoryClick('nugget')}
                    className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 font-medium transition-colors"
                  >
                    🍗 Nugget Crispy
                  </button>
                  <button
                    onClick={() => handleCategoryClick('bakso')}
                    className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 font-medium transition-colors"
                  >
                    🥣 Olahan Bakso
                  </button>
                </div>
              )}
            </div>

            <a
              href="#media"
              onClick={(e) => handleNavClick(e, 'media-artikel')}
              className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 transition-all"
            >
              Media & Artikel
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'kontak')}
              className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 transition-all"
            >
              Kontak
            </a>
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, 'kontak')}
              className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-rose-100 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Hubungi Sales
            </a>
          </div>

          {/* Mobile Hamburger menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-rose-600 p-2 rounded-lg hover:bg-stone-100 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg animate-slide-down">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'tentang-kami')}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-all"
            >
              Tentang Kami
            </a>
            
            {/* Mobile Dropdown Category Links */}
            <div className="py-1">
              <span className="block px-3 py-1.5 text-xs font-bold text-stone-400 uppercase tracking-widest">
                Kategori Produk
              </span>
              <div className="pl-3 mt-1 space-y-1">
                <button
                  onClick={() => handleCategoryClick('sosis')}
                  className="w-full text-left block px-3 py-2 rounded-xl text-sm font-semibold text-stone-600 hover:bg-rose-50 hover:text-rose-600 transition-all"
                >
                  🍢 Sosis Premium
                </button>
                <button
                  onClick={() => handleCategoryClick('nugget')}
                  className="w-full text-left block px-3 py-2 rounded-xl text-sm font-semibold text-stone-600 hover:bg-rose-50 hover:text-rose-600 transition-all"
                >
                  🍗 Nugget Crispy
                </button>
                <button
                  onClick={() => handleCategoryClick('bakso')}
                  className="w-full text-left block px-3 py-2 rounded-xl text-sm font-semibold text-stone-600 hover:bg-rose-50 hover:text-rose-600 transition-all"
                >
                  🥣 Bakso Kenyal
                </button>
              </div>
            </div>

            <a
              href="#media"
              onClick={(e) => handleNavClick(e, 'media-artikel')}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-all"
            >
              Media & Artikel
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'kontak')}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-all"
            >
              Kontak
            </a>

            <div className="pt-4 border-t border-stone-100">
              <a
                href="#kontak"
                onClick={(e) => handleNavClick(e, 'kontak')}
                className="w-full text-center flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-3 rounded-xl text-base font-bold shadow-md shadow-rose-150 transition-all"
              >
                <Phone className="w-5 h-5" />
                Order Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
