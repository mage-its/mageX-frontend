import React from 'react';
import { useEffect, useState } from "react";
import CategoryButton from '@/components/dashboardWorkshop/CategoryButton';
import PersonalLogo from '@/assets/dashboardWorkshop/personalLogo.svg';
import useDragScroll from '@/components/dashboardHome/useDragScroll';
import cn from "@/utils/cn";
import { Workshop } from '@/constant/dashboardWorkshop';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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
import { HiUserGroup } from "react-icons/hi";
import { useUserData } from "@/services/users";
import { IconType } from "react-icons";
import {
  useAddMember,
  useTeamMembers,
  useUpdateTeamInformation,
  useLeadTeams,
} from "@/services/team";

interface RegistAndVerifProps {
  currentWorkshop: Workshop;
}

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

type TeamInformation = {
  teamName: string;
  teamMembers: string[];
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
  const [isEdit, setIsEdit] = useState(false);
  const checked = fileName !== null;
  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const truncatedFileName =
        files[0].name.length > 15
          ? files[0].name.slice(0, 15) + "..."
          : files[0].name;
      setFileName(truncatedFileName);
      setIsEdit(true);
    } else {
      setFileName(null);
    }

    onChange && onChange(event);
  };

  const handleClick = () => {
    setFileName(null);
    onRemove && onRemove();
  };

  useEffect(() => {
    if (link_file && link_file?.split("/").pop() != "undefined") {
      setFileName(link_file);
      setIsEdit(false);
    }
  }, [link_file]);
  console.log(link_file?.split("/").pop() == "undefined");
  return (
    <label className="flex flex-col text-white font-fredoka font-medium text-xs md:text-sm lg:text-base w-full h-full">
      {label}
      <div className="flex flex-col justify-center items-center bg-white/10 border-[2px] border-dashed border-white/50 w-full h-full mt-2 rounded-xl p-2 text-center lg:p-4">
        {!isEdit && link_file?.split("/").pop() != "undefined" ? (
          <a
            target="_blank"
            href={link_file}
            className="flex items-center gap-2"
          >
            <Icon className="text-white text-lg md:text-xl lg:text-2xl" />
            <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
              {link_file}
            </p>
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

const RegistAndVerif: React.FC<RegistAndVerifProps> = ({ currentWorkshop }) => {
  const scrollRef = useDragScroll();
  const [step, setStep] = useState<number>(1);
  // const { data: user, isSuccess } = useUserData();
  // if (isSuccess && !user?.is_logged_in) {
  //   console.log("Redirecting to login page");
  //   window.location.href = "https://api.mage-its.id/users/login";
  // }

  const { data: teams } = useLeadTeams();
  console.log(teams);
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
      for (const member of data.teamMembers) {
        await addMembers({ email: member });
      }
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

  const format: { [key: string]: string } = {
    "App Dev": "AppDev",
    IoT: "IoT",
    Robotics: "Robotik",
    "Game Dev": "GameDev",
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
    <div className="text-light flex flex-col font-fredoka bg-transparent_black rounded-[1rem] h-full overflow-hidden
                      mobile:mx-6 mobile:mt-6
                      ipad:mx-6 ipad:mt-6
                      desktop:mx-[0] desktop:mt-0">
      <div className="bg-gray-5 px-8 py-2 flex rounded-t-[1rem] items-center
                        mobile:h-[5rem] ipad:h-[5rem] desktop:h-[3rem]">
        <img src={PersonalLogo} className='mobile:h-[1rem] ipad:h-[2rem] desktop:h-[1.25rem]'></img>
        <div className="text-medium
                        mobile:text-[1rem] mobile:ml-4
                        ipad:text-[23px] ipad:ml-4
                        desktop:text-[20px] desktop:ml-4">
          Registration and Verification
        </div>
      </div>
      <div className="px-8 items-center">
        <div className="text-medium py-2 mobile:text-[1rem] ipad:text-[23px] desktop:text-[20px]">
          How did you know about MAGE X workshop?
        </div>

        <CategoryButton />

        <div className='flex gap-2 mt-4'>
          <div className='w-[50%]'>
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
                />
              )}
            />
          </div>
          <div className='w-[50%]'>
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
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistAndVerif;
