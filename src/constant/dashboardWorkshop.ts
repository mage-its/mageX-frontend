import PemateriMultimedia from '@/assets/dashboardWorkshop/pemateriMultimedia.png';
import Furina from '@/assets/dashboardHome/Furina_3.jpg';
import Firefly from '@/assets/dashboardWorkshop/firefly.jpg';

type timeline = {
  title: string;
  date: string;
};

export type Workshop = {
    title: string,
    content: string,
    materi: string,
    informasiDiri: string,
    background: string,
    spesialis: string,
    tanggal: string,
    jam: string,
    tempat: string,
    pembicara: string,
    foto: any,
    price: string,
    contact: string,
    link: string,
    tl: timeline[],
};

export const Multimedia: Workshop = {
    title: 'Multimedia',
    content: 'Workshop Multimedia adalah sebuah kegiatan yang diadakan sebagai bagian dari MAGE X. Kegiatan ini bertujuan untuk memperkenalkan dan mendidik masyarakat umum tentang bidang multimedia. Tema tahun ini adalah "Transformasi Digital: Perjalanan Menuju Masyarakat yang Lebih Inklusif Menuju Masyarakat 5.0." Workshop ini akan fokus pada "Mengembangkan Portofolio Website Anda Sendiri" dan mencakup topik-topik seperti: pengetahuan dasar tentang multimedia, pengembangan website, desain dan pengembangan front-end website untuk pemula, dan motivasi untuk terus belajar dan berinovasi di dunia digital. Workshop online selama 3 hari ini akan terdiri dari presentasi materi dan tugas pada hari pertama dan kedua, serta review tugas peserta oleh instruktur pada hari ketiga.',
    materi: "Develop Your Own Portfolio Website",
    informasiDiri: "Keanu Fortuna Taufan adalah seorang Software Engineer dengan pengalaman luas dalam pengembangan frontend dan backend. Saat ini, Keanu bekerja sebagai Software Engineer di Avalon AI dan Frontend Web Developer di Jago Teknik. Keanu juga merupakan Teaching Assistant di Sepuluh Nopember Institute of Technology dan memiliki pengalaman dalam pengembangan aplikasi mobile menggunakan React Native dan Flutter. Keanu telah berpartisipasi dalam berbagai proyek, termasuk pengembangan modul visualisasi data untuk aplikasi Summasphere dan pembuatan antarmuka pengguna untuk aplikasi NutriScope.",
    background: 'Jagoteknik',
    spesialis: 'Front End Web Developer',
    tanggal: '3 - 4 Agustus 2024 & 10 Agustus 2024',
    jam: 'Coming Soon',
    tempat: 'Zoom Meeting',
    pembicara: 'Keanu Fortuna Taufan',
    foto: PemateriMultimedia,
    price: 'GRATIS',
    contact: 'Mahija +62 1288-092-766',
    link: '#',
    tl: [
        { title: 'Pendaftaran', date: '1 Juli - 19 Juli 2024' },
        { title: 'Day - 1', date: '20 Juli 2024' },
        { title: 'Day - 2', date: '28 Juli 2024' }
    ]
};


export const Robotics: Workshop = {
    title: 'Robotika',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    materi: 'Coming Soon',
    informasiDiri: "Coming Soon",
    background: 'Coming Soon',
    spesialis: 'Coming Soon',
    tanggal: 'Coming Soon',
    jam: 'Coming Soon',
    tempat: 'Coming Soon',
    pembicara: 'Furina de Fontaine',
    foto: Furina,
    price: 'Coming Soon',
    contact: 'Coming Soon',
    link: '#',
    tl: [
        { title: 'Pendaftaran', date: '1 Juli - 19 Juli 2024' },
        { title: 'Day - 1', date: '20 Juli 2024' },
        { title: 'Day - 2', date: '28 Juli 2024' }
    ]
};

export const InternetOfThings: Workshop = {
    title: 'Internet of Things',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    materi: 'Coming Soon',
    informasiDiri: "Coming Soon",
    background: 'Coming Soon',
    spesialis: 'Coming Soon',
    tanggal: 'Coming Soon',
    jam: 'Coming Soon',
    tempat: 'Coming Soon',
    pembicara: 'Firefly',
    foto: Firefly,
    price: 'Coming Soon',
    contact: 'Coming Soon',
    link: '#',
    tl: [
        { title: 'Pendaftaran', date: '1 Juli - 19 Juli 2024' },
        { title: 'Day - 1', date: '20 Juli 2024' },
        { title: 'Day - 2', date: '28 Juli 2024' }
    ]
};