import PemateriMultimedia from '@/assets/dashboardWorkshop/pemateriMultimedia.png'
import Furina from '@/assets/dashboardHome/Furina_3.jpg'
import Firefly from '@/assets/dashboardWorkshop/firefly.jpg'

export type Workshop = {
    title: string,
    content: string,
    materi: string,
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
};

export const Multimedia: Workshop = {
    title: 'Multimedia',
    content: 'Workshop Multimedia adalah sebuah kegiatan yang diadakan sebagai bagian dari MAGE X. Kegiatan ini bertujuan untuk memperkenalkan dan mendidik masyarakat umum tentang bidang multimedia. Tema tahun ini adalah "Transformasi Digital: Perjalanan Menuju Masyarakat yang Lebih Inklusif Menuju Masyarakat 5.0." Workshop ini akan fokus pada "Mengembangkan Portofolio Website Anda Sendiri" dan mencakup topik-topik seperti: pengetahuan dasar tentang multimedia, pengembangan website, desain dan pengembangan front-end website untuk pemula, dan motivasi untuk terus belajar dan berinovasi di dunia digital. Workshop online selama 3 hari ini akan terdiri dari presentasi materi dan tugas pada hari pertama dan kedua, serta review tugas peserta oleh instruktur pada hari ketiga.',
    materi: "Develop Your Own Portfolio Website",
    background: 'Jagoteknik',
    spesialis: 'Front End Web Developer',
    tanggal: '3 - 4 Agustus 2024 & 10 Agustus 2024',
    jam: 'Coming Soon',
    tempat: 'Zoom Meeting',
    pembicara: 'Keanu Fortuna Taufan',
    foto: PemateriMultimedia,
    price: 'GRATIS',
    contact: 'Coming Soon',
    link: '#',
};

export const Robotics: Workshop = {
    title: 'Robotika',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    materi: 'Coming Soon',
    background: 'Coming Soon',
    spesialis: 'Coming Soon',
    tanggal: 'Coming Soon',
    jam: 'Coming Soon',
    tempat: 'Coming Soon',
    pembicara: 'Furina de Fontaine',
    foto: Furina,
    price: 'Coming Soon',
    contact: 'Coming Soon',
    link: '#'
};

export const InternetOfThings: Workshop = {
    title: 'Internet of Things',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    materi: 'Coming Soon',
    background: 'Coming Soon',
    spesialis: 'Coming Soon',
    tanggal: 'Coming Soon',
    jam: 'Coming Soon',
    tempat: 'Coming Soon',
    pembicara: 'Firefly',
    foto: Firefly,
    price: 'Coming Soon',
    contact: 'Coming Soon',
    link: '#'
};