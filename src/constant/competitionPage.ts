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
  key: string;
  theme: theme;
  leftVector: any;
  rightVector: any;
  aboutCaption: string;
  aboutImage: any;
  timeline: any;
  extraBox?: boolean;
  overviewDesc: string;
  extraOverviewDesc?: string;
  overviewImage: any;
  point?: boolean;
  participant: string;
  category: string;
  prize: string;
  guidebook?: string;
  contact?: {
    name: string;
    phone: string;
  }[];
  secondPhase?: boolean;
};

export const gameDev: Contest = {
  icon: GameDevIcon,
  homeCaption: "Expand your creativity, bring us to the other world of yours!",
  title: "GAME DEVELOPMENT",
  key: "Game Dev",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Game Development Competition merupakan cabang perlombaan MAGE X yang berfokus pada pembuatan game. Kompetisi ini memberikan kesempatan emas bagi para peserta untuk menjelajahi dunia kreativitas, inovasi, dan pemrograman dalam industri game.",
  aboutImage: Placeholder,
  timeline: [
    [
      "11 Juli - 31 Agustus 2024",
      "PENDAFTARAN DAN PENGUMPULAN PROPOSAL",
      keypad,
    ],
    ["16 September 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    [
      "16 September - 10 November 2024",
      "Pengumpulan Tahap Realisasi Karya & Video",
      timepen,
    ],
    ["13 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["15 november 2024", "TECHNICAL MEETING FINAL", techmeet],
    ["24 November 2024", "Presentasi Final", announce],
    ["25 November 2024", "Awarding, Talkshow, dan Exhibition", keypad],
  ],
  extraBox: true,
  overviewDesc:
    "Pada tahun ini MAGE X berfokus pada “Digital Transformation : A Journey in Encouraging Social Inclusion Towards Society 5.0” dengan mengangkat beberapa sub-tema, yakni sebagai berikut. ",
  extraOverviewDesc:
    "Dengan beberapa sub-tema tersebut, peserta diharapkan dapat mengimplementasikannya pada pembuatan game sebagai premise, game mechanics, story, ataupun aspek lainnya.",
  overviewImage: Placeholder2,
  point: true,
  participant: "1 - 3 Orang",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "5 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1XMsarkpfMwrCHYQqNtVt3HAIEYIuXA5Y/view",
  contact: [
    {
      name: "Aqbil",
      phone: "0895342900188 (WA)",
    },
    {
      name: "Susilo",
      phone: "082210979566 (WA)",
    },
  ],
  secondPhase: true,
};

export const appDev: Contest = {
  icon: AppDevIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "APP DEVELOPMENT",
  key: "App Dev",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Application Development Competition merupakan cabang perlombaan MAGE X yang berfokus pada pengembangan aplikasi. Peserta diberikan kebebasan dalam memilih platform pengembangan aplikasi, seperti mobile application, web application, atau dekstop application, dengan penekanan pada aplikasi yang mudah digunakan dan dapat diakses oleh berbagai kalangan.",
  aboutImage: Placeholder,
  timeline: [
    [
      "11 Juli - 31 Agustus 2024",
      "PENDAFTARAN DAN PENGUMPULAN PROPOSAL",
      keypad,
    ],
    ["16 September 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    [
      "16 September - 10 November 2024",
      "Pengumpulan Tahap Realisasi Karya & Video",
      timepen,
    ],
    ["13 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["15 november 2024", "TECHNICAL MEETING FINAL", techmeet],
    ["24 November 2024", "Presentasi Final", announce],
    ["25 November 2024", "Awarding, Talkshow, dan Exhibition", keypad],
  ],
  extraBox: true,
  overviewDesc:
    "Pada tahun ini MAGE X berfokus pada “Digital Transformation : A Journey in Encouraging Social Inclusion Towards Society 5.0” dengan mengangkat beberapa sub-tema, yakni sebagai berikut.",
  extraOverviewDesc:
    "Melalui Application Development Competition diharapkan peserta dapat termotivasi untuk berinovasi dan menghasilkan aplikasi cerdas yang memiliki dampak positif dalam transformasi digital untuk meningkatkan pemerataan teknologi.",
  overviewImage: Placeholder2,
  point: true,
  participant: "1 - 3 Orang",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "3 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1c61kifZ9_P8EYAK35wgB34HP91BXcaFJ/view",
  contact: [
    {
      name: "Hasan",
      phone: "085394410418 (WA)",
    },
    {
      name: "Gilang",
      phone: "081390294320 (WA)",
    },
    {
      name: "Christ",
      phone: "085815046162 (WA)",
    },
  ],
  secondPhase: true,
};

export const robotic: Contest = {
  icon: RoboticIcon,
  homeCaption:
    "Show off your robots, we’re calling all the best robots team out there!",
  title: "ROBOTICS",
  key: "Robotics",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Robotic Competition merupakan cabang perlombaan MAGE X yang berfokus pada pertandingan robot line tracer yang bergerak mengikuti garis sebagai lintasan dari start hingga finish.",
  aboutImage: Placeholder,
  timeline: [
    ["11 Juli - 10 November 2024", "Pendaftaran", keypad],
    ["15 November 2024", "Technical Meeting Perlombaan", announce],
    ["24 November 2024", "Penyisihan", truck],
    ["25 November 2024", "Awarding, Talkshow, Exhibition", robot],
  ],
  overviewDesc:
    "Robotic Competition merupakan cabang perlombaan MAGE X yang berfokus pada pertandingan robot line tracer yang bergerak mengikuti garis sebagai lintasan dari start hingga finish. Kompetisi ini menawarkan panggung bagi para peserta untuk menunjukkan kemampuan kecepatan robot line tracer mereka.Tujuan dari perlombaan ini yaitu untuk memperkenalkan teknik komputer itu sendiri yang dimana sangat relevan dengan hal robotik dan peserta lomba dapat mengasah skill dari bidang elektrikal, mekanik, dan programming. Perlombaan ini akan dilombakan secara langsung atau offline di Institut Teknologi Sepuluh Nopember.",
  overviewImage: Placeholder2,
  participant: "1 - 2 Orang",
  category: "SMA/SMK/sederajat",
  prize: "3 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1suBBgpz9XmcWFxPR9y5F4ora5HNqlNCk/view",
  contact: [
    {
      name: "Ernita",
      phone: "083873974622 (WA)",
    },
  ],
};

export const iot: Contest = {
  icon: IotIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "INTERNET OF THINGS",
  key: "IoT",
  theme: "orange",
  leftVector: OrangeLeftDecor,
  rightVector: OrangeRightDecor,
  aboutCaption:
    "Internet of Things (IoT) Competition merupakan cabang perlombaan MAGE X yang berfokus pada pembuatan alat yang dapat terintegrasi dengan koneksi nirkabel untuk terhubung dengan alat lain yang dapat dikendalikan.",
  aboutImage: Placeholder,
  timeline: [
    [
      "11 Juli - 31 Agustus 2024",
      "PENDAFTARAN DAN PENGUMPULAN PROPOSAL",
      keypad,
    ],
    ["16 September 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    [
      "16 September - 10 November 2024",
      "Pengumpulan Tahap Realisasi Karya & Video",
      timepen,
    ],
    ["13 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["15 november 2024", "TECHNICAL MEETING FINAL", techmeet],
    ["24 November 2024", "Presentasi Final", announce],
    ["25 November 2024", "Awarding, Talkshow, dan Exhibition", keypad],
  ],
  extraBox: true,
  overviewDesc:
    "Pada tahun ini MAGE X berfokus pada “Digital Transformation : A Journey in Encouraging Social Inclusion Towards Society 5.0” dengan mengangkat beberapa sub-tema, yakni sebagai berikut.",
  extraOverviewDesc:
    "Tujuan dari kompetisi ini adalah mendorong inovasi dan kolaborasi dalam pengembangan solusi berbasis Internet of Things (IoT) yang berfokus pada digital transformation guna mengatasi kurangnya pemerataan pembangunan yang ada di Indonesia.",
  overviewImage: Placeholder2,
  point: true,
  participant: "1 - 3 Orang",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "3 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1NUY_eHrDIGC2uxDMAmXQsIdvVLIJ76pq/view",
  contact: [
    {
      name: "Candra",
      phone: "081943376024 (WA)",
    },
    {
      name: "Daniel",
      phone: "082228857396 (WA)",
    },
  ],
  secondPhase: true,
};

export const eSport: Contest = {
  icon: EsportIcon,
  homeCaption: "Show off your skill as a gamer, explore widely with us!",
  title: "E-SPORT COMPETITION",
  key: "Esport",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vulputate enim. Mauris viverra semper lectus, vel porta ante luctus in. Praesent eget faucibus lectus. ",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei - 5 November 2024", "PENDAFTARAN", keypad],
    ["12 November 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    ["8 Oktober - 9 November 2024", "Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
  ],
  overviewDesc:
    "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
};

export const uiUx: Contest = {
  icon: UiUxIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "UIUX",
  key: "UI/UX",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "UI/UX adalah cabang perlombaan dari event MAGE X dimana peserta akan berkompetisi dalam mendesain UI/UX tentang pembuatan aplikasi dan web.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei - 5 November 2024", "Pendaftaran", keypad],
    ["12 November 2024", "Technical Meeting Perlombaan", announce],
    ["16 November 2024", "Penyisihan Robotik Tahap 1", truck],
    ["17 November 2024", "FINAL DAN EXHIBITION", robot],
  ],
  overviewDesc:
    "Pada perlombaan ini, peserta lomba akan dituntut untuk berkompetisi dalam pembuatan desain tentang tampilan web dan aplikasi yang dapat berfungsi dengan baik dan memiliki kemudahan akses dari sudut pengguna serta memiliki desain gambar yang menarik. Kriteria penilaian dari perlombaan ini yaitu dari fungsi, kemudahan akses serta desain gambar yang menarik.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
};

export const competitiveProgramming: Contest = {
  icon: CpIcon,
  homeCaption:
    "Show off your skill as an application developer, explore widely with us!",
  title: "COMPETITIVE PROGRAMMING",
  key: "Competitive Programming",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "Competitive Programming adalah cabang perlombaan dari event MAGE X dimana peserta akan bersaing satu sama lain untuk menyelesaikan soal-soal logika dan pemrograman dalam waktu yang terbatas.",
  aboutImage: Placeholder,
  timeline: [
    ["20 Mei - 5 November 2024", "Pendaftaran", keypad],
    ["12 November 2024", "Technical Meeting Perlombaan", announce],
    ["16 November 2024", "Penyisihan Robotik Tahap 1", truck],
    ["Final Dan Exhibition", "17 November 2024", robot],
  ],
  overviewDesc:
    "Peserta akan ditantang untuk memberikan program serta algoritma terbaik mereka dalam menyelesaikan masalah yang diberikan. Perlombaan ini dilaksanakan secara online sepenuhnya di platform Kaggle yang terdiri  dua babak yaitu penyisihan dan final. Tujuan dilaksanakannya kompetisi ini adalah untuk memperkenalkan bagaimana Departemen Teknik Komputer ITS akan banyak berkutat terkait pemecahan masalah melalui pemrograman.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
};
