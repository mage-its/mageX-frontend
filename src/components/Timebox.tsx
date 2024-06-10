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
            <div className="relative w-[200px] h-[75px] z-10">
                {rightSide?(
                    <div className=
                        "absolute top-[-15px] w-[200px] h-[35px] rounded-[10px] text-center right-[-230px] bg-gradient-to-r from-[#F17071] to-[#FF9333]">
                        <p className="w-full h-[19px] mt-[10px] text-[#FFFFFF] font-bold text-[11px] uppercase">{date}</p>
                    </div>
                ):(
                    <div className=
                        "absolute top-[-15px] w-[200px] h-[35px] rounded-[10px] text-center left-[-83px] bg-gradient-to-r from-[#435ECF] to-[#E24BB3]">
                        <p className="w-full h-[19px] mt-[10px] text-[#FFFFFF] font-bold text-[11px] uppercase">{date}</p>
                    </div>
                )}
                
                <div className="w-[350px] h-[100px] bg-vertical-gta rounded-[33px] place-content-center z-10">
                    {rightSide?(
                         <div className={cn(
                            "mx-auto w-[344px] h-[94px] rounded-[30px] flex z-10",
                            {"bg-[#FFFFFF]/75" : theme == "orange"},
                            {"bg-[#1E1E1E]/75" : theme == "purple"}
                            )}>
                            <div className="w-[220px] h-[45px] ml-[100px] z-10 my-auto">
                                <p className={cn(
                                    "text-[14px] font-bold uppercase",
                                    {"text-[#1E1E1E]": theme == "orange"},
                                    {"text-light":theme == "purple"}
                                    )}>{event}</p>
                            </div>
                            <div className="w-[60px] h-[60px] p-[8px] absolute top-[20px] left-[22px] rounded-full bg-gradient-to-r from-[#59348C] to-[#A641A2] content-center">
                                <img
                                src={img}
                                alt="image">
                                </img>
                            </div>
                        </div>
                    ):(
                        <div className={cn(
                            "mx-auto w-[344px] h-[94px] rounded-[30px] flex",
                            {"bg-[#FFFFFF]/75" : theme == "orange"},
                            {"bg-[#1E1E1E]/75" : theme == "purple"}
                            )}>
                            <div className="w-[220px] h-[45px] ml-[20px] my-auto text-right">
                                <p className={cn(
                                    "text-[14px] font-bold uppercase",
                                    {"text-[#1E1E1E]": theme == "orange"},
                                    {"text-light":theme == "purple"}
                                    )}>{event}</p>
                            </div>
                            <div className={cn(
                                "w-[60px] h-[60px] p-[10px] absolute top-[20px] right-[-128px] rounded-full bg-gradient-to-r from-[#EC6584] to-[#FE9234] content-center",
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