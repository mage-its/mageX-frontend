import { useState } from 'react'

export default function AddressInformation() {
	const [isEditingAddressInformation, setIsEditingAddressInformation] =
		useState(false)

	const handleEditAddressInformation = () => {
		setIsEditingAddressInformation(!isEditingAddressInformation)
	}

	return (
		<div className="p-[40px] rounded-[30px] bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-[30px] w-full">
			<div className="flex flex-row justify-between items-center w-full">
				<h2 className="text-white text-[36px] font-medium">
					Address Information
				</h2>
				<button
					onClick={handleEditAddressInformation}
					className="relative px-[20px] py-[5px] rounded-[10px] text-[24px] z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[10px] before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-[8px] after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
				>
					<p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
						{isEditingAddressInformation ? 'Save' : 'Edit'}
					</p>
				</button>
			</div>

			{isEditingAddressInformation ? (
				<form className="flex flex-col gap-[15px] mb-4">
					<div className="flex flex-col w-full gap-4">
						<span className="flex flex-col gap-2 w-full">
							<label className="text-white text-[20px] font-light">
								Address
							</label>
							<input
								type="text"
								className="text-white text-[32px] font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
								defaultValue="Jl. Jawa Timur No.35"
							/>
						</span>

						<span className="flex flex-col gap-2 w-full">
							<label className="text-white text-[20px] font-light">
								Province
							</label>
							<input
								type="text"
								className="text-white text-[32px] font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
								defaultValue="Jawa Timur"
							/>
						</span>
					</div>
				</form>
			) : (
				<div className="flex flex-col gap-[15px]">
					<div className="flex flex-row w-full">
						<span className="w-full">
							<p className="text-white text-[20px] font-light">Address</p>
							<p className="text-white text-[32px] font-medium">
								Jl. Jawa Timur No.35
							</p>
						</span>
					</div>

					<div className="flex flex-row w-full">
						<span className="w-full">
							<p className="text-white text-[20px] font-light">Province</p>
							<p className="text-white text-[32px] font-medium">Jawa Timur</p>
						</span>
					</div>
				</div>
			)}

			<div className="w-[30px] h-[150px] bg-horizontal-gta absolute top-0 left-0 rounded-tl-[27px] rounded-br-[27px]" />
			<div className="w-[303px] h-[40px] bg-vertical-gta absolute bottom-0 right-0 rounded-tl-[27px] rounded-br-[27px]" />
		</div>
	)
}
