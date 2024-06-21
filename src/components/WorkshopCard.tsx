import cn from "@/utils/cn";
import { motion } from "framer-motion";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  children: string;
}

export default function WorkshopCard({ title, children }: CardProps) {
  return (
    <>
      <motion.div
        whileHover="hover"
        className="w-full lg:w-[395px] h-fit p-3 sm:px-[20px] sm:pt-[20px] sm:pb-[60px] rounded-2xl sm:rounded-[40px] border-[3px] border-gray-2 lg:border-light bg-gray-1 lg:bg-transparent-white-1"
      >
        <div className="w-full h-fit overflow-hidden rounded-lg sm:rounded-[30px]">
          <motion.div
            variants={{
              hover: {
                scale: 1.3,
              },
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0,
              ease: "easeInOut",
            }}
            className={cn(
              "w-full bg-cover scale-110 sm:h-[240px] h-[92px]",
              {
                "bg-[url('@/assets/img/Multimedia.png')]":
                  title == "Multimedia",
              },
              { "bg-[url('@/assets/img/Robotik.png')]": title == "Robotics" },
              {
                "bg-[url('@/assets/img/Iot.png')]":
                  title == "Internet of Things (IoT)",
              }
            )}
          />
        </div>
        <div className="w-full h-[56px] flex-column justify-center items-center gap-[8px] mt-[20px]">
          <p className="text-light text-start lg:text-center font-fredoka text-base sm:text-2xl font-medium">
            {title}
          </p>

          <p className="text-light text-start lg:text-center font-fredoka text-[8px] sm:text-base font-light mt-[8px]">
            {children}
          </p>
        </div>
      </motion.div>
    </>
  );
}
