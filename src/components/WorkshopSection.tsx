import WorkshopCard from "./WorkshopCard"

const Workshop: React.FC = () =>{
    return(
        <>
            <div className="relative py-[26px] pr-[82px] pl-[83px] justify-center content-center bg-dark">
                <div className="relative flex flex-col justify-center items-center gap-[29px] self-stretch">
                    <p 
                    className="text-center font-roboto text-6xl font-bold w-[545px] h-[140px] mb-[29px] text-light">
                        Elevate Your Skills Through
                        <span className="bg-vertical-gta text-transparent bg-clip-text "> Workshops</span>
                    </p>
                    <p
                    className="w-[1268px] text-center font-fredoka font-[24px] font-light opacity-50 text-light">
                        Immerse yourself in a world of learning and innovation with our lineup of MAGE X workshops. Explore hands-on experiences, expert insights, and invaluable knowledge to sharpen your skills and stay ahead of the curve
                    </p>
                </div>

                <div className="relative flex justify-center items-center gap-[40px] mt-[56px]">
                    <WorkshopCard title="Multimedia">
                        Master coding skills in many language
                    </WorkshopCard>
                    <WorkshopCard title="Internet of Things (IoT)">
                        Discover IoT and hands-on learning
                    </WorkshopCard>
                    <WorkshopCard title="Robotics">
                        Explore robotics basics for innovation  
                    </WorkshopCard>
                </div>
            </div>
        </>
    )
}

export default Workshop