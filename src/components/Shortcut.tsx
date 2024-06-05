import cn from "@/utils/cn"

interface lgProp{
    image : string
    text : string
    theme : string
}

//w-[29px] h-[29px] bg-orange-primary-2 rounded-full content-center

export default function Shortcut(sc : lgProp){
    return(
        <>
            <div className={cn(
                "w-[29px] h-[29px] rounded-full content-center",
                {"bg-orange-primary-2":sc.theme=="app"},
                {"bg-[#B09FDC]":sc.theme=="esport"}
            )}>
                <img
                    src={sc.image}
                    alt={sc.text}
                    className={cn(
                        {"p-[6px]":sc.text == "Introduction"},
                        {"px-[3px] py-[8px]":sc.text == "Timeline"},
                        {"p-[6px]":sc.text == "Overview"}
                    )}>
                </img>
            </div>
        </>
    )
}

