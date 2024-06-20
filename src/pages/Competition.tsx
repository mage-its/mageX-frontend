import React, { useEffect } from "react"
import { useState } from "react"
import cn from "@/utils/cn"
import { motion, AnimatePresence } from "framer-motion"

import Title from "@/components/CompetitionTitle"
import Navbar from "@/components/Navbar"
import NextArrow from "@/assets/competition/NextButton.svg"
import PrevArrow from "@/assets/competition/PrevButton.svg"
import NextArrow2 from "@/assets/competition/nextArrow2.svg"
import PrevArrow2 from "@/assets/competition/prevArrow2.svg"
import Wave from "@/components/Wave"
import CButton from "@/components/Button"
import Placeholder from "@/assets/img/picture1.png"
import Placeholder2 from "@/assets/img/picture2.png"

//HOME & ABOUT ASSET
import GameDevIcon from "@/assets/competition/gamedev_icon.svg"
import AppDevIcon from "@/assets/competition/homeicon.svg"
import RoboticIcon from "@/assets/competition/robotic_icon.svg"
import IotIcon from "@/assets/competition/iot_icon.svg"
import EsportIcon from "@/assets/competition/esport_largeIcon.svg"
import UiUxIcon from "@/assets/competition/ui-ux_icon.svg"
import CpIcon from "@/assets/competition/cp_icon.svg"
import OrangeLeftDecor from "@/assets/competition/left.svg"
import OrangeRightDecor from "@/assets/competition/right.svg"
import PurpleLeftDecor from "@/assets/competition/purpleLeftVector.svg"
import PurpleRightDecor from "@/assets/competition/purpleRightVector.svg"

//TIMELINE ASSET
import Timebox from "@/components/Timebox"
import ToRight from "@/assets/competition/line2right.svg"
import ToLeft from "@/assets/competition/line2left.svg"
import keypad from "@/assets/competition/pad.svg"
import announce from "@/assets/competition/announce.svg"
import timepen from "@/assets/competition/bx_pen.svg"
import techmeet from "@/assets/competition/people.svg"
import truck from "@/assets/competition/truck.svg"
import robot from "@/assets/competition/robot.svg"

//OVERVIEW ASSET
import prizeIconOrange from "@/assets/competition/orangePrizeIcon.svg"
import categoryIconOrange from "@/assets/competition/orangeCategoryIcon.svg"
import participantIconOrange from "@/assets/competition/orangeParticIcon.svg"
import contactIconOrange from "@/assets/competition/orangeContactIcon.svg"
import medalIconOrange from "@/assets/competition/orangeMedalIcon.svg"
import orangeSUB from "@/assets/competition/orangeSignUpIcon.svg"
import purpleSUB from "@/assets/competition/purpleSignUpIcon.svg"
import prizeIconPurple from "@/assets/competition/purplePrizeIcon.svg"
import categoryIconPurple from "@/assets/competition/purpleCategoryIcon.svg"
import participantIconPurple from "@/assets/competition/purplePartiIcon.svg"
import contactIconPurple from "@/assets/competition/contactPurple.svg"
import medalIconPurple from "@/assets/competition/purpleMedalIcon.svg"

//FOOTER ASSET
import pc2 from "@/assets/competition/pcFooter.svg"
import pen2 from "@/assets/competition/pen2.svg"
import time2 from "@/assets/competition/time2.svg"
import view2 from "@/assets/competition/view2.svg"
import mail2 from "@/assets/competition/mail2.svg"
import scline2 from "@/assets/competition/scline2.svg"
import tiktok from "@/assets/competition/tiktokorange.svg"
import instagram from "@/assets/competition/instaorange.svg"

import purplePC2 from "@/assets/competition/PurplePC2.svg"
import purplePen2 from "@/assets/competition/purpleAbout2.svg"
import purpleTime2 from "@/assets/competition/purpleTimeline2.svg"
import purpleView2 from "@/assets/competition/purpleOverview2.svg"
import purpleMail2 from "@/assets/competition/purpleMail2.svg"
import purpleTiktok2 from "@/assets/competition/purpleTiktok2.svg"
import purpleInsta2 from "@/assets/competition/purpleInsta2.svg"
import purpleScLine2 from "@/assets/competition/purpleSCLine2.svg"

type Contest = {
  icon : any
  homeCaption : string
  title : string
  theme : string
  leftVector : any
  rightVector : any
  aboutCaption : string
  aboutImage : any
  timeline : any
  extraBox? : boolean
  overviewDesc : string
  overviewImage : any
  point? : boolean
  participant : string
  prize : string
}

const gameDev: Contest = {
  icon : GameDevIcon,
  homeCaption : "Expand your creativity, bring us to the other world of yours!",
  title : "GAME DEVELOPMENT",
  theme : "orange",
  leftVector : OrangeLeftDecor,
  rightVector : OrangeRightDecor,
  aboutCaption : "Game Competition adalah cabang perlombaan dari event MAGE X  dimana peserta akan berkompetisi dalam pembuatan video game.",
  aboutImage : Placeholder,
  timeline : [
    ["20 mei - 4 oktober 2024","PENDAFTARAN DAN PENGUMPULAN PROPOSAL",keypad],
    ["7 oktober 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
    ["8 Oktober - 9 november 2024","Pengumpulan Tahap Seleksi Karya",timepen],
    ["11 november 2024","PengUMUman Tahap Seleksi Karya",announce],
    ["12 november 2024","TECHNICAL MEETING FINAL",techmeet]
  ],
  extraBox : true,
  overviewDesc : "Peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Tema dari perlombaan App Dev ini yaitu:",
  overviewImage : Placeholder2,
  point : true,
  participant : "1 - 3 Orang",
  prize : "5 jt ++ dan e-certif"
}

const appDev: Contest = {
  icon : AppDevIcon,
  homeCaption : "Show off your skill as an application developer, explore widely with us!",
  title : "APP DEVELOPMENT",
  theme : "orange",
  leftVector : OrangeLeftDecor,
  rightVector : OrangeRightDecor,
  aboutCaption : "Application Competition adalah cabang dari salah satu perlombaan MAGE X yang dimana peserta akan berlomba-lomba untuk membuat suatu aplikasi. Peserta akan ditantang untuk membuat aplikasi yang memiliki dapat membantu pekerjaan atau bisa menyelesaikan suatu permasalahan yang ada disekitar.",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei - 4 Oktober 2024","PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
    ["7 Oktober 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
    ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024","Pengumuman Tahap Seleksi Karya",announce],
    ["12 November 2024","TECHNICAL MEETING FINAL", techmeet]
  ],
  extraBox : true,
  overviewDesc : "Pada tahap pertama, peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Untuk tema dari perlombaan IoT adalah:",
  overviewImage : Placeholder2,
  point : true,
  participant : "1 - 3 Orang",
  prize : "3 jt ++ dan e-certif"
}

const robotic: Contest = {
  icon : RoboticIcon,
  homeCaption : "Show off your robots, we’re calling all the best robots team out there!",
  title : "ROBOTIK",
  theme : "orange",
  leftVector : OrangeLeftDecor,
  rightVector : OrangeRightDecor,
  aboutCaption : "Robotics adalah cabang perlombaan dari event MAGE X dimana peserta akan melakukan berkompetisi dibidang robot. Pada perlombaan ini, peserta ditantang untuk membuat robot yang dimana robot ini diharuskan untuk melewati beberapa tantangan yang ada.",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei 2024 - 5 November 2024","Pendaftaran",keypad],
    ["12 November 2024","Technical Meeting Perlombaan",announce],
    ["16 November 2024","Penyisihan Robotik Tahap 1",truck],
    ["Final Dan Exhibition","17 November 2024",robot]
  ],
  overviewDesc : "Robotics adalah cabang perlombaan dari event MAGE X dimana peserta akan melakukan berkompetisi dibidang robot. Pada perlombaan ini, peserta ditantang untuk membuat robot yang dimana robot ini diharuskan untuk melewati beberapa tantangan yang ada. Peserta dinilai dari robot yang dibuat untuk melewati setiap tantangan yang ada serta bisa mengalahkan peserta yang lain. Tujuan dari perlombaan ini yaitu untuk memperkenalkan teknik komputer itu sendiri yang dimana sangat relevan dengan hal robotik dan peserta lomba dapat mengasah skill dari bidang elektrikal, mekanik, dan programming. Perlombaan ini akan dilombakan secara langsung atau offline di Institut Teknologi Sepuluh Nopember.",
  overviewImage : Placeholder2,
  participant : "1 - 3 Orang",
  prize : "3 jt ++ dan e-certif"
}

const iot: Contest = {
  icon : IotIcon,
  homeCaption : "Show off your skill as an application developer, explore widely with us!",
  title : "INTERNET OF THINGS",
  theme : "orange",
  leftVector : OrangeLeftDecor,
  rightVector : OrangeRightDecor,
  aboutCaption : "Internet of Things adalah cabang perlombaan dari event MAGE X dimana peserta akan dituntut dalam membuat perangkat berbasis IoT sekreatif mungkin. Dari perlombaan ini, peserta diharapkan bisa membuat perangkat IoT yang memiliki fungsi dalam membantu menyelesaikan suatu permasalahan dan perangkat IoT ini sesuai dengan tema yang diberikan.",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei - 4 Oktober 2024","PENDAFTARAN DAN PENGUMPULAN PROPOSAL",keypad],
    ["7 Oktober 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
    ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya",timepen],
    ["11 November 2024","PengUMUman Tahap Seleksi Karya",announce],
    ["12 November 2024","TECHNICAL MEETING FINAL",techmeet]
  ],
  extraBox : true,
  overviewDesc : "Pada tahap pertama, peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Untuk tema dari perlombaan IoT adalah:",
  overviewImage : Placeholder2,
  point : true,
  participant : "1 - 3 Orang",
  prize : "3 jt ++ dan e-certif"
}

const eSport: Contest = {
  icon : EsportIcon,
  homeCaption : "Show off your skill as a gamer, explore widely with us!",
  title : "E-SPORT COMPETITION",
  theme : "purple",
  leftVector : PurpleLeftDecor,
  rightVector : PurpleRightDecor,
  aboutCaption : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vulputate enim. Mauris viverra semper lectus, vel porta ante luctus in. Praesent eget faucibus lectus. ",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei 2024 - 5 November 2024","PENDAFTARAN", keypad],
    ["12 November 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
    ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024","PengUMUman Tahap Seleksi Karya",announce],
    ["12 November 2024","TECHNICAL MEETING FINAL", techmeet]
  ],
  extraBox : true,
  overviewDesc : "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage : Placeholder2,
  participant : "5 Orang/tim",
  prize : "2 jt++ dan e-certif"
}

const uiUx: Contest = {
  icon : UiUxIcon,
  homeCaption : "Show off your skill as an application developer, explore widely with us!",
  title : "UIUX",
  theme : "purple",
  leftVector : PurpleLeftDecor,
  rightVector : PurpleRightDecor,
  aboutCaption : "UI/UX adalah cabang perlombaan dari event MAGE X dimana peserta akan berkompetisi dalam mendesain UI/UX tentang pembuatan aplikasi dan web.",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei 2024 - 5 November 2024","Pendaftaran",keypad],
    ["12 November 2024","Technical Meeting Perlombaan",announce],
    ["16 November 2024","Penyisihan Robotik Tahap 1",truck],
    ["17 November 2024","FINAL DAN EXHIBITION",robot]
  ],
  overviewDesc : "Pada perlombaan ini, peserta lomba akan dituntut untuk berkompetisi dalam pembuatan desain tentang tampilan web dan aplikasi yang dapat berfungsi dengan baik dan memiliki kemudahan akses dari sudut pengguna serta memiliki desain gambar yang menarik. Kriteria penilaian dari perlombaan ini yaitu dari fungsi, kemudahan akses serta desain gambar yang menarik.",
  overviewImage : Placeholder2,
  participant : "5 Orang/tim",
  prize : "2 jt++ dan e-certif"
}

const competitiveProgramming : Contest = {
  icon : CpIcon,
  homeCaption : "Show off your skill as an application developer, explore widely with us!",
  title : "COMPETITIVE PROGRAMMING",
  theme : "purple",
  leftVector : PurpleLeftDecor,
  rightVector : PurpleRightDecor,
  aboutCaption : "Competitive Programming adalah cabang perlombaan dari event MAGE X dimana peserta akan bersaing satu sama lain untuk menyelesaikan soal-soal logika dan pemrograman dalam waktu yang terbatas.",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei 2024 - 5 November 2024","Pendaftaran",keypad],
    ["12 November 2024","Technical Meeting Perlombaan",announce],
    ["16 November 2024","Penyisihan Robotik Tahap 1",truck],
    ["Final Dan Exhibition","17 November 2024",robot]
  ],
  overviewDesc : "Peserta akan ditantang untuk memberikan program serta algoritma terbaik mereka dalam menyelesaikan masalah yang diberikan. Perlombaan ini dilaksanakan secara online sepenuhnya di platform Kaggle yang terdiri  dua babak yaitu penyisihan dan final. Tujuan dilaksanakannya kompetisi ini adalah untuk memperkenalkan bagaimana Departemen Teknik Komputer ITS akan banyak berkutat terkait pemecahan masalah melalui pemrograman.",
  overviewImage : Placeholder2,
  participant : "5 Orang/tim",
  prize : "2 jt++ dan e-certif"
}

const currentContest = () =>{
  const currentRoute = window.location.pathname.split('/')[1];
    if(currentRoute == "game_development"){
      return gameDev
    }
    else if(currentRoute == "app_development"){
      return appDev
    }
    else if(currentRoute == "robotic"){
      return robotic
    }
    else if(currentRoute == "iot"){
      return iot
    }
    else if(currentRoute == "esport"){
      return eSport
    }
    else if(currentRoute == "ui_ux"){
      return uiUx
    }
    else if(currentRoute == "competitive_programming"){
      return competitiveProgramming
    }
}

const x = currentContest()
const existPoint = x?.point === true
const existExtraBox = x?.extraBox === true

const Home: React.FC = () =>{
  return (
    <>
      <div className="w-full h-full">
        <div className="absolute top-[105px] w-full h-[564px]">
          <div className={cn(
            "absolute top-0 left-0 desktop:w-[582px] desktop:h-[534px] desktop:ml-[-20px] desktop:mt-0 mobile:w-[500px] mobile:h-[200px] mobile:ml-[-220px] mobile:mt-[45px] ipad:mt-0",
            {"w-[520px] h-[534px] ml-[-15px]" : x?.theme == "purple"},
            )}>
              <img
                src={x?.leftVector}
                alt="left"
                className={cn(
                  "desktop:w-[582px] desktop:h-[534px] mobile:w-[500px] mobile:h-[200px] ipad:w-[582px] ipad:h-[534px]",
                  {"mix-blend-plus-darker" : x?.theme == "orange"},
                  {"mix-blend-hard-light opacity-1" : x?.theme == "purple"},
                 )}
              ></img>
          </div>

          <div className="absolute top-0 right-0 desktop:w-[582px] desktop:h-[534px] desktop:mr-0 desktop:mt-0 mobile:w-[500px] mobile:h-[200px] mobile:mr-[-220px] mobile:mt-[45px] ipad:mt-0">
            <img
              src={x?.rightVector}
              alt="Right"
              className={cn(
                "desktop:w-[582px] desktop:h-[534px] mobile:w-[500px] mobile:h-[200px] ipad:w-[582px] ipad:h-[534px]",
                {"mix-blend-plus-darker" : x?.theme == "orange"},
                {"mix-blend-hard-light opacity-1" : x?.theme == "purple"},
              )}>
            </img>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="desktop:mt-[75px] mobile:mt-[108px]">
            <img
              src={x?.icon}
              alt="homeicon"
              className={cn(
                "desktop:w-[320px] desktop:h-[200px] mobile:w-[160px] mobile:h-[140px] mx-auto drop-shadow-glow-white-2",
                {"desktop:w-[385px] mobile:w-[225px] mobile:h-[128px]" : x?.title == "COMPETITIVE PROGRAMMING"},
                {"" : x?.title == "APP DEVELOPMENT" || "E-SPORT COMPETITION"}
                )}>
            </img>

            <div className={cn(
              "relative mt-[21px] text-center mobile:mt-[37px]",
              {"mobile:px-[4px]" : x?.title == "INTERNET OF THINGS"}
              )}>
              <Title theme={x?.theme}>{x?.title}</Title>
            </div>

            <div className="relative text-center mt-[20px]">
              <p className={cn(
                "desktop:w-[401px] desktop:mt-1 desktop:mx-auto font-roboto text-[16px] font-semibold leading-6 mobile:w-[260px] mobile:mt-[8px] mobile:mx-auto",
                {"text-orange-pressed-3": x?.theme == "orange"},
                {"text-light": x?.theme == "purple"}
              )}>
                {x?.homeCaption}
              </p>
            </div>

            <div className="flex mt-[25px] gap-[10px] place-content-center">
              <div className="z-10">
                <CButton theme={x?.theme}>
                  Guide Book
                </CButton>
              </div>
              <div className="z-10">
                <CButton theme={x?.theme}>
                  Log In
                </CButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const About: React.FC = () =>{
  return(
    <>
      <div className="desktop:w-fit desktop:h-[610px] desktop:ml-[180px] desktop:mr-0 desktop:flex ipad:flex desktop:gap-[35px] ipad:gap-[22px] mobile:grid mobile:h-fit mobile:ml-auto mobile:mr-auto ipad:ml-auto ipad:mx-auto">
          <div className="desktop:w-fit desktop:h-fit desktop:grid mobile:grid desktop:gap-0 mobile:gap-[25px] desktop:mt-[60px]">
            <div className={cn(
              "desktop:w-[200px] desktop:h-fit desktop:ml-[30px]",
              "mobile:w-[100px] mobile:h-[57px]",
              "ipad:w-[180px] ipad:h-[100px]",
              {"desktop:w-[200px]": x?.title=="UIUX"},
              {"desktop:w-[335px]":x?.title == "COMPETITIVE PROGRAMMING"}
              )}>
              <img
                src={x?.icon}
                alt="homeicon"
                className="drop-shadow-glow-white-1">
              </img>
            </div>

            <div className="relative desktop:h-fit desktop:w-[480px] desktop:my-[12px] mobile:mt-[40px] mobile:w-[300px] ipad:mt-[80px]">
              <Title theme={x?.theme}>
                {x?.title}
              </Title>
            </div>

            <div className="desktop:hidden ipad:hidden mobile:block w-[300px]">
              <img src={x?.aboutImage}
                alt={x?.title}
                className="w-full h-full rounded-[20px]"></img>
            </div>

            <div className="relative mt-0">
              <p className={cn(
                "desktop:w-[365px] mobile:w-[300px] mobile:text-justify font-roboto text-[14px] font-semibold leading-6",
                {"text-orange-pressed-3": x?.theme == "orange"},
                {"text-light": x?.theme == "purple"}
              )}>
                {x?.aboutCaption} 
              </p>

              <div className="mt-[22px] flex gap-[29px]">
                <div className="z-10">
                  <CButton theme={x?.theme}>
                    Guide Book
                  </CButton>
                </div>

                <div className="z-10">
                  <CButton theme={x?.theme}>
                    Log In
                  </CButton>
                </div>
              </div>
            </div>
          </div>
          <div className="desktop:w-[545px] desktop:h-[382px] ipad:w-[260px] ipad:h-[180px] desktop:mt-[60px] ipad:mt-auto dekstop:mb-0 ipad:mb-auto ipad:mt-0 rounded-[20px] z-10 mobile:hidden desktop:block ipad:block">
            <img src={x?.aboutImage}
              alt={x?.title}
              className="w-full h-full rounded-[20px]"></img>
          </div>
      </div>
    </>
  )
}

const Timeline: React.FC = () =>{
    return(
        <>
          <div className="grid desktop:w-full ipad:w-[610px] desktop:h-fit mobile:w-fit desktop:gap-0 ipad:gap-0 mobile:gap-[100px] desktop:mr-auto desktop:ml-0 ipad:ml-auto ipad:mr-auto mobile:mr-auto mobile:ml-auto desktop:pl-0 mobile:pl-10 ipad:pl-0">
            <div className="w-fit mt-4 desktop:ml-0 desktop:mr-0 mobile:ml-auto mobile:mr-auto ipad:ml-0">
              <Timebox 
                date={x?.timeline[0][0]}
                event={x?.timeline[0][1]}
                img={x?.timeline[0][2]}
                side="left"
                theme={x?.theme}
              ></Timebox>
            </div>

            <div className="w-fit flex flex-nowrap desktop:gap-4 ipad:gap-2 desktop:mt-[21px] ipad:mt-[21px]">
              <img 
                src={ToRight}
                alt="line"
                className="desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-[252px] ipad:ml-[130px]"
              ></img>
              <div className="desktop:mt-[22px] ipad:mt-[24px]">
                <Timebox 
                  date={x?.timeline[1][0]}
                  event={x?.timeline[1][1]}
                  img={x?.timeline[1][2]}
                  side="right"
                  theme={x?.theme}
                ></Timebox>
              </div>
            </div>

            <div className="w-fit flex flex-nowrap gap-4 desktop:mt-[21px] ipad:mt-[21px]">
              <div className="desktop:mt-[22px] ipad:mt-[24px]">
                <Timebox 
                  date={x?.timeline[2][0]}
                  event={x?.timeline[2][1]}
                  img={x?.timeline[2][2]}
                  side="left"
                  theme={x?.theme}
                ></Timebox>
              </div>
              <img 
                src={ToLeft}
                alt="line"
                className="desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-0 ipad:ml-[144px]"
              ></img>
            </div>

            <div className="w-fit flex flex-nowrap gap-4 desktop:mt-[21px] ipad:mt-[21px]">
              <img 
                src={ToRight}
                alt="line"
                className="desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-[252px] ipad:ml-[130px]"
              ></img>
              <div className="desktop:mt-[22px] ipad:mt-[24px]">
                <Timebox 
                  date={x?.timeline[3][0]}
                  event={x?.timeline[3][1]}
                  img={x?.timeline[3][2]}
                  side="right"
                  theme={x?.theme}
                ></Timebox>
              </div>
            </div>

            {existExtraBox ? (
              <div className="w-fit flex flex-nowrap gap-4 desktop:mt-[21px] ipad:mt-[21px]">
                <div className="desktop:mt-[22px] ipad:mt-[24px]">
                  <Timebox 
                    date={x?.timeline[4][0]}
                    event={x?.timeline[4][1]}
                    img={x?.timeline[4][2]}
                    side="left"
                    theme={x?.theme}
                  ></Timebox>
                </div>
                <img 
                  src={ToLeft}
                  alt="line"
                  className="desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-0 ipad:ml-[144px]"
                ></img>
              </div>
            ):(
              null
            )}
          </div>
        </>
    )
}

const Overview: React.FC = () =>{
  const isOrange = x?.theme === "orange"

    return(
        <>
        <div className={cn(
          "relative desktop:w-fit desktop:h-fit mobile:w-[300px] ipad:w-fit ipad:h-fit mobile:h-fit border-[3px] rounded-[30px] mx-auto desktop:mt-0 desktop:ml-[80px] desktop:mb-0 mobile:mb-10",
          {"bg-skin-grad border-[#FD874E]": x?.theme == "orange"},
          {"bg-[#493187] border-[#C8BDE6]": x?.theme == "purple"}
          )}>
          <div className="desktop:flex mobile:grid ipad:flex desktop:gap-0 mobile:gap-0 ipad:gap-5">
            <div className={cn(
              "desktop:w-[731px]  mobile:w-[268px] desktop:h-[55px] mobile:h-[105px] desktop:p-0 mobile:p-1 mt-[25px] desktop:ml-[28px] mobile:ml-[14px] rounded-[20px] text-center",
              {"bg-gradient-to-b from-[#FFA567] to-[#F1798A]" : x?.theme == "orange"},
              {"bg-[#C8BDE6]" : x?.theme == "purple"},
              {"desktop:pt-[5px]" : x?.title =="COMPETITIVE PROGRAMMING"}
              )}>
                <Title theme={x?.theme}>{x?.title}</Title>
            </div>
            <div className={cn(
              "desktop:w-[292px] mobile:w-[268px] h-[55px] rounded-[20px] desktop:ml-[29px] mobile:ml-[14px] mt-[25px] cursor-pointer flex hover:scale-[1.05] ease-in duration-300",
              {"bg-orange-primary-3" : x?.theme == "orange"},
              {"bg-[#5B2CD3]" : x?.theme == "purple"}
              )}>
                <div className="ml-[18px] flex mt-[12px] gap-3">
                  <div className="w-[30px] h-[30px] bg-light rounded-full">
                    {isOrange?(
                      <img src={orangeSUB} className="p-[5px]"></img>
                    ):(
                      <img src={purpleSUB} className="p-[5px]"></img>
                    )}
                  </div>
                  <p className="text-light text-[14px] mt-[4px] font-bold">Daftar disini!</p>
                </div>
            </div>
          </div>

          <div className="desktop:flex ipad:flex mobile:grid mt-5 desktop:ml-[28px] mobile:ml-[15px] mr-[34px] mt-[25px] gap-[38px]">
            <div className="desktop:w-[621px] mobile:w-[265px] ipad:[300px] desktop:h-[386px] mobile:h-[205px] ipad:h-[386px] desktop:ml-[28px]">
              <img 
              src={x?.overviewImage}
              alt={x?.title}
              className="w-full h-full rounded-[15px]"></img>
            </div>
            <div className="desktop:w-[350px] mobile:w-[265px] desktop:h-[362px] mobile:h-fit">
              <p className={cn(
                "text-justify font-roboto text-[11px] font-medium",
                {"font-fredoka text-light":x?.theme=="purple"}
              )}>
                {x?.overviewDesc}
                {existPoint ? (
                  <ul className="list-disc pl-6 space-y-[1px]">
                  <li>Kesehatan</li>
                  <li>Ekonomi</li>
                  <li>Edukasi</li>
                  <li>Transportasi</li>
                  <li>Pelayanan Publik</li>
                  <li>Keamanan</li>
                </ul>
                ):(
                  null
                )}
              </p>

              <div className={cn(
                "desktop:flex desktop:gap-0 mobile:gap-0 ipad:gap-6 ipad:flex mobile:grid desktop:ml-0 desktop:mt-[30px] mobile:ml-[15px]",
                {"desktop:mt-[15px] ipad:mt-[15px]":x?.point == true}
                )}>
                <div className="desktop:ml-0 mobile:ml-0 ipad:ml-[-34px]">
                  {/* POOLPRIZE */}
                  <div className={cn(
                    "desktop:absolute mobile:relative desktop:pt-0 mobile:pt-[3px] w-[171px] h-[88px] bg-orange-primary-2 desktop:mt-0 mobile:mt-[32px] rounded",
                    {"bg-[#F9E3FD]" : x?.theme == "purple"}
                  )}>
                    <div className={cn(
                      "absolute top-0 left-0 w-[121px] h-[18px] mt-[-5px] bg-gradient-to-l from-[#FFA567] to-[#FE874F] rounded",
                      {"bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]": x?.theme == "purple"}
                    )}>
                      <p className={cn(
                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                        {"text-light":x?.theme=="purple"}
                      )}>
                        Poolprize
                      </p>
                      <div className={cn(
                        "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] p-[1px] bg-light rounded-full border-[#FE874F] border-[2px]",
                        {"border-[#3A0D49]":x?.theme=="purple"}
                      )}>
                        {isOrange?(
                          <img
                          src={prizeIconOrange} className="p-[3px]">
                          </img>
                        ):(
                          <img 
                          src={prizeIconPurple} className="p-[3px]">
                          </img>
                        )}
                      </div>
                    </div>
                    <div className="relative w-[172px] mt-[13px] ml-[10px] text-[8px] font-fredoka font-medium">
                        <p>Phase 1</p>
                      <p className="indent-1">SMA/SMK/sederajat : Rp100.000,00</p>
                      <p className="indent-1">Mahasiswa : Rp125.000,00</p>
                      <p>Phase 2</p>
                      <p className="indent-1">SMA/SMK/sederajat : Rp125.000,00</p>
                    </div>
                  </div>

                  {/* KATEGORI */}
                  <div className={cn(
                    "desktop:absolute mobile:relative dekstop:pt-0 mobile:pt-[3px] w-[171px] h-[36px] bg-orange-primary-2 desktop:mt-[115px] mobile:mt-[32px] rounded",
                    {"bg-[#F9E3FD]" : x?.theme == "purple"}
                  )}>
                    <div className={cn(
                      "absolute top-0 left-0 w-[121px] h-[18px] mt-[-5px] bg-gradient-to-l from-[#FFA567] to-[#FE874F] rounded",
                      {"bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]": x?.theme == "purple"}
                    )}>
                      <p className={cn(
                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                        {"text-light":x?.theme=="purple"}
                      )}>Kategori</p>
                      <div className={cn(
                        "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                        {"border-[#3A0D49]":x?.theme=="purple"}
                      )}>
                        {isOrange?(
                          <img src={categoryIconOrange} className="pl-[1px]"></img>
                        ):(
                          <img src={categoryIconPurple} className="pl-[1px]"></img>
                        )}
                      </div>
                    </div>
                    <div className="w-[172px] mt-[13px] ml-[10px] text-[9px] font-fredoka font-medium">
                      <p>SMA/SMK/sederajat dan Mahasiswa</p>
                    </div>
                  </div>

                  {/* PESERTA */}
                  <div className={cn(
                    "desktop:absolute mobile:relative desktop:pt-0 mobile:py-[1px] w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] desktop:mt-[172px] mobile:mt-[32px] rounded",
                    {"bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]": x?.theme == "purple"}
                  )}>
                    <p className={cn(
                      "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                      {"text-light":x?.theme=="purple"}
                    )}>{x?.participant}</p>
                    <div className={cn(
                       "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px] content-center",
                       {"border-[#3A0D49]":x?.theme=="purple"}
                    )}>
                      {isOrange?(
                        <img src={participantIconOrange} className=""></img>
                      ):(
                        <img src={participantIconPurple} className="mx-auto pt-[6px]"></img>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className={cn(
                     "desktop:absolute mobile:relative w-[126px] h-[112px] desktop:mt-0 mobile:mt-[32px] desktop:ml-[221px] mobile:ml-0 bg-orange-primary-2 rounded",
                     {"bg-[#F9E3FD]" : x?.theme == "purple"}
                  )}>
                    <div className={cn(
                      "absolute top-0 left-0 w-[117px] h-[18px] mt-[-5px] bg-gradient-to-l from-[#FFA567] to-[#FE874F] rounded",
                      {"bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]": x?.theme == "purple"}
                    )}>
                      <p className={cn(
                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                        {"text-light":x?.theme=="purple"}
                      )}>Contact Person</p>
                    </div>
                    <div className={cn(
                       "absolute w-[23px] h-[23px] top-0 left-0 mt-[-7px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                       {"border-[#3A0D49]":x?.theme=="purple"}
                    )}>
                      {isOrange?(
                        <img src={contactIconOrange} className="p-[4px]"></img>
                      ):(
                        <img src={contactIconPurple} className="p-[4px]"></img>
                      )}
                    </div>
                    <div className={cn(
                      "p-[16px] text-[9px] font-fredoka font-medium gap-[7px]"
                    )}>
                      <div>
                        <p>Hasan</p>
                        <p>085394410418 (WA)</p>
                      </div>
                                        
                      <div className="mt-[4px]">
                        <p>Gilang</p>
                        <p >081390294320 (WA)</p>
                      </div>
                            
                      <div className="mt-[4px]">
                        <p>Christ</p>
                        <p>085815046162 (WA)</p>
                      </div>
                    </div>
                  </div>

                  <div className={cn(
                    "desktop:absolute mobile:relative desktop:pt-0 mobile:pt-[1px] w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] desktop:mt-[130px] mobile:mt-[32px] desktop:ml-[221px] mobile:ml-0 rounded",
                    {"bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]": x?.theme == "purple"}
                  )}>
                    <p className={cn(
                      "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                      {"text-light":x?.theme=="purple"}
                    )}>{x?.prize}</p>
                    <div className={cn(
                      "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                      {"border-[#3A0D49]":x?.theme=="purple"}
                    )}>
                      {isOrange?(
                        <img src={medalIconOrange} className="pr-[6px] ml-[3px] py-[2px]"></img>
                      ):(
                        <img src={medalIconPurple} className="pr-[6px] ml-[3px] py-[2px]"></img>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            "desktop:w-[1045px] desktop:h-[60px] ipad:w-[578px] ipad:h-[60px] ipad:mr-[27px] ipad:mb-[30px] desktop:mb-[30px] mobile:w-[268px] p-[2px] desktop:ml-[27px] ipad:ml-[27px] mobile:ml-[14px] mt-[25px] desktop:mb-0 mobile:mb-[36px] rounded-[20px] border-[2px] border-[#FD874E] bg-orange-primary-5",
            {"bg-[#C8BDE6] border-[#9888C3]":x?.theme=="purple"},
            {"desktop:mt-[70px] desktop:mb-[25px]":existPoint==true},
            {"desktop:mb-[25px]":existPoint==false},
          )}>
            <div className="desktop:w-[188px] desktop:h-[30px] desktop:mt-[12px] ipad:mt-[12px] desktop:ml-[461px] ipad:ml-[230px] mobile:ml-[57px] desktop:gap-[12px] mobile:gap-[8px] ipad:gap-[8px] flex">
              {isOrange?(
                <div className="desktop:w-[30px] mobile:w-[17px] desktop:h-[30px] mobile:h-[17px] rounded-full bg-gradient-to-b from-[#E14CB3] to-[#7B2A62] content-center cursor-pointer desktop:mt-0 mobile:mt-[6px]">
                  <div className="desktop:w-[27px] desktop:h-[27px] mobile:w-[14px] mobile:h-[14px] mx-auto my-auto rounded-full bg-[#FFE1C9] hover:bg-light/10 transition-colors ease-in duration-300"></div>
                </div>
              ):(
                <div className="desktop:w-[30px] mobile:w-[17px] desktop:h-[30px] mobile:h-[17px] rounded-full bg-gradient-to-b from-[#E24BB3] to-[#FB8A4A] content-center cursor-pointer desktop:mt-0 mobile:mt-[6px]">
                  <div className="desktop:w-[27px] desktop:h-[27px] mobile:w-[14px] mobile:h-[14px] mx-auto my-auto rounded-full bg-[#C8BDE6] hover:bg-light/10 transition-colors ease-in duration-300"></div>
                </div>
              )}
              <p className={cn(
                "text-justify font-airstrike text-[20px] font-normal text-mage-orange",
                {"text-[#3A0D49]":x?.theme=="purple"}
                )}>GUIDEBOOK</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default function Competition(){
  const pages: React.FC[] = [About,Timeline,Overview]
  const [currentIndex, setCurrentIndex] = useState(0)
  const isOrange = x?.theme === "orange"
  const slideWidth = 125

  const prevPage = () => {
    const newIndex = currentIndex + slideWidth
    setCurrentIndex(newIndex)
  }

  const nextPage = () => {
    const newIndex = currentIndex - slideWidth
    setCurrentIndex(newIndex)
  }

  const aboutShortcut = () => {
    setCurrentIndex(0)
  }

  const timelineShortcut = () => {
    setCurrentIndex(-slideWidth*1)
  }

  const overviewShortcut = () => {
    setCurrentIndex(-slideWidth*2)
  }

  useEffect(() => {
    if (currentIndex == -slideWidth*3){
      setCurrentIndex(0)
    }
  },[currentIndex])

  useEffect(() => {
    if (currentIndex == slideWidth){
      setCurrentIndex(-slideWidth*2)
    }
  },[currentIndex])

  return(
    <>
      <main className={cn(
        "w-full h-full relative overflow-hidden",
        {"bg-orange-grad-4":x?.theme == "orange"},
        {"bg-purple-grad-4":x?.theme=="purple"}
      )}>
        <Navbar theme={x?.theme}/>
        <Home/>

        <AnimatePresence>
          <motion.div 
            className="w-full h-full z-10 mt-[200px] desktop:flex desktop:flex-nowrap desktop:gap-[760px] mobile:grid mobile:gap-[130px] "
            initial={{x: 0}}
            animate={{x:`${currentIndex}%` }}
            transition={{
              type: "tween",
              duration: 0.5, 
              ease: "easeOut"
            }}>
              {React.createElement(pages[0])}
              {React.createElement(pages[1])}
              {React.createElement(pages[2])}
          </motion.div>
        </AnimatePresence>

        {isOrange?(
              <div className="desktop:block mobile:hidden">
                <img 
                  src={NextArrow}
                  alt="Next Page"
                  className="absolute top-[1050px] right-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={nextPage}></img>
                <img 
                  src={PrevArrow}
                  alt="Previous Page"
                  className="absolute top-[1050px] left-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={prevPage}></img>
              </div>
            ):(
            <div className="desktop:block mobile:hidden">
              <img 
                src={NextArrow2}
                alt="Next Page"
                className="absolute top-[1050px] right-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                onClick={nextPage}></img>
              <img 
                src={PrevArrow2}
                alt="Previous Page"
                className="absolute top-[1050px] left-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                onClick={prevPage}></img>
            </div>
            )}

        <div className={cn(
          "z-0 desktop:mt-0 mobile:mt-0 desktop:block mobile:hidden",
          {"mt-0":x?.theme=="orange"}
          )}>
          <div className={cn(
            "w-full h-full relative",
            {"z-0" : x?.theme == "orange"},
            {"z-0" : x?.theme == "purple"}
            )}>
              <div className="desktop:block mobile:hidden">
                <Wave theme={x?.theme}></Wave>
              </div>
            <div className={cn(
              "absolute w-full desktop:top-0 desktop:left-0 mobile:bottom-0 mobile:right-0",
              {"desktop:mt-[185px] desktop:mx-auto mobile:mb-[6px] mobile:mr-0":x?.theme=="orange"},
              {"desktop:mt-[245px] desktop:mx-auto mobile:mb-[6px] mobile:mr-0":x?.theme=="purple"},
            )}>
              <div className="desktop:absolute desktop:bottom-5 desktop:w-full mobile:w-[300px] mx-auto flex justify-between items-center px-[79px]">
                <div className="flex items-center gap-[24px] z-30">
                  <div className="cursor-not-allowed desktop:block mobile:hidden">
                    {isOrange?(
                      <img src={pc2} alt="PC"/>
                    ):(
                      <img src={purplePC2} alt="PC"/>
                    )}
                  </div>

                  <div
                    onClick={aboutShortcut}
                    className={cn(
                      "desktop:block mobile:hidden w-[36px] h-[36px] rounded-full p-[8px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      {"bg-orange-primary-5" : x?.theme == "orange"},
                      {"bg-[#F9E3FD]" : x?.theme == "purple"}
                    )}>
                      {isOrange?(
                        <img src={pen2} alt="About Us"/>
                      ):(
                        <img src={purplePen2} alt="About Us"/>
                      )}
                  </div>

                  <div
                    onClick={timelineShortcut}
                    className={cn(
                      "desktop:block mobile:hidden w-[36px] h-[36px] rounded-full px-[4px] py-[10px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      {"bg-orange-primary-5" : x?.theme == "orange"},
                      {"bg-[#F9E3FD]" : x?.theme == "purple"}
                    )}>
                    {isOrange?(
                      <img src={time2} alt="Timeline"/>
                    ):(
                      <img src={purpleTime2} alt="Timeline"/>
                    )}
                  </div>

                  <div
                    onClick={overviewShortcut}
                    className={cn(
                      "desktop:block mobile:hidden w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[8px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      {"bg-orange-primary-5" : x?.theme == "orange"},
                      {"bg-[#F9E3FD]" : x?.theme == "purple"}
                    )}>
                      {isOrange?(
                        <img src={view2} alt="Overview"/>
                      ):(
                        <img src={purpleView2} alt="Overview"/>
                      )}
                  </div>
                </div>

                <div className="flex items-center desktop:gap-[24px] mobile:gap-[70px]">
                  <div className="cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300">
                    <a href="mailto:mage.ce.its@gmail.com" target="_blank" rel="noopener noreferrer">
                    {isOrange?(
                      <img src={mail2} className="desktop:w-[36px] desktop:h-[36px] mobile:w-[24px] mobile:h-[24px]"alt="Email"/>
                    ):(
                      <img src={purpleMail2} className="desktop:w-[36px] desktop:h-[36px] mobile:w-[24px] mobile:h-[24px]" alt="Email"/>
                    )}
                    </a>
                  </div>

                  <div className={cn(
                    "desktop:w-[36px] desktop:h-[36px] mobile:w-[24px] mobile:h-[24px] rounded-full bg-orange-primary-5 p-[6px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                    {"bg-orange-primary-5" : x?.theme == "orange"},
                    {"bg-[#F9E3FD]" : x?.theme == "purple"}
                    )}>
                      <a href="https://www.tiktok.com/@magex_its" target="_blank" rel="noopener noreferrer">
                      {isOrange?(
                        <img src={tiktok} className="desktop:px-[3px] desktop:py-[3px]" alt="TikTok"/>
                      ):(
                        <img src={purpleTiktok2} className="desktop:px-[3px] desktop:py-[3px]" alt="TikTok"/>
                      )}
                      </a>
                  </div>

                  <div className={cn(
                    "desktop:w-[36px] desktop:h-[36px] mobile:w-[24px] mobile:h-[24px] rounded-full bg-orange-primary-5 p-[6px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                    {"bg-orange-primary-5" : x?.theme == "orange"},
                    {"bg-[#F9E3FD]" : x?.theme == "purple"}
                  )}>
                    <a href="https://www.instagram.com/mage_its" target="_blank" rel="noopener noreferrer">
                    {isOrange?(
                      <img src={instagram} className="desktop:px-[3px] desktop:py-[3px]" alt="Instagram"/>
                    ):(
                      <img src={purpleInsta2} className="desktop:mx-[3px] desktop:my-[3px]" alt="Instagram"/>
                    )}
                    </a>
                  </div>

                  <div className="cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px]  ease-out duration-300">
                    {isOrange?(
                      <img src={scline2} className="desktop:w-[36px] desktop:h-[36px] mobile:w-[24px] mobile:h-[24px]" alt="Line"/>
                    ):(
                      <img src={purpleScLine2} className="desktop:w-[36px] desktop:h-[36px] mobile:w-[24px] mobile:h-[24px]" alt="Line"/>
                    )}
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
