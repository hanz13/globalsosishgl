import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a small bounce/tooltip suggestion after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Halo Global Sosis Haurgeulis, saya ingin menanyakan produk sosis, nugget, dan bakso berkualitas Anda.'
    );
    window.open(`https://wa.me/${contactInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="bg-white text-stone-800 text-xs md:text-sm font-semibold py-2 px-4 rounded-xl shadow-xl border border-rose-100 flex items-center gap-2 animate-bounce-horizontal relative">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Hubungi Kami via WhatsApp!
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 font-bold ml-1 text-xs"
            aria-label="Close tooltip"
          >
            ×
          </button>
          {/* Tooltip triangle tail */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent"></div>
        </div>
      )}
      <button
        id="floating-whatsapp-btn"
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <svg 
          className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-12" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.017 14.077.99 11.474.99 6.037.99 1.611 5.36 1.608 10.787c-.001 1.732.46 3.42 1.332 4.927L1.93 21.03l4.717-1.876zm11.751-5.176c-.327-.164-1.938-.957-2.226-1.062-.288-.105-.497-.158-.707.158-.21.315-.813 1.025-.996 1.235-.183.21-.366.236-.693.073-.327-.164-1.38-.508-2.63-1.623-.972-.867-1.628-1.938-1.819-2.266-.191-.328-.02-.505.143-.668.147-.146.327-.381.49-.572.164-.19.219-.328.327-.546.109-.219.055-.41-.027-.573-.082-.164-.707-1.704-.969-2.336-.255-.612-.514-.529-.707-.539-.183-.01-.393-.012-.602-.012s-.55.079-.838.394c-.288.315-1.1.1-1.1 2.684a4.965 4.965 0 001.036 2.637c.109.145 2.152 3.284 5.213 4.607.728.315 1.296.503 1.739.644.731.233 1.396.2 1.921.122.585-.087 1.938-.792 2.212-1.558.275-.766.275-1.423.193-1.559-.081-.136-.288-.218-.615-.382z" />
        </svg>
      </button>
    </div>
  );
};
