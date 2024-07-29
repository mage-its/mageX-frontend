import { useUserData } from "@/services/users";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FaUpload, FaX } from "react-icons/fa6";
import { UpdateUserProps } from "./PersonalInfo";

export default function AdditionalInformation({
  control,
  handleSubmit,
  setValue,
  resetField,
  onSubmit,
  responseUpdateUser,
}: UpdateUserProps) {
  const { data: user } = useUserData();
  // console.log(user);
  const [fileName, setFileName] = useState<string | undefined>();

  const [isEditingAdditional, setIsEditingAdditional] = useState(false);

  const handleEditAdditional = () => {
    setIsEditingAdditional(!isEditingAdditional);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetField && resetField("img_kartu");

    const files = event.target.files;
    if (files && files[0]) {
      setFileName(files[0].name);
    }

    setValue && setValue("img_kartu", files ? files[0] : null);
  };

  useEffect(() => {
    if (responseUpdateUser) {
      setIsEditingAdditional(false);
    }
  }, [responseUpdateUser]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 rounded-2xl bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-6 w-full md:w-fit h-fit md:h-full"
    >
      <div className="flex flex-row gap-4 justify-between items-center">
        <h2 className="text-white text-2xl md:text-3xl font-medium">
          Additional
        </h2>
        {isEditingAdditional ? (
          <div className="flex items-center justify-center gap-3">
            <button
              type="submit"
              className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
            >
              <p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
                Save
              </p>
            </button>
            <button type="button" onClick={handleEditAdditional}>
              <FaX className="text-white text-2xl" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEditAdditional}
            className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
          >
            <p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
              Edit
            </p>
          </button>
        )}
      </div>

      {isEditingAdditional ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full gap-4">
            <Controller
              name="institusi"
              control={control}
              render={({ field }) => (
                <span className="flex flex-col gap-2 w-full">
                  <label className="text-white text-lg font-light">
                    Institution
                  </label>
                  <input
                    {...field}
                    type="text"
                    className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                  />
                </span>
              )}
            />

            <Controller
              name="img_kartu"
              control={control}
              render={({ field }) => (
                <span className="w-full flex flex-col gap-3">
                  <p className="text-white text-lg font-light">Identity Card</p>
                  <div className="relative w-[261px] h-[135px] border-2 border-dashed border-black bg-[#D9D9D9] rounded-[10px] flex flex-col items-center justify-center">
                    <FaUpload className="w-10 h-10 text-gray-500 mb-2" />
                    <p className="text-gray-500">{fileName}</p>
                    <p className="text-gray-500">
                      (.jpg, .jpeg, .png | Maks. 1MB)
                    </p>
                    <input
                      type="file"
                      {...field}
                      onChange={handleChange}
                      value={undefined}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      accept=".jpg,.jpeg,.png"
                    />
                  </div>
                </span>
              )}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full">
            <span className="w-full">
              <p className="text-white text-lg font-light">Institution</p>
              <p className="text-white text-2xl font-medium">
                {user?.institusi || "--"}
              </p>
            </span>

            <span className="w-full flex flex-col gap-3">
              <p className="text-white text-lg font-light">Identity Card</p>
              {user?.image_kartu === "000000000000000000000000" ? (
                <p className="text-white text-2xl font-medium">--</p>
              ) : (
                <img
                  className="w-full"
                  src={`https://api.mage-its.id/images/` + user?.image_kartu}
                  alt=""
                />
              )}
            </span>
          </div>
        </div>
      )}
    </form>
  );
}
