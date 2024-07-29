import { UpdateUserSchema } from "@/pages/Dashboard/User/Profile";
import { ResponseSchema } from "@/services/api-client";
import { User, useUserData } from "@/services/users";
import { useEffect, useState } from "react";
import {
  Control,
  Controller,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormResetField,
  UseFormSetValue,
} from "react-hook-form";
import { FaX } from "react-icons/fa6";

export interface UpdateUserProps {
  control: Control<UpdateUserSchema>;
  handleSubmit: UseFormHandleSubmit<UpdateUserSchema>;
  resetField?: UseFormResetField<UpdateUserSchema>;
  setValue?: UseFormSetValue<UpdateUserSchema>;
  onSubmit: SubmitHandler<UpdateUserSchema>;
  responseUpdateUser?: ResponseSchema<User>;
}

export default function PersonalInformation({
  control,
  handleSubmit,
  onSubmit,
  responseUpdateUser,
}: UpdateUserProps) {
  const [isEditingPersonalInformation, setIsEditingPersonalInformation] =
    useState(false);

  const handleEditPersonalInformation = () => {
    // console.log("Edit Personal Information");
    setIsEditingPersonalInformation(!isEditingPersonalInformation);
  };

  const { data: user } = useUserData();

  useEffect(() => {
    if (responseUpdateUser) {
      setIsEditingPersonalInformation(false);
    }
  }, [responseUpdateUser]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 rounded-2xl bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-8 w-full"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-white text-3xl font-medium">
          Personal Information
        </h2>
        {isEditingPersonalInformation ? (
          <div className="flex items-center justify-center gap-3">
            <button
              type="submit"
              className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
            >
              <p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
                Save
              </p>
            </button>
            <button type="button" onClick={handleEditPersonalInformation}>
              <FaX className="text-white text-2xl" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEditPersonalInformation}
            className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
          >
            <p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
              Edit
            </p>
          </button>
        )}
      </div>

      {isEditingPersonalInformation ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <span className="flex flex-col gap-2 w-full">
                  <label className="text-white text-lg font-light">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                    {...field}
                  />
                </span>
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <span className="flex flex-col gap-2 w-full">
                  <label className="text-white text-lg font-light">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                    {...field}
                  />
                </span>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <Controller
              name="no_hp"
              control={control}
              render={({ field }) => (
                <span className="flex flex-col gap-2 w-full">
                  <label className="text-white text-lg font-light">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                    {...field}
                  />
                </span>
              )}
            />

            <span className="w-full">
              <p className="text-white text-lg font-light">Email</p>
              <p className="text-white text-2xl font-medium">{user?.email}</p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <Controller
              name="tanggal_lahir"
              control={control}
              render={({ field }) => (
                <span className="flex flex-col gap-2 w-full">
                  <label className="text-white text-lg font-light">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                    {...field}
                  />
                </span>
              )}
            />
            <Controller
              name="username_ig"
              control={control}
              render={({ field }) => (
                <span className="flex flex-col gap-2 w-full">
                  <label className="text-white text-lg font-light">
                    Username Instagram
                  </label>
                  <input
                    type="text"
                    className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                    {...field}
                  />
                </span>
              )}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">First Name</p>
              <p className="text-white text-2xl font-medium">
                {" "}
                {user?.nama.split(" ")[0] ? user?.nama.split(" ")[0] : "--"}
              </p>
            </span>

            <span className="w-full">
              <p className="text-white text-lg font-light">Last Name</p>
              <p className="text-white text-2xl font-medium">
                {user?.nama.split(" ").splice(1).join(" ")
                  ? user?.nama.split(" ").splice(1).join(" ")
                  : "--"}
              </p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">Phone Number</p>
              <p className="text-white text-2xl font-medium">
                {user?.no_hp ? user?.no_hp : "--"}
              </p>
            </span>

            <span className="w-full">
              <p className="text-white text-lg font-light">Email</p>
              <p className="text-white text-2xl font-medium">
                {user?.email ? user?.email : "--"}
              </p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">Birth Date</p>
              <p className="text-white text-2xl font-medium">
                {user?.tanggal_lahir.slice(0, 10)
                  ? user?.tanggal_lahir.slice(0, 10)
                  : "--"}
              </p>
            </span>
            <span className="w-full">
              <p className="text-white text-lg font-light">
                Username Instagram
              </p>
              <p className="text-white text-2xl font-medium">
                {user?.username_ig ? user?.username_ig : "--"}
              </p>
            </span>
          </div>
        </div>
      )}

      <div className="w-8 h-36 bg-horizontal-gta rotate-180 absolute bottom-0 left-0 rounded-tr-xl rounded-bl-xl" />
    </form>
  );
}
