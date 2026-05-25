import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, X, ArrowUpRight, User, Share2 } from 'lucide-react';
import { Article } from '../types';
import { articles } from '../data';

export const MediaArticles: React.FC = () => {
  const [activeModalArticle, setActiveModalArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  return (
    <section id="media-artikel" className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Block */}
        <div className="mb-12 text-left space-y-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-8 bg-rose-500"></span>
              <span className="text-sm font-extrabold text-rose-600 uppercase tracking-widest">
                Artikel &amp; Tips Edukasi
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              Kabar Terbaru &amp; Tips Kuliner Menarik
            </h2>
          </div>
          <p className="text-stone-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            Temukan panduan praktis memasak, informasi mutu nutrisi pangan olahan, serta kabar aktivitas menarik seputar Global Sosis Haurgeulis.
          </p>
        </div>

        {/* 3 Articles Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="article-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveModalArticle(article)}
              className="group bg-white rounded-2xl border border-stone-200/50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalArticle(article);
                }
              }}
            >
              {/* Image banner */}
              <div className="relative aspect-video bg-stone-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-stone-900/90 backdrop-blur-sm text-white font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Tips Olahan
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-800 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-stone-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700 group-hover:text-rose-600 transition-colors">
                    Baca Selengkapnya
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-rose-50 text-stone-400 group-hover:text-rose-600 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {activeModalArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveModalArticle(null)}
          >
            {/* Modal: flex flex-col, NO overflow-hidden di wrapper agar share section tidak terpotong */}
            <div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col relative animate-scale-up border border-stone-100"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                onClick={() => setActiveModalArticle(null)}
                className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full bg-white/90 backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image — fixed height, flex-shrink-0 */}
              <div className="relative h-56 sm:h-72 w-full bg-stone-100 flex-shrink-0 rounded-t-3xl overflow-hidden">
                <img
                  src={activeModalArticle.image}
                  alt={activeModalArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 flex items-end">
                  <div className="p-6">
                    <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">
                      Dapur Inspirasi Global Sosis
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white mt-1 leading-tight">
                      {activeModalArticle.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Konten artikel — flex-1, hanya bagian ini yang scroll */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-stone-400 border-b border-stone-100 pb-4 mb-4 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-rose-600">
                    <User className="w-4 h-4" />
                    Penulis: Admin
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-stone-300" />
                    Diterbitkan: {activeModalArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-stone-300" />
                    Waktu baca: {activeModalArticle.readTime}
                  </span>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-normal mb-8">
                  {activeModalArticle.content}
                </p>

                <div className="pt-2 text-right">
                  <button
                    onClick={() => setActiveModalArticle(null)}
                    className="bg-stone-900 hover:bg-rose-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors active:scale-95 cursor-pointer shadow-sm"
                  >
                    Tutup Artikel
                  </button>
                </div>
              </div>

              {/* Share section — flex-shrink-0, selalu di bawah, tidak ikut scroll */}
              <div className="border-t border-stone-100 px-6 py-4 bg-white flex-shrink-0 rounded-b-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <Share2 className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-extrabold text-stone-600 uppercase tracking-wider">
                    Bagikan Ke Media Sosial:
                  </span>
                </div>
                {/* Grid 2 kolom di mobile, 4 kolom di desktop — semua tombol pasti muncul */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Yuk baca artikel "' + activeModalArticle.title + '" oleh Admin Global Sosis Haurgeulis: ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold text-[11px] px-3 py-2 rounded-lg border border-emerald-100 transition-all active:scale-95"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-extrabold text-[11px] px-3 py-2 rounded-lg border border-blue-100 transition-all active:scale-95"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Menarik banget! Baca "' + activeModalArticle.title + '" oleh Admin Global Sosis:')}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-stone-50 hover:bg-stone-100 text-stone-800 font-extrabold text-[11px] px-3 py-2 rounded-lg border border-stone-200 transition-all active:scale-95"
                  >
                    Twitter/X
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="text-center bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold text-[11px] px-3 py-2 rounded-lg border border-rose-100 transition-all active:scale-95 cursor-pointer"
                  >
                    {copied ? 'Tersalin! ✓' : 'Salin Tautan'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
