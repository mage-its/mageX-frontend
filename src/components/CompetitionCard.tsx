import cn from "@/utils/cn";
import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
// import { IconType } from "react-icons";

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
          "w-[30vw] lg:w-[26vw]  h-[39vw] lg:h-[32vw] relative select-none rounded-[14px] md:rounded-3xl xl:rounded-[48px] bg-purple-grad-1 cursor-pointer border-[3px] md:border-[10px]  px-5 lg:px-[25px] 2xl:px-[69px] py-3 lg:py-[25px] 2xl:py-[50px] border-light/50 shrink-0 will-change-auto",
          { "bg-purple-grad-1": theme == "purple" },
          { "bg-orange-grad": theme == "orange" }
        )}
        animate
        {...props}
      >
        <motion.div
          className={cn(
            "flex flex-col justify-between items-center w-full h-full"
          )}
          style={{ backfaceVisibility: "hidden" }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
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
        <motion.div
          className={cn(
            "flex flex-col absolute gap-3 md:gap-10 top-[25%] lg:top-[33%] left-0 w-full h-full"
          )}
          style={{ backfaceVisibility: "hidden", scaleX: -1 }}
          animate={{
            rotateY: isFlipped ? 0 : 180,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
        >
          <a target="_blank" href={guidebook}>
            <button
              className={cn(
                "rounded-xl border-4 font-fredoka px-5 py-1 sm:px-10 sm:py-2.5 text-[8px] md:text-base xl:text-xl",
                {
                  "border-orange-primary-5 bg-orange-grad text-orange-primary-5":
                    theme == "orange",
                },
                {
                  "border-orange-primary-5 bg-purple-gradient text-orange-primary-5":
                    theme == "purple",
                }
              )}
            >
              Guide Book
            </button>
          </a>
          <Link to={to}>
            <button
              className={cn(
                "rounded-xl border-4 font-fredoka px-5 py-1 sm:px-10 sm:py-2.5 text-[8px] md:text-base xl:text-xl",
                {
                  "border-orange-primary-5 bg-orange-grad text-orange-primary-5":
                    theme == "orange",
                },
                {
                  "border-orange-primary-5 bg-purple-gradient text-orange-primary-5":
                    theme == "purple",
                }
              )}
            >
              See Details
            </button>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
);

export default CompetitionCard;
