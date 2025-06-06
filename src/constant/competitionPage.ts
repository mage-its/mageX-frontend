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
  guidebook2?: string;
  mhs_fee?: string;
  std_fee?: string;
  contact?: {
    name: string;
    phone: string;
  }[];
  secondPhase?: boolean;
  maxMember?: number;
  isEsport?: boolean;
  isOnlyStd?: boolean;
};

export const gameDev: Contest = {
  maxMember: 3,
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
    ["23 November 2024", "Presentasi Final", announce],
    ["23 November 2024", "Awarding, Talkshow, dan Exhibition", keypad],
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
    "https://drive.google.com/file/d/1hopZfn0VeAtUp_9sQ8aPGywUuMuy3q_5/view?usp=sharing",
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
  maxMember: 3,
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
    ["23 November 2024", "Presentasi Final", announce],
    ["23 November 2024", "Awarding, Talkshow, dan Exhibition", keypad],
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
    "https://drive.google.com/file/d/1kHaa2H-_Y5TVUQcXwaxjcZpW7Ps-WSSZ/view?usp=sharing",
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
  maxMember: 2,
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
    ["23 November 2024", "Penyisihan", truck],
    ["23 November 2024", "Awarding, Talkshow, Exhibition", robot],
  ],
  overviewDesc:
    "Robotic Competition merupakan cabang perlombaan MAGE X yang berfokus pada pertandingan robot line tracer yang bergerak mengikuti garis sebagai lintasan dari start hingga finish. Kompetisi ini menawarkan panggung bagi para peserta untuk menunjukkan kemampuan kecepatan robot line tracer mereka.Tujuan dari perlombaan ini yaitu untuk memperkenalkan teknik komputer itu sendiri yang dimana sangat relevan dengan hal robotik dan peserta lomba dapat mengasah skill dari bidang elektrikal, mekanik, dan programming. Perlombaan ini akan dilombakan secara langsung atau offline di Institut Teknologi Sepuluh Nopember.",
  overviewImage: Placeholder2,
  participant: "1 - 2 Orang",
  category: "SMA/SMK/sederajat",
  prize: "3 jt ++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1bhuSRdw_FZyupYwFKmvseQpJsxQnSg87/view?usp=sharing",
  contact: [
    {
      name: "Ernita",
      phone: "083873974622 (WA)",
    },
  ],
  std_fee: "Rp100.000.00",
  isOnlyStd: true,
};

export const iot: Contest = {
  maxMember: 3,
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
    ["23 November 2024", "Presentasi Final", announce],
    ["23 November 2024", "Awarding, Talkshow, dan Exhibition", keypad],
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
    "https://drive.google.com/file/d/1t2F7mU8Sy1etrNtxwdCZflr849CrM3bX/view?usp=sharing",
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
    "Kompetisi Esport MAGE X adalah kompetisi sampingan yang diselenggarakan oleh MAGE X. Kompetisi ini memperlombakan game Mobile Legend dan Valorant, dua game dengan potensi besar dalam ekosistem esport Indonesia. Tujuan acara ini adalah untuk memajukan industri esport dengan menyediakan platform kompetitif yang profesional.",
  aboutImage: Placeholder,
  timeline: [
    ["21 Agustus - 28 Agustus 2024", "PENDAFTARAN", keypad],
    ["7 September - 6 Oktober 2024", "PENYISIHAN", announce],
    ["12 Oktober 2024", "SEMIFINAL", timepen],
    ["13 Oktober 2024", "FINAL & BRONZE MATCH", announce],
  ],
  overviewDesc:
    "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
  guidebook:
    "https://drive.google.com/file/d/1foo15v5QDJ1n_x3SaKVUBB5Yi2Sr1zp6/view?usp=sharing", // ML
  guidebook2:
    "https://drive.google.com/file/d/1v14PNHwW3o0KLAbAzFX-n2ZV4LO0bLcT/view?usp=sharing", // Valorant
  contact: [
    {
      name: "Hendrik (ML)",
      phone: "081269923325 (WA)",
    },
    {
      name: "Davi (ML)",
      phone: "085776143714 (WA)",
    },
    {
      name: "Wildan (Valorant)",
      phone: "081519971319 (WA)",
    },
    {
      name: "Rizky (Valorant)",
      phone: "087876967987 (WA)",
    },
  ],
  isEsport: true,
};

export const uiUx: Contest = {
  maxMember: 3,
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
  extraBox: true,
  timeline: [
    [
      "6 Agustus - 14 September 2024",
      "Pendaftaran & Pengumpulan Abstrak",
      keypad,
    ],
    ["16 September 2024", "Pengumuman Tahap 1 (Abstrak)", announce],
    [
      "16 September - 10 November 2024",
      "Pengumuman Tahap 2 (Proposal & Video)",
      announce,
    ],
    ["13 November 2024", "Pengumuman Tahap 2 (Realisasi Karya)", announce],
    ["15 November 2024", "Technical Meeting Final", techmeet],
    ["23 November 2024", "Presentasi Final", keypad],
    ["23 November 2024", "Awarding & Exhibition", announce],
  ],
  overviewDesc:
    "Pada perlombaan ini, peserta lomba akan dituntut untuk berkompetisi dalam pembuatan desain tentang tampilan web dan aplikasi yang dapat berfungsi dengan baik dan memiliki kemudahan akses dari sudut pengguna serta memiliki desain gambar yang menarik. Kriteria penilaian dari perlombaan ini yaitu dari fungsi, kemudahan akses serta desain gambar yang menarik.",
  overviewImage: Placeholder2,
  participant: "3 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
  contact: [
    {
      name: "Rigel",
      phone: "085234115941 (WA)",
    },
    {
      name: "Syawal",
      phone: "081354055259 (WA)",
    },
  ],
  guidebook:
    "https://drive.google.com/file/d/154IM5hRDD-js1_1BVYpkoFbNUldnz3UZ/view?usp=sharing",
  mhs_fee: "Rp80.000.00",
  std_fee: "Rp80.000.00",
};

export const competitiveProgramming: Contest = {
  maxMember: 3,
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
  extraBox: true,
  timeline: [
    ["7 Agustus - 30 September 2024", "Pendaftaran", keypad],
    ["5 Oktober 2024", "Technical Meeting Babak Penyisihan", techmeet],
    ["6 Oktober 2024", "Warmup", timepen],
    ["13 Oktober 2024", "Babak Penyisihan", truck],
    ["20 Oktober 2024", "Pengumuman Finalis", announce],
    ["17 November 2024", "Technical Meeting Babak Final", techmeet],
    ["23 November 2024", "Babak Final", robot],
    ["23 November 2024", "Awarding & Exhibition", announce],
  ],
  overviewDesc:
    "Peserta akan ditantang untuk memberikan program serta algoritma terbaik mereka dalam menyelesaikan masalah yang diberikan. Perlombaan ini dilaksanakan secara online sepenuhnya di platform Kaggle yang terdiri  dua babak yaitu penyisihan dan final. Tujuan dilaksanakannya kompetisi ini adalah untuk memperkenalkan bagaimana Departemen Teknik Komputer ITS akan banyak berkutat terkait pemecahan masalah melalui pemrograman.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
  contact: [
    {
      name: "Zadun",
      phone: "085229801965 (WA)",
    },
    {
      name: "Thoriq",
      phone: "081249007271 (WA)",
    },
  ],
  guidebook:
    "https://drive.google.com/file/d/1tYIroyFjqHDYniHc7hRRjodcE6sPUTug/view?usp=sharing",
  mhs_fee: "Rp80.000.00",
  std_fee: "Rp100.000.00",
};

export const valorant: Contest = {
  maxMember: 5,
  icon: EsportIcon,
  homeCaption: "Show off your skill as a gamer, explore widely with us!",
  title: "VALORANT",
  key: "Valorant",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vulputate enim. Mauris viverra semper lectus, vel porta ante luctus in. Praesent eget faucibus lectus. ",
  aboutImage: Placeholder,
  timeline: [
    ["21 Agustus - 28 Agustus 2024", "PENDAFTARAN", keypad],
    ["7 September - 6 Oktober", "PENYISIHAN", announce],
    ["12 Oktober", "SEMIFINAL", timepen],
    ["13 Oktober", "FINAL", announce],
  ],
  overviewDesc:
    "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
  contact: [
    {
      name: "Wildan",
      phone: "081519971319 (WA)",
    },
    {
      name: "Rizky",
      phone: "087876967987 (WA)",
    },
  ],
};

export const mobileLegends: Contest = {
  maxMember: 5,
  icon: EsportIcon,
  homeCaption: "Show off your skill as a gamer, explore widely with us!",
  title: "  MOBILE LEGENDS",
  key: "Mobile Legends",
  theme: "purple",
  leftVector: PurpleLeftDecor,
  rightVector: PurpleRightDecor,
  aboutCaption:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vulputate enim. Mauris viverra semper lectus, vel porta ante luctus in. Praesent eget faucibus lectus. ",
  aboutImage: Placeholder,
  timeline: [
    ["21 Agustus - 28 Agustus 2024", "PENDAFTARAN", keypad],
    ["7 September - 6 Oktober", "PENYISIHAN", announce],
    ["12 Oktober", "SEMIFINAL", timepen],
    ["13 Oktober", "FINAL", announce],
  ],
  overviewDesc:
    "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage: Placeholder2,
  participant: "5 Orang/tim",
  category: "SMA/SMK/sederajat dan Mahasiswa",
  prize: "2 jt++ dan e-certif",
  contact: [
    {
      name: "Hendrik",
      phone: "081269923325 (WA)",
    },
    {
      name: "Davi",
      phone: "085776143714 (WA)",
    },
  ],
};
