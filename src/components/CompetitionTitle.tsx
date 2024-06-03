import cn from "@/utils/cn";

interface TitleProps{
    theme : string
    children : string
}

export default function Title({theme,children}:TitleProps){
    return(
        <>
                <p className={cn(
                    "font-airstrike text-[40px] font-normal bg-clip-text text-transparent drop-shadow-[0_0_3px_rgba(199,97,66,1)]",
                    {"bg-orange-grad ": theme = "app"},
                )}>
                    {children}
                </p>
        </>
    )
}
