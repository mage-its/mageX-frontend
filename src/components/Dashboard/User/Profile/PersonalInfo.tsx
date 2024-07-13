import { useUpdateUser, useUserData } from "@/services/users";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type PersonalInformationSchema = {
  firstName: string;
  lastName: string;
  no_hp: string;
  tanggal_lahir: string;
};

export default function PersonalInformation() {
  const { mutateAsync: updateUser } = useUpdateUser();
  const { data: user } = useUserData();
  const { control, handleSubmit, setValue } =
    useForm<PersonalInformationSchema>();
  const onSubmit: SubmitHandler<PersonalInformationSchema> = async (
    data: PersonalInformationSchema
  ) => {
    console.log(data);
    if (!isEditingPersonalInformation) {
      console.log("Updating User Data");
      await updateUser({
        nama: `${data.firstName} ${data.lastName}`,
        tanggal_lahir: data.tanggal_lahir,
        no_hp: data.no_hp,
      });
    }
  };
  useEffect(() => {
    setValue("firstName", user?.nama.split(" ")[0] || "");
    setValue("lastName", user?.nama.split(" ").splice(1).join(" ") || "");
    setValue("no_hp", user?.no_hp || "");
    setValue("tanggal_lahir", user?.tanggal_lahir.slice(0, 10) || "");
  }, [user, setValue]);

  const [isEditingPersonalInformation, setIsEditingPersonalInformation] =
    useState(false);

  const handleEditPersonalInformation = () => {
    console.log("Edit Personal Information");
    setIsEditingPersonalInformation(!isEditingPersonalInformation);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 rounded-2xl bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-8 w-full"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-white text-3xl font-medium">
          Personal Information
        </h2>
        <button
          onClick={handleEditPersonalInformation}
          className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
        >
          <p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
            {isEditingPersonalInformation ? "Save" : "Edit"}
          </p>
        </button>
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

          <div className="flex flex-col w-full gap-4">
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
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">First Name</p>
              <p className="text-white text-2xl font-medium">
                {" "}
                {user?.nama.split(" ")[0]}
              </p>
            </span>

            <span className="w-full">
              <p className="text-white text-lg font-light">Last Name</p>
              <p className="text-white text-2xl font-medium">
                {user?.nama.split(" ").splice(1).join(" ")}
              </p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">Phone Number</p>
              <p className="text-white text-2xl font-medium">{user?.no_hp}</p>
            </span>

            <span className="w-full">
              <p className="text-white text-lg font-light">Email</p>
              <p className="text-white text-2xl font-medium">{user?.email}</p>
            </span>
          </div>

          <div className="flex flex-col w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">Birth Date</p>
              <p className="text-white text-2xl font-medium">
                {user?.tanggal_lahir.slice(0, 10)}
              </p>
            </span>
          </div>
        </div>
      )}

      <div className="w-8 h-36 bg-horizontal-gta rotate-180 absolute bottom-0 left-0 rounded-tr-xl rounded-bl-xl" />
    </form>
  );
}
