import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  onSelectCategory: (category: Category) => void;
  onViewChange?: (view: 'home' | 'privacy' | 'terms') => void;
  currentView?: 'home' | 'privacy' | 'terms';
}

export const Header: React.FC<HeaderProps> = ({
  onSelectCategory,
  onViewChange,
  currentView = 'home',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setMobileProductOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (onViewChange && currentView !== 'home') {
      onViewChange('home');
      setTimeout(() => scrollToId(targetId), 120);
      return;
    }
    scrollToId(targetId);
  };

  const handleCategoryClick = (category: Category) => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileProductOpen(false);
    if (onViewChange && currentView !== 'home') onViewChange('home');
    onSelectCategory(category);
    setTimeout(() => scrollToId('produk'), 150);
  };

  const categories: { cat: Category; emoji: string; label: string }[] = [
    { cat: 'sosis', emoji: String.fromCodePoint(0x1F362), label: 'Sosis Premium' },
    { cat: 'nugget', emoji: String.fromCodePoint(0x1F357), label: 'Nugget Crispy' },
    { cat: 'bakso', emoji: String.fromCodePoint(0x1F963), label: 'Olahan Bakso' },
  ];

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

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              if (onViewChange && currentView !== 'home') onViewChange('home');
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

            {/* Desktop Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 flex items-center gap-1 transition-all"
              >
                Produk
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-1 w-48 bg-white border border-stone-100 rounded-xl shadow-xl py-2 z-50 transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                {categories.map(({ cat, emoji, label }) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:text-rose-600 hover:bg-rose-50/60 font-medium transition-colors"
                  >
                    {emoji} {label}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#media"
              onClick={(e) => handleNavClick(e, 'media-artikel')}
              className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 transition-all"
            >
              {'Artikel'}
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'kontak')}
              className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-rose-600 rounded-lg hover:bg-stone-50 transition-all"
            >
              Kontak
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, 'kontak')}
              className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-rose-100 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              ORDER SEKARANG!
            </a>
          </div>

          {/* Hamburger - smooth animated */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative text-stone-700 hover:text-rose-600 p-2 rounded-lg hover:bg-stone-100 focus:outline-none transition-colors w-10 h-10 flex items-center justify-center"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 rotate-90 scale-50'
                }`}
              >
                <X className="w-6 h-6" />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? 'opacity-0 -rotate-90 scale-50'
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              >
                <Menu className="w-6 h-6" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-stone-100 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'tentang-kami')}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-all"
          >
            Tentang Kami
          </a>

          {/* Mobile Product Toggle */}
          <div>
            <button
              onClick={() => setMobileProductOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-all"
            >
              <span>Produk</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileProductOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileProductOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-3 mt-1 space-y-1 pb-1">
                {categories.map(({ cat, emoji, label }) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="w-full text-left block px-3 py-2 rounded-xl text-sm font-semibold text-stone-600 hover:bg-rose-50 hover:text-rose-600 transition-all"
                  >
                    {emoji} {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#media"
            onClick={(e) => handleNavClick(e, 'media-artikel')}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-all"
          >
            {'Artikel'}
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
              className="w-full text-center flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-3 rounded-xl text-base font-bold shadow-md transition-all"
            >
              <Phone className="w-5 h-5" />
              ORDER SEKARANG!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
