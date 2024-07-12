import { useState } from 'react';

export default function PersonalInformation() {
  const [isEditingPersonalInformation, setIsEditingPersonalInformation] =
    useState(false);

  const handleEditPersonalInformation = () => {
    setIsEditingPersonalInformation(!isEditingPersonalInformation);
  };

  return (
    <div className="p-10 rounded-2xl bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-8 w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-white text-3xl font-medium">Personal Information</h2>
        <button
					onClick={handleEditPersonalInformation}
					className="relative px-4 py-2 rounded-lg text-lg z-10 group transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:bg-gradient-to-r before:from-[#435ECF] before:via-[#E24BB3] before:to-[#FF9433] before:z-[-1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:rounded-lg after:bg-black after:z-[-1] hover:after:bg-gradient-to-r hover:after:from-[#435ECF] hover:after:via-[#E24BB3] hover:after:to-[#FF9433] group-hover:text-white"
				>
					<p className="bg-vertical-gta bg-clip-text text-transparent font-medium group-hover:text-white">
						{isEditingPersonalInformation ? 'Save' : 'Edit'}
					</p>
				</button>
      </div>

      {isEditingPersonalInformation ? (
        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="flex flex-col gap-2 w-full">
              <label className="text-white text-lg font-light">First Name</label>
              <input
                type="text"
                className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                defaultValue="Rigel"
              />
            </span>

            <span className="flex flex-col gap-2 w-full">
              <label className="text-white text-lg font-light">Last Name</label>
              <input
                type="text"
                className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                defaultValue="Ramadhani W"
              />
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="flex flex-col gap-2 w-full">
              <label className="text-white text-lg font-light">Phone Number</label>
              <input
                type="text"
                className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                defaultValue="+62812121212"
              />
            </span>

            <span className="flex flex-col gap-2 w-full">
              <label className="text-white text-lg font-light">Email</label>
              <input
                type="text"
                className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                defaultValue="Rig3lRamdnW@gmail.com"
              />
            </span>
          </div>

          <div className="flex flex-col w-full gap-4">
            <span className="flex flex-col gap-2 w-full">
              <label className="text-white text-lg font-light">Birth Date</label>
              <input
                type="text"
                className="text-white text-2xl font-medium bg-transparent border-2 px-4 py-2 rounded-xl border-white"
                defaultValue="01/01/2001"
              />
            </span>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">First Name</p>
              <p className="text-white text-2xl font-medium">Rigel</p>
            </span>

            <span className="w-full">
              <p className="text-white text-lg font-light">Last Name</p>
              <p className="text-white text-2xl font-medium">Ramadhani W</p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">Phone Number</p>
              <p className="text-white text-2xl font-medium">+62812121212</p>
            </span>

            <span className="w-full">
              <p className="text-white text-lg font-light">Email</p>
              <p className="text-white text-2xl font-medium">Rig3l@gmail.com</p>
            </span>
          </div>

          <div className="flex flex-col w-full gap-4">
            <span className="w-full">
              <p className="text-white text-lg font-light">Birth Date</p>
              <p className="text-white text-2xl font-medium">01/01/2001</p>
            </span>
          </div>
        </div>
      )}

      <div className="w-8 h-36 bg-horizontal-gta rotate-180 absolute bottom-0 left-0 rounded-tr-xl rounded-bl-xl" />
    </div>
  );
}