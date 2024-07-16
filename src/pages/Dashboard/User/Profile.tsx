import AdditionalInformation from "@/components/Dashboard/User/Profile/AdditionalInfo";
import AddressInformation from "@/components/Dashboard/User/Profile/AddressInfo";
import PersonalInformation from "@/components/Dashboard/User/Profile/PersonalInfo";
import ProfileMain from "@/components/Dashboard/User/Profile/ProfileMain";
import DashboardSideBar from "@/components/DashboardSideBar";
import { useUserData } from "@/services/users";

export default function Profile() {
  const { data: user, isSuccess } = useUserData();
  if (isSuccess && !user?.is_logged_in) {
    window.location.href = "https://api.mage-its.id/users/login";
  }
  return (
    <div className="font-fredoka flex overflow-hidden">
      <DashboardSideBar />
      <div className="w-full h-screen flex flex-col gap-4 md:gap-6 md:p-8 px-8 pb-8 pt-20 overflow-y-auto">
        <div className="bg-vertical-gta h-1/4 md:h-1/5 absolute top-0 left-0 right-0 -z-50" />
        <div className="bg-[#141414] h-3/4 md:h-4/5 absolute bottom-0 left-0 right-0 -z-50" />
        <div className="relative flex flex-col gap-4 md:gap-6 ">
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
    </div>
  );
}
