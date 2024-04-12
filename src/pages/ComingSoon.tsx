import { FaEnvelope, FaInstagram, FaLine, FaTiktok } from "react-icons/fa6";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container } from "@tsparticles/engine";
import { useEffect, useState } from "react";
import x from "../assets/brand/x.svg";

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
    <>
      <main className="bg-purple-4 relative overflow-hidden px-[50px] pb-14">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          url="particles.json"
        />
        <div className="relative z-20">
          <div className="h-[831px] mt-[45px] bg-transparent-white-1 drop-shadow-lg rounded-[40px] text-center">
            <p
              className="font-fredoka font-light text-[25px] text-light tracking-[0.6em] text-center"
              style={{ textShadow: "0px 4px rgba(255,255,255,0.5)" }}
            >
              Embarking on a new journey after a decade
            </p>
            <img
              src={x}
              alt="X"
              className="mt-[102px] mx-auto drop-shadow-glow-white-2 hover:drop-shadow-glow-white-full hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <h3 className="font-fredoka font-semibold bg-transparent-white-2 bg-clip-text text-transparent text-[114px] mt-64 tracking-[0.4em] drop-shadow-glow-white-1">
              COMING SOON
            </h3>
          </div>
          <div className="flex gap-[150px] mt-[52px] justify-center">
            <a className="flex gap-5 items-center">
              <FaEnvelope className="text-light text-[45px]" />
              <p className="font-fredoka font-medium text-xl text-light">
                mage.ce.its
              </p>
            </a>
            <a className="flex gap-5 items-center">
              <FaInstagram className="text-light text-[45px]" />
              <p className="font-fredoka font-medium text-xl text-light">
                mage_its
              </p>
            </a>
            <a className="flex gap-5 items-center">
              <FaTiktok className="text-light text-[45px]" />
              <p className="font-fredoka font-medium text-xl text-light">
                mage_its
              </p>
            </a>
            <a className="flex gap-5 items-center">
              <FaLine className="text-light text-[45px]" />
              <p className="font-fredoka font-medium text-xl text-light">
                @rio5948f
              </p>
            </a>
          </div>
        </div>
        <div className="absolute top-[555px] left-[50%] -translate-x-1/2 rounded-[50%] h-[1889px] w-[2546px] bg-blue-purple-orange z-10" />
      </main>
    </>
  );
}
