import React from "react";
import { useState } from "react";
import cn from "@/utils/cn";
import { motion } from "framer-motion";

import Title from "@/components/CompetitionTitle";
import Navbar from "@/components/Navbar";
import NextArrow from "@/assets/competition/NextButton.svg"
import PrevArrow from "@/assets/competition/PrevButton.svg"
import NextArrow2 from "@/assets/competition/nextArrow2.svg"
import PrevArrow2 from "@/assets/competition/prevArrow2.svg"
import Wave from "@/components/Wave";
import CompFooter from "@/components/CompetitionFooter";
import CButton from "@/components/Button";
import Placeholder from "@/assets/img/picture1.png"
import Placeholder2 from "@/assets/img/picture2.png"

//HOME ASSET
import AppDevHomeicon from "@/assets/competition/homeicon.svg";
import EsportHomeIcon from "@/assets/competition/esport_largeIcon.svg"
import OrangeLeftDecor from "@/assets/competition/left.svg"
import OrangeRightDecor from "@/assets/competition/right.svg"
import PurpleLeftDecor from "@/assets/competition/purpleLeftVector.svg"
import PurpleRightDecor from "@/assets/competition/purpleRightVector.svg"

//ABOUT ASSET
import AppDevAboutIcon from "@/assets/competition/homeicon2.svg"
import EsportAboutIcon from "@/assets/competition/esport_smallicon.svg"

//TIMELINE ASSET
import Timebox from "@/components/Timebox";
import ToRight from "@/assets/competition/line2right.svg"
import ToLeft from "@/assets/competition/line2left.svg"
import keypad from "@/assets/competition/pad.svg"
import announce from "@/assets/competition/announce.svg"
import timepen from "@/assets/competition/bx_pen.svg"
import techmeet from "@/assets/competition/people.svg"

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

type Contest = {
  largeIcon : any
  homeCaption : string
  title : string
  theme : string
  leftVector : any
  rightVector : any
  smallIcon : any
  aboutCaption : string
  aboutImage : any
  timeline : any
  overviewDesc : string
  overviewImage : any
  point? : boolean
  participant : string
  prize : string
}

const appDev: Contest = {
  largeIcon : AppDevHomeicon,
  homeCaption : "Show off your skill as an application developer, explore widely with us!",
  title : "APP DEVELOPMENT",
  theme : "orange",
  leftVector : OrangeLeftDecor,
  rightVector : OrangeRightDecor,
  smallIcon : AppDevAboutIcon,
  aboutCaption : "Application Competition adalah cabang dari salah satu perlombaan MAGE X yang dimana peserta akan berlomba-lomba untuk membuat suatu aplikasi. Peserta akan ditantang untuk membuat aplikasi yang memiliki dapat membantu pekerjaan atau bisa menyelesaikan suatu permasalahan yang ada disekitar.",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei - 4 Oktober 2024","PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
    ["7 Oktober 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
    ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024","PengUMUman Tahap Seleksi Karya",announce],
    ["12 November 2024","TECHNICAL MEETING FINAL", techmeet]
  ],
  overviewDesc : "Pada tahap pertama, peserta akan diminta untuk mengirimkan rancangan dan desain karya yang akan mereka buat. Pada tahapan kedua, peserta akan mengirimkan karya berupa soft file atau video demo dari karya mereka. Pada tahapan ketiga atau tahap final, peserta akan memamerkan karya mereka dan akan melakukan presentasi di depan juri secara offline di Institut Teknologi Sepuluh Nopember. Untuk tema dari perlombaan IoT adalah:",
  overviewImage : Placeholder2,
  point : true,
  participant : "1 - 3 Orang",
  prize : "3 jt ++ dan e-certif"
}

const eSport: Contest = {
  largeIcon : EsportHomeIcon,
  homeCaption : "Show off your skill as a gamer, explore widely with us!",
  title : "E-SPORT COMPETITION",
  theme : "purple",
  leftVector : PurpleLeftDecor,
  rightVector : PurpleRightDecor,
  smallIcon : EsportAboutIcon,
  aboutCaption : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vulputate enim. Mauris viverra semper lectus, vel porta ante luctus in. Praesent eget faucibus lectus. ",
  aboutImage : Placeholder,
  timeline : [
    ["20 Mei 2024 - 5 November 2024","PENDAFTARAN", keypad],
    ["12 November 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
    ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024","PengUMUman Tahap Seleksi Karya",announce],
    ["12 November 2024","TECHNICAL MEETING FINAL", techmeet]
  ],
  overviewDesc : "Perlombaan ini terdiri dari 2 cabang yaitu adalah turnamen game Valorant dan Turnamen game Mobile legend. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Untuk memenangkan game ini peserta harus memiliki kerja sama tim dan mempunyai strategi yang efektif untuk mengalahkan peserta lainnya. Tujuan dari perlombaan ini yaitu menciptakan nilai kompeten dari peserta lomba dan meramaikan acara MAGE X ini.",
  overviewImage : Placeholder2,
  participant : "5 Orang/tim",
  prize : "2 jt++ dan e-certif"
}

const currentContest = () =>{
  const currentRoute = window.location.pathname.split('/')[1];
    if(currentRoute == "app_development"){
      return appDev
    }
    else if(currentRoute == "esport"){
      return eSport
    }
}

const x = currentContest()
const existPoint = x?.point === true

const Home: React.FC = () =>{
  return (
    <>
      <div className="w-full h-full">
        <div className="absolute top-[105px] w-full h-[564px]">
          <div className={cn(
            "absolute top-0 left-0 desktop:w-[582px] desktop:h-[534px] desktop:ml-[-20px] desktop:mt-0 mobile:w-[500px] mobile:h-[200px] mobile:ml-[-240px] mobile:mt-[45px]",
            {"w-[520px] h-[534px] ml-[-15px]" : x?.theme == "purple"},
            )}>
              <img
                src={x?.leftVector}
                alt="left"
                className={cn(
                  "desktop:w-[582px] desktop:h-[534px] mobile:w-[500px] mobile:h-[200px]",
                  {"mix-blend-plus-darker" : x?.theme == "orange"},
                  {"mix-blend-hard-light opacity-1" : x?.theme == "purple"},
                 )}
              ></img>
          </div>

          <div className="absolute top-0 right-0 desktop:w-[582px] desktop:h-[534px] desktop:mr-0 desktop:mt-0 mobile:w-[500px] mobile:h-[200px] mobile:mr-[-240px] mobile:mt-[45px]">
            <img
              src={x?.rightVector}
              alt="Right"
              className={cn(
                "desktop:w-[582px] desktop:h-[534px] mobile:w-[500px] mobile:h-[200px]",
                {"mix-blend-plus-darker" : x?.theme == "orange"},
                {"mix-blend-hard-light opacity-1" : x?.theme == "purple"},
              )}>
            </img>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="mt-[95px] relative">
            <img
              src={x?.largeIcon}
              alt="homeicon"
              className="desktop:w-[220px] desktop:h-[200px] 
              mobile:w-[180px] mobile:h-[160px] 
              mx-auto drop-shadow-glow-white-2
              hover:scale-[1.1] hover:-translate-y-4 transition-all ease-in duration-700">
            </img>

            <div className="relative mx-auto w-[500px] h-[50px] mt-[10px] mobile:mt-[40px] mobile:mx-auto mobile:w-full">
              <div className="relative w-full h-full">
                <Title theme={x?.theme}>{x?.title}</Title>
              </div>
            </div>

            <div className="text-center mt-[20px]">
              <p className={cn(
                "desktop:w-[401px] desktop:mt-1 desktop:mx-auto font-roboto text-[16px] font-semibold leading-6 mobile:w-[260px] mobile:mt-[8px]",
                {"text-orange-pressed-3": x?.theme == "orange"},
                {"text-light": x?.theme == "purple"}
              )}>
                {x?.homeCaption}
              </p>
            </div>

            <div className="flex mt-[25px] gap-[10px] place-content-center">
              <div>
                <CButton theme={x?.theme}>
                  Guide Book
                </CButton>
              </div>
              <div>
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
      <div className="w-fit h-[500px] ml-[180px] flex gap-[150px]">
          <div>
            <motion.img
              src={x?.smallIcon}
              alt="homeicon"
              className="drop-shadow-glow-white-1 mt-[60px] ml-[30px] ">
            </motion.img>

            <motion.div className="absolute top-[990px] left-[180px] w-fit h-fit"
            initial={{x:-200}}
            animate={{x:0}}>
              <div className="relative">
                <Title theme={x?.theme}>
                  {x?.title}
                </Title>
              </div>
            </motion.div>

            <div className="mt-[78px]">
              <p className={cn(
                "w-[365px] font-roboto text-[14px] font-semibold leading-6",
                {"text-orange-pressed-3": x?.theme == "orange"},
                {"text-light": x?.theme == "purple"}
              )}>
                {x?.aboutCaption} 
              </p>

              <div className="mt-[30px] flex gap-[29px]">
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
          <div className="w-[545px] h-[398px] mt-[60px] rounded-[20px] z-10">
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
          <div className="relative w-fit h-full flex z-10 gap-4 mt-[-35px]">
            <div className="z-10">
              <div className="mt-[15px] z-10">
                <Timebox 
                date={x?.timeline[0][0]}
                event={x?.timeline[0][1]}
                img={x?.timeline[0][2]}
                side="left"
                theme={x?.theme}
                ></Timebox>
              </div>

              <div className="w-[90px] mt-[35px] ml-[230px] z-10">
                <img 
                src={ToRight}
                alt="line"
                ></img>
              </div>

              <div className="mt-[60px] z-10">
                <Timebox 
                date={x?.timeline[2][0]}
                event={x?.timeline[2][1]}
                img={x?.timeline[2][2]}
                side="left"
                theme={x?.theme}
                ></Timebox>
              </div>

              <div className="w-[90px] mt-[35px] ml-[230px] z-10">
                <img 
                src={ToRight}
                alt="line"
                ></img>
              </div>

              <div className="mt-[65px] z-20">
                <Timebox 
                date={x?.timeline[4][0]}
                event={x?.timeline[4][1]}
                img={x?.timeline[4][2]}
                side="left"
                theme={x?.theme}
                ></Timebox>
              </div>
            </div>

            <div className="z-10">
              <div className="mt-[125px]">
                <Timebox 
                date={x?.timeline[1][0]}
                event={x?.timeline[1][1]}
                img={x?.timeline[1][2]}
                side="right"
                theme={x?.theme}
                ></Timebox>
              </div>

              <div className="w-[90px] mt-[35px] ml-[30px] z-10">
                <img 
                src={ToLeft}
                alt="line"
                ></img>
              </div>

              <div className="mt-[60px] z-10">
                <Timebox 
                date={x?.timeline[3][0]}
                event={x?.timeline[3][1]}
                img={x?.timeline[3][2]}
                side="right"
                theme={x?.theme}
                ></Timebox>
              </div>

              <div className="w-[90px] mt-[35px] ml-[30px] z-10">
                <img 
                src={ToLeft}
                alt="line"
                ></img>
              </div>
            </div>
          </div>
        </>
    )
}

const Overview: React.FC = () =>{
  const isOrange = x?.theme === "orange"

    return(
        <>
        <div className={cn(
          "relative w-fit h-full border-[3px] rounded-[30px] mx-auto mt-[-45px]",
          {"bg-skin-grad border-[#FD874E] ml-[140px]": x?.theme == "orange"},
          {"bg-[#493187] border-[#C8BDE6] ml-[140px]": x?.theme == "purple"}
          )}>
          <div className="flex">
            <div className={cn(
              "w-[731px] h-[55px] mt-[25px] ml-[28px] rounded-[20px] text-center",
              {"bg-orange-purple" : x?.theme == "orange"},
              {"bg-[#C8BDE6]" : x?.theme == "purple"}
              )}>
                <Title theme={x?.theme}>{x?.title}</Title>
            </div>
            <div className={cn(
              "w-[292px] h-[55px] rounded-[20px] ml-[29px] mt-[25px] cursor-pointer flex hover:scale-[1.05] ease-in duration-300",
              {"bg-orange-primary-3 hover:bg-orange-pressed-1" : x?.theme == "orange"},
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

          <div className="flex mt-5 ml-[28px] mr-[34px] mt-[25px] gap-[38px]">
            <div className="w-[621px] h-[386px] ml-[28px]">
              <img 
              src={x?.overviewImage}
              alt={x?.title}
              className="w-full h-full"></img>
            </div>
            <div className="w-[350px] h-[362px]">
              <p className={cn(
                "text-justify font-roboto text-[11px] font-normal]",
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

              <div className="flex">
                <div>
                  {/* POOLPRIZE */}
                  <div className={cn(
                    "absolute w-[171px] h-[88px] bg-orange-primary-2 mt-[8px] rounded",
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
                    <div className="w-[172px] mt-[13px] ml-[10px] text-[8px] font-fredoka font-medium">
                      <p>Phase 1</p>
                      <p className="indent-1">SMA/SMK/sederajat : Rp100.000,00</p>
                      <p className="indent-1">Mahasiswa : Rp125.000,00</p>
                      <p>Phase 2</p>
                      <p className="indent-1">SMA/SMK/sederajat : Rp125.000,00</p>
                      <p className="indent-1">Mahasiswa : Rp150.000,00</p>
                    </div>
                  </div>

                  {/* KATEGORI */}
                  <div className={cn(
                    "absolute w-[171px] h-[36px] bg-orange-primary-2 mt-[105px] rounded",
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
                    "absolute w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] mt-[147px] rounded",
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
                     "absolute w-[126px] h-[112px] mt-[8px] ml-[221px] bg-orange-primary-2 rounded",
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
                    "absolute w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] mt-[130px] ml-[221px] rounded",
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
            "w-[1045px] h-[60px] p-[2px] ml-[27px] mt-[25px] mb-[26px] rounded-[20px] border-[2px] border-[#FD874E] bg-orange-primary-5",
            {"bg-[#C8BDE6] border-[#9888C3]":x?.theme=="purple"}
          )}>
            <div className="w-[188px] h-[30px] mt-[12px] ml-[461px] gap-[12px] flex">
              {isOrange?(
                <div className="w-[30px] h-[30px] rounded-full border-[2px] border-[#E24BB3]"></div>
              ):(
                <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-b from-[#E24BB3] to-[#FB8A4A] content-center cursor-pointer">
                  <div className="w-[27px] h-[27px] mx-auto my-auto rounded-full bg-[#C8BDE6] hover:bg-light/10 transition-colors ease-in duration-300"></div>
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
  const isFirstPage = currentIndex === 0
  const isLastPage = currentIndex === 2

  const prevPage = () => {
    const newIndex = isFirstPage ? 2 : currentIndex-1
    setCurrentIndex(newIndex)
  }

  const nextPage = () => {
    const newIndex = isLastPage ? 0 : currentIndex+1
    setCurrentIndex(newIndex)
  }
  

  return(
    <>
      <main className={cn(
        "w-full h-full relative overflow-hidden",
        {"bg-orange-grad-4":x?.theme == "orange"},
        {"bg-purple-grad-4":x?.theme=="purple"}
      )}>
        <Navbar/>
        <Home/>
 
        <motion.div 
          className="w-full h-full z-10 mt-[200px] flex flex-nowrap gap-[1200px]"
          animate={{x:-currentIndex*2095}}
        >
          {React.createElement(pages[0])}
          {React.createElement(pages[1])}
          {React.createElement(pages[2])}
        </motion.div>

        {isOrange?(
              <div>
                <img 
                  src={NextArrow}
                  alt="Next Page"
                  className="absolute top-[980px] right-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={nextPage}></img>
                <img 
                  src={PrevArrow}
                  alt="Previous Page"
                  className="absolute top-[980px] left-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={prevPage}></img>
              </div>
            ):(
            <div>
              <img 
                src={NextArrow2}
                alt="Next Page"
                className="absolute top-[980px] right-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                onClick={nextPage}></img>
              <img 
                src={PrevArrow2}
                alt="Previous Page"
                className="absolute top-[980px] left-0 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                onClick={prevPage}></img>
            </div>
            )}
        <div className={cn(
          "z-0 mt-[-40px]",
          {"mt-0":x?.theme=="orange"}
          )}>
          <div className={cn(
            "w-full h-full relative",
            {"z-0" : x?.theme == "orange"},
            {"z-0" : x?.theme == "purple"}
            )}>
              <Wave theme={x?.theme}></Wave>
            <div className={cn(
              "absolute top-0 left-0",
              {"mt-[185px] ml-[79px]":x?.theme=="orange"},
              {"mt-[245px] ml-[79px]":x?.theme=="purple"},
            )}>
              <CompFooter theme={x?.theme}></CompFooter>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
