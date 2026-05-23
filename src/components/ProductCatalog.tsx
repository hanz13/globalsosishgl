import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, X, CheckSquare, MessageCircle, RefreshCw } from 'lucide-react';
import { Product, Category } from '../types';
import { products, contactInfo } from '../data';

interface ProductCatalogProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Filter products based on selected tab AND search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle WhatsApp messages per product
  const getWhatsAppLink = (product: Product) => {
    const textMsg = `Halo Global Sosis Haurgeulis, saya tertarik untuk memesan produk *${product.name}* (${product.packagingSize}). Mohon informasi harga terbaru dan opsi pengiriman ke alamat saya. Terima kasih!`;
    return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-rose-500"></span>
            <span className="text-sm font-extrabold text-rose-600 uppercase tracking-widest">
              Katalog Produk Kami
            </span>
            <span className="h-0.5 w-8 bg-rose-500"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            Pilihan Menu Lezat Sosis, Nugget, & Bakso Terbaik
          </h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
            Seluruh produk kami diproduksi secara higienis, dibekukan instan, dan dikemas vakum kedap udara untuk menjaga kegurihan alami bumbu rempah saat sampai di kulkas Anda.
          </p>
        </div>

        {/* Toolbar: Category Tags Filter + Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-100 mb-10 shadow-sm">
          
          {/* Categories filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center" id="product-tabs">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedCategory === 'all'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                  : 'bg-white text-stone-600 hover:text-rose-600 border border-stone-200/60'
              }`}
            >
              🔥 Semua Olahan
            </button>
            <button
              onClick={() => onCategoryChange('sosis')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedCategory === 'sosis'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                  : 'bg-white text-stone-600 hover:text-rose-600 border border-stone-200/60'
              }`}
            >
              🍢 Sosis Premium
            </button>
            <button
              onClick={() => onCategoryChange('nugget')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedCategory === 'nugget'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                  : 'bg-white text-stone-600 hover:text-rose-600 border border-stone-200/60'
              }`}
            >
              🍗 Nugget Crispy
            </button>
            <button
              onClick={() => onCategoryChange('bakso')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedCategory === 'bakso'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                  : 'bg-white text-stone-600 hover:text-rose-600 border border-stone-200/60'
              }`}
            >
              🥣 Bakso
            </button>
          </div>

          {/* Search Input field */}
          <div className="relative w-full md:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Cari produk favorit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-700 placeholder-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Empty Search results warning state */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
            <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-700">Produk Tidak Ditemukan</h3>
            <p className="text-stone-400 text-sm mt-1">Gunakan kata kunci pencarian lain atau pilih kategori berbeda.</p>
            <button
              onClick={() => { setSearchQuery(''); onCategoryChange('all'); }}
              className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-rose-600 hover:text-rose-700"
            >
              <RefreshCw className="w-4 h-4" /> Reset Filter
            </button>
          </div>
        ) : (
          /* Products Grid Layout */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveModalProduct(product)}
                className="group bg-white rounded-2xl border border-stone-100 hover:border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-rose-500"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalProduct(product);
                  }
                }}
              >
                {/* Product Thumbnail Banner */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag overlay */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-stone-700 font-extrabold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-sm border border-stone-100">
                    {product.category === 'sosis' && '🍢 Sosis'}
                    {product.category === 'nugget' && '🍗 Nugget'}
                    {product.category === 'bakso' && '🥣 Bakso'}
                  </span>
                  {/* Hover view link prompt */}
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="bg-white/95 backdrop-blur-sm text-stone-900 font-bold text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ShoppingBag className="w-4 h-4 text-rose-500" />
                      Detail Produk & Pesan
                    </span>
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-500/80 mb-1 block uppercase tracking-wider">
                      {product.packagingSize}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-800 tracking-tight group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-stone-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Little list indicators */}
                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                      ✓ Halal MUI
                    </span>
                    <span className="text-stone-400 font-semibold text-xs group-hover:text-rose-600 flex items-center gap-1 transition-colors">
                      Selengkapnya &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Responsive Modal Detail Overlay */}
        {activeModalProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveModalProduct(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-up border border-stone-100"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white shadow-md backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Tutup detail produk"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Side Left Image Column */}
                <div className="md:col-span-5 bg-stone-100 relative aspect-video md:aspect-auto md:min-h-[400px]">
                  <img
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Category marker overlay */}
                  <div className="absolute bottom-4 left-4 bg-stone-900/85 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 flex items-center gap-1.5">
                    <span>
                      {activeModalProduct.category === 'sosis' && '🍢 Sosis Premium'}
                      {activeModalProduct.category === 'nugget' && '🍗 Nugget Crispy'}
                      {activeModalProduct.category === 'bakso' && '🥣 Bakso'}
                    </span>
                  </div>
                </div>

                {/* Side Right Details Column */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    
                    {/* Badge size */}
                    <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100/50 inline-block mb-3">
                      Sajian Berat: {activeModalProduct.packagingSize}
                    </span>

                    {/* Headline Detail */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                      {activeModalProduct.name}
                    </h3>

                    <div className="h-0.5 bg-stone-100 my-4" />

                    {/* Description Text */}
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                      Deskripsi Olahan
                    </h4>
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                      {activeModalProduct.fullDescription}
                    </p>

                    {/* Features checklist bulletpoints */}
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">
                      Sangat Cocok Digunakan Oleh :
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-600 text-xs sm:text-sm mb-6">
                      {activeModalProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 font-medium">
                          <CheckSquare className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons WhatsApp Footer */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3 items-center">
                    
                    <a
                      href={getWhatsAppLink(activeModalProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-grow flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-95 text-center focus:outline-none focus:ring-4 focus:ring-emerald-100"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      Pesan via WhatsApp Sekarang
                    </a>

                    <button
                      onClick={() => setActiveModalProduct(null)}
                      className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all active:scale-95"
                    >
                      Kembali ke Katalog
                    </button>

                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
