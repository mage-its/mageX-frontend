import { useUserData } from "@/services/users";
import VerifiedIcon from "../../../../assets/icons/verified.svg";
import ProfPic from "../../../../assets/img/profpic.png";
import { FaX } from "react-icons/fa6";

export default function ProfileMain() {
  const { data: user } = useUserData();

  return (
    <div className="p-6 md:p-10 rounded-2xl bg-black bg-opacity-80 backdrop-blur-md flex flex-row items-center gap-6 md:gap-8">
      <img
        src={ProfPic}
        alt="icon"
        className="rounded-full w-24 h-24 md:w-40 md:h-40 bg-white"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">
          {user?.nama || ""}
        </h1>
        <span className="flex flex-row gap-2 items-center">
          {user?.status === "verified" ? (
            <>
              <img
                src={VerifiedIcon}
                alt="verified"
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <p className="text-white text-lg md:text-2xl">Verified</p>
            </>
          ) : null}
        </span>
      </div>
      <div className="w-48 h-10 bg-vertical-gta absolute bottom-0 right-0 rounded-tl-xl rounded-br-xl hidden md:block" />
    </div>
  );
}
