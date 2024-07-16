import React from 'react';

type Event = {
  label: string;
  date: string;
  color: string;
};

type TimelineProps = {
  events: Event[];
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="relative flex justify-between items-center p-4">
            {events.map((event, index) => (
                <div key={index} className="relative flex flex-col items-center">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-purple-orange-1"
                        style={{
                            WebkitBackgroundClip: 'padding-box',
                            color: 'transparent',
                        }}
                    ></div>
                    <div className="mt-2 text-center">
                        <p className="text-sm">{event.label}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                    {index < events.length - 1 && (
                        <div
                            className="absolute top-6 left-6 w-full h-px bg-blue-purple-orange-1"
                            style={{
                                height: '2px',
                                width: 'calc(100% - 3rem)', // Adjust the width accordingly
                                margin: '0 auto',
                                borderRadius: '1px',
                            }}
                        ></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Timeline;
