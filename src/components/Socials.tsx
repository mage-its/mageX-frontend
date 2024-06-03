import cn from "@/utils/cn"
import mail from "@/assets/competition/mail.svg"
import tiktok from "@/assets/competition/tiktok.svg"
import instagram from "@/assets/competition/instagram.svg"
import linesc from "@/assets/competition/linesc.svg"

interface scProp{
    theme : string
}

export default function Socials({theme} : scProp){
    return(
        <>
            <div>
                <img 
                src={mail}
                className="cursor-pointer">
                </img>
            </div>

            <div className={cn(
                "w-[24px] h-[24px] text-center rounded-full cursor-pointer",
                {"bg-orange-primary-2": theme == "app"},
            )}>
                <img 
                src={tiktok}
                className="py-[5px] px-[6px]">
                </img>
            </div>

            <div className={cn(
                "w-[24px] h-[24px] text-center rounded-full cursor-pointer",
                {"bg-orange-primary-2": theme == "app"}
            )}>  
                <img 
                src={instagram}
                className="p-[5px] "
                ></img>
            </div>
            
            <div>
                <img src={linesc} className="cursor-pointer"></img>
            </div>
        </>
    )
}