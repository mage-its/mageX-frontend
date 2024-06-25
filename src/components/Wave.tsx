import PurpleWave from "@/assets/competition/purpleWave.svg"
import OrangeWave from '@/assets/competition/orangeWave.svg'

interface WaveProps {
    theme : any
}

export default function Wave({theme}:WaveProps){
    const isOrange = theme === "orange"
    return(
        <>
        <div className="z-0">
            {isOrange ? (
                <img
                src={OrangeWave}
                alt="Wave"
                className="w-full h-full shrink-0"></img>
            ):(
                <img 
                src={PurpleWave}
                alt="Wave"
                className="w-full h-full shrink-0 "></img>
            )}
        </div>
        </>
    )
}
