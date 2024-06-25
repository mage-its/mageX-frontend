import Placeholder from "@/assets/img/picture1.png";
import Placeholder2 from "@/assets/img/picture2.png";

//HOME & ABOUT ASSET
import GameDevIcon from "@/assets/competition/gamedev_icon.svg";
import AppDevIcon from "@/assets/competition/homeicon.svg";
import RoboticIcon from "@/assets/competition/robotic_icon.svg";
import IotIcon from "@/assets/competition/iot_icon.svg";
import EsportIcon from "@/assets/competition/esport_largeIcon.svg";
import UiUxIcon from "@/assets/competition/ui-ux_icon.svg";
import CpIcon from "@/assets/competition/cp_icon.svg";
import OrangeLeftDecor from "@/assets/competition/left.svg";
import OrangeRightDecor from "@/assets/competition/right.svg";
import PurpleLeftDecor from "@/assets/competition/purpleLeftVector.svg";
import PurpleRightDecor from "@/assets/competition/purpleRightVector.svg";

//TIMELINE ASSET
import keypad from "@/assets/competition/pad.svg";
import announce from "@/assets/competition/announce.svg";
import timepen from "@/assets/competition/bx_pen.svg";
import techmeet from "@/assets/competition/people.svg";
import truck from "@/assets/competition/truck.svg";
import robot from "@/assets/competition/robot.svg";
import { theme } from "@/components/Navbar";

export type Contest = {
  icon: any;
  homeCaption: string;
  title: string;
  theme: theme;
  leftVector: any;
  rightVector: any;
  aboutCaption: string;
  aboutImage: any;
  timeline: any;
  extraBox?: boolean;
  overviewDesc: string;
  overviewImage: any;
  point?: boolean;
  participant: string;
  prize: string;
  guidebook?: string;
};

export const gameDev: Contest = {
  icon: GameDevIcon,
  homeCaption: "Expand your creativity, bring us to the other world of yours!",
  title: "GAME DEVELOPMENT",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Game Competition adalah cabang perlombaan dari event MAGE X  dimana peserta akan berkompetisi dalam pembuatan video game.",
  aboutImage: Placeholder,
  timeline: [
    ["20 mei - 4 oktober 2024", "PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
    ["7 oktober 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    ["8 Oktober - 9 november 2024", "Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 november 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["12 november 2024", "TECHNICAL MEETING FINAL", techmeet],
  ],
  extraBox: true,
  overviewDesc:
    "Peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Tema dari perlombaan App Dev ini yaitu:",
  overviewImage: Placeholder2,
  point: true,
  participant: "1 - 3 Orang",
  prize: "5 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1fUYN_KoP2VN6w3Sbdbb_qHjKSSYH-cfZ/view?usp=sharing",
};

export const appDev: Contest = {
  icon: AppDevIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "APP DEVELOPMENT",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Application Competition adalah cabang dari salah satu perlombaan MAGE X yang dimana peserta akan berlomba-lomba untuk membuat suatu aplikasi. Peserta akan ditantang untuk membuat aplikasi yang memiliki dapat membantu pekerjaan atau bisa menyelesaikan suatu permasalahan yang ada disekitar.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei - 4 Oktober 2024", "PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
    ["7 Oktober 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    ["8 Oktober - 9 November 2024", "Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024", "Pengumuman Tahap Seleksi Karya", announce],
    ["12 November 2024", "TECHNICAL MEETING FINAL", techmeet],
  ],
  extraBox: true,
  overviewDesc:
    "Pada tahap pertama, peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Untuk tema dari perlombaan IoT adalah:",
  overviewImage: Placeholder2,
  point: true,
  participant: "1 - 3 Orang",
  prize: "3 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1gVZWLBbBkE0HNgR-WMSclMD_z8zZ2tBZ/view?usp=sharing",
};

export const robotic: Contest = {
  icon: RoboticIcon,
  homeCaption:
    "Show off your robots, we’re calling all the best robots team out there!",
  title: "ROBOTIK",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Robotics adalah cabang perlombaan dari event MAGE X dimana peserta akan melakukan berkompetisi dibidang robot. Pada perlombaan ini, peserta ditantang untuk membuat robot yang dimana robot ini diharuskan untuk melewati beberapa tantangan yang ada.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei 2024 - 5 November 2024", "Pendaftaran", keypad],
    ["12 November 2024", "Technical Meeting Perlombaan", announce],
    ["16 November 2024", "Penyisihan Robotik Tahap 1", truck],
    ["Final Dan Exhibition", "17 November 2024", robot],
  ],
  overviewDesc:
    "Robotics adalah cabang perlombaan dari event MAGE X dimana peserta akan melakukan berkompetisi dibidang robot. Pada perlombaan ini, peserta ditantang untuk membuat robot yang dimana robot ini diharuskan untuk melewati beberapa tantangan yang ada. Peserta dinilai dari robot yang dibuat untuk melewati setiap tantangan yang ada serta bisa mengalahkan peserta yang lain. Tujuan dari perlombaan ini yaitu untuk memperkenalkan teknik komputer itu sendiri yang dimana sangat relevan dengan hal robotik dan peserta lomba dapat mengasah skill dari bidang elektrikal, mekanik, dan programming. Perlombaan ini akan dilombakan secara langsung atau offline di Institut Teknologi Sepuluh Nopember.",
  overviewImage: Placeholder2,
  participant: "1 - 3 Orang",
  prize: "3 jt ++ dan e-certif",
};

export const iot: Contest = {
  icon: IotIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "INTERNET OF THINGS",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Internet of Things adalah cabang perlombaan dari event MAGE X dimana peserta akan dituntut dalam membuat perangkat berbasis IoT sekreatif mungkin. Dari perlombaan ini, peserta diharapkan bisa membuat perangkat IoT yang memiliki fungsi dalam membantu menyelesaikan suatu permasalahan dan perangkat IoT ini sesuai dengan tema yang diberikan.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei - 4 Oktober 2024", "PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
    ["7 Oktober 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    ["8 Oktober - 9 November 2024", "Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["12 November 2024", "TECHNICAL MEETING FINAL", techmeet],
  ],
  extraBox: true,
  overviewDesc:
    "Pada tahap pertama, peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Untuk tema dari perlombaan IoT adalah:",
  overviewImage: Placeholder2,
  point: true,
  participant: "1 - 3 Orang",
  prize: "3 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1WVmC3Nz0t0nvwonCrYMiLyDoKQyHlAFW/view?usp=sharing",
};

export const eSport: Contest = {
  icon: EsportIcon,
  homeCaption: "Show off your skill as a gamer, explore widely with us!",
  title: "E-SPORT COMPETITION",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vulputate enim. Mauris viverra semper lectus, vel porta ante luctus in. Praesent eget faucibus lectus. ",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei 2024 - 5 November 2024", "PENDAFTARAN", keypad],
    ["12 November 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    ["8 Oktober - 9 November 2024", "Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["12 November 2024", "TECHNICAL MEETING FINAL", techmeet],
  ],
  extraBox: true,
  overviewDesc:
    "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  prize: "2 jt++ dan e-certif",
};

export const uiUx: Contest = {
  icon: UiUxIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "UIUX",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "UI/UX adalah cabang perlombaan dari event MAGE X dimana peserta akan berkompetisi dalam mendesain UI/UX tentang pembuatan aplikasi dan web.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei 2024 - 5 November 2024", "Pendaftaran", keypad],
    ["12 November 2024", "Technical Meeting Perlombaan", announce],
    ["16 November 2024", "Penyisihan Robotik Tahap 1", truck],
    ["17 November 2024", "FINAL DAN EXHIBITION", robot],
  ],
  overviewDesc:
    "Pada perlombaan ini, peserta lomba akan dituntut untuk berkompetisi dalam pembuatan desain tentang tampilan web dan aplikasi yang dapat berfungsi dengan baik dan memiliki kemudahan akses dari sudut pengguna serta memiliki desain gambar yang menarik. Kriteria penilaian dari perlombaan ini yaitu dari fungsi, kemudahan akses serta desain gambar yang menarik.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  prize: "2 jt++ dan e-certif",
};

export const competitiveProgramming: Contest = {
  icon: CpIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "COMPETITIVE PROGRAMMING",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "Competitive Programming adalah cabang perlombaan dari event MAGE X dimana peserta akan bersaing satu sama lain untuk menyelesaikan soal-soal logika dan pemrograman dalam waktu yang terbatas.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei 2024 - 5 November 2024", "Pendaftaran", keypad],
    ["12 November 2024", "Technical Meeting Perlombaan", announce],
    ["16 November 2024", "Penyisihan Robotik Tahap 1", truck],
    ["Final Dan Exhibition", "17 November 2024", robot],
  ],
  overviewDesc:
    "Peserta akan ditantang untuk memberikan program serta algoritma terbaik mereka dalam menyelesaikan masalah yang diberikan. Perlombaan ini dilaksanakan secara online sepenuhnya di platform Kaggle yang terdiri  dua babak yaitu penyisihan dan final. Tujuan dilaksanakannya kompetisi ini adalah untuk memperkenalkan bagaimana Departemen Teknik Komputer ITS akan banyak berkutat terkait pemecahan masalah melalui pemrograman.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  prize: "2 jt++ dan e-certif",
};
