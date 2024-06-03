import cn from "@/utils/cn";

interface buttonProps{
    theme: string;
    children: string;
}

export default function CButton({children, theme}: buttonProps){
    return(
        <>
            <div className="shadow-[0_3px_7px_0px_rgba(253,135,78,0.60)] rounded-xl">
                <button className={cn(
                        "rounded-xl border-4 w-[137px] h-11 mx-auto cursor-pointer hover:y-5",
                        {"bg-orange-primary-5 border-orange-primary-2 shadow-[0_3px_7px_0_rgba(253, 135, 78, 0.60)]": theme == "app" && children == "Guide Book"},
                        {"bg-orange-primary-2 border-orange-primary-5": theme == "app" && children == "Log In"},
                        
                    )}>
                        <p className={cn(
                            "mx-2 my-1 text-center font-fredoka text-[19px] not-italic font-medium leading-6",
                            {"text-[#FE874F]": theme == "app" && children == "Guide Book"},
                            {"text-orange-primary-5": theme == "app" && children == "Log In"},
                        )}>
                            {children}
                        </p>
                </button>
            </div>
        </>
    )
}