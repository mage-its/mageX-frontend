import cn from "@/utils/cn";

interface SocialMediaCardProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  description: string;
  img: string;
  rotate?: number;
}

export default function SocialMediaCard({
  title,
  description,
  img,
  href,
  className,
  rotate = 0,
  ...props
}: SocialMediaCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      <span
        className={cn(
          "flex flex-row items-center w-[190px] sm:w-[330px] bg-vertical-gta p-2 sm:p-4 rounded-xl sm:rounded-[20px] gap-4",
          className
        )}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <div className="sm:p-4 p-2 bg-white rounded-full">
          <img src={img} alt={img} className="w-3 sm:w-[33px]" />
        </div>
        <div className="font-fredoka flex flex-col gap-1 text-white">
          <p className="font-medium text-xs sm:text-xl">{description}</p>
          <p className="font-light text-[7px] sm:text-base">{title}</p>
        </div>
      </span>
    </a>
  );
}
