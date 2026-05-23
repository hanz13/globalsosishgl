import { Product, Slide, Article, ContactInfo } from './types';

export const slides: Slide[] = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    headline: 'Sosis Premium Terbaik Dari Haurgeulis',
    subheading: 'Dibuat dari 100% daging sapi & ayam pilihan dengan racikan rempah khas yang kaya rasa, gurih, dan halal.',
    ctaText: 'Lihat Produk Sosis'
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1600&auto=format&fit=crop',
    headline: 'Nugget Crispy Pilihan Keluarga Sehat',
    subheading: 'Sensasi renyah di luar, kelembutan daging ayam utuh premium di dalam. Nikmati kelezatan praktis bergizi.',
    ctaText: 'Jelajahi Nugget Kami'
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bakso Sapi Urat & Halus Super Kenyal',
    subheading: 'Tekstur kenyal alami yang memanjakan lidah, kuah gurih berpadu sempurna untuk setiap hidangan hangat.',
    ctaText: 'Pesan Bakso Segera'
  }
];

export const products: Product[] = [
  {
    id: 'sosis-1',
    name: 'Sosis Bakar Jumbo Premium',
    category: 'sosis',
    description: 'Sosis sapi bakar ukuran besar dengan rempah premium, kulit ramah konsumsi, rasa smokey yang kuat.',
    fullDescription: 'Diciptakan khusus untuk para pencinta panggangan. Sosis Bakar Jumbo Premium memiliki tekstur padat dengan rasa daging sapi yang sangat dominan. Menggunakan casing kolagen alami bermutu tinggi yang aman langsung dimakan dan memberikan sensasi "snap" renyah saat digigit. Sangat cocok untuk sosis bakar bumbu barbeque, isian hotdog, maupun tumisan mewah.',
    image: 'https://plus.unsplash.com/premium_photo-1726876928901-dec6dcfb7748?q=80&w=800&auto=format&fit=crop',
    packagingSize: '500g (5 Pcs / Pack)',
    features: ['100% Halal Certified', 'Casing Kolagen Alami', 'Ekstra Rempah Eropa & Lokal', 'Tanpa Pewarna Kimia']
  },
  {
    id: 'sosis-2',
    name: 'Sosis Beef Frankfurter Cilik',
    category: 'sosis',
    description: 'Sosis frankfurter sapi khas Jerman versi mini, sangat juicy, lembut, tekstur halus.',
    fullDescription: 'Sosis Frankfurter dengan kelembutan legendaris. Diproses dengan penggilingan daging teknologi Jerman terkini untuk menjamin tekstur emulsi yang sangat halus, kenyal, dan juicy. Ditambah sentuhan aroma pengasapan kayu alami oak yang membangkitkan selera makan seluruh keluarga, terutama anak-anak.',
    image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?q=80&w=800&auto=format&fit=crop',
    packagingSize: '350g (10 Pcs / Pack)',
    features: ['Juicy & Lembut', 'Asap Kayu Alami (Smoked)', 'Favorit Anak-Anak', 'Siap Saji dalam 3 Menit']
  },
  {
    id: 'sosis-3',
    name: 'Sosis Ayam Wortel Sehat',
    category: 'sosis',
    description: 'Kombinasi sehat daging dada ayam lembut dan serutan wortel segar tinggi vitamin A.',
    fullDescription: 'Pilihan nutrisi harian anak yang cerdas. Kami mencampurkan dada ayam fillet rendah lemak dengan wortel organik segar kaya serat dan Vitamin A. Menghasilkan sosis bertekstur empuk, gurih alami, serta memiliki rona keemasan yang menggugah selera tanpa pemanis buatan maupun zat pengawet berbahaya.',
    image: 'https://images.unsplash.com/photo-1771243009177-9a074420461a?q=80&w=800&auto=format&fit=crop',
    packagingSize: '400g (12 Pcs / Pack)',
    features: ['Chicken Fillet Organik', 'Wortel Segar Bebas Pestisida', 'Sangat Rendah Lemak', 'Bagus untuk Sup Anak']
  },
  {
    id: 'nugget-1',
    name: 'Nugget Chicken Slice',
    category: 'nugget',
    description: 'Nugget ayam berlapis bubble crumbs super renyah ekstra crispy yang tahan lama.',
    fullDescription: 'Inovasi pelapis bubble crumb eksklusif yang memberikan kegaringan luar biasa tahan lama. Di bagian dalam, terdapat adonan daging ayam utuh cincang kasar yang sangat gurih, basah, dan berserat alami. Setiap gigitan adalah perjalanan tekstur dari garing luar biasa hingga kelembutan ayam premium.',
    image: 'https://images.unsplash.com/photo-1562967914-01efa7e87832?q=80&w=800&auto=format&fit=crop',
    packagingSize: '450g (Sekitar 18-20 Pcs)',
    features: ['Pelapis Bubble Crumbs Unik', 'Daging Ayam Cincang Kasar (Bukan Bubur)', 'Tekstur Ekstra Garing', 'Menggunakan Minyak Sehat']
  },
  {
    id: 'nugget-2',
    name: 'Stik Nugget Ayam Okey',
    category: 'nugget',
    description: 'Nugget ayam keemasan dengan isian keju cheddar lumer melimpah di setiap gigitannya.',
    fullDescription: 'Nugget ayam premium dengan rahasia kelezatan di dalamnya: keju cheddar lumer berkualitas tinggi. Saat digoreng hangat, keju di dalam nugget akan meleleh sempurna. Perpaduan asin gurih keju yang meleleh dengan renyahnya permukaan luar nugget ayam ini dijamin membuat ketagihan.',
    image: '/images/naget-okey.webp?q=80&w=800&auto=format&fit=crop',
    packagingSize: '500g (Sekitar 40 Pcs)',
    features: ['Pedagang Rumahan', 'Cafe & Angkringan', 'Reseller Frozen Food', 'UMKM Kuliner']
  },
  {
    id: 'nugget-3',
    name: 'Nugget Ayam Crispy',
    category: 'nugget',
    description: 'Nugget ayam bentuk koin klasik berlapis tepung roti keemasan, kaya gizi dan praktis.',
    fullDescription: 'Formulasi resep klasik yang disempurnakan sejak berdirinya Global Sosis Haurgeulis. Menggunakan potongan dada ayam padat berprotein tinggi yang dicampur halus dengan bawang bombay segar, lada putih Bangka, dan tepung roti keemasan bermutu tinggi. Sangat praktis sebagai bekal sekolah anak maupun menu sarapan kilat.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    packagingSize: '500g (Sekitar 22 Pcs)',
    features: ['Resep Warisan Legendaris', 'Aroma Bawang Bombay Segar', 'Kemasan Zipper Lock Praktis', 'Kandungan Protein Tinggi']
  },
  {
    id: 'bakso-1',
    name: 'Bakso Sapi Urat',
    category: 'bakso',
    description: 'Bakso sapi legendaris dengan cacahan urat sapi premium, tekstur berurat kenyal mantap.',
    fullDescription: 'Definisi bakso urat sejati. Dibuat dengan rasio daging sapi asli yang sangat tinggi serta taburan cacahan urat sapi segar untuk menghasilkan tekstur berserat kasar yang kenyal, kokoh, dan berkarakter kuat saat digigit. Enak disantap bersama sup kaldu tulang kaki sapi hangat berpemanis daun bawang goreng.',
    image: 'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?q=80&w=800&auto=format&fit=crop',
    packagingSize: '50 Pcs + Bumbu Kaldu Instan',
    features: ['Urat Sapi Murni Pilihan', 'Bebas Pengawet Boraks/Formalin', 'Tekstur Kasar Khas Tradisional', 'Gratis Bumbu Kaldu Bubuk Enak']
  },
  {
    id: 'bakso-2',
    name: 'Bakso Sapi Panggang',
    category: 'bakso',
    description: 'Bakso sapi halus super kenyal membal, halus tanpa serat, cocok untuk capcay atau sup basah.',
    fullDescription: 'Bakso sapi halus yang membal sempurna saat ditekan. Diproses secara higienis menggunakan daging sapi bagian paha dalam bebas lemak (lean meat) yang digiling ekstra lembut. Sangat serbaguna untuk dinikmati langsung, sebagai pelengkap tumis sayur capcay, mie goreng spesial, maupun sup bening hangat.',
    image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?q=80&w=800&auto=format&fit=crop',
    packagingSize: '50 Pcs / Pack',
    features: ['Daging Paha Sapi Bebas Lemak', 'Bouncy / Membal Alami', 'Serbaguna untuk Aneka Masakan', 'Kemasan Vacuum Food-Grade']
  },
  {
    id: 'bakso-3',
    name: 'Bakso Salaam',
    category: 'bakso',
    description: 'Bakso Ayam Salam merupakan bakso ayam siap olah dengan tekstur kenyal dan rasa gurih lezat.',
    fullDescription: 'Produk ini sudah dimasak (fully cooked) sehingga lebih praktis dan mudah diolah untuk berbagai menu seperti bakso kuah, mie ayam, yamin, seblak, capcay, hingga aneka frozen food dan jajanan kaki lima.',
    image: '/images/bakso-salam.webp?q=80&w=800&auto=format&fit=crop',
    packagingSize: '40 Pcs / Pack',
    features: ['Pedagang Bakso', 'Cafe & Angkringan', 'Catering', 'UMKM Kuliner']
  }
];

export const articles: Article[] = [
  {
    id: 'artikel-1',
    title: 'Tips Memasak Sosis Bakar agar Mekar Sempurna & Bumbu Meresap',
    excerpt: 'Seringkali sosis pecah saat dipanggang? Simak cara memotong silang dan marinasi bumbu barbeque yang benar ala Chef Global Sosis.',
    content: 'Membuat sosis bakar yang cantik seperti di kedai steak membutuhkan beberapa trik sederhana. Pertama, jangan mengupas kulit sosis kemasan Global Sosis Haurgeulis karena kami menggunakan casing kolagen alami dari rumput laut yang aman dimakan dan justru menjaga ke-juicy-an sosis. Kedua, buatlah goresan melingkar atau menyilang tipis-tipis di tubuh sosis kira-kira sedalam 2 milimeter. Ini membantu panas meresap dan membuat bumbu menempel erat. Terakhir, oleskan campuran mentega bumbu halus setelah sosis setengah matang agar bumbu tidak gosong terlebih dahulu saat terpapar bara api.',
    date: '15 April 2026',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    readTime: '3 Menit Membaca'
  },
  {
    id: 'artikel-2',
    title: 'Keunggulan Makanan Beku Halal & Berizin Edar Bagi Perkembangan Anak',
    excerpt: 'Peran protein hewani frozen food bersertifikat BPOM & MUI dalam menyediakan santapan sehat, higienis, dan cepat bagi buah hati Anda.',
    content: 'Di tengah kesibukan sehari-hari, frozen food premium seperti nugget kriuk Global Sosis Haurgeulis menjadi penyelamat para ibu. Keunggulan makanan beku kami terletak pada proses pembekuan cepat (Flash Freezing) segera setelah matang, yang secara alami mengunci zat gizi penting tanpa perlu bahan pengawet kimia berbahaya. Sertifikasi halal MUI dan izin edar resmi dari BPOM Indonesia memberikan ketenangan ekstra bagi Anda, menjamin aspek kebersihan hulu-hilir, kesehatan bahan baku, dan kehalalan proses produksinya.',
    date: '02 Mei 2026',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
    readTime: '4 Menit Membaca'
  },
  {
    id: 'artikel-3',
    title: 'Cara Simpan Frozen Food agar Tetap Segar, Bebas Bakteri Selama Berbulan-bulan',
    excerpt: 'Jangan salah suhu! Pelajari panduan praktis menyimpan sosis, nugget, dan bakso di freezer rumah agar kelembabannya tetap terjaga bagus.',
    content: 'Kesalahan cara menyimpan di kulkas rumah dapat menyebabkan "freezer burn", keadaan di mana kristal es merusak serat daging frozen food sehingga menjadi kering dan kehilangan rasa gurih alami. Selalu simpan produk Global Sosis Haurgeulis di suhu minimal -18 derajat Celcius. Hindari membuka-tutup wadah terlalu sering. Jika sudah dibuka, usahakan simpan kembali dalam zipper bag kedap udara, pastikan mengeluarkan seluruh udara berlebih sebelum menyegelnya kembali rapat-rapat demi menangkal datangnya bakteri luar.',
    date: '20 Mei 2026',
    image: 'https://images.unsplash.com/photo-1661319615776-946158744a29?q=80&w=800&auto=format&fit=crop',
    readTime: '5 Menit Membaca'
  }
];

export const contactInfo: ContactInfo = {
  address: 'Global Sosis Haurgeulis, Kec. Haurgeulis, Kabupaten Indramayu, Jawa Barat 45264, Indonesia',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Global%20Sosis%20Haurgeulis%20Haurgeulis%20Indramayu&t=&z=16&ie=UTF8&iwloc=&output=embed',
  email: 'globalsosishgl@gmail.com',
  phone: '+62 812-1458-0881',
  whatsappNumber: '6281214580881',
  workingHours: 'Senin - Minggu\n(05:00 - 18:00 WIB)'
};
