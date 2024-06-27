import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion } from 'framer-motion';
import Logo from '@/assets/dashboardHome/summaryLogo.svg';
import RollButton from '@/assets/dashboardHome/summaryRollButton.svg';
import useDragScroll from './useDragScroll';  // Import the custom hook

interface SummaryProps {
    id: number;
    title: string;
    content: string[];
    date: string;
}

const Summary: React.FC<{ summary: SummaryProps }> = ({ summary }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-2">
            <div className="flex justify-between items-center p-4 bg-gray-1 cursor-pointer">
                <h2 className="text-light text-xl font-semibold">{summary.title}</h2>
                <motion.img 
                    src={RollButton} 
                    onClick={() => setIsOpen(!isOpen)}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ height: { duration: 0.3 }, opacity: { duration: 0.3 } }}
                className="overflow-hidden"
            >
                <div className="p-4 bg-dark">
                    {summary.content.map((item, index) => (
                        <div key={index} className="text-light my-2">
                            <span className="material-icons mr-2">person</span>
                            {item}
                        </div>
                    ))}
                    <div className="text-light text-sm">{summary.date}</div>
                </div>
            </motion.div>
        </div>
    );
};

const SummaryList: React.FC<{ summaries: SummaryProps[] }> = ({ summaries }) => {
    const scrollRef = useDragScroll();

    return (
        <div className="overflow-hidden rounded-[2rem] w-full h-full shadow-lg select-none">
            <div className="flex p-4 items-center select-none bg-gray-1">
                <img src={Logo} className="mr-2 w-6 h-6 ml-[1rem] select-none" alt="Summary Logo" />
                <h2 className="text-light text-xl font-semibold ml-[1rem] select-none">Summary</h2>
            </div>
            <div ref={scrollRef} className="p-4 bg-dark opacity-[80%] overflow-auto custom-scroll no-scrollbar" style={{ maxHeight: '35rem', cursor: 'grab' }}>
                {summaries.map((summary) => (
                    <Summary key={summary.id} summary={summary} />
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const summaries: SummaryProps[] = [
        {
            id: 1,
            title: 'E-SPORTS',
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: '2024-06-25',
        },
        {
            id: 2,
            title: 'COMP. PROGRAMMING',
            content: ['Lorem Ipsum Lorem', 'Lorem Ipsum Lorem', 'Lorem Ipsum Lorem'],
            date: '2024-06-25',
        },
    ];

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex mx-auto justify-center select-none">
                <SummaryList summaries={summaries} />
            </div>
        </DndProvider>
    );
};

export default App;
