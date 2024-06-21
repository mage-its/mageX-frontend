import cn from "@/utils/cn";

interface TitleProps{
    theme : any
    children : any
}

export default function Title({theme,children}:TitleProps){
    return(
        <>
            <div>
                <p className={cn(
                    "font-airstrike desktop:text-[40px] font-normal bg-clip-text text-transparent",
                    "mobile:text-[30px]",
                    {"bg-gradient-to-b from-[#FB8A4A] from-14% to-[#FFE1CA] to-100% drop-shadow-orange-outline": theme == "orange"},
                    {"bg-gradient-to-b from-[#5315B1] from-35% to-[#E31D63] to-65% drop-shadow-purple-outline": theme == "purple"},
                    {"text-[35px]": children == "E-SPORT COMPETITION"},
                    {"desktop:text-[31px] mobile:text-[26px]": children == "COMPETITIVE PROGRAMMING"}
                )}>
                    {children}<span className="invisible">.</span>
                </p>
            </div>
        </>
    )
}
