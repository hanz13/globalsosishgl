import React from 'react';
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Globe, Send, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data';

interface FooterProps {
  onViewChange?: (view: 'home' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="kontak" className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout tree (3 columns + newsletter section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Left Column (Address & Map) - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="footer-alamat">
            <div>
              <div className="flex items-center gap-3 mb-4 animate-fade-in">
                <img
                  src="/images/transparent.png"
                  alt="Global Sosis Haurgeulis"
                  referrerPolicy="no-referrer"
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Distributor olahan produk frozen food seperti sosis, nugget, cedea, dan bakso yang berkualitas dengan harga terjangkau. Kamu bisa kunjungi alamat toko kami di bawah ini.
              </p>
              <a
                href="https://maps.app.goo.gl/xwdfcS99Rvn3MYFEA"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex gap-2.5 text-stone-300 hover:text-rose-400 font-medium text-sm mb-5 group/address transition-colors duration-200"
              >
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 group-hover/address:scale-110 transition-transform" />
                <span>{contactInfo.address}</span>
              </a>
            </div>

            {/* Google Maps Responsive Iframe Wrapper */}
            <div className="rounded-xl overflow-hidden border border-stone-800 h-44 w-full shadow-inner relative group/map">
              <iframe
                title="Lokasi Toko Global Sosis Haurgeulis"
                src={contactInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 opacity-75 group-hover/map:opacity-100 group-hover/map:grayscale-0 transition-all duration-500"
              />
              <a
                href="https://maps.app.goo.gl/xwdfcS99Rvn3MYFEA"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover/map:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]"
              >
                <span className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-lg flex items-center gap-1 transition-all scale-95 group-hover/map:scale-100">
                  <MapPin className="w-3.5 h-3.5" />
                  Buka Petunjuk Arah ↗
                </span>
              </a>
            </div>
          </div>

          {/* Middle Column (Contact Us & Quick Links) - 4 Cols */}
          <div className="lg:col-span-4" id="footer-kontak">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest border-l-4 border-rose-500 pl-3 mb-6">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-rose-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-500">Kirim Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-stone-300 hover:text-rose-400 transition-colors text-sm sm:text-base">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-rose-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-500">Telepon & Konsultasi</span>
                  <a href={`tel:${contactInfo.phone}`} className="text-stone-300 hover:text-rose-400 transition-colors text-sm sm:text-base">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-rose-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-500">Jam Operasional Kantor</span>
                  <p className="text-stone-300 text-sm">
                    {contactInfo.workingHours}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Social Media / Follow Us) - 3 Cols */}
          <div className="lg:col-span-3" id="footer-sosial">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest border-l-4 border-rose-500 pl-3 mb-6">
              Ikuti Kami
            </h4>
            <p className="text-stone-400 text-sm mb-5 leading-relaxed">
              Pantau terus promo menarik, potongan harga diskon, info resep baru, dan kejutan spesial lainnya melalui kanal media sosial kami:
            </p>

            {/* Social Icons links container */}
            <div className="flex gap-3 mb-6" id="social-links-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram Koperasi Global Sosis"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook Koperasi Global Sosis"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="TikTok Global Sosis Haurgeulis"
              >
                {/* Custom SVG Tiktok icon since Lucide lacks an official robust one */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.01c1.31-.02 2.61-.01 3.91-.02a6.83 6.83 0 00.35 1.74 5.23 5.23 0 001.99 2.5 6.47 6.47 0 002.83 1.04v3.91a8.31 8.31 0 01-3.69-.9 5.82 5.82 0 01-1.39-.9v7.94a7.71 7.71 0 01-2 5.17 7.07 7.07 0 01-5.18 2.54 7.64 7.64 0 01-5.61-2.07 8.35 8.35 0 01-2.52-5.64 7.58 7.58 0 011.83-5.74 7.42 7.42 0 015.34-2.6v3.91c-.81.07-1.6.3-2.27.76a3.63 3.63 0 00-1.48 2.07 4 4 0 00.1 2.38c.3.83.92 1.48 1.7 1.83a3.54 3.54 0 002.6.14 3.79 3.79 0 002.04-1.63 4.22 4.22 0 00.51-2.2V0h.03z"></path>
                </svg>
              </a>

              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Situs Web"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            {/* Fast Newsletter Subscription form inside Footer */}
            <div className="relative mt-2">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-500 mb-2">Berlangganan Promo</span>
              <form 
                onSubmit={(e) => { e.preventDefault(); alert('Terima kasih telah berlangganan email newsletter Global Sosis Haurgeulis!'); }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="email"
                  placeholder="Email aktif..."
                  required
                  className="bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-rose-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 text-white font-bold p-2 rounded-xl transition-colors shrink-0"
                  aria-label="Kirim berlangganan"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar & Credits */}
        <div className="pt-8 mt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500" id="footer-bottom">
          <p>© {new Date().getFullYear()} Global Sosis Haurgeulis. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-5 font-semibold text-stone-500">
            <button 
              onClick={() => { onViewChange?.('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-rose-400 transition-colors cursor-pointer focus:outline-none"
            >
              Kebijakan Privasi
            </button>
            <span>•</span>
            <button 
              onClick={() => { onViewChange?.('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-rose-400 transition-colors cursor-pointer focus:outline-none"
            >
              Syarat Ketentuan
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-rose-400 transition-colors focus:outline-none"
            >
              Kembali ke Atas <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
