import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UseCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate, timeLeft]);

  return (
    <div className="flex text-[60px] items-center justify-center text-center">
      <div className="w-[20%] h-full">
        <div className="text-[60px] text-left h-[50%]">
          {timeLeft.days}
        </div>
        <div className="text-[15px]">
          Hari
        </div>
      </div>
      <div className="w-[20%] h-[50%]"> 
        :
      </div>
      <div className="w-[20%] h-full">
        <div className="text-[60px] text-left h-[50%]">
          {timeLeft.hours}
        </div>
        <div className="text-[15px] h-[50%]">
          Jam
        </div>
      </div>
      <div className="w-[20%] h-[50%]"> 
        :
      </div>
      <div className="w-[20%] h-full">
        <div className="text-[60px] text-left h-[50%]">
          {timeLeft.minutes} 
        </div>
        <div className="text-[15px] h-[50%]">
          Menit
        </div>
      </div>
    </div>
  );
};

export default UseCountdown;
