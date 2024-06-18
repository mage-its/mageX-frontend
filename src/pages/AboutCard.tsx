import cn from "@/utils/cn";
import { motion } from "framer-motion";

interface AboutCardProps extends React.ComponentPropsWithRef<"div"> {
  title: string;
  desc: string;
  img: string;
}

export default function AboutCard({
  title,
  desc,
  img,
  ref,
  ...props
}: AboutCardProps) {
  return (
    <div
      ref={ref}
      className="relative max-w-[200px] sm:max-w-[300px] max-h-fit"
      {...props}
    >
      <img src={img} alt="about" className="w-full object-cover rounded-3xl" />
      <div
        // whileHover={{ opacity: 1 }}
        // initial={{ opacity: 0 }}
        className={cn(
          "bg-black/50 h-full w-full absolute top-0 left-0 rounded-3xl items-center justify-center flex",
          "opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 ease-in-out"
        )}
      >
        <div className="rounded-xl border-light border-2 sm:w-[270px] w-[170px] h-fit p-4 text-center">
          <h2 className="font-roboto font-extrabold sm:text-2xl text-xl text-light">
            {title}
          </h2>
          <p className="font-fredoka font-regular sm:text-base text-xs text-light">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
