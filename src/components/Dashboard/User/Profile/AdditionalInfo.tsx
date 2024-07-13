import { useUpdateUser, useUserData } from "@/services/users";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa6";

type AdditionalSchema = {
  institusi: string;
  img_kartu: File | null;
};

export default function AdditionalInformation() {
  const { mutateAsync: updateUser } = useUpdateUser();
  const { data: user } = useUserData();
  console.log(user);
  const { control, handleSubmit, setValue, resetField, setError } =
    useForm<AdditionalSchema>();
  const onSubmit: SubmitHandler<AdditionalSchema> = async (
    data: AdditionalSchema
  ) => {
    console.log(data);
    if (!isEditingAdditional) {
      console.log("Updating User Data");
      await updateUser({
        institusi: data.institusi,
        image_kartu: data.img_kartu,
      });
    }
  };
  useEffect(() => {
    setValue("institusi", user?.institusi || "");
  }, [user, setValue]);

  const [isEditingAdditional, setIsEditingAdditional] = useState(false);

  const handleEditAdditional = () => {
    setIsEditingAdditional(!isEditingAdditional);
  };

  // useEffect(() => {
  //   if (response) {
  //     setIsEditingAdditional(false);
  //   }
  // }, [response]);

  // const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetField("img_kartu");

    const files = event.target.files;
    if (files && files[0]) {
      const extname = files[0].name.split(".").pop();
      const IMG_EXTS = ["jpg", "jpeg", "png"];

      if (IMG_EXTS.includes(extname || "") && files[0].size > 2 * 1024 * 1024) {
        setError("img_kartu", {
          type: "manual",
          message: "Ukuran maksimal gambar adalah 2MB",
        });
      } else if (extname === "pdf" && files[0].size > 20 * 1024 * 1024) {
        setError("img_kartu", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 20MB",
        });
      } else if (extname !== "pdf" && !IMG_EXTS.includes(extname || "")) {
        setError("img_kartu", {
          type: "manual",
          message: "Mohon upload file .jpg, .jpeg, .png, atau .pdf",
        });
      }
    }

    setValue("img_kartu", files ? files[0] : null);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) return;
  //   const files = e.target.files;
  //   const reader = new FileReader();
  //   reader.readAsText(files[0]);
  //   reader.onload = (e) => {
  //     console.log("image data: ", e.target?.result);
  //     setValue("img_kartu", e.target?.result);
  //   };
  //   setSelectedFile(e.target?.value);
  //   // setSelectedFile(e.target.value);
  //   console.log(selectedFile);
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 rounded-2xl bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-6 w-full md:w-fit h-fit md:h-full"
    >
      <div className="flex flex-row gap-4 justify-between items-center">
        <h2 className="text-white text-2xl md:text-3xl font-medium">
          Additional
        </h2>
        <button
          onClick={handleEditAdditional}
          type="submit"
          className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
        >
          <p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
            {isEditingAdditional ? "Save" : "Edit"}
          </p>
        </button>
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
                  <p className="text-white text-lg font-light">Card</p>
                  <div className="relative w-[261px] h-[135px] border-2 border-dashed border-black bg-[#D9D9D9] rounded-[10px] flex items-center justify-center">
                    <FaUpload className="w-10 h-10 text-gray-500" />
                    <input
                      type="file"
                      {...field}
                      onChange={handleChange}
                      value={undefined}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
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
                {user?.institusi || ""}
              </p>
            </span>

            <span className="w-full flex flex-col gap-3">
              <p className="text-white text-lg font-light">Card</p>
              <img src={`data:image/jpeg;base64,${user?.image_kartu}`} alt="" />
            </span>
          </div>
        </div>
      )}
    </form>
  );
}
