import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";

interface DashboardSummaryItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  competition: string;
  teamName: string;
  teamMembers: string[];
}

export default function DashboardSummaryItem({
  competition,
  teamName,
  teamMembers,
  ...props
}: DashboardSummaryItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);
  const expansionControl = useAnimation();
  useEffect(() => {
    if (isExpanded) {
      expansionControl.start("visible");
    } else {
      expansionControl.start("hidden");
    }
  }, [isExpanded, expansionControl]);
  return (
    <div
      className="md:px-2 md:pb-1.5 pb-1 px-1.5 bg-white rounded-lg overflow-hidden"
      {...props}
    >
      <div
        className={cn("flex items-center justify-between", {
          "mb-2": isExpanded,
        })}
      >
        <div>
          <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-[20px]">
            {competition}
          </h1>
          <p className="font-fredoka font-medium text-[10px] text-black/50">
            {teamName}
          </p>
        </div>
        <div
          onClick={toggleExpansion}
          className="flex justify-center items-center rounded-full bg-grayscale w-[13px] h-[13px] cursor-pointer"
        >
          {isExpanded ? (
            <FaChevronUp className="text-white text-[6px]" />
          ) : (
            <FaChevronDown className="text-white text-[6px]" />
          )}
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { height: 0, opacity: 0 },
          visible: { height: "auto", opacity: 1 },
        }}
        animate={expansionControl}
        className="flex flex-col"
      >
        {teamMembers.map((member) => (
          <div className="flex gap-1 items-center">
            <FaUser className="text-black/50 text-[10px]" />
            <p className="font-fredoka font-medium text-[10px] text-black/50">
              {member}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}