import cn from "@/utils/cn";

interface buttonProps {
  theme: any;
  children: string;
}

//transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300

export default function CButton({ children, theme }: buttonProps) {
  return (
    <button
      className={cn(
        "rounded-[14px] w-[137px] h-[44px] content-center bg-dark delay-50 transition ease-linear hover:-translate-y-2",
        {
          "bg-orange-grad shadow-[0_3px_7px_0_rgba(253,135,78,0.60)]":
            theme == "orange" && children == "Guide Book",
        },
        {
          "bg-orange-primary-5 shadow-[0_3px_7px_0_rgba(253,135,78,1)]":
            theme == "orange" && (children == "Log In" || children == "Daftar"),
        },
        {
          "bg-gradient-to-b from-[#FFC291] from-0% via-[#E24BB3] via-75% to-[#EE96D3] to-100% shadow-[0_3px_7px_0_rgba(58,13,73,1)]":
            theme == "purple" && children == "Guide Book",
        },
        {
          "bg-[#FBE4D0] shadow-[0_3px_7px_0_rgba(58,13,73,1)]":
            theme == "purple" && (children == "Log In" || children == "Daftar"),
        }
      )}
    >
      <div
        className={cn(
          "rounded-xl w-[131px] h-[37px] mx-auto cursor-pointer text-center",
          {
            "bg-orange-primary-5":
              theme == "orange" && children == "Guide Book",
          },
          { "bg-orange-primary-2": theme == "orange" && (children == "Log In" || children == "Daftar") },
          { "bg-[#FBE4D0]": theme == "purple" && children == "Guide Book" },
          {
            "bg-gradient-to-b from-[#F59B9C] from-33% to-[#E24BB3] to-100%":
              theme == "purple" && (children == "Log In" || children == "Daftar"),
          }
        )}
      >
        <p
          className={cn(
            "pt-[7px] font-fredoka text-[19px] not-italic font-medium leading-6",
            { "text-[#FE874F]": theme == "orange" && children == "Guide Book" },
            {
              "text-orange-primary-5":
                theme == "orange" && (children == "Log In" || children == "Daftar"),
            },
            { "text-mage-pink": theme == "purple" && children == "Guide Book" },
            { "text-[#FBE4D0]": theme == "purple" && (children == "Log In" || children == "Daftar") }
          )}
        >
          {children}
        </p>
      </div>
    </button>
  );
}
