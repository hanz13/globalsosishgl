import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutUs } from './components/AboutUs';
import { ProductCatalog } from './components/ProductCatalog';
import { MediaArticles } from './components/MediaArticles';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Category } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');

  const handleCategorySelectFromHeader = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleCategoryChangeFromCatalog = (cat: Category | 'all') => {
    setSelectedCategory(cat);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-rose-600 selection:text-white">
      {/* Sticky Header Navigation bar */}
      <Header 
        onSelectCategory={handleCategorySelectFromHeader} 
        onViewChange={setCurrentView}
        currentView={currentView}
      />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Banner Carousel Hero Section */}
            <HeroSlider />

            {/* Brand Mission & Quality Overview Section */}
            <AboutUs />

            {/* Dynamic Products Catalog Grid with detail modal prompts */}
            <ProductCatalog
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChangeFromCatalog}
            />

            {/* Tips, recipes, and company articles */}
            <MediaArticles />
          </>
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy onBackToHome={handleBackToHome} />
        )}

        {currentView === 'terms' && (
          <TermsAndConditions onBackToHome={handleBackToHome} />
        )}
      </main>

      {/* Embedded footer block with maps, phone details, working hours & socials */}
      <Footer onViewChange={setCurrentView} />

      {/* Corner floating WhatsApp direct-trigger button */}
      <WhatsAppButton />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
