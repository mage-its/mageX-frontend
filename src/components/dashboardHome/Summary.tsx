import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion } from 'framer-motion';
import { useUserData } from '@/services/users'; // API
import SummaryLogo from '@/assets/dashboardHome/summaryLogo.svg';
import TeamLogo from '@/assets/dashboardHome/teamLogo.svg'
import CalendarLogo from '@/assets/dashboardHome/calendarLogo.svg'
import TrophyLogo from '@/assets/dashboardHome/trophyLogo.svg'
import CheckLogo from '@/assets/dashboardHome/checkLogo.svg'
import PersonLogo from '@/assets/dashboardHome/personLogo.svg'
import LocationLogo from '@/assets/dashboardHome/locationLogo.svg'
import TimeLogo from '@/assets/dashboardHome/timeLogo.svg'
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
        <div className="">
            <span className="">
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

    if (summary.type === 'X') {
        return null; // Return nothing for type X
    }

    return (
        <div className="my-2">
            <div 
                className={`flex flex-col justify-between items-center p-2 rounded-[1rem] bg-light cursor-pointer transition-all duration-1000 ease-in-out ${isOpen ? 'shadow-lg' : ''}`} 
            >
                <div className="flex w-full">
                    <div className="w-full">
                        <div className="w-full relative flex text-justify select-none">
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
                                className="font-airstrike font-italic font-bold inline-block
                                           mobile:text-[1rem] ipad:text-[23px] desktop:text-[1rem]" 
                            >
                                {summary.title}
                            </span>
                            <span
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                                className="font-airstrike font-italic font-bold bg-blue-purple-orange-1 inline-block px-1
                                           mobile:text-[1rem] ipad:text-[23px] desktop:text-[1rem]"
                            >
                                {summary.title}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <img src={summary.logo} className="my-auto mobile:w-[12px] ipad:w-[1rem] desktop:w-[12px]"></img>
                            <div className="text-dark font-medium
                                            mobile:text-[12px] ipad:text-[18px] desktop:text-[12px]">
                                {summary.type === 'C' ? (
                                    <div>
                                        {summary.team}
                                    </div>
                                ) : summary.type === 'W' ? (
                                    <div>
                                        <DateWithSuperscript date={summary.date} />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <motion.img 
                        src={RollButton} 
                        className="mobile:w-[20px] ipad:w-[30px] desktop:w-[20px]"
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
                    <img src={DashedLine1} className="my-2 w-full"></img>
                    {summary.type === 'C' ? (
                        <div className="text-dark font-fredoka font-medium justify-center items-center
                                        mobile:text-[12px] ipad:text-[18px] desktop:text-[12px]">
                            {summary.content.map((item, index) => (
                                <div key={index} className="my-2 flex gap-2">
                                    <img src = {PersonLogo} className="my-auto mobile:w-[12px] ipad:w-[1rem] desktop:w-[12px]"></img>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : summary.type === 'W' ? (
                        <div className="text-dark font-fredoka font-medium justify-center items-center
                                        mobile:text-[12px] ipad:text-[18px] desktop:text-[12px]">
                            <div>
                                <div className="flex">
                                    <div className="flex w-[50%] gap-2 text-light_blue">
                                        <img src = {LocationLogo} className="my-auto"></img>
                                        Zoom Meeting
                                    </div>
                                    <div className="flex w-[50%] gap-2">
                                        <img src = {TimeLogo} className="my-auto"></img>
                                        {summary.time}
                                    </div>
                                </div>
                                <a href={summary.link} target="_blank" rel="noopener noreferrer">
                                    <div className="flex mt-2 bg-light_blue w-full h-[2rem] rounded-[1rem] justify-center items-center text-light">
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

    const { data, error, isLoading } = useUserData();

    if (isLoading) return <div className="font-fredoka text-light">Loading...</div>;
    if (error) return <div className="font-fredoka text-light">Error loading user data</div>;

    return (
        <div className="overflow-hidden bg-transparent_black w-full h-full shadow-lg select-none
                        mobile:mt-6 mobile:mx-6 mobile:rounded-[1rem]
                        ipad:mt-6 ipad:mx-[8rem] ipad:rounded-[2rem]
                        desktop:mt-0 desktop:mx-0 desktop:rounded-[2rem]">
            <div className="flex p-4 items-center select-none bg-gray-5 mobile:h-[5rem] ipad:h-[5rem] desktop:h-[3rem]">
                <img src={SummaryLogo}
                     className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] desktop:w-5 desktop:h-5"
                     alt="Summary Logo" />
                <h2 className="text-light font-fredoka ml-[1rem] select-none mobile:text-[23px] ipad:text-[23px] desktop:text-[1rem]">Summary</h2>
            </div>
            <div ref={scrollRef}
                 className="overflow-auto font-fredoka text-light custom-scroll no-scrollbar
                            mobile:h-[80%] mobile:px-4
                            ipad:h-[80%] ipad:px-4
                            desktop:h-[85%] desktop:px-4"
                 style={{ cursor: 'grab' }}>
                <div className="p-2 bg-gray-5 rounded-[24px] w-full justify-center items-center h-fit
                                 mobile:my-4  ipad:my-4  desktop:my-4">
                    <div className="font-medium text-center mobile:text-[23px] ipad:text-[23px] desktop:text-[20px]">
                        {data?.data.nama}
                    </div>
                    <div className="opacity-[70%] text-center mobile:text-[18px] ipad:text-[20px] desktop:text-[10px]">
                        {data?.data.email}
                    </div>
                    <div className="flex my-2 gap-2 text-gray-1 mobile:text-[10px] ipad:text-[18px] desktop:text-[10px]">
                        <div className="flex gap-1 items-center justify-center bg-light rounded-[2rem] h-[1.5rem] 
                                        mobile:w-fit mobile:px-4 mobile:mx-auto
                                        ipad:w-fit ipad:px-8 ipad:mx-auto
                                        desktop:w-[50%]">
                            <img src={CheckLogo} className=""></img>
                            Verifikasi E-mail
                        </div>
                        <div className="flex gap-1 items-center justify-center bg-light rounded-[2rem] h-[1.5rem] 
                                        mobile:w-fit mobile:px-4 mobile:mx-auto
                                        ipad:w-fit ipad:px-8 ipad:mx-auto
                                        desktop:w-[50%]">
                            <img src={CheckLogo} className=""></img>
                            Kelengkapan Profil
                        </div>
                    </div>
                </div>
                <div className="flex font-fredoka">
                    <img src={TrophyLogo} className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] desktop:w-5 desktop:h-5"></img>
                    <p className="ml-[1rem] select-none mobile:text-[23px] ipad:text-[23px] desktop:text-[1rem] justify-center">
                        Competitions
                    </p>
                </div>
                {competitions.map((competition) => (
                    <SummaryContent key={competition.id} summary={competition} />
                ))}
                <img src={DashedLine2} className="my-4 w-full"></img>
                <div className="flex font-fredoka">
                    <img src={TrophyLogo} className="select-none mmobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] desktop:w-5 desktop:h-5"></img>
                    <p className="ml-[1rem] select-none mobile:text-[23px] ipad:text-[23px] desktop:text-[1rem] justify-center">
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
            title: 'Robotics',
            type: 'X', // C = Competitions, W = Workshop, X = none
            content: ['Jean', 'Diluc', 'Klee'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Mondstadt',
            logo: TeamLogo
        },
        {
            id: 2,
            title: 'Game Dev',
            type: 'X',
            content: ['Hu Tao', 'Xingqiu', 'Chongyun'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Liyue',
            logo: TeamLogo
        },
        {
            id: 3,
            title: 'IoT',
            type: 'X',
            content: ['Kamisato Ayato', 'Kamisato Ayaka', 'Yoimiya'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Inazuma',
            logo: TeamLogo
        },
        {
            id: 4,
            title: 'App Dev',
            type: 'X',
            content: ['Alhaitham', 'Nahida', 'Nilou'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Sumeru',
            logo: TeamLogo
        },
        {
            id: 5,
            title: 'UI/UX',
            type: 'X',
            content: ['Furina', 'Neuvillette', 'Focalor'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Fontaine',
            logo: TeamLogo
        },
        {
            id: 6,
            title: 'Comp. Programming',
            type: 'X',
            content: ['Nicole Demara', 'Anby Demara', 'Billy Kid'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Cunning Hares',
            logo: TeamLogo
        },
        {
            id: 7,
            title: 'E-sports',
            type: 'X',
            content: ['Kafka', 'Silver Wolf', 'Firefly'],
            date: '-',
            time: '-',
            link: '-',
            team: 'Stellaron Hunters',
            logo: TeamLogo
        },
    ];

    const workshop: SummaryProps[] = [
        {
            id: 1,
            title: 'MULTIMEDIA',
            type: 'X', // W = Workshop
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: 'Wednesday, July 21th, 2024',
            time: '01:00 PM - 04:00 PM',
            link: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=6',
            team: '-',
            logo: CalendarLogo
        },
        {
            id: 2,
            title: 'IOT',
            type: 'X',
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: 'Sunday, August 30th, 2077',
            time: '09:00 AM - 09:00 PM',
            link: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=6',
            team: '-',
            logo: CalendarLogo
        },
        {
            id: 3,
            title: 'ROBOTICS',
            type: 'X',
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