import cn from "@/utils/cn";
import { HTMLMotionProps, motion } from "framer-motion";
// import { IconType } from "react-icons";

interface CompetitionCardProps extends HTMLMotionProps<"div"> {
  title: string;
  description: string;
  image: string;
  theme?: "orange" | "purple";
  ref?: React.Ref<HTMLDivElement>;
}

export default function CompetitionCard({
  title,
  description,
  image,
  ref,
  theme = "orange",
  ...props
}: CompetitionCardProps) {
  const preventDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <motion.div
      ref={ref}
      className={cn(
        "w-[475px] h-[650px] select-none rounded-[54px] bg-purple-grad-1 cursor-pointer border-[10px] flex flex-col justify-between px-[69px] py-[50px] items-center border-light/50 shrink-0 will-change-auto",
        { "bg-purple-grad-1": theme == "purple" },
        { "bg-orange-grad": theme == "orange" }
      )}
      {...props}
    >
      <div>
        <h1 className="font-roboto font-bold text-6xl text-light mb-7">
          {title}
        </h1>
        <p className="font-fredoka font-regular text-xl text-light">
          {description}
        </p>
      </div>
      <img onDragStart={preventDrag} src={image} />
    </motion.div>
  );
}
