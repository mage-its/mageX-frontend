import React from "react";
import InformationLogo from "@/assets/dashboardHome/informationLogo.svg";
import CloseButton from "@/assets/dashboardHome/closeButton.svg";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  handleYesClick?: () => void;
  text: string;
}

const Popup: React.FC<PopupProps> = ({
  isVisible,
  onClose,
  handleYesClick,
  text,
}) => {
  if (!isVisible) return null;
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
        <p className="mt-4 mb-2">{text}</p>
        {handleYesClick && (
          <div className="flex-col px-6 mt-6">
            <button
              onClick={handleYesClick}
              className="bg-blue-purple-orange-1 w-full rounded-[1rem] mb-4 px-4 py-2"
            >
              Yes
            </button>
          </div>
        )}

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
