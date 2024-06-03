import cn from "@/utils/cn";

interface TitleProps{
    theme : string
    children : string
}

//rgba(199,97,66,1)

export default function Title({theme,children}:TitleProps){
    return(
        <>
            <div className="relative">
                <p className={cn(
                    "font-airstrike text-[40px] font-normal bg-clip-text text-transparent text-clip drop-shadow-[0_1px_1px_rgba(199,97,66,1)]",
                    {"bg-orange-grad ": theme = "app"},
                )}>
                    {children}<span className="invisible">.</span>
                </p>
            </div>
        </>
    )
}
