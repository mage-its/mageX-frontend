import cn from "@/utils/cn";

interface buttonProps{
    theme: any;
    children: string;
}

//transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300

export default function CButton({children, theme}: buttonProps){
    return(
        <>
        <div className={cn(
            "rounded-[14px] bg-dark delay-50 hover:-translate-y-3 hover-scale-110 duration-300 content-center mobile:w-[137px] mobile:h-[44px] ipad:w-[157px] ipad:h-[54px] desktop:w-[157px] desktop:h-[54px]",
            {"bg-orange-grad shadow-[0_3px_7px_0_rgba(253,135,78,0.60)]" : theme == "orange" && children == "Guide Book"},
            {"bg-orange-primary-5 shadow-[0_3px_7px_0_rgba(253,135,78,1)]" : theme == "orange" && (children == "Log In" || children == "Regist")},
            {"bg-gradient-to-b from-[#FFC291] from-0% via-[#E24BB3] via-75% to-[#EE96D3] to-100% shadow-[0_3px_7px_0_rgba(58,13,73,1)]" : theme == "purple" && children == "Guide Book"},
            {"bg-[#FBE4D0] shadow-[0_3px_7px_0_rgba(58,13,73,1)]" : theme == "purple" && children == "Log In"},
            )}>
            <div className={cn(
                "rounded-xl mx-auto cursor-pointer text-center mobile:w-[131px] mobile:h-[37px] ipad:w-[151px] ipad:h-[47px] desktop:w-[151px] desktop:h-[47px] ",
                {"bg-orange-primary-5": theme == "orange" && children == "Guide Book"},
                {"bg-orange-primary-2": theme == "orange" && (children == "Log In" || children == "Regist")},
                {"bg-[#FBE4D0]": theme == "purple" && children == "Guide Book"},
                {"bg-gradient-to-b from-[#F59B9C] from-33% to-[#E24BB3] to-100%": theme == "purple" && children == "Log In"}, 
                )}>
                    <p className={cn(
                        "pt-[7px] font-fredoka  not-italic font-medium mobile:text-[15px] mobile:leading-5 ipad:text-[19px] ipad:leading-8 desktop:text-[19px] desktop:leading-8",
                        {"text-[#FE874F]": theme == "orange" && children == "Guide Book"},
                        {"text-orange-primary-5": theme == "orange" && (children == "Log In" || children == "Regist")},
                        {"text-mage-pink": theme == "purple" && children == "Guide Book"},
                        {"text-[#FBE4D0]": theme == "purple" && children == "Log In"},
                        )}>
                            {children}
                    </p>
            </div>
        </div>
        </>
    )
}