import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import ErrorImage from "@/assets/error/errorImage.svg";

const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-gradient-to-r from-dark to-black relative min-h-screen overflow-clip">
      <Navbar theme="black" />
      <div className="relative w-full">
        <img src={ErrorImage} className="w-full" alt="Error" />
        <div className="absolute transform -translate-y-1/2 text-white
                        mobile:left-[2rem] mobile:top-[50%]
                        ipad:left-[4rem] ipad:top-[50%]
                        desktop:left-[8rem] desktop:top-[50%]">
          <h1 className="font-roboto font-medium mobile:text-xl ipad:text-[40px] desktop:text-[54px]">
            OOPS...
          </h1>
          <p className="font-roboto font-light 
                        mobile:text-[10px] mobile:ml-0 mobile:mt-1
                        ipad:text-[18px] ipad:ml-1 ipad:mt-4
                        desktop:text-[20px] desktop:ml-1 desktop:mt-4">
            looks like this page doesn't exist
            <br></br>
            or was errored
          </p>
          <button
            onClick={() => navigate("/")}
            className="font-fredoka bg-blue-purple-orange-1 border-light text-light shadow-lg shadow-mage-pink
                       mobile:px-4 mobile:py-1 mobile:text-[14px] mobile:ml-0 mobile:border-[3px] mobile:rounded-[0.5rem] mobile:mt-2
                       ipad:px-12 ipad:py-2 ipad:text-[24px] ipad:ml-1 ipad:border-[5px] ipad:rounded-[1rem] ipad:mt-4
                       desktop:px-12 desktop:py-2 desktop:text-[2rem] desktop:ml-1 desktop:border-[6px] desktop:rounded-[1.5rem] desktop:mt-4"
          >
            Back to Homepage
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Error;
