import AdditionalInformation from '@/components/Dashboard/User/Profile/AdditionalInfo'
import AddressInformation from '@/components/Dashboard/User/Profile/AddressInfo'
import PersonalInformation from '@/components/Dashboard/User/Profile/PersonalInfo'
import ProfileMain from '@/components/Dashboard/User/Profile/ProfileMain'

export default function Profile() {
	return (
		<div className="relative p-10 font-fredoka flex flex-col gap-[15px] overflow-hidden">
			<div className="bg-vertical-gta h-[20%] absolute top-0 left-0 right-0 z-0" />
			<div className="bg-[#141414] h-[80%] absolute bottom-0 left-0 right-0 z-0" />
			<div className="relative z-10 flex flex-col gap-[15px]">
				<ProfileMain />
				<div className="flex flex-row gap-[15px]">
					<div className="flex flex-col gap-[15px] w-full">
						<PersonalInformation />
						<AddressInformation />
					</div>
					<AdditionalInformation />
				</div>
			</div>
		</div>
	)
}
