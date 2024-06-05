import cn from "@/utils/cn"

interface TimeboxProp{
    date : string
    event : string
    img : string
    rightSide? : boolean
    leftSide? : boolean
    theme : any
}

export default function Timebox({date,event,img,rightSide,leftSide,theme}: TimeboxProp){
    return(
        <>  
            <div className="relative w-[430px] h-[150px] z-10">
                <div className={cn(
                    "absolute top-[-15px] w-[200px] h-[40px] rounded-[10px] text-center",
                    {"right-[-83px] bg-gradient-to-r from-[#F1716F] to-[#FF9333]": rightSide},
                    {"left-[-83px] bg-gradient-to-r from-[#435ECF] to-[#E24BB3]": leftSide},
                )}>
                    <p className="w-full h-[19px] mt-[10px] text-[#FFFFFF] font-bold text-[12px] uppercase">{date}</p>
                </div>
                <div className="w-[408px] h-[128px] bg-vertical-gta rounded-[33px] place-content-center">
                    <div className={cn(
                        "mx-auto w-[400px] h-[120px] rounded-[30px] flex",
                        {"bg-[#FFFFFF]/75" : theme == "orange"},
                        {"bg-[#1E1E1E]/75" : theme == "purple"}
                        )}>
                        <div className="mx-auto my-auto ml-[28px] mr-[16px]">
                            <p className={cn(
                                "text-lg font-bold uppercase",
                                {"text-[#1E1E1E]": theme == "orange"},
                                {"text-light":theme == "purple"}
                                )}>{event}</p>
                        </div>
                        <div className="rounded-full content-center ml-[32px] mr-[22px] my-[20px]">
                            <img
                            src={img}
                            alt="image">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}