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
  return (
    <div
      ref={ref}
      className={cn("min-w-max h-max absolute")}
      style={
        order % 2 == 1
          ? { left: 140 + 300 * order - width / 2, top: "41%" }
          : { left: 140 + 300 * order - width / 2, bottom: "48%" }
      }
      {...props}
    >
      {order % 2 === 0 ? (
        <>
          <div className="bg-horizontal-gta h-fit w-fit rounded-xl flex items-center mb-4">
            <div className="m-[3px] bg-gray-1 h-fit w-fit rounded-[10px] p-7">
              <p className="font-roboto font-bold text-2xl text-light">
                {date}
              </p>
              <p className="font-fredoka font-light text-lg text-light max-w-[500px]">
                {title}
              </p>
            </div>
          </div>
          <div className="bg-horizontal-gta w-10 h-10 rounded-full mx-auto" />
        </>
      ) : (
        <>
          <div className="bg-horizontal-gta w-10 h-10 rounded-full mx-auto mb-4" />
          <div className="bg-horizontal-gta h-fit w-fit rounded-xl flex items-center ">
            <div className="m-[3px] bg-gray-1 h-fit w-fit rounded-[10px] p-7">
              <p className="font-roboto font-bold text-2xl text-light">
                {date}
              </p>
              <p className="font-fredoka font-light text-lg text-light max-w-[500px]">
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
  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: -items.length * 300 + window.innerWidth - 300,
        right: 0,
      }}
      className="w-full h-full relative"
    >
      <div className="absolute top-1/2 -translate-y-1/2 h-fit">
        <div className=" absolute top-0 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-3" />
        <div
          ref={timlineRef}
          className="bg-gray-3 h-[5px]"
          style={{ width: items.length * 300 }}
        />
        <div
          className=" absolute top-0 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-3"
          style={{ left: itemsWidth }}
        />
        `
      </div>
      <div className="flex flex-nowrap h-full w-full gap-5 ">
        {items.map((item, index) => (
          <TimelineCard order={index} title={item.title} date={item.date} />
        ))}
      </div>
    </motion.div>
  );
}
