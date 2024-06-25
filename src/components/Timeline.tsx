import cn from "@/utils/cn";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";

interface TimelineCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  date: string;
  order: number;
}

interface TimelineProps extends React.ComponentPropsWithoutRef<"div"> {
  items: { title: string; date: string }[];
}

export const TimelineCard = ({
  title,
  date,
  order,
  ...props
}: TimelineCardProps) => {
  const [ref, { width }] = useMeasure();
  const timelineCardCenterYPos = window.innerWidth > 640 ? "42%" : "46%";
  const timelineCardXpos = window.innerWidth > 640 ? 300 : 150;
  return (
    <div
      ref={ref}
      className={cn("min-w-max h-max absolute")}
      style={
        order % 2 == 1
          ? {
              left: timelineCardXpos / 2 + timelineCardXpos * order - width / 2,
              top: timelineCardCenterYPos,
            }
          : {
              left: timelineCardXpos / 2 + timelineCardXpos * order - width / 2,
              bottom: timelineCardCenterYPos,
            }
      }
      {...props}
    >
      {order % 2 === 0 ? (
        <>
          <div className="bg-horizontal-gta h-fit w-fit rounded-xl flex items-center mb-4">
            <div className="m-[3px] bg-gray-1 h-fit w-fit rounded-[10px] p-4 sm:p-7">
              <p className="font-roboto font-bold text-xs sm:text-2xl text-light">
                {date}
              </p>
              <p className="font-fredoka font-light text-[8px] sm:text-lg text-light max-w-[213px] sm:max-w-[500px]">
                {title}
              </p>
            </div>
          </div>
          <div className="bg-horizontal-gta w-5 h-5 sm:w-10 sm:h-10 rounded-full mx-auto" />
        </>
      ) : (
        <>
          <div className="bg-horizontal-gta w-5 h-5 sm:w-10 sm:h-10 rounded-full mx-auto mb-4" />
          <div className="bg-horizontal-gta h-fit w-fit rounded-xl flex items-center ">
            <div className="m-[3px] bg-gray-1 h-fit w-fit rounded-[10px] p-4 sm:p-7">
              <p className="font-roboto font-bold text-xs sm:text-2xl text-light">
                {date}
              </p>
              <p className="font-fredoka font-light text-[8px] sm:text-lg text-light max-w-[213px] sm:max-w-[500px]">
                {title}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function Timeline({ items }: TimelineProps) {
  const [timlineRef, { width: itemsWidth }] = useMeasure();
  const timelineCardXpos = window.innerWidth > 640 ? 300 : 150;

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left:
          -items.length * timelineCardXpos +
          window.innerWidth -
          timelineCardXpos,
        right: 0,
      }}
      className="w-full h-full relative"
    >
      <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-gray-3" />
      <div
        ref={timlineRef}
        className="bg-gray-3 h-[3px] sm:h-[5px] absolute top-1/2 -translate-y-1/2"
        style={{ width: items.length * timelineCardXpos }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-gray-3"
        style={{ left: itemsWidth }}
      />
      <div className="flex flex-nowrap h-full w-full gap-5 ">
        {items.map((item, index) => (
          <TimelineCard order={index} title={item.title} date={item.date} />
        ))}
      </div>
    </motion.div>
  );
}
