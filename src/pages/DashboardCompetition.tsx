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
import { useState } from "react";
import { IconType } from "react-icons";
import Select, { Option } from "@/components/Select";

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
};

type RegistStepOne = {
  category: string;
  paymentProof: string | null;
  followIgAndTwibbon: string | null;
};

type RegistStepTwo = {
  proposal: string | null;
};

type RegistStepThree = {
  video: string;
  workProduct: string;
};

export default function DashboardCompetition() {
  const [step, setStep] = useState<number>(1);

  const [isEditTeamInformation, setIsEditTeamInformation] = useState(false);

  const { control: teamControl, handleSubmit: teamHandleSubmit } =
    useForm<TeamInformation>();

  const onSubmit: SubmitHandler<TeamInformation> = (data) => {
    console.log(data);
  };

  const {
    control: registStepOneControl,
    handleSubmit: registStepOneHandleSubmit,
    resetField: resetRegistStepOne,
    setValue: setValueRegistStepOne,
  } = useForm<RegistStepOne>({
    defaultValues: {
      category: "",
      paymentProof: null,
      followIgAndTwibbon: null,
    },
  });

  const {
    control: registStepTwoControl,
    handleSubmit: registStepTwoHandleSubmit,
    resetField: resetRegistStepTwo,
    setValue: setValueRegistStepTwo,
  } = useForm<RegistStepTwo>({
    defaultValues: {
      proposal: null,
    },
  });

  const {
    control: registStepThreeControl,
    handleSubmit: registStepThreeHandleSubmit,
  } = useForm<RegistStepThree>({
    defaultValues: {
      video: "",
      workProduct: "",
    },
  });

  const onSubmitRegistStepTwo: SubmitHandler<RegistStepTwo> = (data) => {
    console.log(data);
  };

  const onSubmitRegistStepOne: SubmitHandler<RegistStepOne> = (data) => {
    console.log(data);
  };

  const onSubmitRegistStepThree: SubmitHandler<RegistStepThree> = (data) => {
    console.log(data);
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
              Rigel Ramadhani W
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
                <div className="rounded-xl bg-white py-2 px-2.5">
                  <p className="text-dark font-fredoka font-medium text-xs md:text-sm lg:text-base">
                    Rigel Ramadhani W
                  </p>
                </div>
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
            <div className="grow flex flex-row lg:flex-col gap-[15px] px-4 py-3">
              <div className="flex justify-center items-center bg-grayscale basis-1/2 w-full rounded-[15px]">
                <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex justify-center items-center bg-grayscale basis-1/2 w-full rounded-[15px]">
                <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Lorem Ipsum
                </p>
              </div>
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
                <CompetitionButton onClick={increaseStep}>
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
                    App Dev
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
                      formatFile=".png, .jpg, .pdf"
                      maxFileSize="10MB"
                      accept=".png, .jpg, .pdf"
                      value={undefined}
                      onRemove={onRemoveFollowIgAndTwibbon}
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
        {step === 2 && (
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
                    />
                  )}
                />
              </div>
            </div>
          </form>
        )}
        {step === 3 && (
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
                  name="video"
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
                  name="workProduct"
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
    </div>
  );
}
