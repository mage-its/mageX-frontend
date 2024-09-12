import DashboardSideBar from "@/components/DashboardSideBar";
import {
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
  FaPhone,
  FaTableList,
} from "react-icons/fa6";
import { PiTrophyFill, PiPaperPlaneRightFill } from "react-icons/pi";
import { BiSolidPencil } from "react-icons/bi";
import profilePIcture from "@/assets/brand/profilePicture.svg";
import { HiUserGroup } from "react-icons/hi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import cn from "@/utils/cn";
import { useEffect, useState } from "react";
import Select, { Option } from "@/components/Select";
import {
  useAddMember,
  useTeamMembers,
  useUpdateTeamInformation,
  useLeadTeams,
} from "@/services/team";
import { useUserData } from "@/services/users";
import {
  Contest,
  appDev,
  competitiveProgramming,
  eSport,
  gameDev,
  iot,
  mobileLegends,
  robotic,
  uiUx,
  valorant,
} from "@/constant/competitionPage";
import Popup from "@/components/Dashboard/User/Home/PopUp";
import InputFile from "@/components/InputFile";
import InputField from "@/components/InputField";
import { useSearchParams } from "react-router-dom";

interface CompetitionButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export const CompetitionButton = ({
  children,
  disabled,
  ...props
}: CompetitionButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 md:gap-2.5 bg-orange-grad rounded-[11px] px-2 md:px-3 py-1 md:py-[5px]",
        { "opacity-50": disabled }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

type TeamInformation = {
  teamName: string;
  teamMembers: string[];
  usernameIngame: string[];
};

type RegistStepOne = {
  category: string;
  paymentProof: File | null;
  followIgAndTwibbon: File | null;
};

type RegistStepTwo = {
  proposal: File | null;
};

type RegistStepThree = {
  link_video: string;
  link_karya: string;
};

export default function DashboardCompetition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step") ? Number(searchParams.get("step")) : 1;
  const { data: user, isSuccess } = useUserData();
  if (isSuccess && !user?.is_logged_in) {
    // console.log("Redirecting to login page");
    window.location.href = "https://api.mage-its.id/users/login";
  }
  const { data: teams } = useLeadTeams();
  // console.log(teams);
  const { data: members } = useTeamMembers();
  const {
    mutateAsync: updateTeamInformation,
    data: responseUpdateTeam,
    isError: isErrorUpdateTeam,
  } = useUpdateTeamInformation();
  const { mutateAsync: addMembers } = useAddMember();
  const [isEditTeamInformation, setIsEditTeamInformation] = useState(false);
  const [linkBuktiPembayaran, setLinkBuktiPembayaran] = useState<
    string | undefined
  >(undefined);
  const [linkTwibbonDanIG, setLinkTwibbonDanIG] = useState<string | undefined>(
    undefined
  );
  const [linkProposal, setLinkProposal] = useState<string | undefined>(
    undefined
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (responseUpdateTeam || isErrorUpdateTeam) {
      setIsPopupVisible(true);
    }
  }, [responseUpdateTeam, isErrorUpdateTeam]);

  const {
    control: teamControl,
    handleSubmit: teamHandleSubmit,
    setValue: setValueTeamControl,
  } = useForm<TeamInformation>({
    defaultValues: {
      teamName: teams?.nama || "",
      teamMembers: (members && members?.map((item) => item.nama)) || [""],
      usernameIngame: teams?.username_ingame || [""],
    },
  });

  useEffect(() => {
    setValueTeamControl("teamName", teams?.nama || "");
    if (teams?.anggota) {
      setValueTeamControl(
        "teamMembers",
        (members && members?.map((item) => item.nama)) || [""]
      );
    }
    teams?.username_ingame?.map((username_ingame, i) => {
      setValueTeamControl(
        `usernameIngame.${i}`,
        username_ingame == "undefined" ? "" : username_ingame
      );
    });
  }, [teams, setValueTeamControl, members]);

  const onSubmit: SubmitHandler<TeamInformation> = async (
    data: TeamInformation
  ) => {
    // console.log(data);
    if (isEditTeamInformation) {
      // console.log("Updating Team Data");
      await updateTeamInformation({
        nama: data.teamName,
        username_ingame: data.usernameIngame,
      });
      await addMembers({ email: data.teamMembers });
    }

    toggleEditTeamInformation();
  };

  const {
    control: registStepOneControl,
    handleSubmit: registStepOneHandleSubmit,
    resetField: resetRegistStepOne,
    setValue: setValueRegistStepOne,
    setError: serErrorRegistStepOne,
  } = useForm<RegistStepOne>({
    defaultValues: {
      category: teams?.kategori || "",
    },
  });

  useEffect(() => {
    setValueRegistStepOne("category", teams?.kategori || "");
  }, [teams, setValueRegistStepOne]);

  const handleChangeBuktiPembayaran = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    resetRegistStepOne("paymentProof");

    const files = event.target.files;
    if (files && files[0]) {
      const extname = files[0].name.split(".").pop();
      const IMG_EXTS = ["jpg", "jpeg", "png"];

      if (IMG_EXTS.includes(extname || "") && files[0].size > 1 * 1024 * 1024) {
        serErrorRegistStepOne("paymentProof", {
          type: "manual",
          message: "Ukuran maksimal gambar adalah 1MB",
        });
      } else if (!IMG_EXTS.includes(extname || "")) {
        serErrorRegistStepOne("paymentProof", {
          type: "manual",
          message: "Mohon upload file .jpg, .jpeg, atau .png ",
        });
      }
    }

    setValueRegistStepOne("paymentProof", files ? files[0] : null);
  };

  const handleChangeTwibbonDanIG = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    resetRegistStepOne("followIgAndTwibbon");

    const files = event.target.files;
    if (files && files[0]) {
      const extname = files[0].name.split(".").pop();

      if (extname === "pdf" && files[0].size > 5 * 1024 * 1024) {
        serErrorRegistStepOne("followIgAndTwibbon", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 5MB",
        });
      } else if (extname !== "pdf") {
        serErrorRegistStepOne("followIgAndTwibbon", {
          type: "manual",
          message: "Mohon upload file .pdf",
        });
      }
    }

    setValueRegistStepOne("followIgAndTwibbon", files ? files[0] : null);
  };

  const {
    control: registStepTwoControl,
    handleSubmit: registStepTwoHandleSubmit,
    resetField: resetRegistStepTwo,
    setValue: setValueRegistStepTwo,
    setError: serErrorRegistStepTwo,
  } = useForm<RegistStepTwo>();

  const handleChangeProposal = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetRegistStepTwo("proposal");

    const files = event.target.files;
    if (files && files[0]) {
      const extname = files[0].name.split(".").pop();

      if (extname === "pdf" && files[0].size > 5 * 1024 * 1024) {
        serErrorRegistStepTwo("proposal", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 5MB",
        });
      } else if (extname !== "pdf") {
        serErrorRegistStepTwo("proposal", {
          type: "manual",
          message: "Mohon upload file .pdf",
        });
      }
    }

    setValueRegistStepTwo("proposal", files ? files[0] : null);
  };

  const {
    control: registStepThreeControl,
    handleSubmit: registStepThreeHandleSubmit,
    setValue: setValueRegistStepThree,
  } = useForm<RegistStepThree>({
    defaultValues: {
      link_video: teams?.link_video || "",
      link_karya: teams?.link_karya || "",
    },
  });

  useEffect(() => {
    setValueRegistStepThree("link_video", teams?.link_video || "");
    setValueRegistStepThree("link_karya", teams?.link_karya || "");
  }, [teams, setValueRegistStepThree]);

  const onSubmitRegistStepTwo: SubmitHandler<RegistStepTwo> = async (data) => {
    // console.log(data);
    await updateTeamInformation({
      proposal: data.proposal,
    });
  };

  const onSubmitRegistStepOne: SubmitHandler<RegistStepOne> = async (data) => {
    // console.log(data);
    await updateTeamInformation({
      kategori: data.category,
      bukti_pembayaran: data.paymentProof,
      bukti_twibbon_follow: data.followIgAndTwibbon,
    });
  };

  const onSubmitRegistStepThree: SubmitHandler<RegistStepThree> = (data) => {
    console.log(data);
    updateTeamInformation({
      link_video: "-",
      link_karya: data.link_karya,
    });
  };

  const onRemovePayment = () => {
    resetRegistStepOne("paymentProof");
    setValueRegistStepOne("paymentProof", null);
  };

  const onRemoveFollowIgAndTwibbon = () => {
    resetRegistStepOne("followIgAndTwibbon");
    setValueRegistStepOne("followIgAndTwibbon", null);
  };

  const onRemoveProposal = () => {
    resetRegistStepTwo("proposal");
    setValueRegistStepTwo("proposal", null);
  };

  const toggleEditTeamInformation = () => {
    setIsEditTeamInformation(!isEditTeamInformation);
    if (!isEditTeamInformation) {
      setValueTeamControl(
        "teamMembers",
        (members && members?.map((item) => item.email)) || [""]
      );
    } else {
      setValueTeamControl(
        "teamMembers",
        (members && members?.map((item) => item.nama)) || [""]
      );
    }
  };

  const increaseStep = () => {
    console.log(teams?.status);
    if (
      step === 3 ||
      teams?.divisi == "Robotics" ||
      teams?.divisi == "Competitive Programming" ||
      teams?.divisi == "Valorant" ||
      teams?.divisi == "Mobile Legends" ||
      teams?.status === "" ||
      (step === 2 && teams?.status === "tahap-1") ||
      (step === 3 && teams?.status === "tahap-2")
    )
      return;
    setSearchParams(new URLSearchParams("step=" + (step + 1)));
  };

  const decreaseStep = () => {
    if (step === 1) return;
    setSearchParams(new URLSearchParams("step=" + (step - 1)));
  };
  useEffect(() => {
    if (
      step === 4 ||
      teams?.divisi == "Robotics" ||
      teams?.divisi == "Competitive Programming" ||
      teams?.divisi == "Valorant" ||
      teams?.divisi == "Mobile Legends" ||
      teams?.status === "" ||
      (step === 3 && teams?.status === "tahap-1")
    ) {
      setSearchParams(new URLSearchParams("step=1"));
    }
  }, [step, teams, setSearchParams]);

  const competitionPath: { [key: string]: Contest } = {
    "UI/UX": uiUx,
    "Competitive Programming": competitiveProgramming,
    "App Dev": appDev,
    Esport: eSport,
    IoT: iot,
    Robotics: robotic,
    "Game Dev": gameDev,
    Valorant: valorant,
    "Mobile Legends": mobileLegends,
  };

  const format: { [key: string]: string } = {
    "App Dev": "AppDev",
    IoT: "IoT",
    Robotics: "Robotik",
    "Game Dev": "GameDev",
    "UI/UX": "UI/UX",
    Valorant: "Valorant",
    "Mobile Legends": "MobileLegends",
    "Competitive Programming": "CP",
  };

  const labelTahap3: { [key: string]: string } = {
    "UI/UX": "Link Proposal & Video (disatukan dalam .rar)",
    "App Dev": "Link Work/Product (Karya) & Video (disatukan dalam .rar)",
    IoT: "Link Laporan & Video (disatukan dalam .rar)",
    "Game Dev": "Link Work/Product (Karya) & Video (disatukan dalam .rar)",
  };

  useEffect(() => {
    if (teams?.bukti_pembayaran !== "000000000000000000000000") {
      resetRegistStepOne("paymentProof");
      setLinkBuktiPembayaran(
        `https://api.mage-its.id/images/${teams?.bukti_pembayaran}`
      );
    }
    if (teams?.bukti_twibbon_follow !== "000000000000000000000000") {
      resetRegistStepOne("followIgAndTwibbon");
      setLinkTwibbonDanIG(
        `https://api.mage-its.id/images/${teams?.bukti_twibbon_follow}`
      );
    }
    if (teams?.proposal !== "000000000000000000000000") {
      resetRegistStepTwo("proposal");
      setLinkProposal(`https://api.mage-its.id/images/${teams?.proposal}`);
    }
  }, [teams, resetRegistStepOne, resetRegistStepTwo]);

  return (
    <div className="flex bg-vertical-gta h-fit">
      <DashboardSideBar />
      <div className="flex flex-col gap-[10px] lg:gap-[20px] w-full min-h-screen py-6 px-6 mt-16 lg:mt-0">
        <div className="hidden md:flex flex-row basis-[6%] items-center justify-between pb-[23px] border-b-2 border-white">
          <div className="flex items-center gap-2">
            <PiTrophyFill className="text-white/50 text-xl lg:text-3xl" />
            <h1 className="text-white/50 font-fredoka font-medium text-base md:text-lg lg:text-xl">
              Competition
            </h1>
            <FaAngleRight className="text-white/50 text-xs md:text-sm lg:text-base" />
            <h1 className="text-white font-fredoka font-medium text-base md:text-lg lg:text-xl">
              Registration
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-white font-fredoka font-medium text-base md:text-lg lg:text-xl">
              {user?.nama}
            </h1>
            <img src={profilePIcture} alt="" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col h-max lg:basis-[47%] gap-2.5 lg:gap-6 shrink-0 lg:shrink">
          <form
            onSubmit={teamHandleSubmit(onSubmit)}
            className="bg-black/80 rounded-[20px] h-fit lg:h-full shrink-0 lg:shrink lg:basis-[70%] overflow-hidden"
          >
            <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
              <div className="flex gap-2 lg:gap-4">
                <HiUserGroup className="text-white text-lg md:text-xl lg:text-2xl" />
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Team Information
                </h1>
              </div>
              <div className="flex gap-2 lg:gap-4">
                <CompetitionButton
                  onClick={toggleEditTeamInformation}
                  disabled={isEditTeamInformation || teams?.status !== ""}
                >
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Edit
                  </h1>
                  <BiSolidPencil className="text-white text-xs md:text-sm lg:text-base" />
                </CompetitionButton>
                <CompetitionButton
                  type="submit"
                  disabled={!isEditTeamInformation}
                >
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Submit
                  </h1>
                  <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                </CompetitionButton>
              </div>
            </div>
            <div className="px-4 py-3">
              <Controller
                disabled={!isEditTeamInformation}
                name="teamName"
                control={teamControl}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label="Team Name"
                    placeholder="Enter your team name"
                    disabled={teams?.status !== "" || !isEditTeamInformation}
                  />
                )}
              />
              <div className="flex flex-col gap-2.5 mt-4">
                <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  {teams?.divisi === "Valorant" ||
                  teams?.divisi === "Mobile Legends"
                    ? "Members  |  In-game Username"
                    : "Members"}
                </p>
                {teams?.divisi === "Valorant" ||
                teams?.divisi === "Mobile Legends" ? (
                  <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-2.5 w-full mb-2.5">
                    <div className="bg-white rounded-xl py-2 px-2.5">
                      <p className="font-roboto font-medium text-xs md:text-sm lg:text-base text-dark">
                        {user?.nama}
                        <span className="text-dark"> (Leader)</span>
                      </p>
                    </div>
                    <Controller
                      disabled={!isEditTeamInformation}
                      name={`usernameIngame.0`}
                      control={teamControl}
                      render={({ field }) => (
                        <InputField
                          {...field}
                          placeholder={`Enter leader in-game username`}
                          disabled={
                            teams?.status !== "" || !isEditTeamInformation
                          }
                        />
                      )}
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-xl py-2 px-2.5 mb-2.5">
                    <p className="font-roboto font-medium text-xs md:text-sm lg:text-base text-dark">
                      {user?.nama}
                      <span className="text-dark"> (Leader)</span>
                    </p>
                  </div>
                )}

                {Array.from(
                  {
                    length:
                      (competitionPath[teams?.divisi as string]?.maxMember ||
                        0) - 1,
                  },
                  (_, index) =>
                    teams?.divisi === "Valorant" ||
                    teams?.divisi === "Mobile Legends" ? (
                      <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-2.5 w-full">
                        <Controller
                          key={index}
                          disabled={!isEditTeamInformation}
                          name={`teamMembers.${index}`}
                          control={teamControl}
                          rules={{
                            pattern: {
                              value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                              message: "Email harus valid",
                            },
                          }}
                          render={({ field }) => (
                            <InputField
                              {...field}
                              placeholder={`Enter member email ${index + 1}`}
                              disabled={
                                teams?.status !== "" || !isEditTeamInformation
                              }
                            />
                          )}
                        />
                        <Controller
                          key={index}
                          disabled={!isEditTeamInformation}
                          name={`usernameIngame.${index + 1}`}
                          control={teamControl}
                          render={({ field }) => (
                            <InputField
                              {...field}
                              placeholder={`Enter member in-game username ${index + 1}`}
                              disabled={
                                teams?.status !== "" || !isEditTeamInformation
                              }
                            />
                          )}
                        />
                      </div>
                    ) : (
                      <Controller
                        key={index}
                        disabled={!isEditTeamInformation}
                        name={`teamMembers.${index}`}
                        control={teamControl}
                        rules={{
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            message: "Email harus valid",
                          },
                        }}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            placeholder={`Enter member email ${index + 1}`}
                            disabled={
                              teams?.status !== "" || !isEditTeamInformation
                            }
                          />
                        )}
                      />
                    )
                )}
              </div>
            </div>
          </form>
          <div className="flex flex-col bg-black/80 rounded-[20px] lg:basis-[30%] shrink-0 lg:shrink overflow-hidden">
            <div className="flex items-center gap-2 lg:gap-4 bg-gray-2 px-4 py-3">
              <FaPhone className="text-white text-base md:text-lg lg:text-xl" />
              <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                Contact Person
              </h1>
            </div>
            <div className="grow flex flex-row justify-center lg:flex-col gap-[15px] h-[120px] px-4 py-3">
              <div className="flex flex-col justify-center items-center bg-grayscale basis-1/2 w-full rounded-[15px]">
                <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  {competitionPath[teams?.divisi as string]?.contact?.[0]
                    ?.name || "N/A"}
                </p>
                <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  {competitionPath[teams?.divisi as string]?.contact?.[0]
                    ?.phone || "N/A"}
                </p>
              </div>
              {competitionPath[teams?.divisi as string]?.contact?.[1] && (
                <div className="flex flex-col justify-center items-center bg-grayscale basis-1/2 w-full rounded-[15px]">
                  <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    {competitionPath[teams?.divisi as string]?.contact?.[1]
                      ?.name || "N/A"}
                  </p>
                  <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    {competitionPath[teams?.divisi as string]?.contact?.[1]
                      ?.phone || "N/A"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {step === 1 && (
          <form
            onSubmit={registStepOneHandleSubmit(onSubmitRegistStepOne)}
            className="flex flex-col h-[800px] md:basis-[50%] bg-black/80 rounded-[20px] overflow-hidden"
          >
            <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
              <div className="flex items-center gap-2 lg:gap-4">
                <FaTableList className="text-white text-lg md:text-xl lg:text-2xl" />
                <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-4 gap-1">
                  <div>
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Registration
                    </h1>
                    {teams?.status === "" && (
                      <h1 className="text-white font-fredoka font-light text-[10px] md:text-xs lg:text-sm">
                        Wait for data verification after submitting. If not
                        verified within 2x24 hours, contact support.
                      </h1>
                    )}
                  </div>

                  {teams?.status !== "" && (
                    <div className="rounded-xl bg-vertical-gta md:px-3 md:py-2 py-1 px-2">
                      <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Step 1 Verified
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2 lg:gap-4">
                {window.innerWidth > 768 && (
                  <CompetitionButton
                    type="submit"
                    disabled={teams?.status !== ""}
                  >
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Submit
                    </h1>
                    <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                  </CompetitionButton>
                )}
                {teams?.divisi !== "Robotics" &&
                  teams?.divisi !== "Competitive Programming" &&
                  teams?.divisi !== "Valorant" &&
                  teams?.divisi !== "Mobile Legends" && (
                    <CompetitionButton
                      onClick={increaseStep}
                      type="button"
                      disabled={teams?.status == ""}
                    >
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Next
                      </h1>
                      <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
                    </CompetitionButton>
                  )}
              </div>
            </div>
            <div className="p-4 w-full grow flex flex-col md:grid grid-cols-2 gap-2.5">
              <div className="flex flex-col w-full grow">
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base mb-2">
                  Competition
                </h1>
                <div className="bg-white/10 rounded-xl py-2 px-2.5 mb-2.5">
                  <p className="font-roboto font-medium text-xs md:text-sm lg:text-base text-white/20">
                    {teams?.divisi}
                  </p>
                </div>
                <Controller
                  name="paymentProof"
                  control={registStepOneControl}
                  render={({ field }) => (
                    <InputFile
                      {...field}
                      label="Payment Proof"
                      placeholder="Upload Here"
                      formatName={`Pembayaran_${format[teams?.divisi || ""]}_[Nama Tim].pdf`}
                      formatFile=".png, .jpg, .jpeg"
                      maxFileSize="1MB"
                      accept=".png, .jpg, .jpeg"
                      value={undefined}
                      onRemove={onRemovePayment}
                      onChange={handleChangeBuktiPembayaran}
                      link_file={linkBuktiPembayaran}
                      disabled={teams?.status !== ""}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col w-full grow gap-4 md:gap-2">
                <Controller
                  name="category"
                  control={registStepOneControl}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Category"
                      id="category"
                      disabled={teams?.status !== ""}
                    >
                      <Option value="">Choose</Option>
                      {teams?.divisi === "Robotics" && (
                        <Option value="sma">SMA</Option>
                      )}
                      {(teams?.divisi === "App Dev" ||
                        teams?.divisi === "Game Dev" ||
                        teams?.divisi === "Competitive Programming" ||
                        teams?.divisi === "UI/UX") && (
                        <>
                          <Option value="mahasiswa">Mahasiswa</Option>
                          <Option value="sma">SMA</Option>
                        </>
                      )}
                      {(teams?.divisi == "IoT" ||
                        teams?.divisi == "Valorant" ||
                        teams?.divisi == "Mobile Legends") && (
                        <Option value="umum">Umum</Option>
                      )}
                    </Select>
                  )}
                />
                <Controller
                  name="followIgAndTwibbon"
                  control={registStepOneControl}
                  render={({ field }) => (
                    <InputFile
                      {...field}
                      label="Follow Instagram + Twibbon Post"
                      placeholder="Upload Here"
                      formatName={`IG_Twibbon_${format[teams?.divisi || ""]}_[Nama Tim].pdf`}
                      formatFile=".pdf"
                      maxFileSize="5MB"
                      accept=".pdf"
                      value={undefined}
                      onRemove={onRemoveFollowIgAndTwibbon}
                      onChange={handleChangeTwibbonDanIG}
                      link_file={linkTwibbonDanIG}
                      disabled={teams?.status !== ""}
                    />
                  )}
                />
                {window.innerWidth <= 768 && (
                  <CompetitionButton
                    type="submit"
                    disabled={teams?.status !== ""}
                  >
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Submit
                    </h1>
                    <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                  </CompetitionButton>
                )}
              </div>
            </div>
          </form>
        )}
        {step === 2 &&
          teams?.divisi !== "Robotics" &&
          teams?.divisi !== "Competitive Programming" &&
          teams?.divisi !== "Valorant" &&
          teams?.divisi !== "Mobile Legends" && (
            <form
              onSubmit={registStepTwoHandleSubmit(onSubmitRegistStepTwo)}
              className=" flex flex-col h-[350px] md:basis-[47%] bg-black/80 rounded-[20px] overflow-hidden"
            >
              <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
                <div className="flex items-center gap-2 lg:gap-4">
                  <FaTableList className="text-white text-lg md:text-xl lg:text-2xl" />
                  <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-4 gap-1">
                    <div>
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Registration
                      </h1>
                      {teams?.status === "tahap-1" && (
                        <h1 className="text-white font-fredoka font-light text-[10px] md:text-xs lg:text-sm">
                          Wait for data verification after submitting. If not
                          verified within 2x24 hours, contact support.
                        </h1>
                      )}
                    </div>
                    {teams?.status !== "tahap-1" && (
                      <div className="rounded-xl bg-vertical-gta md:px-3 md:py-2 py-1 px-2">
                        <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                          Step 2 Verified
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-4">
                  <CompetitionButton onClick={decreaseStep}>
                    <FaArrowLeft className="text-white text-xs md:text-sm lg:text-base" />
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Previous
                    </h1>
                  </CompetitionButton>
                  {window.innerWidth > 768 && (
                    <CompetitionButton
                      type="submit"
                      disabled={teams?.status !== "tahap-1"}
                    >
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Submit
                      </h1>
                      <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                    </CompetitionButton>
                  )}
                  <CompetitionButton
                    onClick={increaseStep}
                    disabled={teams?.status === "tahap-1"}
                    type="button"
                  >
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Next
                    </h1>
                    <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
                  </CompetitionButton>
                </div>
              </div>
              <div className="p-4 w-full h-full grow">
                <div className="flex flex-col w-full h-full gap-4">
                  <Controller
                    name="proposal"
                    control={registStepTwoControl}
                    render={({ field }) => (
                      <InputFile
                        {...field}
                        label={
                          teams?.divisi === "UI/UX" ? "Abstrak" : "Proposal"
                        }
                        example="https://drive.google.com/drive/folders/1h2UG7IQJvA-Sy98rkyD0e2x6TImRGjNi"
                        placeholder="Upload Here"
                        formatName={`MAGEX_Tahap 1_${format[teams?.divisi || ""]}_[Nama Tim].pdf`}
                        formatFile=".pdf"
                        maxFileSize="5MB"
                        accept=".pdf"
                        value={undefined}
                        onRemove={onRemoveProposal}
                        onChange={handleChangeProposal}
                        link_file={linkProposal}
                        disabled={teams?.status === "tahap-2"}
                      />
                    )}
                  />
                  {window.innerWidth <= 768 && (
                    <CompetitionButton
                      type="submit"
                      disabled={teams?.status !== "tahap-1"}
                    >
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Submit
                      </h1>
                      <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                    </CompetitionButton>
                  )}
                </div>
              </div>
            </form>
          )}
        {step === 3 &&
          teams?.divisi !== "Robotics" &&
          teams?.divisi !== "Competitive Programming" &&
          teams?.divisi !== "Valorant" &&
          teams?.divisi !== "Mobile Legends" && (
            <form
              onSubmit={registStepThreeHandleSubmit(onSubmitRegistStepThree)}
              className=" flex flex-col h-[350px] md:basis-[47%] bg-black/80 rounded-[20px] overflow-hidden"
            >
              <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
                <div className="flex items-center gap-2 lg:gap-4">
                  <FaTableList className="text-white text-lg md:text-xl lg:text-2xl" />
                  <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-4 gap-1">
                    <div>
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Registration
                      </h1>
                      {teams?.status === "tahap-2" && (
                        <h1 className="text-white font-fredoka font-light text-[10px] md:text-xs lg:text-sm">
                          Wait for data verification after submitting. If not
                          verified within 2x24 hours, contact support.
                        </h1>
                      )}
                    </div>
                    {teams?.status !== "tahap-2" && (
                      <div className="rounded-xl bg-vertical-gta md:px-3 md:py-2 py-1 px-2">
                        <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                          Step 3 Verified
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-4">
                  <CompetitionButton onClick={decreaseStep}>
                    <FaArrowLeft className="text-white text-xs md:text-sm lg:text-base" />
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Previous
                    </h1>
                  </CompetitionButton>
                  {window.innerWidth > 768 && (
                    <CompetitionButton
                      type="submit"
                      disabled={teams?.status !== "tahap-2"}
                    >
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Submit
                      </h1>
                      <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                    </CompetitionButton>
                  )}
                  <CompetitionButton onClick={increaseStep} disabled>
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Next
                    </h1>
                    <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
                  </CompetitionButton>
                </div>
              </div>
              <div className="p-4 w-full h-full grow">
                <div className="flex flex-col justify-around w-full h-full">
                  <Controller
                    name="link_karya"
                    control={registStepThreeControl}
                    render={({ field }) => (
                      <InputField
                        {...field}
                        label={labelTahap3[teams?.divisi as string]}
                        placeholder="Enter link here"
                        className="py-7"
                        disabled={teams?.status === "tahap-3"}
                      />
                    )}
                  />
                  {window.innerWidth <= 768 && (
                    <CompetitionButton
                      type="submit"
                      disabled={teams?.status !== "tahap-2"}
                    >
                      <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                        Submit
                      </h1>
                      <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                    </CompetitionButton>
                  )}
                </div>
              </div>
            </form>
          )}
      </div>
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        text={
          responseUpdateTeam?.message || "Error. Unable to update team data"
        }
      />
    </div>
  );
}
