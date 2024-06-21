import React from "react";
import { useState } from "react";

import Title from "@/components/CompetitionTitle";
// import Navbar from "@/components/Navbar";
import NextArrow from "@/assets/competition/NextButton.svg";
import PrevArrow from "@/assets/competition/PrevButton.svg";
import CompFooter from "@/components/CompetitionFooter";

//HOME ASSET
import pen from "@/assets/competition/pen.svg";
import line from "@/assets/competition/line.svg";
import view from "@/assets/competition/view.svg";
import Shortcut from "@/components/Shortcut";
import FootIcon from "@/components/Icon";
import homeicon from "@/assets/competition/homeicon.svg";
import CButton from "@/components/Button";
import LeftDecor from "@/assets/competition/left.svg";
import RightDecor from "@/assets/competition/right.svg";
import Socials from "@/components/Socials";

//ABOUT ASSET
import homeicon2 from "@/assets/competition/homeicon2.svg";
import topwave from "@/assets/competition/top_wave.svg";
import bottomwave from "@/assets/competition/bottom_wave.svg";
import blur from "@/assets/competition/waveblur.svg";

//TIMELINE ASSET
import Timebox from "@/components/Timebox";
import ToRight from "@/assets/competition/line2right.svg";
import ToLeft from "@/assets/competition/line2left.svg";
import keypad from "@/assets/competition/pad.svg";
import announce from "@/assets/competition/announce.svg";
import timepen from "@/assets/competition/bx_pen.svg";
import techmeet from "@/assets/competition/people.svg";

//OVERVIEW ASSET

const Home: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden transition-all">
        <div className="flex w-full h-full">
          <div className="w-auto h-auto mt-[230px]">
            <img
              src={LeftDecor}
              alt="left"
              className="w-[582px] h-[564px]"
            ></img>
          </div>

          <div className="mx-auto mt-[253px] relative">
            <img
              src={homeicon}
              alt="homeicon"
              className="w-[279px] h-[253px] mx-auto drop-shadow-glow-white-2"
            ></img>

            <div className="text-center">
              <div className="mt-[25px]">
                <Title theme="app">APP DEVELOPMENT</Title>
              </div>
              <p className="w-[401px] mt-1 mx-auto font-roboto text-[16px] font-semibold leading-6 text-orange-pressed-3">
                Show off your skill as an application developer, explore widely
                with us!
              </p>
            </div>

            <div className="flex mt-[25px] gap-[10px] place-content-center">
              <div>
                <CButton theme="app">Guide Book</CButton>
              </div>

              <div>
                <CButton theme="app">Log In</CButton>
              </div>
            </div>
          </div>

          <div className="w-auto h-auto mt-[230px] relative">
            <img
              src={RightDecor}
              alt="Right"
              className="w-[582px] h-[564px]"
            ></img>
          </div>
        </div>

        <div className="flex w-[1280px] h-[45px] mx-auto mt-[125px] mb-[38px] px-[16px] py-[8px] rounded-[5px] bg-orange-primary-4/50">
          <div className="flex gap-[22px]">
            <FootIcon />

            <Shortcut image={pen} text="Introduction" theme="app" />

            <Shortcut image={line} text="Timeline" theme="app" />

            <Shortcut image={view} text="Overview" theme="app" />
          </div>

          <div className="flex gap-[22px] align-items-center justify-content ml-auto mr-[6px]">
            <Socials theme="app" />
          </div>
        </div>
      </div>
    </>
  );
};

const About: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden transition-all">
        <div className="flex mb-[-50px]">
          <div>
            <img
              src={homeicon2}
              alt="homeicon"
              className="mt-[220px] ml-[177px] drop-shadow-glow-white-2"
            ></img>

            <div className="ml-[155px] mt-[37px]">
              <div className="text-start w-full">
                <Title theme="app">APP DEVELOPMENT</Title>
              </div>
              <p className="font-roboto text-[14px] font-semibold leading-6 text-orange-pressed-3">
                Show off your skill as an application developer, explore widely
                with us!
              </p>
              <div className="mt-[35px] gap-[10px] flex">
                <div>
                  <CButton theme="app">Guide Book</CButton>
                </div>

                <div>
                  <CButton theme="app">Log In</CButton>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[592px] h-[395px] rounded-[20px] bg-purple-primary-2 mt-[323px] ml-[376px] mr-[137px]">
            <video width={1920} height={1080} controls>
              <source
                src="https://www.youtube.com/watch?v=d3XtfkQ10_U"
                type="mp4"
              ></source>
            </video>
          </div>
        </div>

        <div className="relative w-full h-[225px] z-0">
          <img
            src={blur}
            alt="grad"
            className="absolute top-0 left-0 w-[1440px] h-[208px] z-0"
          ></img>

          <img
            src={topwave}
            alt="Wave"
            className="absolute top-0 left-0 w-[1440px] h-[208px] z-10 drop-shadow-[0_0_35px_35px_rgba(226,75,179,0.25)]"
          ></img>

          <div className="absolute top-[30px] left-0 w-[1440px] h-[208px] z-20 bg-gradient-to-t from-[#3A0D49]/80 to-transparent"></div>

          <img
            src={bottomwave}
            alt="Wave"
            className="absolute top-[62px] left-0 w-[1440px] h-[208px] z-30 drop-shadow-[0_0_35px_35px_rgba(226,75,179,0.25)] "
          ></img>
          <CompFooter></CompFooter>
        </div>
      </div>
    </>
  );
};

const Timeline: React.FC = () => {
  const appData = [
    ["20 Mei - 4 Oktober 2024", "PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
    ["7 Oktober 2024", "PENGUMUMAN TAHAP PROPOSAL", announce],
    ["8 Oktober - 9 November 2024", "Pengumpulan Tahap Seleksi Karya", timepen],
    ["11 November 2024", "PengUMUman Tahap Seleksi Karya", announce],
    ["12 November 2024", "TECHNICAL MEETING FINAL", techmeet],
  ];
  return (
    <>
      <div className="relative overflow-hidden duration-100 transition-all ease-in-out">
        <div className="w-[964px] h-[778px] h-full flex mx-[238px] mt-[135px] mb-[111px]">
          <div className="">
            <div className="mt-[15px]">
              <Timebox
                date={appData[0][0]}
                event={appData[0][1]}
                img={appData[0][2]}
                leftSide
              ></Timebox>
            </div>

            <div className="w-[126px] h-[80px mt-[21px] ml-[252px]">
              <img src={ToRight} alt="line"></img>
            </div>

            <div className="mt-[101px]">
              <Timebox
                date={appData[2][0]}
                event={appData[2][1]}
                img={appData[2][2]}
                leftSide
              ></Timebox>
            </div>

            <div className="w-[126px] h-[80px] mt-[21px] ml-[252px]">
              <img src={ToRight} alt="line"></img>
            </div>

            <div className="mt-[101px]">
              <Timebox
                date={appData[4][0]}
                event={appData[4][1]}
                img={appData[4][2]}
                leftSide
              ></Timebox>
            </div>
          </div>

          <div className="">
            <div className="mt-[176px]">
              <Timebox
                date={appData[1][0]}
                event={appData[1][1]}
                img={appData[1][2]}
                rightSide
              ></Timebox>
            </div>

            <div className="w-[126px] h-[80px] mt-[21px]">
              <img src={ToLeft} alt="line"></img>
            </div>

            <div className="mt-[101px]">
              <Timebox
                date={appData[3][0]}
                event={appData[3][1]}
                img={appData[3][2]}
                rightSide
              ></Timebox>
            </div>

            <div className="w-[126px] h-[80px] mt-[21px]">
              <img src={ToLeft} alt="line"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Overview: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-[1100px] h-[602px] mx-[170px] my-[211px] pt-[26px] bg-skin-grad border-[3px] border-orange-primary-3 rounded-[30px]">
          <div className="w-[731px] h-[55px] ml-[28px] rounded-[20px] bg-gradient-to-t from-[#E553A8] to-[#FFA567] text-center">
            <Title theme="app">APP DEVELOPMENT</Title>
          </div>
          <div className="flex">
            <div className="w-[621px] h-[386px] shrink-0 bg-light ml-[28px] mt-[25px]"></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Competition() {
  const pages: React.FC[] = [Home, About, Timeline, Overview];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === 3;

  const prevPage = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  const nextPage = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  if (isFirstSlide) {
    return (
      <>
        <main className="w-full h-full relative bg-orange-white">
          {React.createElement(pages[currentIndex])}
          <img
            src={NextArrow}
            alt="Next"
            className="absolute mt-[-527px] ml-[1260px] z-auto cursor-pointer"
            onClick={nextPage}
          ></img>
        </main>
      </>
    );
  } else if (isLastSlide) {
    return (
      <>
        <main className="w-full h-full relative bg-orange-white">
          {React.createElement(pages[currentIndex])}
          <img
            src={PrevArrow}
            alt="Prev"
            className="absolute mt-[-527px] ml-[8px] z-auto cursor-pointer"
            onClick={prevPage}
          ></img>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className="w-full h-full relative bg-orange-white">
          {React.createElement(pages[currentIndex])}
          <img
            src={NextArrow}
            alt="Next"
            className="absolute mt-[-527px] ml-[1260px] z-auto cursor-pointer"
            onClick={nextPage}
          ></img>
          <img
            src={PrevArrow}
            alt="Prev"
            className="absolute mt-[-527px] ml-[8px] z-auto cursor-pointer"
            onClick={prevPage}
          ></img>
        </main>
      </>
    );
  }
}
