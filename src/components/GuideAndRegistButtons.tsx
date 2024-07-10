import React from "react";
import CButton from "./WorkshopButton.tsx";
import { Link } from "react-router-dom";

const GuideAndRegistButtons: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-[0] select-none">
      <div className="flex mt-[25px] gap-[10px] place-content-center">
        <div>
          <Link to="/coming-soon">
            <CButton theme={"orange"}>Regist</CButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideAndRegistButtons;
