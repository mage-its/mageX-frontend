import cn from "@/utils/cn";
import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
// import { IconType } from "react-icons";

interface CompetitionCardProps extends HTMLMotionProps<"div"> {
  title: string;
  description: string;
  image: string;
  theme?: "orange" | "purple";
}

const CompetitionCard = forwardRef<HTMLDivElement, CompetitionCardProps>(
  function ({ title, description, image, theme = "orange", ...props }, ref) {
    const preventDrag = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };
    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-[30vw] lg:w-[26vw]  h-[39vw] lg:h-[32vw]  select-none rounded-[14px] md:rounded-3xl xl:rounded-[48px] bg-purple-grad-1 cursor-pointer border-[3px] md:border-[10px] flex flex-col justify-between px-5 lg:px-[25px] 2xl:px-[69px] py-3 lg:py-[25px] 2xl:py-[50px] items-center border-light/50 shrink-0 will-change-auto",
          { "bg-purple-grad-1": theme == "purple" },
          { "bg-orange-grad": theme == "orange" }
        )}
        {...props}
      >
        <div className="">
          <h1 className="font-roboto font-bold text-base md:text-3xl xl:text-5xl text-light mb-1 lg:mb-7">
            {title}
          </h1>
          <p className="font-fredoka font-regular text-[7px] md:text-base xl:text-xl text-light">
            {description}
          </p>
        </div>
        <img onDragStart={preventDrag} src={image} className="w-[13vw]" />
      </motion.div>
    );
  }
);

export default CompetitionCard;
