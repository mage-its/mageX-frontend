import React from "react";
import { useState } from "react";
import cn from "@/utils/cn";

import Title from "@/components/CompetitionTitle";
import Navbar from "@/components/Navbar";
import NextArrow from "@/assets/competition/NextButton.svg"
import PrevArrow from "@/assets/competition/PrevButton.svg"
import NextArrow2 from "@/assets/competition/nextArrow2.svg"
import PrevArrow2 from "@/assets/competition/prevArrow2.svg"
import Wave from "@/components/Wave";
import CompFooter from "@/components/CompetitionFooter";

//HOME ASSET
import pen from "@/assets/competition/pen.svg";
import purplePen from "@/assets/competition/aboutPurple.svg"
import line from "@/assets/competition/line.svg"
import purpleLine from "@/assets/competition/timelinePurple.svg"
import view from "@/assets/competition/view.svg"
import purpleView from "@/assets/competition/overviewPurple.svg"
import Shortcut from "@/components/Shortcut";
import homeicon from "@/assets/competition/homeicon.svg";
import CButton from "@/components/Button";
import LeftDecor from "@/assets/competition/left.svg"
import RightDecor from "@/assets/competition/right.svg"
import EsportHomeIcon from "@/assets/competition/esport_largeIcon.svg"
import PurpleLeftDecor from "@/assets/competition/purpleLeftVector.svg"
import PurpleRightDecor from "@/assets/competition/purpleRightVector.svg"
import HomeFooter from "@/components/Shortcut";

//ABOUT ASSET
import homeicon2 from "@/assets/competition/homeicon2.svg"
import EsportAboutIcon from "@/assets/competition/esport_smallicon.svg"
import topwave from "@/assets/competition/top_wave.svg"
import bottomwave from "@/assets/competition/bottom_wave.svg"
import blur from "@/assets/competition/waveblur.svg"

//TIMELINE ASSET
import Timebox from "@/components/Timebox";
import ToRight from "@/assets/competition/line2right.svg"
import ToLeft from "@/assets/competition/line2left.svg"
import keypad from "@/assets/competition/pad.svg"
import announce from "@/assets/competition/announce.svg"
import timepen from "@/assets/competition/bx_pen.svg"
import techmeet from "@/assets/competition/people.svg"

//OVERVIEW ASSET
import overviewBox from "@/assets/competition/overviewBox.svg"
import purpleOverviewBox from "@/assets/competition/overviewBoxPurple.svg"
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
    title : string
    theme : string
    leftVector : any
    rightVector : any
    smallIcon : any
    timeline : any
}

const appDev: Contest = {
    largeIcon : homeicon,
    title : "APP DEVELOPMENT",
    theme : "orange",
    leftVector : LeftDecor,
    rightVector : RightDecor,
    smallIcon : homeicon2,
    timeline : [
        ["20 Mei - 4 Oktober 2024","PENDAFTARAN DAN PENGUMPULAN PROPOSAL", keypad],
        ["7 Oktober 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
        ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya", timepen],
        ["11 November 2024","PengUMUman Tahap Seleksi Karya",announce],
        ["12 November 2024","TECHNICAL MEETING FINAL", techmeet]
    ]
}

const eSport: Contest = {
    largeIcon : EsportHomeIcon,
    title : "E-SPORT COMPETITION",
    theme : "purple",
    leftVector : PurpleLeftDecor,
    rightVector : PurpleRightDecor,
    smallIcon : EsportAboutIcon,
    timeline : [
        ["20 Mei 2024 - 5 November 2024","PENDAFTARAN", keypad],
        ["12 November 2024","PENGUMUMAN TAHAP PROPOSAL",announce],
        ["8 Oktober - 9 November 2024","Pengumpulan Tahap Seleksi Karya", timepen],
        ["11 November 2024","PengUMUman Tahap Seleksi Karya",announce],
        ["12 November 2024","TECHNICAL MEETING FINAL", techmeet]
    ]
}

const whatPage = () =>{
    const currentRoute = window.location.pathname.split('/')[1];
    if(currentRoute == "app"){
        return appDev
    }else if(currentRoute == "game"){
        return eSport
    }
}

const x = whatPage()

const Home: React.FC = () =>{
    return (
        <>
            <div className="relative overflow-hidden transition-all">
                    <div className="absolute top-[150px] w-full h-[564px]">
                        <div className={cn(
                            "absolute top-0 left-0 w-[520px] h-[564px]",
                            {"w-[540px] h-[564px] ml-[-15px]" : x?.theme == "purple"},
                            )}>
                            <img
                            src={x?.leftVector}
                            alt="left"
                            className={cn(
                                "w-[582px] h-[564px]",
                                {"mix-blend-plus-darker" : x?.theme == "orange"},
                                {"mix-blend-hard-light opacity-1" : x?.theme == "purple"},
                                )}
                            ></img>
                        </div>

                        <div className="absolute top-0 right-0 w-[520px] h-[564px]">
                            <img
                            src={x?.rightVector}
                            alt="Right"
                            className={cn(
                                "w-[582px] h-[564px]",
                                {"mix-blend-plus-darker" : x?.theme == "orange"},
                                {"mix-blend-hard-light opacity-1" : x?.theme == "purple"},
                                )}>
                            </img>
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <div className="mt-[210px] relative">
                                <img
                                src={x?.largeIcon}
                                alt="homeicon"
                                className="w-[250px] h-[234px] mx-auto drop-shadow-glow-white-2">
                                </img>

                                <div className="text-center">
                                    <div className="mt-[25px]">
                                        <Title 
                                        theme={x?.theme}>
                                            {x?.title}
                                        </Title>
                                    </div>
                                    <p className={cn(
                                        "w-[401px] mt-1 mx-auto font-roboto text-[16px] font-semibold leading-6",
                                        {"text-orange-pressed-3": x?.theme == "orange"},
                                        {"text-light": x?.theme == "purple"}
                                        )}>
                                        Show off your skill as an application developer, explore widely with us!
                                    </p>
                                </div>

                                <div className="flex mt-[25px] gap-[10px] place-content-center">
                                    <div>
                                        <CButton
                                        theme={x?.theme}>
                                            Guide Book
                                        </CButton>
                                    </div>

                                    <div>
                                        <CButton
                                        theme={x?.theme}>
                                            Log In
                                        </CButton>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="mt-[202px]">
                    <HomeFooter theme={x?.theme}/>
                    </div>
            </div>
        </>
    )
}

const About: React.FC = () =>{
    return(
        <>
        <div className="relative overflow-hidden transition-all">
                    <div className="flex mb-[-50px]">
                        <div>
                            <img
                            src={x?.smallIcon}
                            alt="homeicon"
                            className="mt-[220px] ml-[177px] drop-shadow-glow-white-2">
                            </img>

                            <div className="ml-[155px] mt-[37px]">
                                <div className="-full">
                                    <Title 
                                    theme={x?.theme}>
                                        {x?.title}
                                    </Title>
                                </div>
                                <p className={cn(
                                    "w-[365px] font-roboto text-[14px] font-semibold leading-6",
                                    {"text-orange-pressed-3": x?.theme == "orange"},
                                    {"text-light": x?.theme == "purple"}
                                    )}>
                                    Show off your skill as an application developer, explore widely with us!
                                </p>
                                <div className="mt-[72px] gap-[10px] flex">
                                    <div>
                                        <CButton
                                        theme={x?.theme}>
                                            Guide Book
                                        </CButton>
                                    </div>

                                    <div>
                                        <CButton
                                        theme={x?.theme}>
                                            Log In
                                        </CButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 mt-[220px] mr-[100px] w-[592px] h-[395px] rounded-[20px] bg-light">
                        
                        </div>
                    </div>

                    <div className={cn(
                        "relative mt-[68px] w-full h-full z-0",
                        {"mt-[88px]" : x?.theme == "orange"},
                        {"mt-[68px]" : x?.theme == "purple"}
                        )}>
                        <Wave theme={x?.theme}></Wave>
                        <div className={cn(
                            "absolute top-0 left-0 z-10",
                            {"mt-[185px] ml-[79px]":x?.theme=="orange"},
                            {"mt-[245px] ml-[79px]":x?.theme=="purple"},
                            )}>
                            <CompFooter theme={x?.theme}></CompFooter>
                        </div>
                    </div>
                </div>
        </>
    )
}

const Timeline: React.FC = () =>{
    return(
        <>
            <div className="relative overflow-hidden duration-100 transition-all ease-in-out">
                <div className="w-[964px] h-[778px] h-full flex mx-[238px] mt-[135px] mb-[111px] z-10">
                    <div className="z-10">
                        <div className="mt-[15px]">
                            <Timebox 
                            date={x?.timeline[0][0]}
                            event={x?.timeline[0][1]}
                            img={x?.timeline[0][2]}
                            side="left"
                            theme={x?.theme}
                            ></Timebox>
                        </div>

                        <div className="w-[126px] h-[80px mt-[21px] ml-[252px]">
                            <img 
                            src={ToRight}
                            alt="line"
                            ></img>
                        </div>

                        <div className="mt-[101px]">
                            <Timebox 
                            date={x?.timeline[2][0]}
                            event={x?.timeline[2][1]}
                            img={x?.timeline[2][2]}
                            side="left"
                            theme={x?.theme}
                            ></Timebox>
                        </div>

                        <div className="w-[126px] h-[80px] mt-[21px] ml-[252px]">
                        <img 
                            src={ToRight}
                            alt="line"
                            ></img>
                        </div>

                        <div className="mt-[101px]">
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
                        <div className="mt-[176px]">
                            <Timebox 
                            date={x?.timeline[1][0]}
                            event={x?.timeline[1][1]}
                            img={x?.timeline[1][2]}
                            side="right"
                            theme={x?.theme}
                            ></Timebox>
                        </div>

                        <div className="w-[126px] h-[80px] mt-[21px]">
                            <img 
                            src={ToLeft}
                            alt="line"
                            ></img>
                        </div>

                        <div className="mt-[101px]">
                            <Timebox 
                            date={x?.timeline[3][0]}
                            event={x?.timeline[3][1]}
                            img={x?.timeline[3][2]}
                            side="right"
                            theme={x?.theme}
                            ></Timebox>
                        </div>

                        <div className="w-[126px] h-[80px] mt-[21px]">
                            <img 
                            src={ToLeft}
                            alt="line"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 mt-[50px] z-0">
                    <div className={cn(
                            "relative w-full h-full z-0",
                            {"mt-[88px]" : x?.theme == "orange"},
                            {"mt-[68px]" : x?.theme == "purple"}
                            )}>
                            <Wave theme={x?.theme}></Wave>
                        <div className={cn(
                            "absolute top-0 left-0 z-0",
                            {"mt-[185px] ml-[79px]":x?.theme=="orange"},
                            {"mt-[245px] ml-[79px]":x?.theme=="purple"},
                            )}>
                            <CompFooter theme={x?.theme}></CompFooter>
                        </div>
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
            <div className="relative overflow-hidden">
                <div className="relative w-[1100px] h-[602px] ml-[120px] my-[211px] pt-[26px] z-10">
                    {isOrange ? (
                        <img src={overviewBox}></img>
                    ):(
                        <img src={purpleOverviewBox}></img>
                    )}

                    <div className={cn(
                        "absolute top-0 right-0 w-[292px] h-[60px] rounded-[20px] mt-[26px] cursor-pointer",
                        {"bg-orange-primary-3" : x?.theme == "orange"},
                        {"bg-[#5B2CD3]" : x?.theme == "purple"}
                        )}>
                        <div className="w-[30px] h-[30px] my-[15px] ml-[18px] bg-light rounded-full">
                            {isOrange?(
                                <img src={orangeSUB} className="p-[5px]"></img>
                            ):(
                                <img src={purpleSUB} className="p-[5px]"></img>
                            )}
                        </div>
                        <p className="absolute top-0 left-0 ml-[62px] mt-[20px] text-light text-[14px] font-bold">Daftar disini!</p>
                    </div>

                    <div className={cn(
                        "absolute w-[731px] h-[55px] top-0 left-0 rounded-[20px] text-center mt-[64px] ml-[27px]",
                        {"bg-orange-purple" : x?.theme == "orange"},
                        {"bg-[#C8BDE6]" : x?.theme == "purple"}
                        )}>
                        <Title theme={x?.theme}>{x?.title}</Title>
                    </div>
                    <div className="flex">
                        <div className="absolute w-[621px] h-[386px] top-0 left-0 bg-light mt-[144px] ml-[27px]"></div>
                        <div>
                            <div className="absolute w-[351px] top-0 right-0 mt-[144px] mr-[34px]">
                                <p className={cn(
                                    "text-justify font-roboto text-[11px] font-normal",
                                    {"font-fredoka text-light":x?.theme=="purple"}
                                    )}>
                                        Peserta ditantang untuk membuat aplikasi yang memiliki dapat membantu pekerjaan atau bisa menyelesaikan suatu permasalahan yang ada disekitar. Peserta akan dinilai dari aplikasi yang dibuat dari segi bagaimana aplikasi tersebut bisa membantu pekerjaan manusia dan bagaimana aplikasi tersebut bisa menyelesaikan suatu permasalahan.Tema dari perlombaan App Dev ini yaitu:
                                    <ul className="list-disc pl-6 space-y-[1px]">
                                        <li>Kesehatan</li>
                                        <li>Ekonomi</li>
                                        <li>Edukasi</li>
                                        <li>Transportasi</li>
                                        <li>Pelayanan Publik</li>
                                        <li>Keamanan</li>
                                    </ul>
                                </p>
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
                                            )}>Poolprize</p>
                                    </div>

                                    <div className={cn(
                                        "absolute w-[23px] h-[23px] top-0 left-0 mt-[-7px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
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
                                    </div>

                                    <div className={cn(
                                        "absolute w-[23px] h-[23px] top-0 left-0 mt-[-7px] ml-[-12px] bg-light rounded-full border-[#FE874F] border-[2px]",
                                        {"border-[#3A0D49]":x?.theme=="purple"}
                                        )}>
                                        {isOrange?(
                                            <img src={categoryIconOrange} className="pl-[1px]"></img>
                                        ):(
                                            <img src={categoryIconPurple} className="pl-[1px]"></img>
                                        )}
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
                                        )}>1-3 Orang</p>
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

                                {/* CONTACT PERSON */}
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
                                    <div className="p-[16px] text-[9px] font-fredoka font-medium gap-[7px]">
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

                                {/* PRIZE */}
                                <div className={cn(
                                    "absolute w-[118px] h-[19px] rounded bg-gradient-to-l from-[#FFA567] to-[#FE874F] mt-[130px] ml-[221px] rounded",
                                    {"bg-gradient-to-r from-[#3A0D49] to-[#7B2A62]": x?.theme == "purple"}
                                    )}>
                                    <p className={cn(
                                        "text-[9px] ml-[14px] my-[3px] font-fredoka font-medium",
                                        {"text-light":x?.theme=="purple"}
                                        )}>5 jt ++ dan e-certif</p>
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

                            <div className={cn(
                                "absolute bottom-0 left-0 w-[1045px] h-[60px] p-[2px] ml-[27px] mb-[-14px] rounded-[20px] border-[2px] border-[#FD874E] bg-orange-primary-5",
                                {"bg-[#C8BDE6] border-[#9888C3]":x?.theme=="purple"}
                                )}>
                                <div className="w-[188px] h-[30px] mt-[12px] ml-[461px] gap-[12px] flex">
                                    {isOrange?(
                                        <div className="w-[30px] h-[30px] rounded-full border-[2px] border-[#E24BB3]"></div>
                                    ):(
                                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-b from-[#E24BB3] to-[#FB8A4A] content-center">
                                            <div className="w-[27px] h-[27px] mx-auto my-auto rounded-full bg-[#C8BDE6]"></div>
                                        </div>
                                    )}
                                    <p className={cn(
                                        "text-justify font-airstrike text-[20px] font-normal text-mage-orange",
                                        {"text-[#3A0D49]":x?.theme=="purple"}
                                        )}>GUIDEBOOK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 mt-[50px]">
                    <div className={cn(
                            "relative w-full h-full z-0",
                            {"mt-[88px]" : x?.theme == "orange"},
                            {"mt-[68px]" : x?.theme == "purple"}
                            )}>
                            <Wave theme={x?.theme}></Wave>
                        <div className={cn(
                            "absolute top-0 left-0 z-10",
                            {"mt-[185px] ml-[79px]":x?.theme=="orange"},
                            {"mt-[245px] ml-[79px]":x?.theme=="purple"},
                            )}>
                            <CompFooter theme={x?.theme}></CompFooter>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Competition(){
    const pages: React.FC[] = [Home,About,Timeline,Overview]
    const [currentIndex, setCurrentIndex] = useState(0)
    const isFirstSlide = currentIndex === 0
    const isLastSlide = currentIndex === 3
    const currentRoute = window.location.pathname.split('/')[1];
    const isOrange = x?.theme === "orange"

    const prevPage = () => {
        const newIndex = currentIndex - 1
        setCurrentIndex(newIndex)
        console.log(currentIndex)
    }

    const nextPage = () => {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex)
        console.log(currentIndex)
    }

    if(isFirstSlide){
        return(
            <>
                <main className={cn(
                    "w-full h-full relative overflow-hidden",
                    {"bg-orange-grad-4":currentRoute == "app"},
                    {"bg-purple-grad-4":currentRoute == "game"},
                    )}>
                    <Navbar/>
                    {React.createElement(pages[currentIndex])}
                    <div>
                        {isOrange ? (
                            <img
                            src={NextArrow}
                            alt="Next"
                            className="absolute top-0 right-0 mt-[470px] ml-[1270px] z-auto cursor-pointer"
                            onClick={nextPage}
                            ></img>
                        ):(
                            <img
                            src={NextArrow2}
                            alt="Next"
                            className="absolute top-0 right-0 mt-[470px] ml-[1270px] z-auto cursor-pointer"
                            onClick={nextPage}
                            ></img>
                        )}
                    </div>
                </main>
            </>
        )
    } else if(isLastSlide){
        return(
            <>
                <main className={cn(
                    "w-full h-full relative",
                    {"bg-orange-grad-4":currentRoute == "app"},
                    {"bg-purple-grad-4":currentRoute == "game"},
                    )}>
                    <Navbar/>
                    {React.createElement(pages[currentIndex])}
                    <div>
                        {isOrange?(
                            <img
                            src={PrevArrow}
                            alt="Prev"
                            className="absolute mt-[-527px] ml-[8px] z-auto cursor-pointer"
                            onClick={prevPage}
                            ></img>
                        ):(
                            <img
                            src={PrevArrow2}
                            alt="Prev"
                            className="absolute mt-[-527px] ml-[8px] z-auto cursor-pointer"
                            onClick={prevPage}
                            ></img>
                        )}
                    </div>
                </main>
            </>
        )
    } else{
        return(
            <>
                <main className={cn(
                    "w-full h-full relative",
                    {"bg-orange-grad-4":currentRoute == "app"},
                    {"bg-purple-grad-4":currentRoute == "game"},
                    )}>
                    <Navbar/>
                    {React.createElement(pages[currentIndex])}
                    <div>
                        {isOrange?(
                            <div>
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
                            </div>
                        ):(
                            <div>
                                <img
                                src={NextArrow2}
                                alt="Next"
                                className="absolute mt-[-527px] ml-[1260px] z-auto cursor-pointer"
                                onClick={nextPage}
                                ></img>
                                <img
                                src={PrevArrow2}
                                alt="Prev"
                                className="absolute mt-[-527px] ml-[8px] z-auto cursor-pointer"
                                onClick={prevPage}
                                ></img>
                            </div>
                        )}
                    </div>

                </main>
            </>
        )
    }
}
