import React, { useEffect } from 'react';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Award, ShoppingCart } from 'lucide-react';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBackToHome }) => {
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
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-50 rounded-full blur-3xl z-0" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 stroke-[2.25]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              Syarat & Ketentuan
            </h1>
            <p className="text-stone-400 mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Terakhir diperbarui: 22 Mei 2026 • Global Sosis Haurgeulis
            </p>
          </div>
        </div>

        {/* Content terms list */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/50 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Selamat datang di situs profil perusahaan <strong>Global Sosis Haurgeulis</strong>. Syarat dan ketentuan ini mengatur penggunaan seluruh area situs web, pembelian produk makanan beku keagenan maupun eceran, serta pemesanan interaktif melalui perantara perwakilan resmi admin WhatsApp kami.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Dengan mengakses situs ini atau mengajukan pesanan pembelian, Anda dianggap telah membaca, memahami, dan menyetujui seluruh butir persyaratan di bawah ini. Jika Anda berkeberatan atas salah satu persyaratan, mohon untuk tidak melanjutkan eksplorasi pemesanan sosis secara mandiri.
            </p>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 1: Product info */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Informasi & Spesifikasi Produk
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Global Sosis Haurgeulis berkomitmen menampilkan deskripsi visual gambar, takaran berat kemasan (gramasi), serta komposisi bumbu olahan sosis, nugget, dan bakso seakurat mungkin.
            </p>
            <div className="bg-stone-50 rounded-2xl p-5 pl-11 ml-11 border border-stone-150 flex gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                <strong>Catatan Alergi:</strong> Produk kami diproduksi menggunakan fasilitas pengolahan daging sapi, daging unggas ayam, rempah-rempah alami, serta bahan tepung pengental gandum. Pembeli disarankan menilik kandungan detail di produk konsultasi sebelum memesan jika memiliki sensitivitas alergi makanan tertentu.
              </p>
            </div>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 2: Order & Transaction */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Mekanisme Pemesanan & Pembayaran
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Setiap pemesanan yang didorong oleh tombol katalog akan bermuara langsung ke ruang percakapan admin Sales WhatsApp kami:
            </p>
            <ul className="space-y-2.5 pl-11 text-stone-600 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Konfirmasi Harga:</strong> Harga resmi mengikuti tabel dinamis terbaru penawaran admin sales saat chat karena adanya fluktuasi harga komoditas daging sapi/ayam murni nasional.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Metode Bayar:</strong> Kami menerima transaksi transfer bank BCA/Mandiri sebelum dilakukan pengiriman produk (Term Of Payment disepakati khusus untuk agen mitra besar).</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 3: Delivery */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Syarat Pengantaran Frozen Food
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Sebagai produk frozen food beku yang butuh kontrol suhu ketat, sosis, nugget, dan bakso diantar menggunakan kurir instan, sameday ekspedisi khusus dengan pelindung pendingin dingin (Coolbox/Icepack), atau mobil berfasilitas pendingin kami untuk rute Indramayu, Cirebon, Majalengka, Subang, dan sekitarnya demi menjaga gizi tetap higienis.
            </p>
          </section>

          <div className="h-px bg-stone-100" />

          {/* Section 4: Return Policy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Aturan Pengembalian & Garansi Mutu
              </h2>
            </div>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed pl-11">
              Jika kemasan vakum pecah, atau produk basi saat diterima di hari yang sama, kami siap mengganti <strong>100% UTUH GRATIS</strong> dengan produk baru sejenis. Syarat pengaduan wajib menyertakan bukti rekaman video tanpa putus (Unboxing Video) dalam tenggang waktu maksimal 4 jam sejak kurir pengantar menyerahkan barang ke alamat tujuan.
            </p>
          </section>

        </div>

        {/* Footer actions block */}
        <div className="mt-10 text-center">
          <button
            onClick={onBackToHome}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-rose-200 transition-all hover:scale-105 active:scale-95"
          >
            Saya Setuju & Kembali Ke Beranda
          </button>
        </div>

      </div>
    </div>
  );
};
