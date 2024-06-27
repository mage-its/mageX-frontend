import Logo from "@/assets/dashboardHome/homeLogo.svg"
import Furina from "@/assets/dashboardHome/Furina_3.jpg"

const HomeAndProfile: React.FC = () => {
    return (
        <div className="justify-center items-center flex select-none">
            {/* <div className="mr-auto ml-[2rem] items-center flex"> */}
            <div className="mr-auto my-auto items-center flex">
                <img src={Logo} className="mr-[8px]"></img>
                <div className="font-fredoka text-light">Dashboard</div>
            </div>
            {/* <div className="ml-auto mr-[2rem] flex items-center"> */}
            <div className="ml-auto my-auto flex items-center">
                <div className="font-fredoka text-light">Furina de Fontaine</div>
                <img src={Furina} className="ml-[8px] w-[3rem] h-[3rem] rounded-[1rem] border-white border-[2px]"></img>
            </div>
        </div>
    );
};

export default HomeAndProfile;