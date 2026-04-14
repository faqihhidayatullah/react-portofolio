import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/php.png";
import Tools10 from "/assets/tools/laravel.png";
import Tools11 from "/assets/tools/androidstudio.png";
import Tools12 from "/assets/tools/java.png";
import Tools13 from "/assets/tools/ci.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/aws.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "LARAVEL",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Android Studio",
    ket: "IDE",
    dad: "1100",
  },
   {
    id: 12,
    gambar: Tools12,
    nama: "JAVA",
    ket: "Language",
    dad: "1200",
  },
   {
    id: 13,
    gambar: Tools13,
    nama: "Code Igniter",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "AWS",
    ket: "Cloud Service",
    dad: "1600",
  },
];

import Proyek1 from "/assets/proyek/projectposyandu.png";
import Proyek2 from "/assets/proyek/projectrentalmobil.png";
import Proyek3 from "/assets/proyek/projectkpri.png";
import Proyek4 from "/assets/proyek/projectoneda.png";
import Proyek5 from "/assets/proyek/projectbatik.png";
import Proyek6 from "/assets/proyek/projectstartup.png";
import proyek7 from "/assets/proyek/projectdashboardmonitoring.png";

export const listProyek = [
  {
    id: 1,
    gambar: proyek7,
    nama: "Web Dashboard Monitoring Layanan Pengaduan & AUX Karyawan",
    desk: "Website ini adalah dashboard monitoring ticket atau layanan pengaduan/keluhan serta monitoring istirahat (AUX) karyawan. Sistem ini memudahkan pemantauan status tiket pengaduan, aktivitas penanganan, dan waktu istirahat karyawan secara real-time, sehingga meningkatkan transparansi, efisiensi, dan pengambilan keputusan dalam operasional perusahaan.",
    tools: ["CodeIgniter 4", "PHP", "CSS", "JavaScript"],
    link: null, // Project ini bersifat rahasia perusahaan, tidak dapat diakses publik
    warning: "Project ini bersifat rahasia perusahaan dan tidak dapat diakses publik.",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek1,
    nama: "Website Posyandu Desa Korowelang kulon",
    desk: "Website ini dibangun menggunakan framework CodeIgniter 3, PHP, CSS, dan JavaScript untuk membantu pengelolaan data posyandu di Desa Korowelang Kulon. Fitur utamanya meliputi manajemen data ibu dan balita, penjadwalan penimbangan, rekap laporan gizi balita, serta dashboard admin yang memudahkan petugas posyandu dalam memasukkan, mengupdate, dan memantau data perkembangan kesehatan balita secara digital.",
    tools: ["CodeIgniter 3", "PHP", "CSS", "JavaScript"],
    link: "https://github.com/faqihhidayatullah/web-posyandu-CI",
    dad: "200",
  },
  {
    id: 3,
    gambar: Proyek2,
    nama: "Website Rental Mobil",
    "desk": "ebsite ini dibangun menggunakan HTML, CSS, dan PHP Native untuk membantu pengelolaan data penyewaan mobil secara online. Fitur utamanya meliputi manajemen data kendaraan, pemesanan mobil, stok mobil yang masih tersedia atau tidak, cek ketersediaan jadwal sewa, sistem validasi data pelanggan, dan dashboard admin untuk memantau status sewa serta laporan transaksi secara lengkap dan mudah dipahami.",
    tools: ["HTML", "CSS", "PHP Native"],
    link: "https://github.com/faqihhidayatullah/web-rental-mulia-mobil",
    dad: "300",
  },
  {
    id: 4,
    gambar: Proyek3,
    nama: "Web Koperasi",
    desk: "Website ini dikembangkan menggunakan HTML, CSS, JavaScript, PHP Native, dan SCSS untuk mendukung kegiatan Koperasi Pegawai Republik Indonesia (KPRI). Fitur utamanya meliputi layanan simpan pinjam anggota, konsultasi keuangan, serta program-program kesejahteraan yang memudahkan pengelolaan keuangan dan pelayanan anggota secara online.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "SCSS"],
    link: "https://github.com/faqihhidayatullah/web-Kpri",
    dad: "400",
  },
  {
    id: 5,
    gambar: Proyek4,
    nama: "MOBILE APPS ONEDA ",
    desk: "Aplikasi mobile Oneda dikembangkan menggunakan Java (Android Studio) dengan dukungan PHP & MySQL di sisi server. Oneda adalah aplikasi penjualan tas yang dilengkapi fitur keranjang belanja, manajemen produk, kupon promo, perhitungan ongkos kirim (rajaongkir API), serta dashboard admin untuk memantau pesanan dan data pelanggan.",
    tools: ["Java (Android Studio)", "PHP", "MySQL", "RajaOngkir API"],
    link: "https://github.com/faqihhidayatullah/oneda-mobile-apps",
    dad: "500",
  },
  {
    id: 6,
    gambar: Proyek5,
    nama: "MOBILE APPS Batik Nusantara",
    desk: "Aplikasi mobile Batik nusantara dikembangkan menggunakan Java (Android Studio) dengan dukungan PHP & MySQL di sisi server. Batik nusantara adalah aplikasi penjualan baju batik yang dilengkapi fitur keranjang belanja, manajemen produk, kupon promo, perhitungan ongkos kirim (rajaongkir API), serta dashboard admin untuk memantau pesanan .",
    tools: ["Java (Android Studio)", "PHP", "MySQL", "RajaOngkir API"],
    link: "https://github.com/faqihhidayatullah/batiknusantara-mobile-apps",
    dad: "600",
  },
  {
    id: 7,
    gambar: Proyek6,
    nama: "Ecommerce startup mobile apps",
    desk: "mobile ECOMMERCE dikembangkan menggunakan Java (Android Studio) dengan dukungan PHP & MySQL di sisi server. aplikasi ini berupa ecommerce toko fashion pakain wanita dan pria yang dilengkapi fitur keranjang belanja, manajemen produk, kupon promo, perhitungan ongkos kirim (rajaongkir API), whislist produk serta dashboard admin untuk memantau pesanan.",
    tools: ["Java (Android Studio)", "PHP", "MySQL", "RajaOngkir API"],
    link: "https://github.com/faqihhidayatullah/startup-ecommerce-mobile-apps",
    dad: "700",
  },
];
