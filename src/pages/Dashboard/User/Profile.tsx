import AdditionalInformation from '@/components/Dashboard/User/Profile/AdditionalInfo';
import AddressInformation from '@/components/Dashboard/User/Profile/AddressInfo';
import PersonalInformation from '@/components/Dashboard/User/Profile/PersonalInfo';
import ProfileMain from '@/components/Dashboard/User/Profile/ProfileMain';

export default function Profile() {
	return (
		<div className="relative p-6 md:p-10 font-fredoka flex flex-col gap-4 md:gap-6 overflow-hidden">
			<div className="bg-vertical-gta h-1/4 md:h-1/5 absolute top-0 left-0 right-0 z-0" />
			<div className="bg-[#141414] h-3/4 md:h-4/5 absolute bottom-0 left-0 right-0 z-0" />
			<div className="relative z-10 flex flex-col gap-4 md:gap-6">
				<ProfileMain />
				<div className="flex flex-col md:flex-row gap-4 md:gap-6">
					<div className="flex flex-col gap-4 md:gap-6 w-full">
						<PersonalInformation />
						<AddressInformation />
					</div>
					<div className="w-full md:w-1/3">
						<AdditionalInformation />
					</div>
				</div>
			</div>
		</div>
	);
}
