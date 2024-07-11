import VerifiedIcon from '../../../../assets/icons/verified.svg'
import ProfPic from '../../../../assets/img/profpic.png'

export default function ProfileMain() {
	return (
		<div className="p-[40px] rounded-[30px] bg-black bg-opacity-80 backdrop-blur-md flex flex-row gap-[30px]">
			<img
				src={ProfPic}
				alt="icon"
				className="rounded-full size-[170px] bg-white"
			/>
			<div className="flex flex-col gap-[10px]">
				<h1 className="text-white text-[64px] font-medium">
					Rigel Ramadhani W
				</h1>
				<span className="flex flex-row gap-[10px] items-center justify-start">
					<img src={VerifiedIcon} alt="verified" className="size-[35px] mx-1" />
					<p className="text-white text-[24px]">Verified</p>
				</span>
			</div>
			<div className="w-[303px] h-[40px] bg-vertical-gta absolute bottom-0 right-0 rounded-tl-[27px] rounded-br-[27px]" />
		</div>
	)
}
