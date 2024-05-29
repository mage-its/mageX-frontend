import { Navbar } from "@/components/Navbar"
import x from "@/assets/brand/x.svg";
import puzzleGray from "@/assets/components/puzzleGray.svg";

export default function Home() {
  return (
    <main >
      <div className="bg-gradient-to-r from-dark to-black h-screen text-center overflow-hidden">
        <Navbar theme="black"/>
        <div className="flex items-center justify-center h-full ">
          <div className="mb-36">
            <h1 className="bg-transparent-white-1 bg-clip-text text-transparent font-airstrike text-[60px] mb-9">
              MAGE
            </h1>
              <div className="flex items-center justify-center gap-[31px]">
              <p className="bg-transparent-white-1 bg-clip-text text-transparent text-[30px] font-fredoka font-medium">
                A New Decade
              </p>
              <img
                src={x}
                alt="x"
              />
              <p className="bg-transparent-white-1 bg-clip-text text-transparent text-[30px] font-fredoka font-medium">
                A New Journey
              </p>
            </div>
          </div>
          <img src={puzzleGray} className="absolute -bottom-[100px] h-[204px]" alt="" />
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-dark to-black h-screen text-center">

      </div> */}
    </main>
  );
}
//bg-gradient-to-r from-dark to-black