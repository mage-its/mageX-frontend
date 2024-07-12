import React from "react";
import { useNavigate } from "react-router-dom";
import InformationLogo from "@/assets/dashboardHome/informationLogo.svg";
import CloseButton from "@/assets/dashboardHome/closeButton.svg";
import { useCreateTeam } from "@/services/team";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  destination: string;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, destination }) => {
  const navigate = useNavigate();
  const { mutateAsync: createTeam } = useCreateTeam();
  if (!isVisible) return null;

  const handleYesClick = async () => {
    await createTeam(destination);
    console.log("Navigating to:", destination); // Debugging output
    // navigate(destination);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative bg-transparent_black rounded-[2rem] font-fredoka text-light text-center drop-shadow-lg select-none
                      mobile:w-[20rem] mobile:text-[1rem]
                      ipad:w-[25rem] ipad:text-[20px]
                      desktop:w-[25rem] desktop:text-[20px]"
      >
        <div className="flex w-full bg-gray-5 rounded-t-[2rem] h-[3rem] justify-center items-center">
          <img src={InformationLogo} alt="Information" />
          <span className="ml-2">Information</span>
        </div>
        <p className="mt-4">
          You will be registered as
          <span
            style={{
              position: "absolute",
              color: "transparent",
              pointerEvents: "none",
              zIndex: -1,
            }}
            className="font-medium inline-block"
          >
            Team Leader
          </span>
          <span
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="font-medium bg-blue-purple-orange-1 inline-block px-1"
          >
            Team Leader
          </span>
        </p>
        <p> Do you wish to continue?</p>
        <div className="flex-col px-6 mt-6">
          <button
            onClick={handleYesClick}
            className="bg-blue-purple-orange-1 w-full rounded-[1rem] mb-4 px-4 py-2"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="border-gray-5 border-[3px] w-full rounded-[1rem] mb-4 px-4 py-2"
          >
            No
          </button>
        </div>
        <img
          src={CloseButton}
          onClick={onClose}
          className="w-[2rem] h-[2rem] cursor-pointer absolute -top-3 -right-3"
          alt="Close"
        />
      </div>
    </div>
  );
};

export default Popup;
