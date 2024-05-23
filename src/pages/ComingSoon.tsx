import { FaLine, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions, type Container } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import x from "@/assets/brand/x.svg";
import cn from "@/utils/cn";
import { AiFillInstagram } from "react-icons/ai";

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

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1B181F",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: [],
            parallax: {
              enable: true,
              force: 50,
              smooth: 10,
            },
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "bottom-left",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 1,
          straight: false,
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 600,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "star",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <main className="bg-purple-4 relative overflow-hidden px-5 md:px-[50px] pb-14 min-h-screen">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className="relative z-20">
        <div className="md:h-[831px] h-[650px]  mt-[45px] bg-transparent-white-1/2 drop-shadow-lg rounded-[40px] text-center md:px-10 px-4">
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
        <div className="flex flex-row flex-wrap h-38 max-w-[1070px] mt-[52px] justify-center gap-5 md:gap-y-7 md:gap-x-10 lg:gap-x-36 lg  mx-auto">
          <a href="https://www.youtube.com/@mageits4169" className="flex md:gap-5 gap-2 items-center cursor-pointer">
            <FaYoutube className="text-light md:text-[50px] text-[35px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              mage.ce.its
            </p>
          </a>
          <a href="https://www.instagram.com/mage_its/" className="flex md:gap-5 gap-2 items-center cursor-pointer">
            <AiFillInstagram className="text-light md:text-[50px] text-[35px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              mage_its
            </p>
          </a>
          <a href="https://www.linkedin.com/company/mage-x" className="flex md:gap-5 gap-2 items-center cursor-pointer">
            <FaLinkedin  className="text-light md:text-[45px] text-[30px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              mage_its
            </p>
          </a>
          <a href="https://line.me/R/ti/p/rio5948f" className="flex md:gap-5 gap-2 items-center cursor-pointer">
            <FaLine className="text-light md:text-[45px] text-[30px]" />
            <p className="font-fredoka font-medium md:text-xl text-base text-light">
              @rio5948f
            </p>
          </a>
        </div>
      </div>
      <div className="absolute md:top-[555px] top-[500px] left-[50%] -translate-x-1/2 rounded-[50%] md:h-[1840px] h-[700px] md:w-[2630px] w-[1000px] bg-vertical-gta z-10 drop-shadow-[0_0_45px_#E14CB3]" />
    </main>
  );
}
