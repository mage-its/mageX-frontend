import pc2 from "@/assets/competition/pcFooter.svg";
import pen2 from "@/assets/competition/pen2.svg";
import time2 from "@/assets/competition/time2.svg";
import view2 from "@/assets/competition/view2.svg";
import mail2 from "@/assets/competition/mail2.svg";
import scline2 from "@/assets/competition/scline2.svg";
import tiktok from "@/assets/competition/tiktokorange.svg";
import instagram from "@/assets/competition/instaorange.svg";

export default function CompFooter() {
  return (
    <>
      <div className="absolute mt-[167px] ml-[69px] w-[1188px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[24px] z-30">
          <img src={pc2} alt="PC"></img>
          <div className="w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[8px] z-30">
            <img src={pen2} alt="About"></img>
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-orange-primary-5 px-[4px] py-[10px] z-30">
            <img src={time2} alt="Timeline"></img>
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[8px] z-30">
            <img src={view2} alt="Overview"></img>
          </div>
        </div>

        <div className="flex items-center gap-[24px]">
          <img src={mail2} alt="email" className="z-30"></img>
          <div className="w-[30px] h-[30px] rounded-full bg-orange-primary-5 p-[6px] z-30">
            <img src={tiktok} alt="tiktok"></img>
          </div>
          <div className="w-[30px] h-[30px] rounded-full bg-orange-primary-5 p-[6px] z-30">
            <img src={instagram} alt="instagram" className="z-40"></img>
          </div>
          <img src={scline2} alt="line" className="z-30"></img>
        </div>
      </div>
    </>
  );
}
