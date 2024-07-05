import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion } from 'framer-motion';
import SummaryLogo from '@/assets/dashboardHome/summaryLogo.svg';
import TeamLogo from '@/assets/dashboardHome/teamLogo.svg'
import CalendarLogo from '@/assets/dashboardHome/calendarLogo.svg'
import TrophyLogo from '@/assets/dashboardHome/trophyLogo.svg'
import CheckLogo from '@/assets/dashboardHome/checkLogo.svg'
import PersonLogo from '@/assets/dashboardHome/personLogo.svg'
import DashedLine1 from '@/assets/dashboardHome/dashedLine1.svg'
import DashedLine2 from '@/assets/dashboardHome/dashedLine2.svg'
import RollButton from '@/assets/dashboardHome/summaryRollButton.svg';
import useDragScroll from './useDragScroll';  // Import the custom hook

interface SummaryProps {
    id: number;
    type: string;
    title: string;
    content: string[];
    team: string;
    date: string;
    time: string;
    link: string;
    logo: string;
}

const DateWithSuperscript: React.FC<{ date: string }> = ({ date }) => {
    // Split the date string into parts before and after "21th"
    const [before, after] = date.split('th');

    return (
        <div className="text-center">
            <span className="text-[12px]">
                {before}
                  <sup>th</sup>
                {after}
            </span>
        </div>
    );
};

const SummaryContent: React.FC<{ summary: SummaryProps }> = ({ summary }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="my-2">
            <div 
                className={`flex flex-col justify-between items-center p-2 rounded-[1rem] bg-light cursor-pointer transition-all duration-1000 ease-in-out ${isOpen ? 'shadow-lg' : ''}`} 
            >
                <div className="flex w-full">
                    <div className="w-full">
                        <div className="relative flex justify-center select-none">
                            <span
                                style={{
                                    position: 'absolute',
                                    color: 'transparent',
                                    textShadow: `
                                        0 0 0 #FFFFFF, 
                                        1px 1px 0 #FFFFFF, 
                                        -1px -1px 0 #FFFFFF, 
                                        1px -1px 0 #FFFFFF, 
                                        -1px 1px 0 #FFFFFF,
                                        2px 2px 0 #FFFFFF,
                                        -2px -2px 0 #FFFFFF,
                                        2px -2px 0 #FFFFFF,
                                        -2px 2px 0 #FFFFFF,
                                        6px 6px 6px #cA4F14,
                                        12px 12px 12px #cA4F14
                                    `,
                                    pointerEvents: 'none',
                                    zIndex: -1
                                }}
                                className="font-airstrike font-italic font-bold text-center w-full inline-block text-[24px]"
                            >
                                {summary.title}
                            </span>
                            <span
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                                className="font-airstrike font-italic font-bold text-justify w-full bg-blue-purple-orange-1 inline-block text-[24px]"
                            >
                                {summary.title}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <img src={summary.logo} className="my-auto"></img>
                            <div className="text-dark font-medium text-[12px]">
                                {summary.type === 'C' ? (
                                    <div>
                                        {summary.team}
                                    </div>
                                ) : summary.type === 'W' ? (
                                    <div className="">
                                        <DateWithSuperscript date={summary.date} />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <motion.img 
                        src={RollButton} 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={toggleOpen}
                    />
                </div>
                
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden w-full"
                >
                    <img src={DashedLine1} className="my-2"></img>
                    {summary.type === 'C' ? (
                        <div className="text-dark text-[12px] font-fredoka font-medium justify-center items-center">
                            {summary.content.map((item, index) => (
                                <div key={index} className="my-2 flex gap-2">
                                    <img src = {PersonLogo} className="w-[1rem] h-[1rem] my-auto"></img>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : summary.type === 'W' ? (
                        <div className="text-dark text-[12px] font-fredoka font-medium justify-center items-center">
                            <div>
                                <div className="flex">
                                    <div className="flex w-[50%] gap-2">
                                        <img src = {PersonLogo} className="w-[1rem] h-[1rem] my-auto"></img>
                                        Zoom Meeting
                                    </div>
                                    <div className="flex w-[50%] gap-2">
                                        <img src = {PersonLogo} className="w-[1rem] h-[1rem] my-auto"></img>
                                        {summary.time}
                                    </div>
                                </div>
                                <a href={summary.link} target="_blank" rel="noopener noreferrer">
                                    <div className="flex mt-2 bg-mage-blue w-full h-[2rem] rounded-[1rem] justify-center items-center text-light">
                                        {summary.link}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ) : null}
                </motion.div>
            </div>
        </div>
    );
};

const SummaryList: React.FC<{ competitions: SummaryProps[], workshops: SummaryProps[] }> = ({ competitions, workshops }) => {
    const scrollRef = useDragScroll();

    return (
        <div className="overflow-hidden bg-transparent_black rounded-[2rem] w-full h-full shadow-lg select-none">
            <div className="flex p-4 items-center h-[4rem] select-none bg-gray-1">
                <img src={SummaryLogo} className="mr-2 w-6 h-6 select-none" alt="Summary Logo" />
                <h2 className="text-light font-fredoka text-xl ml-[1rem] select-none">Summary</h2>
            </div>
            <div ref={scrollRef}
                 className="px-4 h-[80%] overflow-auto font-fredoka text-light custom-scroll no-scrollbar"
                 style={{ cursor: 'grab' }}>
                <div className="my-4 p-2 bg-gray-1 rounded-[24px] w-full h-[8rem] justify-center items-center">
                    <div className="font-medium text-[24px] text-center">
                        Furina
                    </div>
                    <div className="mt-2 opacity-[70%] text-[14px] text-center">
                        furinadefontaine@gmail.com
                    </div>
                    <div className="flex my-2 gap-2 text-gray-1">
                        <div className="flex gap-1 items-center justify-center bg-light rounded-[2rem] h-[2rem] w-[50%]">
                            <img src={CheckLogo} className=""></img>
                            Verifikasi E-mail
                        </div>
                        <div className="flex gap-1 items-center justify-center bg-light rounded-[2rem] h-[2rem] w-[50%]">
                            <img src={CheckLogo} className=""></img>
                            Kelengkapan Profil
                        </div>
                    </div>
                </div>
                <div className="flex font-fredoka">
                    <img src={TrophyLogo} className="mr-2 select-none"></img>
                    <p className="text-xl ml-[1rem] select-none">
                        Competitions
                    </p>
                </div>
                {competitions.map((competition) => (
                    <SummaryContent key={competition.id} summary={competition} />
                ))}
                <img src={DashedLine2} className="my-4"></img>
                <div className="flex font-fredoka">
                    <img src={TrophyLogo} className="mr-2 select-none"></img>
                    <p className="text-xl ml-[1rem] select-none">
                        Workshop
                    </p>
                </div>
                {workshops.map((workshop) => (
                    <SummaryContent key={workshop.id} summary={workshop} />
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const competition: SummaryProps[] = [
        {
            id: 1,
            title: 'E-SPORTS',
            type: 'C', // C = Competitions
            content: ['Jean', 'Diluc', 'Klee'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Mondstadt',
            logo: TeamLogo
        },
        {
            id: 2,
            title: 'COMP. PROGRAMMING',
            type: 'C',
            content: ['Furina', 'Neuvillette', 'Focalor'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Fontaine',
            logo: TeamLogo
        },
    ];

    const workshop: SummaryProps[] = [
        {
            id: 3,
            title: 'MULTIMEDIA',
            type: 'W', // W = Workshop
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: 'Wednesday, July 21th, 2024',
            time: '01:00 PM - 04:00 PM',
            link: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=6',
            team: '-',
            logo: CalendarLogo
        },
        {
            id: 4,
            title: 'IOT',
            type: 'W',
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: 'Sunday, August 30th, 2077',
            time: '09:00 AM - 09:00 PM',
            link: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=6',
            team: '-',
            logo: CalendarLogo
        },
        {
            id: 5,
            title: 'ROBOTICS',
            type: 'W',
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: 'Friday, January 31th, 2099',
            time: '21:00 PM - 00:00 AM',
            link: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=6',
            team: '-',
            logo: CalendarLogo
        },
    ]

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex mx-auto justify-center w-full h-full select-none">
                <SummaryList competitions={competition} workshops={workshop} />
            </div>
        </DndProvider>
    );
};

export default App;