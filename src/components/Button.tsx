import cn from "@/utils/cn";

interface buttonProps{
    theme: any;
    children: string;
}

export default function CButton({children, theme}: buttonProps){
    return(
        <>
            <div className="shadow-[0_3px_7px_0px_rgba(253,135,78,0.60)] rounded-xl">
                <button className={cn(
                        "rounded-xl border-4 w-[137px] h-11 mx-auto cursor-pointer",
                        {"bg-orange-primary-5 border-orange-primary-2/70 shadow-[0_3px_7px_0_rgba(253, 135, 78, 0.60)]": theme == "orange" && children == "Guide Book"},
                        {"bg-orange-primary-2 border-orange-primary-5": theme == "orange" && children == "Log In"},
                        {"bg-[#FBE4D0] border-mage-pink/80": theme == "purple" && children == "Guide Book"},
                        {"bg-gradient-to-b from-[#FFC291]/60 to-[#E24BB3] border-[#FBE4D0]": theme == "purple" && children == "Log In"}, 
                    )}>
                        <p className={cn(
                            "mx-2 my-1 text-center font-fredoka text-[19px] not-italic font-medium leading-6",
                            {"text-[#FE874F]": theme == "orange" && children == "Guide Book"},
                            {"text-orange-primary-5": theme == "orange" && children == "Log In"},
                            {"text-mage-pink": theme == "purple" && children == "Guide Book"},
                            {"text-[#FBE4D0]": theme == "purple" && children == "Log In"},
                        )}>
                            {children}
                        </p>
                </button>
            </div>
        </>
    )
}