import { FaEnvelope, FaInstagram, FaLine, FaTiktok } from "react-icons/fa6";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container } from "@tsparticles/engine";
import { useEffect, useState } from "react";
import x from "../assets/brand/x.svg";
import cn from "../utils/cn";

export default function ComingSoon() {
  const [, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <main className="bg-purple-4 relative overflow-hidden px-5 md:px-[50px] pb-14 min-h-screen">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        url="particles.json"
      />
      <div className="relative z-20">
        <div className="md:h-[831px] h-[650px]  mt-[45px] bg-transparent-white-1 drop-shadow-lg rounded-[40px] text-center md:px-10 px-4">
          <p
            className="font-fredoka font-light md:text-2xl sm:text-lg text-sm text-light md:tracking-[0.5em] tracking-[0.4em] text-center select-none"
            style={{ textShadow: "0px 4px rgba(255,255,255,0.5)" }}
          >
            Embarking on a new journey after a decade
          </p>
          <img
            src={x}
            alt="X"
            className={cn(
              "mt-[102px] mx-auto drop-shadow-glow-white-2 select-none",
              "hover:drop-shadow-glow-white-full hover:scale-110 will-change-transform transition-all duration-300 ease-in-out"
            )}
          />
          <h3
            className={cn(
              "font-fredoka font-semibold bg-clip-text text-transparent xl:text-[109px] lg:text-[82px] sm:text-[55px] text-[28px] tracking-[0.3em]",
              "md:mt-64 mt-40 drop-shadow-glow-white-1 select-none bg-transparent-white-2"
            )}
          >
            COMING SOON
          </h3>
        </div>
        <div className="flex flex-row flex-wrap h-38 max-w-[1060px] mt-[52px] justify-center gap-5 md:gap-y-7 md:gap-x-10 lg:gap-x-36 lg  mx-auto">
          <a className="flex md:gap-5 gap-2 items-center">
            <FaEnvelope className="text-light md:text-[45px] text-[30px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              mage.ce.its
            </p>
          </a>
          <a className="flex md:gap-5 gap-2 items-center">
            <FaInstagram className="text-light md:text-[45px] text-[30px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              mage_its
            </p>
          </a>
          <a className="flex md:gap-5 gap-2 items-center">
            <FaTiktok className="text-light md:text-[45px] text-[30px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              mage_its
            </p>
          </a>
          <a className="flex md:gap-5 gap-2 items-center">
            <FaLine className="text-light md:text-[45px] text-[30px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              @rio5948f
            </p>
          </a>
        </div>
      </div>
      <div className="absolute md:top-[555px] top-[500px] left-[50%] -translate-x-1/2 rounded-[50%] md:h-[1840px] h-[700px] md:w-[2630px] w-[1000px] bg-blue-purple-orange z-10 drop-shadow-[0_0_45px_#E14CB3]" />
    </main>
  );
}
