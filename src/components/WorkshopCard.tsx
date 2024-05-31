import cn from "@/utils/cn"

interface CardProps{
    title: string
    children: string;
}

export default function WorkshopCard({title,children}: CardProps){
    return(
        <>
            <div className="w-[396px] h-[396px] px-[20px] pt-[20px] pb-[60px] flex-column items-start gap-20px flex-[1_0_0%] rounded-[40px] border-[3px] border-[#FFFFFF] bg-transparent-white-1">
                <div className={cn(
                    "w-[356px] h-[240px] shrink-0 rounded-[30px]",
                    {"bg-[url('@/assets/img/Multimedia.png')]" : title == "Multimedia"},
                    {"bg-[url('@/assets/img/Robotik.png')]" : title == "Robotics"},
                    {"bg-[url('@/assets/img/Iot.png')]" : title == "Internet of Things (IoT)"},
                )}></div>
                <div className="w-[356px] h-[56px] flex-column justify-center items-center gap-[8px] self-stretch mt-[20px]">
                    <p
                    className="text-light text-center font-fredoka text-2xl font-medium">
                        {title}
                    </p>
                        
                    <p
                    className="text-light text-center font-fredoka text-base font-light mt-[8px]">
                         {children}
                    </p>
                </div>
             </div>
        </>
    )
}