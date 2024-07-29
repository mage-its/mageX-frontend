import Popup from "@/components/Dashboard/User/Home/PopUp";
import AdditionalInformation from "@/components/Dashboard/User/Profile/AdditionalInfo";
import AddressInformation from "@/components/Dashboard/User/Profile/AddressInfo";
import PersonalInformation from "@/components/Dashboard/User/Profile/PersonalInfo";
import ProfileMain from "@/components/Dashboard/User/Profile/ProfileMain";
import DashboardSideBar from "@/components/DashboardSideBar";
import { useUpdateUser, useUserData } from "@/services/users";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type UpdateUserSchema = {
  firstName?: string;
  lastName?: string;
  no_hp?: string;
  tanggal_lahir?: string;
  username_ig?: string;
  institusi?: string;
  img_kartu?: File | null;
  alamat?: string;
  asal_provinsi?: string;
};

export default function Profile() {
  const { data: user, isSuccess } = useUserData();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [massegeUpdateUser, setMassegeUpdateUser] = useState<string>("");
  const [warningPopup, setWarningPopup] = useState<boolean>(false);
  const {
    mutateAsync: updateUser,
    data: responseUpdateUser,
    isError: isErrorUpdateUser,
    isSuccess: isSuccessUpdateUser,
    reset: resetUpdateUser,
  } = useUpdateUser();

  const { control, handleSubmit, setValue, resetField } =
    useForm<UpdateUserSchema>();

  useEffect(() => {
    setValue("firstName", user?.nama.split(" ")[0] || "");
    setValue("lastName", user?.nama.split(" ").splice(1).join(" ") || "");
    setValue("no_hp", user?.no_hp || "");
    setValue("tanggal_lahir", user?.tanggal_lahir.slice(0, 10) || "");
    setValue("username_ig", user?.username_ig || "");
    setValue("institusi", user?.institusi || "");
    setValue("alamat", user?.alamat || "");
    setValue("asal_provinsi", user?.asal_provinsi || "");
  }, [user, setValue]);

  const onSubmit: SubmitHandler<UpdateUserSchema> = async (
    data: UpdateUserSchema
  ) => {
    console.log(data);
    if (user?.verified === "true" && !warningPopup) {
      setWarningPopup(true);
      return;
    } else {
      setWarningPopup(false);
      await updateUser({
        nama: `${data.firstName} ${data.lastName}`,
        tanggal_lahir: data.tanggal_lahir,
        no_hp: data.no_hp,
        username_ig: data.username_ig,
        institusi: data.institusi,
        image_kartu: data.img_kartu,
        alamat: data.alamat,
        asal_provinsi: data.asal_provinsi,
      });
    }
  };

  const toggleWarningPopup = () => {
    setWarningPopup(!warningPopup);
  };

  if (isSuccess && !user?.is_logged_in) {
    window.location.href = "https://api.mage-its.id/users/login";
  }

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (isSuccessUpdateUser || isErrorUpdateUser) {
      setMassegeUpdateUser(responseUpdateUser?.message || "Error");
      setIsPopupVisible(true);
      resetUpdateUser();
    }
  }, [
    isSuccessUpdateUser,
    isErrorUpdateUser,
    responseUpdateUser,
    resetUpdateUser,
  ]);

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
              <PersonalInformation
                control={control}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                responseUpdateUser={responseUpdateUser}
              />
              <AddressInformation
                control={control}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                responseUpdateUser={responseUpdateUser}
              />
            </div>
            <div className="w-full md:w-1/3">
              <AdditionalInformation
                control={control}
                handleSubmit={handleSubmit}
                resetField={resetField}
                onSubmit={onSubmit}
                responseUpdateUser={responseUpdateUser}
                setValue={setValue}
              />
            </div>
          </div>
        </div>
      </div>
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        text={massegeUpdateUser}
      />
      <Popup
        isVisible={warningPopup}
        onClose={toggleWarningPopup}
        handleYesClick={handleSubmit(onSubmit)}
        text="Updating your user data will cause previously verified information to require re-verification. Please proceed with caution."
      />
    </div>
  );
}
