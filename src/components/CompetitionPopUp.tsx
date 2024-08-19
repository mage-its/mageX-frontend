import React from "react";
import ReactDOM from 'react-dom';
import InformationLogo from "@/assets/dashboardHome/informationLogo.svg";
import CloseButton from "@/assets/dashboardHome/closeButton.svg";

interface PopupProps extends React.ComponentPropsWithoutRef<"div"> {
  isVisible: boolean;
  onClose: () => void;
  text1?: string;
  text2?: string;
  link1?: string;
  link2?: string;
}

const CompetitionPopup: React.FC<PopupProps> = ({
  isVisible,
  onClose,
  text1,
  text2,
  link1,
  link2
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative bg-transparent_black rounded-[2rem] font-fredoka text-light text-center drop-shadow-lg select-none
                      mobile:w-[20rem] mobile:text-[1rem]
                      ipad:w-[25rem] ipad:text-[20px]
                      lg:w-[25rem] lg:text-[20px]"
      >
        <div className="flex w-full bg-gray-5 rounded-t-[2rem] h-[3rem] justify-center items-center">
          <img src={InformationLogo} alt="Information" />
          <span className="ml-2">Guide Book</span>
        </div>

        {/* Render buttons only if they are provided */}
        <div className="flex-col">
          <div> 
            {text1 && link1 && (
              <a href={link1} target="_blank" rel="noopener noreferrer">
                <button className="w-full h-full text-light py-4 px-4 hover:bg-gray-4">
                  {text1}
                </button>
              </a>
            )}
          </div>
          <div>
            {text2 && link2 && (
              <a href={link2} target="_blank" rel="noopener noreferrer">
                <button className="w-full h-full text-light py-4 px-4 rounded-b-[2rem] hover:bg-gray-4">
                  {text2}
                </button>
              </a>
            )}
          </div>
        </div>
        
        {/* Close Button */}
        <img
          src={CloseButton}
          onClick={onClose}  // Ensure this is correctly pointing to the onClose handler
          className="w-[2rem] h-[2rem] cursor-pointer absolute -top-3 -right-3"
          alt="Close"
        />
      </div>
    </div>,
    document.body // Append the popup to the body
  );
};

export default CompetitionPopup;
