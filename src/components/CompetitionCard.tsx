import cn from "@/utils/cn";
import { IconType } from "react-icons";

interface CompetitionCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  image: string;
  theme?: "orange" | "purple";
}

export default function CompetitionCard({
  title,
  description,
  image,
  theme = "orange",
  ...props
}: CompetitionCardProps) {
  return (
    <div
      className={cn(
        "w-[475px] h-[650px] rounded-[54px] bg-purple-grad-1 border-[10px] flex flex-col justify-between px-[69px] py-[50px] items-center border-light/50 shrink-0 will-change-auto",
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
      <img src={image} />
    </div>
  );
}
