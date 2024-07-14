import DashboardSideBar from "@/components/DashboardSideBar";
import {
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
  FaPhone,
  FaTableList,
  FaX,
} from "react-icons/fa6";
import {
  PiTrophyFill,
  PiPaperPlaneRightFill,
  PiFileArrowUpFill,
} from "react-icons/pi";
import { BiSolidPencil } from "react-icons/bi";
import profilePIcture from "@/assets/brand/profilePicture.svg";
import { HiUserGroup } from "react-icons/hi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import cn from "@/utils/cn";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
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
  robotic,
  uiUx,
} from "@/constant/competitionPage";
import Popup from "@/components/dashboardHome/PopUp";

interface CompetitionButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

interface InputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder: string;
}

interface InputFileProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder: string;
  Icon?: IconType;
  formatName?: string;
  formatFile?: string;
  maxFileSize?: string;
  onRemove?: () => void;
  link_file?: string;
}

const CompetitionButton = ({
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

const InputField = ({
  label,
  placeholder,
  disabled,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
          {label}
        </label>
      )}
      <input
        {...props}
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        className={cn(
          "bg-white/10 rounded-xl px-2.5 py-2 text-white/20 font-roboto font-medium text-xs md:text-sm lg:text-base border-[1px] border-white/80",
          { "border-white/20": disabled },
          className
        )}
      />
    </div>
  );
};

const InputFile = ({
  label,
  placeholder,
  disabled,
  formatName,
  formatFile,
  maxFileSize,
  link_file,
  onChange,
  onRemove,
  Icon = PiFileArrowUpFill,
  ...props
}: InputFileProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const checked = fileName !== null;
  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const truncatedFileName =
        files[0].name.length > 15
          ? files[0].name.slice(0, 15) + "..."
          : files[0].name;
      setFileName(truncatedFileName);
    } else {
      setFileName(null);
    }

    onChange && onChange(event);
  };

  const handleClick = () => {
    setFileName(null);
    onRemove && onRemove();
  };
  return (
    <label className="flex flex-col text-white font-fredoka font-medium text-xs md:text-sm lg:text-base w-full h-full">
      {label}
      <div className="flex flex-col justify-center items-center bg-white/10 border-[2px] border-dashed border-white/50 w-full h-full mt-2 rounded-xl p-2 text-center lg:p-4">
        {link_file ? (
          <a
            target="_blank"
            href={link_file}
            className="flex items-center gap-2"
          >
            <Icon className="text-white text-lg md:text-xl lg:text-2xl" />
            <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
              {checked ? fileName : link_file}
            </p>
            {checked && (
              <FaX
                className="text-white text-xs md:text-sm lg:text-base cursor-pointer"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClick();
                }}
              />
            )}
          </a>
        ) : (
          <div className="flex items-center gap-2">
            <Icon className="text-white text-lg md:text-xl lg:text-2xl" />
            <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
              {checked ? fileName : placeholder}
            </p>
            {checked && (
              <FaX
                className="text-white text-xs md:text-sm lg:text-base cursor-pointer"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClick();
                }}
              />
            )}
          </div>
        )}

        {formatName && (
          <p className="text-white/50 font-fredoka text-[10px] md:text-sm lg:text-base">
            Format:{" "}
            <span className="bg-vertical-gta bg-clip-text text-transparent font-fredoka text-[10px] md:text-sm lg:text-base">
              {formatName}
            </span>
          </p>
        )}
        {(formatFile || maxFileSize) && (
          <p className="font-fredoka font-medium text-[10px] md:text-sm lg:text-base text-white/20">
            ({formatFile}
            {formatFile && maxFileSize && " | "}
            {maxFileSize && "max. " + maxFileSize})
          </p>
        )}
      </div>
      <input
        {...props}
        disabled={disabled}
        type="file"
        placeholder={placeholder}
        className="m-0 hidden"
        onChange={changeFile}
      />
    </label>
  );
};

type TeamInformation = {
  teamName: string;
  teamMembersOne: string;
  teamMembersTwo: string;
  teamMembersThree: string;
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
  const [step, setStep] = useState<number>(1);
  const { data: user } = useUserData();
  if (!user?.is_logged_in) {
    window.location.href = "https://api.mage-its.id/users/login";
  }
  const { data: teams } = useLeadTeams();
  console.log(teams);
  const { data: members } = useTeamMembers();
  const { mutateAsync: updateTeamInformation, data: responseUpdateTeam } =
    useUpdateTeamInformation();
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
    if (responseUpdateTeam) {
      setIsPopupVisible(true);
    }
  }, [responseUpdateTeam]);

  const {
    control: teamControl,
    handleSubmit: teamHandleSubmit,
    setValue: setValueTeamControl,
  } = useForm<TeamInformation>({
    defaultValues: {
      teamName: teams?.nama || "",
      teamMembersOne: (members && members[0].nama) || "",
      teamMembersTwo: (members && members[1].nama) || "",
      teamMembersThree: (members && members[2].nama) || "",
    },
  });

  useEffect(() => {
    setValueTeamControl("teamName", teams?.nama || "");
    if (teams?.anggota) {
      setValueTeamControl("teamMembersOne", (members && members[0].nama) || "");
      setValueTeamControl("teamMembersTwo", (members && members[1].nama) || "");
      setValueTeamControl(
        "teamMembersThree",
        (members && members[2].nama) || ""
      );
    }
  }, [teams, setValueTeamControl, members]);

  const onSubmit: SubmitHandler<TeamInformation> = async (
    data: TeamInformation
  ) => {
    console.log(data);
    if (isEditTeamInformation) {
      console.log("Updating Team Data");
      await updateTeamInformation({
        nama: data.teamName,
      });
      await addMembers({
        email: data.teamMembersOne,
      });
      await addMembers({
        email: data.teamMembersTwo,
      });
      await addMembers({
        email: data.teamMembersThree,
      });
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
          message: "Ukuran maksimal gambar adalah 2MB",
        });
      } else if (extname === "pdf" && files[0].size > 5 * 1024 * 1024) {
        serErrorRegistStepOne("paymentProof", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 20MB",
        });
      } else if (extname !== "pdf" && !IMG_EXTS.includes(extname || "")) {
        serErrorRegistStepOne("paymentProof", {
          type: "manual",
          message: "Mohon upload file .jpg, .jpeg, .png, atau .pdf",
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
      const IMG_EXTS = ["jpg", "jpeg", "png"];

      if (IMG_EXTS.includes(extname || "") && files[0].size > 1 * 1024 * 1024) {
        serErrorRegistStepOne("followIgAndTwibbon", {
          type: "manual",
          message: "Ukuran maksimal gambar adalah 2MB",
        });
      } else if (extname === "pdf" && files[0].size > 5 * 1024 * 1024) {
        serErrorRegistStepOne("followIgAndTwibbon", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 20MB",
        });
      } else if (extname !== "pdf" && !IMG_EXTS.includes(extname || "")) {
        serErrorRegistStepOne("followIgAndTwibbon", {
          type: "manual",
          message: "Mohon upload file .jpg, .jpeg, .png, atau .pdf",
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
      const IMG_EXTS = ["jpg", "jpeg", "png"];

      if (IMG_EXTS.includes(extname || "") && files[0].size > 1 * 1024 * 1024) {
        serErrorRegistStepTwo("proposal", {
          type: "manual",
          message: "Ukuran maksimal gambar adalah 2MB",
        });
      } else if (extname === "pdf" && files[0].size > 5 * 1024 * 1024) {
        serErrorRegistStepTwo("proposal", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 20MB",
        });
      } else if (extname !== "pdf" && !IMG_EXTS.includes(extname || "")) {
        serErrorRegistStepTwo("proposal", {
          type: "manual",
          message: "Mohon upload file .jpg, .jpeg, .png, atau .pdf",
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
    console.log(data);
    await updateTeamInformation({
      proposal: data.proposal,
    });
  };

  const onSubmitRegistStepOne: SubmitHandler<RegistStepOne> = async (data) => {
    console.log(data);
    await updateTeamInformation({
      kategori: data.category,
      bukti_pembayaran: data.paymentProof,
      bukti_twibbon_follow: data.followIgAndTwibbon,
    });
  };

  const onSubmitRegistStepThree: SubmitHandler<RegistStepThree> = (data) => {
    console.log(data);
    updateTeamInformation({
      link_video: data.link_video,
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

  const toggleEditTeamInformation = () =>
    setIsEditTeamInformation(!isEditTeamInformation);

  const increaseStep = () => setStep((prev) => prev + 1);
  const decreaseStep = () => setStep((prev) => prev - 1);

  const competitionPath: { [key: string]: Contest } = {
    "UI/UX": uiUx,
    "Competitive Programming": competitiveProgramming,
    "App Dev": appDev,
    Esport: eSport,
    IoT: iot,
    Robotics: robotic,
    "Game Dev": gameDev,
  };

  useEffect(() => {
    if (teams?.bukti_pembayaran !== "000000000000000000000000") {
      setLinkBuktiPembayaran(
        `https://api.mage-its.id/images/${teams?.bukti_pembayaran}`
      );
    }
    if (teams?.bukti_twibbon_follow !== "000000000000000000000000") {
      setLinkTwibbonDanIG(
        `https://api.mage-its.id/images/${teams?.bukti_twibbon_follow}`
      );
    }
    if (teams?.proposal !== "000000000000000000000000") {
      setLinkProposal(`https://api.mage-its.id/images/${teams?.proposal}`);
    }
  }, [teams]);

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
        <div className="flex lg:flex-row flex-col h-[450px] md:h-[600px] lg:basis-[47%] gap-2.5 lg:gap-6">
          <form
            onSubmit={teamHandleSubmit(onSubmit)}
            className="bg-black/80 rounded-[20px] basis-[70%] h-full overflow-hidden"
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
                  disabled={isEditTeamInformation}
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
                  />
                )}
              />
              <div className="flex flex-col gap-2.5 mt-4">
                <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Members
                </p>
                {/* <div className="rounded-xl bg-white py-2 px-2.5">
                  <p className="text-dark font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    pp
                  </p>
                </div> */}
                <Controller
                  disabled={!isEditTeamInformation}
                  name="teamMembersOne"
                  control={teamControl}
                  render={({ field }) => (
                    <InputField {...field} placeholder="Enter your team name" />
                  )}
                />
                <Controller
                  disabled={!isEditTeamInformation}
                  name="teamMembersTwo"
                  control={teamControl}
                  render={({ field }) => (
                    <InputField {...field} placeholder="Enter your team name" />
                  )}
                />
                <Controller
                  disabled={!isEditTeamInformation}
                  name="teamMembersThree"
                  control={teamControl}
                  render={({ field }) => (
                    <InputField {...field} placeholder="Enter your team name" />
                  )}
                />
              </div>
            </div>
          </form>
          <div className="flex flex-col bg-black/80 rounded-[20px] basis-[30%] h-full overflow-hidden">
            <div className="flex items-center gap-2 lg:gap-4 bg-gray-2 px-4 py-3">
              <FaPhone className="text-white text-base md:text-lg lg:text-xl" />
              <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                Contact Person
              </h1>
            </div>
            <div className="grow flex flex-row justify-center lg:flex-col gap-[15px] px-4 py-3">
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
            className="flex flex-col h-[700px] md:basis-[47%] lg:basis-[47%] bg-black/80 rounded-[20px] overflow-hidden"
          >
            <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
              <div className="flex items-center gap-2 lg:gap-4">
                <FaTableList className="text-white text-lg md:text-xl lg:text-2xl" />
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Registration and Verification
                </h1>
              </div>
              <div className="flex gap-2 lg:gap-4">
                <CompetitionButton onClick={decreaseStep} disabled>
                  <FaArrowLeft className="text-white text-xs md:text-sm lg:text-base" />
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Previous
                  </h1>
                </CompetitionButton>
                {window.innerWidth > 768 && (
                  <CompetitionButton type="submit">
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Submit
                    </h1>
                    <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                  </CompetitionButton>
                )}
                <CompetitionButton
                  onClick={increaseStep}
                  disabled={teams?.divisi == "Robotics"}
                >
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Next
                  </h1>
                  <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
                </CompetitionButton>
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
                      formatName="MAGEX_Tahap 1_AppDev_[Nama Tim].pdf"
                      formatFile=".png, .jpg, .pdf"
                      maxFileSize="10MB"
                      accept=".png, .jpg, .pdf"
                      value={undefined}
                      onRemove={onRemovePayment}
                      onChange={handleChangeBuktiPembayaran}
                      link_file={linkBuktiPembayaran}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col w-full grow gap-4 md:gap-2">
                <Controller
                  name="category"
                  control={registStepOneControl}
                  render={({ field }) => (
                    <Select {...field} label="Category" id="category">
                      <Option value="">Choose</Option>
                      <Option value="sd">SD</Option>
                      <Option value="smp">SMP</Option>
                      <Option value="sma">SMA</Option>
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
                      formatName="MAGEX_Tahap 1_AppDev_[Nama Tim].pdf"
                      formatFile=".pdf"
                      maxFileSize="10MB"
                      accept=".pdf"
                      value={undefined}
                      onRemove={onRemoveFollowIgAndTwibbon}
                      onChange={handleChangeTwibbonDanIG}
                      link_file={linkTwibbonDanIG}
                    />
                  )}
                />
                {window.innerWidth <= 768 && (
                  <CompetitionButton type="submit">
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
        {step === 2 && teams?.divisi !== "Robotics" && (
          <form
            onSubmit={registStepTwoHandleSubmit(onSubmitRegistStepTwo)}
            className=" flex flex-col basis-[47%] bg-black/80 rounded-[20px] h-full overflow-hidden"
          >
            <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
              <div className="flex items-center gap-2 lg:gap-4">
                <FaTableList className="text-white text-lg md:text-xl lg:text-2xl" />
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Registration and Verification
                </h1>
              </div>
              <div className="flex gap-2 lg:gap-4">
                <CompetitionButton onClick={decreaseStep}>
                  <FaArrowLeft className="text-white text-xs md:text-sm lg:text-base" />
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Previous
                  </h1>
                </CompetitionButton>
                {window.innerWidth > 768 && (
                  <CompetitionButton type="submit">
                    <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Submit
                    </h1>
                    <PiPaperPlaneRightFill className="text-white text-xs md:text-sm lg:text-base" />
                  </CompetitionButton>
                )}
                <CompetitionButton onClick={increaseStep}>
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Next
                  </h1>
                  <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
                </CompetitionButton>
              </div>
            </div>
            <div className="p-4 w-full h-full grow">
              <div className="flex flex-col w-full h-full">
                <Controller
                  name="proposal"
                  control={registStepTwoControl}
                  render={({ field }) => (
                    <InputFile
                      {...field}
                      label="Proposal"
                      placeholder="Upload Here"
                      formatName="MAGEX_Tahap 1_AppDev_[Nama Tim].pdf"
                      formatFile=".png, .jpg, .pdf"
                      maxFileSize="10MB"
                      accept=".png, .jpg, .pdf"
                      value={undefined}
                      onRemove={onRemoveProposal}
                      onChange={handleChangeProposal}
                      link_file={linkProposal}
                    />
                  )}
                />
              </div>
            </div>
          </form>
        )}
        {step === 3 && teams?.divisi !== "Robotics" && (
          <form
            onSubmit={registStepThreeHandleSubmit(onSubmitRegistStepThree)}
            className=" flex flex-col basis-[47%] bg-black/80 rounded-[20px] h-full overflow-hidden"
          >
            <div className="flex items-center justify-between bg-gray-2 px-4 py-3">
              <div className="flex items-center gap-2 lg:gap-4">
                <FaTableList className="text-white text-lg md:text-xl lg:text-2xl" />
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Registration and Verification
                </h1>
              </div>
              <div className="flex gap-2 lg:gap-4">
                <CompetitionButton onClick={decreaseStep}>
                  <FaArrowLeft className="text-white text-xs md:text-sm lg:text-base" />
                  <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Previous
                  </h1>
                </CompetitionButton>
                {window.innerWidth > 768 && (
                  <CompetitionButton type="submit">
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
                  name="link_video"
                  control={registStepThreeControl}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Video"
                      placeholder="Enter link here"
                      className="py-7"
                    />
                  )}
                />
                <Controller
                  name="link_karya"
                  control={registStepThreeControl}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Work/Product (Karya)"
                      placeholder="Enter link here"
                      className="py-7"
                    />
                  )}
                />
              </div>
            </div>
          </form>
        )}
      </div>
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        text={responseUpdateTeam?.message || ""}
      />
    </div>
  );
}
