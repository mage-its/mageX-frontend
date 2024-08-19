import { useEffect, useState } from "react";
import cn from "@/utils/cn";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { wrap } from "framer-motion";

import Title from "@/components/CompetitionTitle";
import Navbar from "@/components/Navbar";
import NextArrow from "@/assets/competition/NextButton.svg";
import PrevArrow from "@/assets/competition/PrevButton.svg";
import NextArrow2 from "@/assets/competition/nextArrow2.svg";
import PrevArrow2 from "@/assets/competition/prevArrow2.svg";
import Wave from "@/components/Wave";
import CButton from "@/components/Button";
import CompetitionPopUp from "@/components/CompetitionPopUp";

//TIMELINE ASSET
import Timebox from "@/components/Timebox";
import ToRight from "@/assets/competition/line2right.svg";
import ToLeft from "@/assets/competition/line2left.svg";

//OVERVIEW ASSET
import prizeIconOrange from "@/assets/competition/orangePrizeIcon.svg";
import categoryIconOrange from "@/assets/competition/orangeCategoryIcon.svg";
import participantIconOrange from "@/assets/competition/orangeParticIcon.svg";
import contactIconOrange from "@/assets/competition/orangeContactIcon.svg";
import medalIconOrange from "@/assets/competition/orangeMedalIcon.svg";
import orangeSUB from "@/assets/competition/orangeSignUpIcon.svg";
import purpleSUB from "@/assets/competition/purpleSignUpIcon.svg";
import prizeIconPurple from "@/assets/competition/purplePrizeIcon.svg";
import categoryIconPurple from "@/assets/competition/purpleCategoryIcon.svg";
import participantIconPurple from "@/assets/competition/purplePartiIcon.svg";
import contactIconPurple from "@/assets/competition/contactPurple.svg";
import medalIconPurple from "@/assets/competition/purpleMedalIcon.svg";

//FOOTER ASSET
import pc2 from "@/assets/competition/pcFooter.svg";
import pen2 from "@/assets/competition/pen2.svg";
import time2 from "@/assets/competition/time2.svg";
import view2 from "@/assets/competition/view2.svg";
import mail2 from "@/assets/competition/mail2.svg";
import scline2 from "@/assets/competition/scline2.svg";
import tiktok from "@/assets/competition/tiktokorange.svg";
import instagram from "@/assets/competition/instaorange.svg";

import purplePC2 from "@/assets/competition/PurplePC2.svg";
import purplePen2 from "@/assets/competition/purpleAbout2.svg";
import purpleTime2 from "@/assets/competition/purpleTimeline2.svg";
import purpleView2 from "@/assets/competition/purpleOverview2.svg";
import purpleMail2 from "@/assets/competition/purpleMail2.svg";
import purpleTiktok2 from "@/assets/competition/purpleTiktok2.svg";
import purpleInsta2 from "@/assets/competition/purpleInsta2.svg";
import purpleScLine2 from "@/assets/competition/purpleSCLine2.svg";
import { Link, useLocation } from "react-router-dom";
import {
  Contest,
  appDev,
  competitiveProgramming,
  eSport,
  gameDev,
  iot,
  robotic,
  uiUx,
} from "@/constant/competitionPage";
import Footer from "@/components/Footer";
import { useUserData } from "@/services/users";

interface CompetitionProps {
  x: Contest;
  existPoint?: boolean;
  existExtraBox?: boolean;
}


const Home = ({ x }: CompetitionProps) => {
  const { data: user } = useUserData();

  // For esport guide book pop up
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    console.log("Closing popup"); // Check if this gets logged
    setIsPopupVisible(false);
    console.log("isPopupVisible:", isPopupVisible);
  };
  const handleOpenPopup = () => {
    console.log("isPopupVisible:", isPopupVisible);
    console.log("TES");
    setIsPopupVisible(true);
  }

  // console.log(user);
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute top-[50%] -translate-y-1/2 w-full h-[564px]">
          <div
            className={cn(
              "absolute top-0 left-0 desktop:w-[582px] desktop:h-[534px] desktop:ml-[-45px] desktop:mt-0 mobile:w-[500px] mobile:h-[200px] mobile:ml-[-220px] mobile:mt-[45px] ipad:mt-0",
              { "w-[520px] h-[534px] ml-[-15px]": x?.theme == "purple" }
            )}
          >
            <img
              src={x?.leftVector}
              alt="left"
              className={cn(
                "desktop:w-[582px] desktop:h-[480px] mobile:w-[500px] mobile:h-[200px] ipad:w-[582px] ipad:h-[534px]",
                { "mix-blend-plus-darker": x?.theme == "orange" },
                { "mix-blend-hard-light opacity-1": x?.theme == "purple" }
              )}
            ></img>
          </div>

          <div className="absolute top-0 right-0 desktop:w-[582px] desktop:h-[534px] desktop:mr-[-45px] desktop:mt-0 mobile:w-[500px] mobile:h-[200px] mobile:mr-[-220px] mobile:mt-[45px] ipad:mt-0">
            <img
              src={x?.rightVector}
              alt="Right"
              className={cn(
                "desktop:w-[582px] desktop:h-[480px] mobile:w-[500px] mobile:h-[200px] ipad:w-[582px] ipad:h-[534px]",
                { "mix-blend-plus-darker": x?.theme == "orange" },
                { "mix-blend-hard-light opacity-1": x?.theme == "purple" }
              )}
            ></img>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="mt-[-200px] sm:mt-0">
            <img
              src={x?.icon}
              alt="homeicon"
              className={cn(
                "desktop:w-[320px] desktop:h-[200px] mobile:w-[160px] mobile:h-[140px] mx-auto drop-shadow-glow-white-2",
                {
                  "desktop:w-[385px] mobile:w-[225px] mobile:h-[128px]":
                    x?.title == "COMPETITIVE PROGRAMMING",
                },
                { "": x?.title == "APP DEVELOPMENT" || "E-SPORT COMPETITION" }
              )}
            ></img>

            <div
              className={cn("relative mt-[21px] text-center mobile:mt-[37px]", {
                "mobile:px-[4px]": x?.title == "INTERNET OF THINGS",
              })}
            >
              <Title theme={x?.theme}>{x?.title}</Title>
            </div>

            <div className="relative text-center mt-[20px]">
              <p
                className={cn(
                  "desktop:w-[401px] desktop:mt-1 desktop:mx-auto font-roboto text-[16px] font-semibold leading-6 mobile:w-[260px] mobile:mt-[8px] mobile:mx-auto",
                  { "text-orange-pressed-3": x?.theme == "orange" },
                  { "text-light": x?.theme == "purple" }
                )}
              >
                {x?.homeCaption}
              </p>
            </div>

            <div className="flex mt-[25px] gap-[10px] place-content-center">
              {x?.guidebook ? (
                <div className="z-10">
                  {/* Two guide books for esport */}
                  {x?.title == "E-SPORT COMPETITION" ? (
                    <div className="z-10">
                      <div onClick={handleOpenPopup}>
                        <CButton theme={x?.theme}>Guide Book</CButton>
                      </div>
                      <CompetitionPopUp
                        isVisible={isPopupVisible}
                        onClose={handleClosePopup}
                        text1="Mobile Legends"
                        text2="Valorant"
                        link1={x?.guidebook}
                        link2={x?.guidebook2}
                      />
                    </div>
                  ) : (
                    <a href={x?.guidebook} target="_blank">
                      <CButton theme={x?.theme}>Guide Book</CButton>
                    </a>
                  )}
                </div>
              ) : (
                <div className="z-10">
                  <Link to="/coming-soon">
                    <CButton theme={x?.theme}>Guide Book</CButton>
                  </Link>
                </div>
              )}
              {!user?.is_logged_in && (
                <div className="z-10">
                  <a href="https://api.mage-its.id/users/login">
                    <CButton theme={x?.theme}>Log In</CButton>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const About = ({ x }: CompetitionProps) => {
  // For esport guide book pop up
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    console.log("Closing popup"); // Check if this gets logged
    setIsPopupVisible(false);
    console.log("isPopupVisible:", isPopupVisible);
  };
  const handleOpenPopup = () => {
    console.log("isPopupVisible:", isPopupVisible);
    console.log("TES");
    setIsPopupVisible(true);
  }

  return (
    <>
      <div className="desktop:w-fit desktop:h-[610px] desktop:ml-0 desktop:mr-0 desktop:flex ipad:flex desktop:gap-[35px] ipad:gap-[22px] mobile:grid mobile:h-fit mobile:ml-auto mobile:mr-auto ipad:ml-auto ipad:mx-auto">
        <div className="desktop:w-fit desktop:h-fit desktop:grid mobile:grid desktop:gap-0 mobile:gap-[25px] desktop:mt-0">
          <div
            className={cn(
              "desktop:w-[200px] desktop:h-fit desktop:ml-[30px]",
              "mobile:w-[100px] mobile:h-[57px]",
              "ipad:w-[180px] ipad:h-[100px]",
              { "desktop:w-[200px]": x?.title == "UIUX" },
              { "desktop:w-[335px]": x?.title == "COMPETITIVE PROGRAMMING" }
            )}
          >
            <img
              src={x?.icon}
              alt="homeicon"
              className="drop-shadow-glow-white-1"
            ></img>
          </div>

          <div className="relative desktop:h-fit desktop:w-[480px] desktop:my-[12px] mobile:mt-[40px] mobile:w-[300px] ipad:mt-[80px]">
            <Title theme={x?.theme}>{x?.title}</Title>
          </div>

          <div className="desktop:hidden ipad:hidden mobile:block w-[300px]">
            <img
              src={x?.aboutImage}
              alt={x?.title}
              className="w-full h-full rounded-[20px]"
            ></img>
          </div>

          <div className="relative mt-0">
            <p
              className={cn(
                "desktop:w-[365px] mobile:w-[300px] mobile:text-justify font-roboto text-[14px] font-semibold leading-6",
                { "text-orange-pressed-3": x?.theme == "orange" },
                { "text-light": x?.theme == "purple" }
              )}
            >
              {x?.aboutCaption}
            </p>
            <div className="mt-[22px] flex gap-[29px]">
              {x?.guidebook ? (
                <div className="z-10">
                  {/* Two guide books for esport */}
                  {x?.title == "E-SPORT COMPETITION" ? (
                    <div className="z-10">
                      <div onClick={handleOpenPopup}>
                        <CButton theme={x?.theme}>Guide Book</CButton>
                      </div>
                      <CompetitionPopUp
                        isVisible={isPopupVisible}
                        onClose={handleClosePopup}
                        text1="Mobile Legends"
                        text2="Valorant"
                        link1={x?.guidebook}
                        link2={x?.guidebook2}
                      />
                    </div>
                  ) : (
                    <a href={x?.guidebook} target="_blank">
                      <CButton theme={x?.theme}>Guide Book</CButton>
                    </a>
                  )}
                </div>
              ) : (
                <div className="z-10">
                  <Link to="/coming-soon">
                    <CButton theme={x?.theme}>Guide Book</CButton>
                  </Link>
                </div>
              )}
              <div className="z-10">
                <Link to="/dashboard/home">
                  <CButton theme={x?.theme}>Daftar</CButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop:w-[545px] desktop:h-[382px] ipad:w-[260px] ipad:h-[180px] desktop:mt-0 ipad:mt-auto dekstop:mb-0 ipad:mb-auto ipad:mt-0 rounded-[20px] z-10 mobile:hidden desktop:block ipad:block">
          <img
            src={x?.aboutImage}
            alt={x?.title}
            className="w-full h-full rounded-[20px]"
          ></img>
        </div>
      </div>
    </>
  );
};

const Timeline = ({ x, existExtraBox }: CompetitionProps) => {
  return (
    <>
      <div className="grid desktop:w-fit ipad:w-[610px] desktop:h-fit mobile:w-fit desktop:gap-0 ipad:gap-0 mobile:gap-[100px] desktop:mr-auto desktop:ml-auto ipad:ml-auto ipad:mr-auto  mobile:mr-auto mobile:ml-auto desktop:pl-0 mobile:pl-10 ipad:pl-0">
        <div className="w-fit desktop:ml-0 desktop:mr-0 mobile:ml-auto mobile:mr-auto ipad:ml-0">
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
          <div className="grid desktop:gap-0 mobile:gap-[100px]">
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
                className="z-10 desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-0 ipad:ml-[144px]"
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
                  date={x?.timeline[5][0]}
                  event={x?.timeline[5][1]}
                  img={x?.timeline[5][2]}
                  side="right"
                  theme={x?.theme}
                ></Timebox>
              </div>
            </div>

            <div className="w-fit flex flex-nowrap gap-4 desktop:mt-[21px] ipad:mt-[21px]">
              <div className="desktop:mt-[22px] ipad:mt-[24px]">
                <Timebox
                  date={x?.timeline[6][0]}
                  event={x?.timeline[6][1]}
                  img={x?.timeline[6][2]}
                  side="left"
                  theme={x?.theme}
                ></Timebox>
              </div>
              <img
                src={ToLeft}
                alt="line"
                className="z-10 desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-0 ipad:ml-[144px]"
              ></img>
            </div>

            {x.key == "Competitive Programming" && (
              <div className="w-fit flex flex-nowrap gap-4 desktop:mt-[21px] ipad:mt-[21px]">
                <img
                  src={ToRight}
                  alt="line"
                  className="desktop:block ipad:block mobile:hidden w-[126px] h-[75px] desktop:ml-[252px] ipad:ml-[130px]"
                ></img>
                <div className="desktop:mt-[22px] ipad:mt-[24px]">
                  <Timebox
                    date={x?.timeline[7][0]}
                    event={x?.timeline[7][1]}
                    img={x?.timeline[7][2]}
                    side="right"
                    theme={x?.theme}
                  ></Timebox>
                </div>
            </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

const Overview = ({ x, existPoint }: CompetitionProps) => {
  const isOrange = x?.theme === "orange";

  // For esport guide book pop up
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    console.log("Closing popup"); // Check if this gets logged
    setIsPopupVisible(false);
    console.log("isPopupVisible:", isPopupVisible);
  };
  const handleOpenPopup = () => {
    console.log("isPopupVisible:", isPopupVisible);
    console.log("TES");
    setIsPopupVisible(true);
  }

  return (
    <>
      <div
        className={cn(
          "z-10 relative desktop:w-fit desktop:h-fit mobile:w-[300px] ipad:w-fit ipad:h-fit mobile:h-fit border-[3px] rounded-[30px] mx-auto desktop:my-auto mobile:mt-0 ipad:mt-0 desktop:ml-0 mobile:mb-10",
          { "bg-skin-grad border-[#FD874E]": x?.theme == "orange" },
          { "bg-[#493187] border-[#C8BDE6]": x?.theme == "purple" }
        )}
      >
        <div className="desktop:flex mobile:grid ipad:flex desktop:gap-0 mobile:gap-0 ipad:gap-5">
          <div
            className={cn(
              "desktop:w-[731px]  mobile:w-[268px] desktop:h-[55px] mobile:h-[105px] desktop:p-0 mobile:p-1 mt-[25px] desktop:ml-[28px] mobile:ml-[14px] rounded-[20px] text-center flex items-center justify-center",
              {
                "bg-gradient-to-b from-[#FFA567] to-[#F1798A]":
                  x?.theme == "orange",
              },
              { "bg-[#C8BDE6]": x?.theme == "purple" },
              { "desktop:pt-[5px]": x?.title == "COMPETITIVE PROGRAMMING" }
            )}
          >
            <Title theme={x?.theme}>{x?.title}</Title>
          </div>
          <div
            className={cn(
              "desktop:w-[292px] mobile:w-[268px] h-[55px] rounded-[20px] desktop:ml-[29px] mobile:ml-[14px] mt-[25px] cursor-pointer flex hover:scale-[1.05] ease-in duration-300",
              { "bg-orange-primary-3": x?.theme == "orange" },
              { "bg-[#5B2CD3]": x?.theme == "purple" }
            )}
          >
            <div className="ml-[18px] flex mt-[12px] gap-3">
              <div className="w-[30px] h-[30px] bg-light rounded-full">
                {isOrange ? (
                  <img src={orangeSUB} className="p-[5px]"></img>
                ) : (
                  <img src={purpleSUB} className="p-[5px]"></img>
                )}
              </div>
              <Link to="/dashboard/home">
                <p className="text-light text-[14px] mt-[4px] font-bold">
                  Daftar disini!
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="desktop:flex ipad:flex mobile:grid mt-5 desktop:ml-[28px] mobile:ml-[15px] mr-[34px] mt-[25px] gap-[38px]">
          <div className="desktop:w-[621px] mobile:w-[265px] ipad:[300px] desktop:h-[386px] mobile:h-[205px] ipad:h-[386px] desktop:ml-[28px]">
            <img
              src={x?.overviewImage}
              alt={x?.title}
              className="w-full h-full rounded-[15px]"
            ></img>
          </div>
          <div className="desktop:w-[350px] mobile:w-[265px] desktop:h-[362px] mobile:h-fit">
            <p
              className={cn(
                "text-justify font-roboto text-[11px] font-medium",
                { "font-fredoka text-light": x?.theme == "purple" }
              )}
            >
              {x?.overviewDesc}
              {existPoint ? (
                <div>
                  <ul className="list-disc pl-6 space-y-[1px]">
                    <li>Kesehatan</li>
                    <li>Ekonomi</li>
                    <li>Edukasi</li>
                    <li>Transportasi</li>
                    <li>Pelayanan Publik</li>
                    <li>Keamanan</li>
                  </ul>
                  {x.extraOverviewDesc}
                </div>
              ) : null}
            </p>

            <div
              className={cn(
                "desktop:flex desktop:gap-0 mobile:gap-0 ipad:gap-6 ipad:flex mobile:grid desktop:ml-0 desktop:mt-[30px] mobile:ml-[15px]",
                { "desktop:mt-[15px] ipad:mt-[15px]": x?.point == true }
              )}
            >
              <div className="desktop:ml-0 mobile:ml-0 ipad:ml-[-34px]">
                {/* POOLPRIZE */}
                <div
                  className={cn(
                    "desktop:absolute mobile:relative desktop:pt-0 mobile:pt-[3px] w-[171px] h-[88px] bg-orange-primary-2 desktop:mt-0 mobile:mt-[32px] rounded",
                    { "bg-[#F9E3FD]": x?.theme == "purple" }
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0 left-0 w-[121px] h-[18px] mt-[-5px] bg-gradient-to-l from-[#FFA567] to-[#FE874F] rounded",
                      {
                        "bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]":
                          x?.theme == "purple",
                      }
                    )}
                  >
                    <p
                      className={cn(
                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                        { "text-light": x?.theme == "purple" }
                      )}
                    >
                      Biaya Pendaftaran
                    </p>
                    <div
                      className={cn(
                        "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] p-[1px] bg-light rounded-full border-[#FE874F] border-[2px]",
                        { "border-[#3A0D49]": x?.theme == "purple" }
                      )}
                    >
                      {isOrange ? (
                        <img src={prizeIconOrange} className="p-[3px]"></img>
                      ) : (
                        <img src={prizeIconPurple} className="p-[3px]"></img>
                      )}
                    </div>
                  </div>
                  {x.secondPhase ? (
                    <div className="relative w-[172px] mt-[13px] ml-[10px] text-[8px] font-fredoka font-medium">
                      <p>Phase 1</p>
                      <p className="indent-1">
                        SMA/SMK/sederajat : Rp100.000,00
                      </p>
                      <p className="indent-1">Mahasiswa : Rp125.000,00</p>
                      <p>Phase 2</p>
                      <p className="indent-1">
                        SMA/SMK/sederajat : Rp125.000,00
                      </p>
                      <p className="indent-1">Mahasiswa : Rp150.000,00</p>
                    </div>
                  ) : (
                    <div className="relative w-[172px] mt-[13px] ml-[10px] text-[8px] font-fredoka font-medium">
                      <p>Phase 1</p>
                      <p className="indent-1">
                        SMA/SMK/sederajat : Rp100.000,00
                      </p>
                    </div>
                  )}
                </div>

                {/* KATEGORI */}
                <div
                  className={cn(
                    "desktop:absolute mobile:relative dekstop:pt-0 mobile:pt-[3px] w-[171px] h-[36px] bg-orange-primary-2 desktop:mt-[115px] mobile:mt-[32px] rounded",
                    { "bg-[#F9E3FD]": x?.theme == "purple" }
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0 left-0 w-[121px] h-[18px] mt-[-5px] bg-gradient-to-l from-[#FFA567] to-[#FE874F] rounded",
                      {
                        "bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]":
                          x?.theme == "purple",
                      }
                    )}
                  >
                    <p
                      className={cn(
                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                        { "text-light": x?.theme == "purple" }
                      )}
                    >
                      Kategori
                    </p>
                    <div
                      className={cn(
                        "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                        { "border-[#3A0D49]": x?.theme == "purple" }
                      )}
                    >
                      {isOrange ? (
                        <img
                          src={categoryIconOrange}
                          className="pl-[1px]"
                        ></img>
                      ) : (
                        <img
                          src={categoryIconPurple}
                          className="pl-[1px]"
                        ></img>
                      )}
                    </div>
                  </div>
                  <div className="w-[172px] mt-[13px] ml-[10px] text-[9px] font-fredoka font-medium">
                    <p>{x.category}</p>
                  </div>
                </div>

                {/* PESERTA */}
                <div
                  className={cn(
                    "desktop:absolute mobile:relative desktop:pt-0 mobile:py-[1px] w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] desktop:mt-[172px] mobile:mt-[32px] rounded",
                    {
                      "bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]":
                        x?.theme == "purple",
                    }
                  )}
                >
                  <p
                    className={cn(
                      "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                      { "text-light": x?.theme == "purple" }
                    )}
                  >
                    {x?.participant}
                  </p>
                  <div
                    className={cn(
                      "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px] content-center",
                      { "border-[#3A0D49]": x?.theme == "purple" }
                    )}
                  >
                    {isOrange ? (
                      <img src={participantIconOrange} className=""></img>
                    ) : (
                      <img
                        src={participantIconPurple}
                        className="mx-auto pt-[6px]"
                      ></img>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div
                  className={cn(
                    "desktop:absolute mobile:relative w-[126px] h-fit desktop:mt-0 mobile:mt-[32px] desktop:ml-[221px] mobile:ml-0 bg-orange-primary-2 rounded",
                    { "bg-[#F9E3FD]": x?.theme == "purple" }
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0 left-0 w-[117px] h-[18px] mt-[-5px] bg-gradient-to-l from-[#FFA567] to-[#FE874F] rounded",
                      {
                        "bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]":
                          x?.theme == "purple",
                      }
                    )}
                  >
                    <p
                      className={cn(
                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                        { "text-light": x?.theme == "purple" }
                      )}
                    >
                      Contact Person
                    </p>
                  </div>
                  <div
                    className={cn(
                      "absolute w-[23px] h-[23px] top-0 left-0 mt-[-7px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                      { "border-[#3A0D49]": x?.theme == "purple" }
                    )}
                  >
                    {isOrange ? (
                      <img src={contactIconOrange} className="p-[4px]"></img>
                    ) : (
                      <img src={contactIconPurple} className="p-[4px]"></img>
                    )}
                  </div>
                  <div
                    className={cn(
                      "p-[16px] text-[9px] font-fredoka font-medium flex flex-col gap-[7px]"
                    )}
                  >
                    {x?.contact ? (
                      x?.contact.map((item) => (
                        <div>
                          <p>{item.name}</p>
                          <p>{item.phone}</p>
                        </div>
                      ))
                    ) : (
                      <p>To be announced</p>
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "desktop:absolute mobile:relative desktop:pt-0 mobile:pt-[1px] w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] desktop:mt-[172px] mobile:mt-[32px] desktop:ml-[221px] mobile:ml-0 rounded",
                    {
                      "bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]":
                        x?.theme == "purple",
                    }
                  )}
                >
                  <p
                    className={cn(
                      "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                      { "text-light": x?.theme == "purple" }
                    )}
                  >
                    {x?.prize}
                  </p>
                  <div
                    className={cn(
                      "absolute w-[23px] h-[23px] top-0 left-0 mt-[-2px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                      { "border-[#3A0D49]": x?.theme == "purple" }
                    )}
                  >
                    {isOrange ? (
                      <img
                        src={medalIconOrange}
                        className="pr-[6px] ml-[3px] py-[2px]"
                      ></img>
                    ) : (
                      <img
                        src={medalIconPurple}
                        className="pr-[6px] ml-[3px] py-[2px]"
                      ></img>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "desktop:w-[1045px] desktop:h-[60px] ipad:w-[578px] ipad:h-[60px] ipad:mr-[27px] ipad:mb-[30px] desktop:mb-[30px] mobile:w-[268px] p-[2px] desktop:ml-[27px] ipad:ml-[27px] mobile:ml-[14px] mt-[25px] desktop:mb-0 mobile:mb-[36px] rounded-[20px] border-[2px] border-[#FD874E] bg-orange-primary-5",
            { "bg-[#C8BDE6] border-[#9888C3]": x?.theme == "purple" },
            { "desktop:mt-[70px] desktop:mb-[25px]": existPoint == true },
            { "desktop:mb-[25px]": existPoint == false }
          )}
        >
          <div className="desktop:w-[188px] desktop:h-[30px] desktop:mt-[12px] ipad:mt-[12px] desktop:ml-[461px] ipad:ml-[230px] mobile:ml-[57px] desktop:gap-[12px] mobile:gap-[8px] ipad:gap-[8px] flex">
            {isOrange ? (
              <div className="desktop:w-[30px] mobile:w-[17px] desktop:h-[30px] mobile:h-[17px] rounded-full bg-gradient-to-b from-[#E14CB3] to-[#7B2A62] content-center cursor-pointer desktop:mt-0 mobile:mt-[6px]">
                <div className="desktop:w-[27px] desktop:h-[27px] mobile:w-[14px] mobile:h-[14px] mx-auto my-auto rounded-full bg-[#FFE1C9] hover:bg-light/10 transition-colors ease-in duration-300"></div>
              </div>
            ) : (
              <div className="desktop:w-[30px] mobile:w-[17px] desktop:h-[30px] mobile:h-[17px] rounded-full bg-gradient-to-b from-[#E24BB3] to-[#FB8A4A] content-center cursor-pointer desktop:mt-0 mobile:mt-[6px]">
                <div className="desktop:w-[27px] desktop:h-[27px] mobile:w-[14px] mobile:h-[14px] mx-auto my-auto rounded-full bg-[#C8BDE6] hover:bg-light/10 transition-colors ease-in duration-300"></div>
              </div>
            )}
            {x?.guidebook ? (
                <div className="">
                  {/* Two guide books for esport */}
                  {x?.title == "E-SPORT COMPETITION" ? (
                    <div>
                      <div onClick={handleOpenPopup}>
                        <p
                          className={cn(
                            "text-justify font-airstrike text-[20px] font-normal text-mage-orange select-none",
                            { "text-[#3A0D49]": x?.theme == "purple" }
                          )}
                        >
                          GUIDEBOOK
                        </p>
                      </div>
                      <CompetitionPopUp
                        isVisible={isPopupVisible}
                        onClose={handleClosePopup}
                        text1="Mobile Legends"
                        text2="Valorant"
                        link1={x?.guidebook}
                        link2={x?.guidebook2}
                      />
                    </div>
                  ) : (
                    <a href={x?.guidebook} target="_blank">
                      <p
                        className={cn(
                          "text-justify font-airstrike text-[20px] font-normal text-mage-orange",
                          { "text-[#3A0D49]": x?.theme == "purple" }
                        )}
                      >
                        GUIDEBOOK
                      </p>
                    </a>
                  )}
                </div>
              ) : (
                <Link to="/coming-soon">
                  <p
                    className={cn(
                      "text-justify font-airstrike text-[20px] font-normal text-mage-orange",
                      { "text-[#3A0D49]": x?.theme == "purple" }
                    )}
                  >
                    GUIDEBOOK
                  </p>
                </Link>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

const variants = {
  enter: (direction: number) => {
    return {
      zIndex: 1,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 1,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function Competition() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const competitionPath: { [key: string]: Contest } = {
    "/competition/ui-ux": uiUx,
    "/competition/competitive-programming": competitiveProgramming,
    "/competition/app-development": appDev,
    "/competition/esport": eSport,
    "/competition/iot": iot,
    "/competition/robotic": robotic,
    "/competition/game-development": gameDev,
  };

  const x: Contest = competitionPath[currentRoute];

  const existPoint = x?.point === true;
  const existExtraBox = x?.extraBox === true;

  const pages = [
    <About x={x} key="1" />,
    <Timeline x={x} existExtraBox={existExtraBox} key="2" />,
    <Overview x={x} existPoint={existPoint} key="3" />,
  ];
  const [[page, direction], setPage] = useState([0, 0]);
  const isOrange = x?.theme === "orange";
  const pageIndex = wrap(0, pages.length, page);

  useEffect(() => {
    // console.log(currentRoute);
  }, [currentRoute]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const prevPage = () => {
    paginate(-1);
  };

  const nextPage = () => {
    paginate(1);
  };

  const aboutShortcut = () => {
    paginate(-page);
  };

  const timelineShortcut = () => {
    paginate(-page + 1);
  };

  const overviewShortcut = () => {
    paginate(-page + 2);
  };

  return (
    <>
      <main
        className={cn(
          "w-full h-full relative overflow-clip",
          { "bg-orange-grad-4": x?.theme == "orange" },
          { "bg-purple-grad-4": x?.theme == "purple" }
        )}
      >
        <Navbar theme={x?.theme} />
        <Home x={x} />

        {window.innerWidth >= 768 ? (
          <div className="flex">
            <div className="my-auto">
              {isOrange ? (
                <img
                  src={PrevArrow}
                  alt="Previous Page"
                  className="mt-1/2 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={prevPage}
                ></img>
              ) : (
                <img
                  src={PrevArrow2}
                  alt="Previous Page"
                  className="mt-1/2 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={prevPage}
                ></img>
              )}
            </div>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                className="w-fit h-[930px] mt-[-60px] ipad:mx-auto desktop:mx-auto pt-[110px]"
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                variants={variants}
                transition={{
                  type: "tween",
                  ease: easeInOut,
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {pages[pageIndex]}
              </motion.div>
            </AnimatePresence>
            <div className="my-auto">
              {isOrange ? (
                <img
                  src={NextArrow}
                  alt="Next Page"
                  className="mt-1/2 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={nextPage}
                ></img>
              ) : (
                <img
                  src={NextArrow2}
                  alt="Next Page"
                  className="mt-1/2 cursor-pointer hover:scale-[0.6] ease-out duration-200 z-50"
                  onClick={nextPage}
                ></img>
              )}
            </div>
          </div>
        ) : (
          <div className="mobile:grid mobile:gap-[130px] mobile:mx-auto">
            <About x={x} />
            <Timeline x={x} existExtraBox={existExtraBox} />
            <Overview x={x} existPoint={existPoint} />
          </div>
        )}

        <div
          className={cn(
            "relative z-0 desktop:mt-[160px] mobile:mt-0 desktop:block ipad:block ipad:mt-0 mobile:hidden",
            { "desktop:mt-0 ipad:block ipad:mt-0": x?.theme == "orange" }
          )}
        >
          <div
            className={cn(
              "w-full h-full relative ipad:block",
              { "z-0": x?.theme == "orange" },
              { "z-0": x?.theme == "purple" }
            )}
          >
            <div className="desktop:block ipad:block mobile:hidden">
              <Wave theme={x?.theme}></Wave>
            </div>
            <div
              className={cn(
                "absolute w-full desktop:top-0 desktop:left-0 mobile:bottom-0 mobile:right-0",
                {
                  "desktop:mt-[185px] desktop:mx-auto mobile:mb-[6px] mobile:mr-0":
                    x?.theme == "orange",
                },
                {
                  "desktop:mt-[245px] desktop:mx-auto mobile:mb-[6px] mobile:mr-0":
                    x?.theme == "purple",
                }
              )}
            >
              <div className="desktop:absolute desktop:bottom-5 ipad:absolute ipad:bottom-[30px] desktop:w-full ipad:bottom-5 ipad:w-full mobile:w-[300px] mx-auto flex justify-between items-center px-[79px]">
                <div className="flex items-center gap-[24px] z-30">
                  <div className="cursor-not-allowed desktop:block ipad:block mobile:hidden">
                    {isOrange ? (
                      <img src={pc2} alt="PC" />
                    ) : (
                      <img src={purplePC2} alt="PC" />
                    )}
                  </div>

                  <div
                    onClick={aboutShortcut}
                    className={cn(
                      "desktop:block ipad:block mobile:hidden w-[36px] h-[36px] rounded-full p-[8px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      { "bg-orange-primary-5": x?.theme == "orange" },
                      { "bg-[#F9E3FD]": x?.theme == "purple" }
                    )}
                  >
                    {isOrange ? (
                      <img src={pen2} alt="About Us" />
                    ) : (
                      <img src={purplePen2} alt="About Us" />
                    )}
                  </div>

                  <div
                    onClick={timelineShortcut}
                    className={cn(
                      "desktop:block ipad:block mobile:hidden w-[36px] h-[36px] rounded-full px-[4px] py-[10px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      { "bg-orange-primary-5": x?.theme == "orange" },
                      { "bg-[#F9E3FD]": x?.theme == "purple" }
                    )}
                  >
                    {isOrange ? (
                      <img src={time2} alt="Timeline" />
                    ) : (
                      <img src={purpleTime2} alt="Timeline" />
                    )}
                  </div>

                  <div
                    onClick={overviewShortcut}
                    className={cn(
                      "desktop:block ipad:block mobile:hidden w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[8px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      { "bg-orange-primary-5": x?.theme == "orange" },
                      { "bg-[#F9E3FD]": x?.theme == "purple" }
                    )}
                  >
                    {isOrange ? (
                      <img src={view2} alt="Overview" />
                    ) : (
                      <img src={purpleView2} alt="Overview" />
                    )}
                  </div>
                </div>

                <div className="flex items-center desktop:gap-[24px] ipad:gap-[24px] mobile:gap-[70px]">
                  <div className="cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300">
                    <a
                      href="mailto:mage.ce.its@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isOrange ? (
                        <img
                          src={mail2}
                          className="desktop:w-[36px] desktop:h-[36px] ipad:w-[36px] ipad:w-[36px] ipad:h-[36px] mobile:w-[24px] mobile:h-[24px]"
                          alt="Email"
                        />
                      ) : (
                        <img
                          src={purpleMail2}
                          className="desktop:w-[36px] desktop:h-[36px] ipad:w-[36px] ipad:h-[36px]  mobile:w-[24px] mobile:h-[24px]"
                          alt="Email"
                        />
                      )}
                    </a>
                  </div>

                  <div
                    className={cn(
                      "desktop:w-[36px] desktop:h-[36px] ipad:w-[36px] ipad:h-[36px] mobile:w-[24px] mobile:h-[24px] rounded-full bg-orange-primary-5 p-[6px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      { "bg-orange-primary-5": x?.theme == "orange" },
                      { "bg-[#F9E3FD]": x?.theme == "purple" }
                    )}
                  >
                    <a
                      href="https://www.tiktok.com/@magex_its"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isOrange ? (
                        <img
                          src={tiktok}
                          className="desktop:px-[3px] desktop:py-[3px] ipad:px-[3px] ipad:py-[3px]"
                          alt="TikTok"
                        />
                      ) : (
                        <img
                          src={purpleTiktok2}
                          className="desktop:px-[3px] desktop:py-[3px] ipad:px-[3px] ipad:py-[3px]"
                          alt="TikTok"
                        />
                      )}
                    </a>
                  </div>

                  <div
                    className={cn(
                      "desktop:w-[36px] desktop:h-[36px] ipad:w-[36px] ipad:h-[36px]  mobile:w-[24px] mobile:h-[24px] rounded-full bg-orange-primary-5 p-[6px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                      { "bg-orange-primary-5": x?.theme == "orange" },
                      { "bg-[#F9E3FD]": x?.theme == "purple" }
                    )}
                  >
                    <a
                      href="https://www.instagram.com/mage_its"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isOrange ? (
                        <img
                          src={instagram}
                          className="desktop:px-[3px] desktop:py-[3px] ipad:px-[3px] ipad:py-[3px]"
                          alt="Instagram"
                        />
                      ) : (
                        <img
                          src={purpleInsta2}
                          className="desktop:mx-[3px] desktop:my-[3px] ipad:px-[3mx] ipad:my-[3px]"
                          alt="Instagram"
                        />
                      )}
                    </a>
                  </div>

                  <div className="cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px]  ease-out duration-300">
                    {isOrange ? (
                      <img
                        src={scline2}
                        className="desktop:w-[36px] desktop:h-[36px] ipad:w-[36px] ipad:h-[36px]  mobile:w-[24px] mobile:h-[24px]"
                        alt="Line"
                      />
                    ) : (
                      <img
                        src={purpleScLine2}
                        className="desktop:w-[36px] desktop:h-[36px] ipad:w-[36px] ipad:h-[36px]  mobile:w-[24px] mobile:h-[24px]"
                        alt="Line"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
