import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Logo from '@/assets/dashboardHome/announcementsLogo.svg';
import useDragScroll from './useDragScroll';  // Import the custom hook

interface AnnouncementProps {
    id: number;
    title: string;
    content: string;
    date: string;
}

const Announcement: React.FC<{ announcement: AnnouncementProps }> = ({ announcement }) => {
    return (
        <div className="p-4 font-fredoka">
            <div className="text-light font-bold">{announcement.title}</div>
            <div className="text-light">{announcement.content}</div>
            <div className="text-light text-sm">{announcement.date}</div>
        </div>
    );
};

const AnnouncementsList: React.FC<{ announcements: AnnouncementProps[] }> = ({ announcements }) => {
    const scrollRef = useDragScroll();

    return (
        <div className="overflow-hidden flex-col w-full h-full rounded-[2rem] shadow-lg select-none">
            <div className="flex p-4 items-center select-none bg-gray-1">
                <img src={Logo} className="mr-2 w-6 h-6 ml-[1rem] select-none" alt="Announcements Logo" />
                <h2 className="text-light font-fredoka text-xl ml-[1rem] select-none">Announcements</h2>
            </div>
            <div ref={scrollRef} className="p-4 flex-1 h-[40vh] bg-dark opacity-[80%] overflow-auto custom-scroll no-scrollbar" style={{ cursor: 'grab' }}>
                {announcements.map((announcement) => (
                    <Announcement key={announcement.id} announcement={announcement} />
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const announcements: AnnouncementProps[] = [
        { id: 1, title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna awdadawdaaaaaaaaaaaaaaaaaaaaaaaa', date: '04 April 2024 7:29 PM' },
        { id: 2, title: 'Lorem Ipsum 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 3, title: 'Lorem Ipsum 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        { id: 4, title: 'Lorem Ipsum 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
        { id: 5, title: 'Lorem Ipsum 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 6, title: 'Lorem Ipsum 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        { id: 7, title: 'Lorem Ipsum 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:29 PM' },
        { id: 8, title: 'Lorem Ipsum 8', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:30 PM' },
        { id: 9, title: 'Lorem Ipsum 9', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', date: '04 April 2024 7:31 PM' },
        // Placeholder in the bottom to increase slide height
        // Add more announcements as needed
    ];

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex mx-auto justify-center select-none">
                <AnnouncementsList announcements={announcements} />
            </div>
        </DndProvider>
    );
};

export default App;
