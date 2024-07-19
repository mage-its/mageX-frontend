import React from "react";
import GradientLine from "@/assets/dashboardWorkshop/gradientLine.svg";
import WhatsAppLogo from "@/assets/dashboardWorkshop/whatsappLogo.svg";
import useDragScroll from "@/components/dashboardHome/useDragScroll";
import { Workshop } from "@/constant/dashboardWorkshop";

interface WorkshopInformationProps {
  currentWorkshop: Workshop;
}

const WorkshopInformation: React.FC<WorkshopInformationProps> = ({
  currentWorkshop,
}) => {
  const scrollRef = useDragScroll();

  return (
    <div
      className="text-light h-full select-none
                    mobile:mx-6 mobile:mt-6
                    ipad:mx-6 ipad:mt-6
                    lg:mx-[0] lg:mt-0"
    >
      <div
        ref={scrollRef}
        className="w-full bg-gray-5 h-[80%] overflow-auto custom-scroll no-scrollbar rounded-[1rem] justify-center px-10 py-6 items-center"
        style={{ cursor: "grab" }}
      >
        <div>
          <div
            className="text-justify font-airstrike
                          mobile:text-[26px] ipad:text-[36px] lg:text-[26px]"
          >
            {currentWorkshop.title}
          </div>
          <h2
            className="text-gray-5 font-medium w-fit bg-light rounded-[1rem] px-2 py-1 font-fredoka select-none
                         mobile:text-[9px] ipad:text-[18px] lg:text-[0.7rem]"
          >
            Scroll to see more
          </h2>
        </div>
        <img src={GradientLine} className="w-[90%] mt-2" alt="Gradient Line" />
        <div className="mobile:text-[13px] ipad:text-[20px] lg:text-[13px] text-justify">
          <div className="mt-2">{currentWorkshop.content}</div>
          <div className="mt-4">Materi : {currentWorkshop.materi}</div>
          <div>Pembicara : {currentWorkshop.pembicara}</div>
          <div className="flex">
            Price : &nbsp;
            <p className="font-medium">{currentWorkshop.price}</p>
          </div>
        </div>
      </div>
      <div className="h-[1rem]"></div>
      <div className="w-full py-[8px] h-[calc(20%-1rem)] bg-gray-5 rounded-[0.5rem] font-fredoka justify-center items-center flex">
        <img
          src={WhatsAppLogo}
          className="mobile:h-[2rem] ipad:h-[3rem] lg:h-[1.5rem]"
          alt="WhatsApp Logo"
        />
        <div className="ml-4 mobile:text-[1rem] ipad:text-[18px] lg:text-[18px]">
          {currentWorkshop.contact}
        </div>
      </div>
    </div>
  );
};

export default WorkshopInformation;
