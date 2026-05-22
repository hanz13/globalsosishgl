import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb Back */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-stone-500 hover:text-rose-600 font-bold text-sm mb-8 transition-colors group focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Kembali ke Beranda Utama
        </button>

        {/* Hero Card style header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/50 shadow-sm mb-10 overflow-hidden relative">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-50 rounded-full blur-3xl z-0" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 stroke-[2.25]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              Kebijakan Privasi
            </h1>
            <p className="text-stone-400 mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Terakhir diperbarui: 22 Mei 2026 • Global Sosis Haurgeulis
            </p>
          </div>
        </div>

        {/* Policy Content panels (Bento layout style details) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/50 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Selamat datang di situs resmi <strong>Global Sosis Haurgeulis</strong>. Kami sangat menghargai kepercayaan Anda sebagai pelanggan dan berkomitmen penuh untuk melindungi kerahasiaan informasi serta data pribadi yang Anda bagikan saat mengakses situs ini atau berinteraksi dengan layanan pemesanan WhatsApp kami.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Kebijakan Privasi ini dirancang untuk menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan menjaga informasi Anda. Dengan terus menggunakan situs atau menghubungi layanan penjualan kami, Anda menyetujui ketentuan yang dijelaskan di bawah ini.
            </p>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Informasi yang Kami Kumpulkan
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Kami mengumpulkan informasi untuk memberikan layanan terbaik kepada Anda saat melakukan transaksi sosis, nugget, dan bakso. Informasi ini termasuk namun tidak terbatas pada:
            </p>
            <ul className="space-y-2.5 pl-11 text-stone-600 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Data Kontak Langsung:</strong> Nama lengkap, nomor telepon (WhatsApp), email aktif, serta alamat pengiriman fisik untuk pengantaran pesanan makanan beku.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Data Teknis Otomatis:</strong> Jenis perangkat yang Anda gunakan, alamat IP anonim kulkas jaringan, preferensi pencarian sosis, dan cookie statistik guna meningkatkan kinerja visual navigasi halaman kami.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Penggunaan Informasi Anda
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Data pribadi yang dikirimkan oleh pemirsa hanya akan digunakan untuk kepentingan operasional bisnis Global Sosis Haurgeulis, seperti:
            </p>
            <ul className="space-y-2.5 pl-11 text-stone-600 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Memproses, mengonfirmasi, dan mengatur pengiriman pesanan produk dari pabrik kami langsung ke rumah Anda secara aman dan segar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Membalas pesan, kritik, saran, serta konsultasi bisnis kemitraan keagenan (reseller) sosis Haurgeulis via WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Mengirimkan penawaran diskon musiman atau kabar produk baru jika Anda secara sukarela bergabung dalam formulir langganan promo kami.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Keamanan dan Penyimpanan Data
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Kami menerapkan teknik keamanan digital modern berbasis enkripsi data untuk menangkal penyalinan ilegal, perubahan tak sah, ataupun kebocoran identitas. Kami menjamin penuh bahwa data Anda <strong>TIDAK AKAN PERNAH</strong> dijual, disewakan, atau dibagikan kepada pihak ketiga untuk kepentingan iklan promosi luar tanpa persetujuan tertulis eksplisit dari Anda selaku pemilik hak dasar data.
            </p>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Hubungi Pengelola Data
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Apabila Anda ingin menanyakan perihal kebijakan privasi, meminta penghapusan riwayat data pendaftaran penawaran, mohon layangkan surat elektronik berstempel resmi ke tim admin kami via email: <a href="mailto:info@globalsosishaurgeulis.com" className="text-rose-600 hover:underline font-bold">info@globalsosishaurgeulis.com</a> atau layangkan pesan ke alamat fisik kami di Haurgeulis.
            </p>
          </section>

        </div>

        {/* Footer actions block */}
        <div className="mt-10 text-center">
          <button
            onClick={onBackToHome}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-rose-200 transition-all hover:scale-105 active:scale-95"
          >
            Selesai Membaca & Kembali Ke Beranda
          </button>
        </div>

      </div>
    </div>
  );
};
