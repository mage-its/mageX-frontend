import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Logo from '@/assets/dashboardHome/announcementsLogo.svg';
import useDragScroll from './useDragScroll'; 

interface AnnouncementProps {
    id: number;
    title: string;
    content: string;
    date: string;
}

const Announcement: React.FC<{ announcement: AnnouncementProps }> = ({ announcement }) => {
    return (
        <div className="p-2 text-light font-fredoka overflow-hidden">
            <div className="font-medium mobile:text-[18px] ipad:text-[18px] desktop:text-[14px]">{announcement.title}</div>
            <div className="font-light mt-1 mobile:text-[14px] ipad:text-[14px] desktop:text-[10px]">{announcement.content}</div>
            <div className="font-extralight mt-1 mobile:text-[12px] ipad:text-[12px] desktop:text-[8px]">{announcement.date}</div>
        </div>
    );
};

const AnnouncementsList: React.FC<{ announcements: AnnouncementProps[] }> = ({ announcements }) => {
    const scrollRef = useDragScroll();

    return (
        <div className="w-full h-full overflow-hidden flex-col shadow-lg select-none
                        mobile:mt-6 mobile:mx-6 mobile:rounded-[1rem]
                        ipad:mt-6 ipad:mx-[8rem] ipad:rounded-[2rem]
                        desktop:mt-0 desktop:mx-0 desktop:rounded-[2rem]">
            <div className="flex p-4 items-center select-none bg-gray-5 mobile:rounded-t-[1rem] ipad:rounded-t-[2rem]
                            mobile:h-[5rem] ipad:h-[5rem] desktop:h-[3rem]">
                <img src={Logo} className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] desktop:w-5 desktop:h-5" alt="Announcements Logo" />
                <h2 className="text-light font-fredoka mx-[1rem] select-none
                                mobile:text-[23px] ipad:text-[23px] desktop:text-[1rem]">Announcements</h2>
            </div>
            <div ref={scrollRef} className="flex-1 p-2 w-full bg-transparent_black overflow-auto custom-scroll no-scrollbar
                                            mobile:h-[85%] ipad:h-[90%] desktop:h-[90%]"
                                style={{ cursor: 'grab' }}>
                {announcements.map((announcement) => (
                    <Announcement key={announcement.id} announcement={announcement} />
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const announcements: AnnouncementProps[] = [
        { id: 1, title: 'Furina 1', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
        { id: 2, title: 'Furina 2', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 3, title: 'Furina 3', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        { id: 4, title: 'Furina 4', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
        { id: 5, title: 'Furina 5', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 6, title: 'Furina 6', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        { id: 7, title: 'Furina 7', content: 'Furina dolor sit amet, consectetur adipiscing elit, Furina best girl uwu  incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
        { id: 8, title: 'Furina 8', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 9, title: 'Furina 9', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
    ];

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex w-full h-full justify-center select-none">
                <AnnouncementsList announcements={announcements} />
            </div>
        </DndProvider>
    );
};

export default App;
