import cn from "@/utils/cn"
import mail from "@/assets/competition/mail.svg"
import tiktok from "@/assets/competition/tiktok.svg"
import instagram from "@/assets/competition/instagram.svg"
import linesc from "@/assets/competition/linesc.svg"
import purpMail from "@/assets/competition/purpleMail.svg"
import purpTiktok from "@/assets/competition/purpleTiktok.svg"
import purpInsta from "@/assets/competition/purpleInsta.svg"
import purpLinesc from "@/assets/competition/purpleLinesc.svg"
import pen from "@/assets/competition/pen.svg";
import purplePen from "@/assets/competition/aboutPurple.svg"
import line from "@/assets/competition/line.svg"
import purpleLine from "@/assets/competition/timelinePurple.svg"
import view from "@/assets/competition/view.svg"
import purpleView from "@/assets/competition/overviewPurple.svg"
import orangePcFoot from "@/assets/competition/pc.svg"
import purplePcFoot from "@/assets/competition/pcPurple.svg"


interface lgProp{
    theme : any
}

//w-[29px] h-[29px] bg-orange-primary-2 rounded-full content-center

export default function HomeFooter({theme} : lgProp){
    const isOrange = theme === "orange"

    return(
        <>
            <div className={cn(
                "flex w-[1280px] h-[45px] mx-auto mt-[125px] mb-[38px] px-[16px] py-[8px] rounded-[5px]",
                {"bg-orange-primary-4/50" : theme == "orange"},
                {"bg-[#F6E4FC]/60" : theme == "purple"},
                )}>
                <div className="flex gap-[22px]">
                    <div className="w-[29px] h-[29px]">
                        {isOrange?(
                            <img src={orangePcFoot} alt="PC"/>
                        ):(
                            <img src={purplePcFoot} alt="PC"/>
                        )}
                    </div>

                    <div className={cn(
                        "w-[29px] h-[29px] rounded-full content-center cursor-pointer",
                        {"bg-orange-primary-2":theme=="orange"},
                        {"bg-purple-1":theme=="purple"}
                    )}>
                        {isOrange?(
                            <img 
                            src={pen}
                            alt="About Us"
                            className="p-[7px]"></img>
                        ):(
                            <img 
                            src={purplePen}
                            alt="About Us"
                            className="p-[7px]"></img>
                        )}
                    </div>

                    <div className={cn(
                        "w-[29px] h-[29px] rounded-full content-center cursor-pointer",
                        {"bg-orange-primary-2":theme=="orange"},
                        {"bg-purple-1":theme=="purple"}
                    )}>
                        {isOrange?(
                            <img 
                            src={line}
                            alt="Timeline"
                            className="p-[4px]"></img>
                        ):(
                            <img 
                            src={purpleLine}
                            alt="Timeline"
                            className="p-[4px]"></img>
                        )}
                    </div>

                    <div className={cn(
                        "w-[29px] h-[29px] rounded-full content-center cursor-pointer",
                        {"bg-orange-primary-2":theme=="orange"},
                        {"bg-purple-1":theme=="purple"}
                    )}>
                        {isOrange?(
                            <img 
                            src={view}
                            alt="Overview"
                            className="p-[7px]"></img>
                        ):(
                            <img 
                            src={purpleView}
                            alt="Overview"
                            className="p-[7px]"></img>
                        )}
                    </div>
                </div>

                <div className="flex gap-[22px] align-items-center justify-content ml-auto mr-[6px]">
                    <div className="cursor-pointer">
                        {isOrange?(
                            <img 
                            src={mail}
                            alt="Email"
                            className="w-[29px] h-[29px]"></img>
                        ):(
                            <img 
                            src={purpMail}
                            alt="Email"
                            className=""></img>
                        )}
                    </div>

                    <div className={cn(
                        "w-[29px] h-[29px] text-center rounded-full cursor-pointer",
                        {"bg-orange-primary-2": theme == "orange"},
                        {"bg-purple-1": theme == "purple"},
                         )}>
                        {isOrange?(
                            <img 
                            src={tiktok}
                            alt="Tiktok"
                            className="pt-[7px] pl-[8px]"></img>
                        ):(
                            <img 
                            src={purpTiktok}
                            alt="Timeline"
                            className="pt-[5px] pl-[6px]"></img>
                        )}
                    </div>

                    <div className={cn(
                        "w-[29px] h-[29px] text-center rounded-full cursor-pointer",
                        {"bg-orange-primary-2": theme == "orange"},
                        {"bg-purple-1": theme == "purple"},
                        )}>  
                        {isOrange?(
                            <img 
                            src={instagram}
                            alt="Instagram"
                            className="p-[7px]"
                            ></img>
                        ):(
                            <img 
                            src={purpInsta}
                            alt="Instagram"
                            className="p-[5px]"></img>
                        )}
                    </div>
            
                    <div className="cursor-pointer">
                        {isOrange?(
                            <img 
                            src={linesc}
                            alt="Line"
                            className="w-[29px] h-[29px]"></img>
                        ):(
                            <img 
                            src={purpLinesc}
                            alt="Line"
                            className=""></img>
                        )}  
                    </div>
                </div>
            </div>
        </>
    )
}

