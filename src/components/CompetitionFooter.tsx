import cn from "@/utils/cn"

import pc2 from "@/assets/competition/pcFooter.svg"
import pen2 from "@/assets/competition/pen2.svg"
import time2 from "@/assets/competition/time2.svg"
import view2 from "@/assets/competition/view2.svg"
import mail2 from "@/assets/competition/mail2.svg"
import scline2 from "@/assets/competition/scline2.svg"
import tiktok from "@/assets/competition/tiktokorange.svg"
import instagram from "@/assets/competition/instaorange.svg"

import purplePC2 from "@/assets/competition/PurplePC2.svg"
import purplePen2 from "@/assets/competition/purpleAbout2.svg"
import purpleTime2 from "@/assets/competition/purpleTimeline2.svg"
import purpleView2 from "@/assets/competition/purpleOverview2.svg"
import purpleMail2 from "@/assets/competition/purpleMail2.svg"
import purpleTiktok2 from "@/assets/competition/purpleTiktok2.svg"
import purpleInsta2 from "@/assets/competition/purpleInsta2.svg"
import purpleScLine2 from "@/assets/competition/purpleSCLine2.svg"

interface FooterVar {
    theme : any
}

export default function CompFooter({theme}:FooterVar){
    const isOrange = theme === "orange"
    return(
        <>
            <div className="w-[1188px] mx-auto flex justify-between items-center">
                <div className="flex items-center gap-[24px] z-30">
                    <div className="cursor-not-allowed">
                    {isOrange?(
                            <img src={pc2} alt="PC"/>
                        ):(
                            <img src={purplePC2} alt="PC"/>
                        )}
                    </div>
                    <div className={cn(
                        "w-[36px] h-[36px] rounded-full p-[8px] cursor-pointer",
                        {"bg-orange-primary-5" : theme == "orange"},
                        {"bg-[#F9E3FD]" : theme == "purple"}
                        )}>
                        {isOrange?(
                            <img src={pen2} alt="About Us"/>
                        ):(
                            <img src={purplePen2} alt="About Us"/>
                        )}
                    </div>
                    <div className={cn(
                        "w-[36px] h-[36px] rounded-full px-[4px] py-[10px] cursor-pointer",
                        {"bg-orange-primary-5" : theme == "orange"},
                        {"bg-[#F9E3FD]" : theme == "purple"}
                        )}>
                       {isOrange?(
                            <img src={time2} alt="Timeline"/>
                        ):(
                            <img src={purpleTime2} alt="Timeline"/>
                        )}
                    </div>
                    <div className={cn(
                        "w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[8px] cursor-pointer",
                        {"bg-orange-primary-5" : theme == "orange"},
                        {"bg-[#F9E3FD]" : theme == "purple"}
                        )}>
                        {isOrange?(
                            <img src={view2} alt="Overview"/>
                        ):(
                            <img src={purpleView2} alt="Overview"/>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-[24px]">
                    <div className="cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300">
                        <a href="mailto:mage.ce.its@gmail.com" target="_blank" rel="noopener noreferrer">
                        {isOrange?(
                                <img src={mail2} className="w-[36px] h-[36px]"alt="Email"/>
                            ):(
                                <img src={purpleMail2} className="w-[36px] h-[36px]" alt="Email"/>
                            )}
                        </a>
                    </div>
                    <div className={cn(
                        "w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[6px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                        {"bg-orange-primary-5" : theme == "orange"},
                        {"bg-[#F9E3FD]" : theme == "purple"}
                        )}>
                        <a href="https://www.tiktok.com/@magex_its" target="_blank" rel="noopener noreferrer">
                        {isOrange?(
                            <img src={tiktok} className="px-[3px] py-[3px]" alt="TikTok"/>
                        ):(
                            <img src={purpleTiktok2} className="px-[3px] py-[3px]" alt="TikTok"/>
                        )}
                        </a>
                    </div>
                    <div className={cn(
                        "w-[36px] h-[36px] rounded-full bg-orange-primary-5 p-[6px] cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px] ease-out duration-300",
                        {"bg-orange-primary-5" : theme == "orange"},
                        {"bg-[#F9E3FD]" : theme == "purple"}
                        )}>
                        <a href="https://www.instagram.com/mage_its" target="_blank" rel="noopener noreferrer">
                        {isOrange?(
                            <img src={instagram} className="px-[3px] py-[3px]" alt="Instagram"/>
                        ):(
                            <img src={purpleInsta2} className="mx-[3px] my-[3px]" alt="Instagram"/>
                        )}
                        </a>
                    </div>
                    <div className="cursor-pointer hover:scale-[1.3] hover:-translate-y-[5px]  ease-out duration-300">
                    {isOrange?(
                            <img src={scline2} className="w-[36px] h-[36px]" alt="Line"/>
                        ):(
                            <img src={purpleScLine2} className="w-[36px] h-[36px]" alt="Line"/>
                        )}
                    </div>
                    
                </div>

            </div>
        </>
    )
}