import cn from "@/utils/cn";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  children: string;
}

export default function WorkshopCard({ title, children }: CardProps) {
  return (
    <>
      <motion.div
        whileHover="hover"
        className="w-[396px] h-fit px-[20px] pt-[20px] pb-[60px] flex-column items-start gap-20px flex-[1_0_0%] rounded-[40px] border-[3px] border-[#FFFFFF] bg-transparent-white-1 overflow-hidden"
      >
        <div className="w-full h-fit overflow-hidden rounded-[30px]">
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
              "w-full bg-cover scale-110 h-[240px] rounded-[30px] ",
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
        <div className="w-full h-[56px] flex-column justify-center items-center gap-[8px] self-stretch mt-[20px]">
          <p className="text-light text-center font-fredoka text-2xl font-medium">
            {title}
          </p>

          <p className="text-light text-center font-fredoka text-base font-light mt-[8px]">
            {children}
          </p>
        </div>
      </motion.div>
    </>
  );
}
