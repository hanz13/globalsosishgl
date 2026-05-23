import React from 'react';
import { Target, Eye, Star, CheckCircle2, TrendingUp } from 'lucide-react';

export const VisiMisi: React.FC = () => {
  const misiList = [
    'Menyediakan produk frozen food yang berkualitas, higienis, dan aman dikonsumsi.',
    'Memberikan harga yang terjangkau dengan pelayanan yang ramah dan terpercaya.',
    'Menjadi mitra kebutuhan usaha bagi pedagang, UMKM, dan pelaku kuliner di wilayah Haurgeulis dan sekitarnya.',
    'Terus berinovasi dan berkembang mengikuti kebutuhan pasar dan pelanggan.',
    'Membangun usaha yang bermanfaat bagi masyarakat sekitar serta membuka peluang ekonomi lokal.',
    'Menjaga kepercayaan pelanggan dengan konsistensi kualitas produk dan pelayanan sejak tahun 2008.',
  ];

  const nilaiList = [
    { icon: Star, title: 'Kualitas', desc: 'Produk frozen food higienis, aman dikonsumsi, dan melewati seleksi ketat.' },
    { icon: CheckCircle2, title: 'Kepercayaan', desc: 'Konsistensi pelayanan dan kualitas yang telah terjaga sejak tahun 2008.' },
    { icon: TrendingUp, title: 'Pertumbuhan', desc: 'Mendukung UMKM, pedagang, dan pelaku kuliner lokal untuk berkembang bersama.' },
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-rose-500"></span>
            <span className="text-sm font-extrabold text-rose-600 uppercase tracking-widest">
              Tentang Kami
            </span>
            <span className="h-0.5 w-8 bg-rose-500"></span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 leading-tight mb-4">
            Visi &amp; Misi
          </h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Komitmen kami dalam menjadi distributor frozen food terpercaya yang mendukung pertumbuhan usaha masyarakat dan pedagang lokal di sekitar Haurgeulis.
          </p>
        </div>

        {/* Visi Card */}
        <div className="bg-white rounded-3xl border border-stone-200/60 shadow-sm overflow-hidden mb-8">
          <div className="bg-rose-600 px-8 py-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-white font-serif">Visi Kami</h2>
          </div>
          <div className="px-8 py-8">
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-medium text-center italic">
              "Menjadi pusat distributor frozen food dan kebutuhan usaha terpercaya di Haurgeulis yang dikenal dengan produk berkualitas, pelayanan terbaik, serta mampu mendukung pertumbuhan usaha masyarakat dan pedagang lokal."
            </p>
          </div>
        </div>

        {/* Misi Card */}
        <div className="bg-white rounded-3xl border border-stone-200/60 shadow-sm overflow-hidden mb-8">
          <div className="bg-stone-800 px-8 py-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-white font-serif">Misi Kami</h2>
          </div>
          <div className="px-8 py-8">
            <ul className="space-y-4">
              {misiList.map((misi, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-extrabold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">{misi}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nilai-nilai Card */}
        <div className="bg-white rounded-3xl border border-stone-200/60 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-stone-100">
            <h2 className="text-2xl font-extrabold text-stone-900 font-serif">Nilai-Nilai Kami</h2>
            <p className="text-stone-400 text-sm mt-1">Prinsip yang menjadi landasan setiap langkah kami.</p>
          </div>
          <div className="px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nilaiList.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-rose-200 hover:bg-rose-50/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-extrabold text-stone-800 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};
