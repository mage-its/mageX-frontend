import cn from "@/utils/cn"
import keypad from "@/assets/competition/pad.svg"
import techmeet from "@/assets/competition/people.svg"

interface TimeboxProp{
    date : string
    event : string
    img : any
    side : string
    theme : any
}

export default function Timebox({date,event,img,side,theme}: TimeboxProp){
    const rightSide = side === "right"
    return(
        <>  
            <div className="relative desktop:w-[350px] desktop:h-[100px] ipad:w-[200px] ipad:[75px] mobile:w-[350px] mobile:h-[100px] z-10">
                {rightSide?(
                    <div className=
                        "absolute top-[-15px] w-[200px] desktop:h-[35px] ipad:h-[35px] mobile:h-[26px] rounded-[10px] text-center desktop:left-[223px] ipad:right-[-230px] mobile:left-[100px] ipad:left-[150px] bg-gradient-to-r from-[#F17071] to-[#FF9333]">
                        <p className="w-full h-[19px] desktop:mt-[10px] ipad:mt-[10px] mobile:mt-[5px] text-[#FFFFFF] font-bold text-[11px] uppercase">{date}</p>
                    </div>
                ):(
                    <div className=
                        "absolute top-[-15px] w-[200px] desktop:h-[35px] ipad:h-[35px]  mobile:h-[26px] rounded-[10px] text-center desktop:left-[-83px] ipad:left-[-83px] mobile:left-0 ipad:left-0 bg-gradient-to-r from-[#435ECF] to-[#E24BB3]">
                        <p className="w-full h-[19px] desktop:mt-[10px] ipad:mt-[10px] mobile:mt-[5px] text-[#FFFFFF] font-bold text-[11px] uppercase">{date}</p>
                    </div>
                )}
                
                <div className="desktop:w-[350px] mobile:w-[300px] ipad:w-[350px] desktop:h-[100px] mobile:h-[80px] ipad:h-[100px] bg-vertical-gta rounded-[33px] place-content-center z-10">
                    {rightSide?(
                         <div className={cn(
                            "mx-auto desktop:w-[344px] mobile:w-[294px] ipad:w-[344px] desktop:h-[94px] mobile:h-[74px] ipad:h-[94px] rounded-[30px] flex z-10",
                            {"bg-[#FFFFFF]/75" : theme == "orange"},
                            {"bg-[#1E1E1E]/75" : theme == "purple"}
                            )}>
                            <div className="desktop:w-[220px] desktop:h-[45px] ipad:w-[220px] ipad:h-[45px] mobile:w-[220px] mobile:h-[25px] mobile:mt-[18px] ml-[100px] z-10 desktop:my-auto ipad:my-auto ">
                                <p className={cn(
                                    "text-[14px] font-bold uppercase",
                                    {"text-[#1E1E1E]": theme == "orange"},
                                    {"text-light":theme == "purple"}
                                    )}>{event}</p>
                            </div>
                            <div className="desktop:w-[60px] desktop:h-[60px] ipad:w-[60px] ipad:h-[60px] mobile:w-[50px] mobile:h-[50px] p-[8px] absolute desktop:top-[20px] ipad:top-[20px] desktop:left-[22px] mobile:top-[15px] mobile:left-[18px] rounded-full bg-gradient-to-r from-[#59348C] to-[#A641A2] content-center">
                                <img
                                src={img}
                                alt="image">
                                </img>
                            </div>
                        </div>
                    ):(
                        <div className={cn(
                            "mx-auto desktop:w-[344px] mobile:w-[294px] ipad:w-[344px] ipad:h-[94px] desktop:h-[94px] mobile:h-[74px] rounded-[30px] flex",
                            {"bg-[#FFFFFF]/75" : theme == "orange"},
                            {"bg-[#1E1E1E]/75" : theme == "purple"}
                            )}>
                            <div className="desktop:w-[220px] desktop:h-[45px] ipad:w-[220px] ipad:h-[45px] mobile:w-[220px] mobile:h-[25px] ipad:w-[220px] ipad:h-[45px] ipad:ml-[20px] ipad:my-auto desktop:ml-[20px] mobile:ml-0 desktop:my-auto mobile:mt-[14px] text-right">
                                <p className={cn(
                                    "text-[14px] font-bold uppercase",
                                    {"text-[#1E1E1E]": theme == "orange"},
                                    {"text-light":theme == "purple"}
                                    )}>{event}</p>
                            </div>
                            <div className={cn(
                                "desktop:w-[60px] desktop:h-[60px] ipad:w-[60px] ipad:h-[60px] mobile:w-[50px] mobile:h-[50px] p-[10px] absolute desktop:top-[20px] ipad:top-[20px] desktop:right-4 mobile:top-[15px] mobile:right-[65px] ipad:right-[-130px] rounded-full bg-gradient-to-r from-[#EC6584] to-[#FE9234] content-center",
                                {"py-[18px] px-[16px]":img == keypad},
                                {"p-[12px]":img == techmeet},
                                )}>
                                <img
                                src={img}
                                alt="image">
                                </img>
                            </div>
                        </div> 
                    )}
                </div>
            </div>
        </>
    )
}