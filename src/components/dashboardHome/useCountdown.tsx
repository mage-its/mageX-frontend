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
    <div className="flex text-[50px] h-full items-center justify-center text-center mt-2">
      <div className="w-[30%] h-full">
        <div className="text-[60px] h-[80%] font-medium leading-none items-center">
          {timeLeft.days}
        </div>
        <div className="text-[15px] h-[20%]">
          Hari
        </div>
      </div>
      <div className="w-[5%] h-full font-medium leading-none"> 
        :
      </div>
      <div className="w-[30%] h-full">
        <div className="text-[60px] h-[80%] font-medium leading-none">
          {timeLeft.hours}
        </div>
        <div className="text-[15px] h-[20%]">
          Jam
        </div>
      </div>
      <div className="w-[5%] h-full font-medium leading-none"> 
        :
      </div>
      <div className="w-[30%] h-full">
        <div className="text-[60px] h-[80%] font-medium leading-none">
          {timeLeft.minutes} 
        </div>
        <div className="text-[15px] h-[20%]">
          Menit
        </div>
      </div>
    </div>
  );
};

export default UseCountdown;
