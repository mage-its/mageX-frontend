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
            <div className="text-[14px] font-medium">{announcement.title}</div>
            <div className="text-[10px] font-light mt-1">{announcement.content}</div>
            <div className="text-[8px] font-extralight mt-1">{announcement.date}</div>
        </div>
    );
};

const AnnouncementsList: React.FC<{ announcements: AnnouncementProps[] }> = ({ announcements }) => {
    const scrollRef = useDragScroll();

    return (
        <div className="w-full h-full overflow-hidden flex-col rounded-[2rem] shadow-lg select-none">
            <div className="flex p-4 w-full h-[3rem] items-center select-none bg-gray-5">
                <img src={Logo} className="w-5 h-5 select-none" alt="Announcements Logo" />
                <h2 className="text-light font-fredoka text-[1rem] ml-[1rem] select-none">Announcements</h2>
            </div>
            <div ref={scrollRef} className="flex-1 h-[90%] p-2 w-full bg-transparent_black overflow-auto custom-scroll no-scrollbar" style={{ cursor: 'grab' }}>
                {announcements.map((announcement) => (
                    <Announcement key={announcement.id} announcement={announcement} />
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const announcements: AnnouncementProps[] = [
        { id: 1, title: 'Furina 1', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna awdadawdaaaaaaaaaaaaaaaaaaaaaaaa', date: '04 April 2024 7:29 PM' },
        { id: 2, title: 'Furina 2', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 3, title: 'Furina 3', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        { id: 4, title: 'Furina 4', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
        { id: 5, title: 'Furina 5', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 6, title: 'Furina 6', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        { id: 7, title: 'Furina 7', content: 'Furina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
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
