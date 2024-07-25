import cn from "@/utils/cn";
import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";

interface CompetitionCardProps extends HTMLMotionProps<"div"> {
  title: string;
  description: string;
  image: string;
  to: string;
  guidebook?: string;
  isFlipped?: boolean;
  theme?: "orange" | "purple";
}

const CompetitionCard = forwardRef<HTMLDivElement, CompetitionCardProps>(
  function (
    {
      id,
      title,
      description,
      image,
      to,
      isFlipped = false,
      theme = "orange",
      guidebook,
      ...props
    },
    ref
  ) {
    const preventDrag = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "h-full relative select-none rounded-[14px] bg-transparent_white cursor-pointer px-5 py-3 border-none shrink-0 will-change-auto transition-colors duration-300 ease-in-out mobile:w-[12rem] ipad:w-[12rem] lg:w-[7rem]",
          { "hover:bg-purple-grad-1": theme == "purple" },
          { "hover:bg-orange-grad": theme == "orange" }
        )}
        {...props}
      >
        <motion.div
          className="flex flex-col justify-between items-center w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <h1 className="font-roboto font-bold text-light mb-1
                           mobile:text-[20px] ipad:text-[20px] lg:text-[10px]">
              {title}
            </h1>
            <p className="font-fredoka font-regular text-light
                          mobile:text-[17px] ipad:text-[17px] lg:text-[7px]">
              {description}
            </p>
          </div>
          <img onDragStart={preventDrag} src={image} className={cn("my-auto mobile:w-[9rem] ipad:w-[9rem] lg:w-[6vw]", "hover:" )} />
        </motion.div>
      </motion.div>
    );
  }
);

export default CompetitionCard;
