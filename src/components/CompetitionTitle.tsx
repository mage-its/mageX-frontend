import cn from "@/utils/cn";

interface TitleProps{
    theme : any
    children : any
}

//rgba(199,97,66,1)

export default function Title({theme,children}:TitleProps){
    return(
        <>
            <div>
                <p className={cn(
                    "font-airstrike text-[40px] font-normal bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
                    {"bg-gradient-to-b from-[#FB8A4A] from-14% to-[#FFE1CA] to-100%": theme == "orange"},
                    {"bg-gradient-to-b from-[#9454C1] from-35% to-[#E24BB3] to-65%": theme == "purple"},
                    {"text-[35px]": children == "E-SPORT COMPETITION"}
                )}>
                    {children}<span className="invisible">.</span>
                </p>
            </div>
        </>
    )
}
