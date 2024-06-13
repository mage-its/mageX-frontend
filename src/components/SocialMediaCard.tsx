import cn from "@/utils/cn";

interface SocialMediaCardProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
  description: string;
  img: string;
  rotate?: number;
}

export default function SocialMediaCard({ title, description, img, href, className, rotate=0, ...props }: SocialMediaCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      {...props}
    >
      
      <span className="flex flex-row items-center w-[350px] bg-vertical-gta p-4 rounded-[20px] gap-4" style={{transform: `rotate(${rotate}deg)`}}>
        <div className="p-4 bg-white rounded-full">
          <img src={img} alt={img} />
        </div>
        <div className="font-fredoka flex flex-col gap-1 text-white">
          <p className="font-medium text-xl">{description}</p>
          <p className="font-light text-base">{title}</p>
        </div>
      </span>
    </a>
  );
}