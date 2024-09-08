import PemateriMultimedia from "@/assets/dashboardWorkshop/pemateriMultimedia.png";
import PemateriRobotika from "@/assets/dashboardWorkshop/pemateriRobotika.png";
import Firefly from "@/assets/dashboardWorkshop/firefly.jpg";

type timeline = {
  title: string;
  date: string;
};

export type Workshop = {
  title: string;
  content: string;
  materi: string;
  informasiDiri: string;
  background: string;
  spesialis: string;
  tanggal: string;
  jam: string;
  tempat: string;
  pembicara: string;
  foto: any;
  biaya_pendaftaran: string;
  contact: string;
  link: string;
  tl: timeline[];
  teks_bukti_follow: string;
};

export const Multimedia: Workshop = {
  title: "Multimedia",
  content:
    'Workshop Multimedia adalah sebuah kegiatan yang diadakan sebagai bagian dari MAGE X. Kegiatan ini bertujuan untuk memperkenalkan dan mendidik masyarakat umum tentang bidang multimedia. Tema tahun ini adalah "Transformasi Digital: Perjalanan Menuju Masyarakat yang Lebih Inklusif Menuju Masyarakat 5.0." Workshop ini akan fokus pada "Mengembangkan Portofolio Website Anda Sendiri" dan mencakup topik-topik seperti: pengetahuan dasar tentang multimedia, pengembangan website, desain dan pengembangan front-end website untuk pemula, dan motivasi untuk terus belajar dan berinovasi di dunia digital. Workshop online selama 3 hari ini akan terdiri dari presentasi materi dan tugas pada hari pertama dan kedua, serta review tugas peserta oleh instruktur pada hari ketiga.',
  materi: "Develop Your Own Portfolio Website",
  informasiDiri:
    "Keanu Fortuna Taufan adalah seorang Software Engineer dengan pengalaman luas dalam pengembangan frontend dan backend. Saat ini, Keanu bekerja sebagai Software Engineer di Avalon AI dan Frontend Web Developer di Jago Teknik. Keanu juga merupakan Teaching Assistant di Sepuluh Nopember Institute of Technology dan memiliki pengalaman dalam pengembangan aplikasi mobile menggunakan React Native dan Flutter. Keanu telah berpartisipasi dalam berbagai proyek, termasuk pengembangan modul visualisasi data untuk aplikasi Summasphere dan pembuatan antarmuka pengguna untuk aplikasi NutriScope.",
  background: "Jagoteknik",
  spesialis: "Front End Web Developer",
  tanggal: "3 - 4 Agustus 2024 & 10 Agustus 2024",
  jam: "08.00 - Selesai",
  tempat: "Zoom Meeting",
  pembicara: "Keanu Fortuna Taufan",
  foto: PemateriMultimedia,
  biaya_pendaftaran: "GRATIS",
  contact: "Hendrik +62 812-6992-3325",
  link: "#",
  tl: [
    { title: "Pendaftaran", date: "16 Juli - 2 Agustus 2024" },
    { title: "Day - 1", date: "3 Agustus 2024" },
    { title: "Day - 2", date: "4 Agustus 2024" },
    { title: "Day - 3", date: "10 Agustus 2024" },
  ],
  teks_bukti_follow:
    "Bukti Follow Instagram + Follow Line + Follow Tiktok + Follow Jago Teknik + Share Poster (Tag 3 teman melalui ig story)",
};

export const Robotics: Workshop = {
  title: "Robotika",
  content:
    'Workshop Robotics merupakan salah satu kegiatan yang diadakan sebagai bagian dari rangkaian acara MAGE X. Kegiatan ini bertujuan untuk memperkenalkan dan mendidik masyarakat umum mengenai dunia robotics, dengan tema "Transformasi Digital: Perjalanan Menuju Masyarakat yang Lebih Inklusif Menuju Masyarakat 5.0." Workshop ini berfokus pada pengembangan control system, di mana peserta akan merakit sebuah robot dan menggunakan controller untuk menggerakkan robot yang telah dirakit tersebut. Acara ini akan diadakan secara offline dan berlangsung selama 1 hari.',
  materi: "Control and Assemble Your First Robot!",
  informasiDiri:
    "[Dewa] Detail-oriented Electrical Engineering graduate with a D4 degree from Politeknik Elektronika Negeri Surabaya (PENS EEPIS). Currently working full-time at PT. Insera Sena (Polygon Bikes Factory), where I am expertizing my skills in electrical systems, embedded system development, and robotic design. With immersive previous experience includes internships at PT. Telkom Indonesia and PT. Panasonic Manufacturing Indonesia. [Paminto] As an electrical project specialist with 5 years of diverse experience in manufacturing, LNG EPC construction, and automation systems, I am committed to driving technology transformation and process optimization.",
  background: "Robot Education",
  spesialis: "Robotics",
  tanggal: "22 September 2024",
  jam: "08.00 - 16.00",
  tempat: "Coming Soon",
  pembicara: "Dewa Pramudya Istiqfariandi | Paminto Nugroho",
  foto: PemateriRobotika,
  biaya_pendaftaran: "35k",
  contact: "Imanuel +628211788657",
  link: "#",
  tl: [
    { title: "Pendaftaran", date: "9 September - 20 September 2024" },
    { title: "Workshop Day", date: "22 September 2024" },
  ],
  teks_bukti_follow: "Bukti Follow Instagram Mage X",
};

export const InternetOfThings: Workshop = {
  title: "IoT",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  materi: "Coming Soon",
  informasiDiri: "Coming Soon",
  background: "Coming Soon",
  spesialis: "Coming Soon",
  tanggal: "Coming Soon",
  jam: "Coming Soon",
  tempat: "Coming Soon",
  pembicara: "Firefly",
  foto: Firefly,
  biaya_pendaftaran: "Coming Soon",
  contact: "Coming Soon",
  link: "#",
  tl: [
    { title: "Pendaftaran", date: "1 Juli - 19 Juli 2024" },
    { title: "Day - 1", date: "20 Juli 2024" },
    { title: "Day - 2", date: "28 Juli 2024" },
  ],
  teks_bukti_follow: "",
};
