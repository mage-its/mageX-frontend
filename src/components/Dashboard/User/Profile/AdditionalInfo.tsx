import { useState } from 'react'
import { FaUpload } from 'react-icons/fa6'

export default function AdditionalInformation() {
	const [isEditingAdditional, setIsEditingAdditional] = useState(false)

	const handleEditAdditional = () => {
		setIsEditingAdditional(!isEditingAdditional)
	}

	return (
		<div className="p-[40px] rounded-[30px] bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-[30px] w-[500px]">
			<div className="flex flex-row justify-between items-center w-full">
				<h2 className="text-white text-[36px] font-medium">Additional</h2>
				<button
					onClick={handleEditAdditional}
					className="relative px-[20px] py-[5px] rounded-[10px] text-[24px] z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[10px] before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-[8px] after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
				>
					<p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
						{isEditingAdditional ? 'Save' : 'Edit'}
					</p>
				</button>
			</div>

			{isEditingAdditional ? (
				<form className="flex flex-col gap-[15px] mb-4">
					<div className="flex flex-row w-full gap-4">
						<span className="flex flex-col gap-2 w-full">
							<label className="text-white text-[20px] font-light">
								Institution
							</label>
							<input
								type="text"
								className="text-white text-[32px] font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
								defaultValue="Institut Teknologi Sepuluh Nopember"
							/>
						</span>
					</div>
				</form>
			) : (
				<div className="flex flex-col gap-[15px]">
					<div className="flex flex-row w-full">
						<span className="w-full">
							<p className="text-white text-[20px] font-light">Institution</p>
							<p className="text-white text-[32px] font-medium">
								Institut Teknologi Sepuluh Nopember
							</p>
						</span>
					</div>
				</div>
			)}

			<div className="flex flex-col gap-[15px]">
				<div className="flex flex-row w-full">
					<span className="w-full flex flex-col gap-3">
						<p className="text-white text-[20px] font-light">Card</p>
						<div className="relative w-[261px] h-[135px] border-2 border-dashed border-black bg-[#D9D9D9] rounded-[10px] flex items-center justify-center">
							<FaUpload className="w-10 h-10 text-gray-500" />
							<input
								type="file"
								className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
							/>
						</div>
					</span>
					<div className="w-[164px] h-[40px] bg-vertical-gta rotate-180 absolute bottom-0 left-0 rounded-tr-[27px] rounded-bl-[27px]" />
				</div>
			</div>
		</div>
	)
}
