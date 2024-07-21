import React from "react";
import { useEffect, useState } from "react";
import PersonalLogo from "@/assets/dashboardWorkshop/personalLogo.svg";
import cn from "@/utils/cn";
import { Workshop } from "@/constant/dashboardWorkshop";
import Timeline from "@/components/Timeline";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useUserData } from "@/services/users";

import InputFile from "../InputFile";
import {
  updateWorkshop,
  useGetWorkshops,
  useUpdateWorkshop,
} from "@/services/workshop-regist";
import Select, { Option } from "../Select";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import Popup from "../dashboardHome/PopUp";
import { useSearchParams } from "react-router-dom";

interface RegistAndVerifProps {
  currentWorkshop: Workshop;
}

interface CompetitionButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

interface RegisterSchema {
  sumber_informasi: string;
  bukti_pembayaran: File | null;
  bukti_follow: File | null;
}

const CompetitionButton = ({
  children,
  disabled,
  ...props
}: CompetitionButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 md:gap-2.5 bg-orange-grad rounded-[11px] px-2 md:px-3 py-1 md:py-[5px] w-full",
        { "opacity-50": disabled }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const RegistAndVerif: React.FC<RegistAndVerifProps> = ({ currentWorkshop }) => {
  const { data: workshops } = useGetWorkshops();
  console.log(workshops);
  const workshop = workshops?.find(
    (w) => w["workshop-registration"] === currentWorkshop.title
  );
  const {
    mutateAsync: registerWorkshop,
    data: responseRegister,
    isError: isErrorRegister,
  } = useUpdateWorkshop();
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step") ? Number(searchParams.get("step")) : 1;
  const { data: user, isSuccess } = useUserData();
  if (isSuccess && !user?.is_logged_in) {
    console.log("Redirecting to login page");
    window.location.href = "https://api.mage-its.id/users/login";
  }
  const [linkBuktiPembayaran, setLinkBuktiPembayaran] = useState<
    string | undefined
  >(undefined);
  const [linkTwibbonDanIG, setLinkTwibbonDanIG] = useState<string | undefined>(
    undefined
  );

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (responseRegister || isErrorRegister) {
      setIsPopupVisible(true);
    }
  }, [responseRegister, isErrorRegister]);

  const { control, handleSubmit, setValue, resetField, setError } =
    useForm<RegisterSchema>({
      defaultValues: {
        sumber_informasi: "family",
        bukti_pembayaran: null,
        bukti_follow: null,
      },
    });

  useEffect(() => {
    setValue("sumber_informasi", workshop?.sumber_informasi || "");
  }, [currentWorkshop, workshop, setValue]);

  const handleChangeBuktiPembayaran = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    resetField("bukti_pembayaran");

    const files = event.target.files;
    if (files && files[0]) {
      const extname = files[0].name.split(".").pop();
      const IMG_EXTS = ["jpg", "jpeg", "png"];

      if (IMG_EXTS.includes(extname || "") && files[0].size > 1 * 1024 * 1024) {
        setError("bukti_pembayaran", {
          type: "manual",
          message: "Ukuran maksimal gambar adalah 1MB",
        });
      } else if (!IMG_EXTS.includes(extname || "")) {
        setError("bukti_pembayaran", {
          type: "manual",
          message: "Mohon upload file .jpg, .jpeg, atau .png ",
        });
      }

      setValue("bukti_pembayaran", files[0]);
    }
  };

  const handleChangeTwibbonDanIG = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    resetField("bukti_follow");

    const files = event.target.files;
    if (files && files[0]) {
      const extname = files[0].name.split(".").pop();

      if (extname === "pdf" && files[0].size > 5 * 1024 * 1024) {
        setError("bukti_follow", {
          type: "manual",
          message: "Ukuran maksimal PDF adalah 5MB",
        });
      } else if (extname !== "pdf") {
        setError("bukti_follow", {
          type: "manual",
          message: "Mohon upload file .pdf",
        });
      }

      setValue("bukti_follow", files[0]);
    }
  };

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    console.log(data);
    const payload: updateWorkshop = {
      sumber_informasi: data.sumber_informasi,
      bukti_pembayaran: data.bukti_pembayaran || new File([], ""),
      bukti_follow: data.bukti_follow || new File([], ""),
      "workshop-registration": currentWorkshop.title,
    };

    await registerWorkshop(payload);
  };

  const onRemovePayment = () => {
    resetField("bukti_pembayaran");
    setValue("bukti_pembayaran", null);
  };

  const onRemovebukti_follow = () => {
    resetField("bukti_follow");
    setValue("bukti_follow", null);
  };

  const increaseStep = () => {
    if (workshop?.verified !== "true") return;
    setSearchParams(new URLSearchParams("step=" + (step + 1)));
  };

  const decreaseStep = () => {
    if (step === 1) return;
    setSearchParams(new URLSearchParams("step=" + (step - 1)));
  };

  useEffect(() => {
    if (workshop?.verified !== "true") {
      setSearchParams(new URLSearchParams("step=1"));
    }
  }, [workshop, setSearchParams]);

  useEffect(() => {
    if (workshop?.bukti_pembayaran !== "000000000000000000000000") {
      resetField("bukti_pembayaran");
      setLinkBuktiPembayaran(
        `https://api.mage-its.id/images/${workshop?.bukti_pembayaran}`
      );
    }
    if (workshop?.bukti_follow !== "000000000000000000000000") {
      resetField("bukti_follow");
      setLinkTwibbonDanIG(
        `https://api.mage-its.id/images/${workshop?.bukti_follow}`
      );
    }
  }, [workshop, resetField]);

  const showbukti_pembayaran = currentWorkshop.title !== "Multimedia";

  return (
    <div
      className="text-light flex flex-col font-fredoka bg-transparent_black rounded-[1rem] h-full overflow-hidden
                      mobile:mx-6 mobile:mt-6
                      ipad:mx-6 ipad:mt-6
                      lg:mx-[0] lg:mt-0"
    >
      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
          <div
            className="bg-gray-5 py-2 flex rounded-t-[1rem] items-center justify-between
                            mobile:h-[5rem] mobile:px-4
                            ipad:h-[5rem] ipad:px-8
                            lg:h-[3rem] lg:px-8"
          >
            <div className="flex items-center gap-2 lg:gap-4">
              <img
                src={PersonalLogo}
                className="mobile:h-[1rem] ipad:h-[2rem] lg:h-[1.25rem]"
              ></img>
              <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-4 gap-1">
                <div
                  className="text-medium
                              mobile:text-[12px]
                              ipad:text-[23px]
                              lg:text-[20px]"
                >
                  Registration
                </div>
                {workshop?.verified == "true" && (
                  <div className="rounded-xl bg-vertical-gta md:px-3 md:py-2 py-1 px-2">
                    <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                      Verified
                    </p>
                  </div>
                )}
              </div>
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
                disabled={workshop?.verified !== "true"}
              >
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Next
                </h1>
                <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
              </CompetitionButton>
            </div>
          </div>
          <div
            className="px-8 w-full items-center
                          mobile:h-[calc(100%-5rem)] ipad:h-[calc(100%-5rem)] lg:h-[calc(100%-3rem)]"
          >
            <div className="text-medium py-2 mobile:text-[12px] ipad:text-[14px] lg:text-[1rem]">
              How did you know about MAGE X workshop?
            </div>

            <Controller
              name="sumber_informasi"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  id="sumber"
                  disabled={workshop?.verified == "true"}
                >
                  <Option value="">--</Option>
                  <Option value="family">Family</Option>
                  <Option value="friend">Friend</Option>
                  <Option value="instagram">Instagram</Option>
                  <Option value="Tiktok">Tiktok</Option>
                  <Option value="twitterX">Twitter (X)</Option>
                  <Option value="school">School</Option>
                  <Option value="roadshow">Roadshow</Option>
                  <Option value="others">Others</Option>
                </Select>
              )}
            />

            {/* iPad and lg */}
            <div className="gap-2 mt-4 mb-4 mobile:hidden ipad:flex lg:flex">
              {showbukti_pembayaran && (
                <div className="w-full h-full">
                  <Controller
                    name="bukti_pembayaran"
                    control={control}
                    render={({ field }) => (
                      <InputFile
                        {...field}
                        label="Payment Proof"
                        placeholder="Upload Here"
                        formatName={`Pembayaran_${currentWorkshop.title}_[Nama Peserta].pdf`}
                        formatFile=".png, .jpg, .jpeg"
                        maxFileSize="1MB"
                        accept=".png, .jpg, .jpeg"
                        value={undefined}
                        onRemove={onRemovePayment}
                        onChange={handleChangeBuktiPembayaran}
                        link_file={linkBuktiPembayaran}
                        disabled={workshop?.verified == "true"}
                      />
                    )}
                  />
                </div>
              )}
              <div className="w-full h-full">
                <Controller
                  name="bukti_follow"
                  control={control}
                  render={({ field }) => (
                    <InputFile
                      {...field}
                      label="Bukti Follow Instagram + Follow Line + Follow Tiktok + Share Poster (Tag 3 teman melalui ig story)"
                      description="Dijadikan satu file"
                      placeholder="Upload Here"
                      formatName={`IG_Twibbon_${currentWorkshop.title}_[Nama Peserta].pdf`}
                      formatFile=".pdf"
                      maxFileSize="5MB"
                      accept=".pdf"
                      value={undefined}
                      onRemove={onRemovebukti_follow}
                      onChange={handleChangeTwibbonDanIG}
                      link_file={linkTwibbonDanIG}
                      disabled={workshop?.verified == "true"}
                    />
                  )}
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="gap-2 mt-4 mobile:block ipad:hidden lg:hidden">
              <div className="w-full h-full">
                {showbukti_pembayaran && (
                  <Controller
                    name="bukti_pembayaran"
                    control={control}
                    render={({ field }) => (
                      <InputFile
                        {...field}
                        label="Payment Proof"
                        placeholder="Upload Here"
                        formatName={`Pembayaran_${currentWorkshop.title}_[Nama Peserta].pdf`}
                        formatFile=".png, .jpg, .jpeg"
                        maxFileSize="1MB"
                        accept=".png, .jpg, .jpeg"
                        value={undefined}
                        onRemove={onRemovePayment}
                        onChange={handleChangeBuktiPembayaran}
                        link_file={linkBuktiPembayaran}
                        disabled={workshop?.verified == "true"}
                      />
                    )}
                  />
                )}
              </div>
              <div className="w-full h-full mt-4 mb-4 flex flex-col gap-4">
                <Controller
                  name="bukti_follow"
                  control={control}
                  render={({ field }) => (
                    <InputFile
                      {...field}
                      label="Bukti Follow Instagram + Follow Line + Follow Tiktok + Share Poster (Tag 3 teman melalui ig story)"
                      placeholder="Upload Here"
                      formatName={`IG_Twibbon_${currentWorkshop.title}_[Nama Peserta].pdf`}
                      formatFile=".pdf"
                      maxFileSize="5MB"
                      accept=".pdf"
                      value={undefined}
                      onRemove={onRemovebukti_follow}
                      onChange={handleChangeTwibbonDanIG}
                      disabled={workshop?.verified == "true"}
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
          </div>
        </form>
      )}
      {step === 2 && (
        <div className="w-full h-full">
          <div
            className="bg-gray-5 py-2 flex rounded-t-[1rem] items-center justify-between
                            mobile:h-[5rem] mobile:px-4
                            ipad:h-[5rem] ipad:px-8
                            lg:h-[3rem] lg:px-8"
          >
            <div className="flex items-center gap-2 lg:gap-4">
              <img
                src={PersonalLogo}
                className="mobile:h-[1rem] ipad:h-[2rem] lg:h-[1.25rem]"
              ></img>
              <div
                className="text-medium
                              mobile:text-[12px] mobile:ml-4
                              ipad:text-[23px] ipad:ml-4
                              lg:text-[20px] lg:ml-4"
              >
                Registration and Verification
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <CompetitionButton onClick={decreaseStep}>
                <FaArrowLeft className="text-white text-xs md:text-sm lg:text-base" />
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Previous
                </h1>
              </CompetitionButton>
              <CompetitionButton onClick={increaseStep} disabled>
                <h1 className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
                  Next
                </h1>
                <FaArrowRight className="text-white text-xs md:text-sm lg:text-base" />
              </CompetitionButton>
            </div>
          </div>
          <div
            className="px-8 w-full items-center
                          mobile:h-[calc(100%-5rem)] ipad:h-[calc(100%-5rem)] lg:h-[calc(100%-3rem)]"
          >
            <div className="w-full h-full overflow-auto no-scrollbar">
              <div className="mobile:scale-75 ipad:scale-75 lg:scale-[0.65] h-full">
                <Timeline items={currentWorkshop.tl} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        text={responseRegister?.message || "Error. Unable to update team data"}
      />
    </div>
  );
};

export default RegistAndVerif;
