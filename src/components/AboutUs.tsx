import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, Sparkles } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-5 relative">
            {/* Elegant Background Blobs */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl z-0" />

            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                alt="Global Sosis Haurgeulis Kitchen Facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3] scale-100 hover:scale-105 transition-transform duration-700"
              />
              {/* Halal Badge Overlay */}
              <div className="absolute bottom-4 left-4 bg-emerald-600 border border-emerald-500 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 backdrop-blur-sm bg-emerald-600/90">
                <span className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center text-emerald-600 text-[8px]">✓</span>
                100% Halal MUI, BPJPH & BPOM
              </div>
            </div>

            {/* Float Highlight Stats Card */}
            <div className="absolute -right-4 -bottom-4 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 z-20 max-w-[200px] hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Garansi/Return</span>
              </div>
              <p className="text-sm font-bold text-stone-800 leading-tight">
                Kemasan Segel Rusak, dan Isi Berubah Rasa.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Detail */}
          <div className="lg:col-span-7">
            
            {/* Header Mini Segment */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-12 bg-rose-500"></span>
              <span className="text-sm font-extrabold text-rose-600 uppercase tracking-widest">
                Tentang Kami
              </span>
            </div>

            {/* Explanation paragraph */}
            <p className="mt-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              <strong>Global Sosis Haurgeulis</strong> adalah distributor produk olahan frozen food yang telah berdiri sejak tahun 2008 di wilayah Haurgeulis, Indramayu. Berlokasi strategis tepat di depan Kantor Polsek Haurgeulis, kami hadir menjadi salah satu pusat kebutuhan frozen food terpercaya bagi masyarakat, pedagang, hingga pelaku usaha kuliner.
            </p>

            <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              Perjalanan Global Sosis Haurgeulis dimulai dari sebuah restoran siap saji sederhana yang menyajikan berbagai menu favorit seperti nasi goreng, spageti, dan aneka minuman jus buah. Seiring berkembangnya kebutuhan pasar dan tingginya minat masyarakat terhadap produk praktis berkualitas, kami melakukan transformasi bisnis menjadi distributor dan pusat penjualan frozen food.
            </p>

            <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              Kini, Global Sosis Haurgeulis menyediakan beragam produk olahan seperti sosis, nugget, cedea, scallop, olahan bakso dan aneka frozen food lainnya dengan kualitas terbaik, harga bersahabat, serta memberi pelayanan yang terbaik.
            </p>

            {/* Action Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">Dipercaya Sejak 2008</h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-0.5">Toko kami sudah dipercaya oleh pelanggan sejak tahun 2008 hingga kini.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">100% Bersertifikat Halal</h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-0.5">Seluruh produk yang kami sediakan sudah bersertifikat halal MUI dan BPJPH.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">Mendukung Pedagang Lokal</h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-0.5">Membantu UMKM maupun pelaku usaha mendapatkan produk berkualitas dengan harga terjangkau.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">Pelayanan Cepat dan Ramah</h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-0.5">Pelayanan yang cepat sekaligus ramah untuk membantu pelanggan.</p>
                </div>
              </div>
            </div>

            {/* Micro Stats Row */}
            <div className="mt-10 pt-8 border-t border-stone-200/70 grid grid-cols-3 gap-4">
              <div>
                <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-rose-600">10+</span>
                <span className="text-stone-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1 block">Tahun Pengalaman</span>
              </div>
              <div>
                <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-amber-500">20+</span>
                <span className="text-stone-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1 block">Variasi Olahan</span>
              </div>
              <div>
                <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</span>
                <span className="text-stone-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1 block">Halal & Higienis</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
