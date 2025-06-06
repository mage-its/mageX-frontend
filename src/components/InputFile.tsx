import { CompetitionButton } from "@/pages/Dashboard/User/DashboardCompetition";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaX } from "react-icons/fa6";
import { PiFileArrowUpFill } from "react-icons/pi";

interface InputFileProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder: string;
  description?: string;
  Icon?: IconType;
  formatName?: string;
  formatFile?: string;
  maxFileSize?: string;
  onRemove?: () => void;
  link_file?: string;
  example?: string;
}

const InputFile = ({
  example,
  label,
  placeholder,
  description,
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
  return (
    <div className="flex flex-col  w-full h-full">
      <div className="flex gap-4 items-center">
        <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base">
          {label}
        </p>
        {example && (
          <CompetitionButton>
            <a
              className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base"
              href={example}
            >
              Template
            </a>
          </CompetitionButton>
        )}
      </div>
      <label className="flex flex-col text-white font-fredoka font-medium text-xs md:text-sm lg:text-base w-full h-full">
        <div className="font-normal text-white/50 text-xs md:text-sm lg:text-sm">
          {description}
        </div>
        <div className="flex flex-col justify-center items-center bg-white/10 border-[2px] border-dashed border-white/50 w-full h-full mt-2 rounded-xl p-2 text-center lg:p-4">
          {!isEdit && link_file?.split("/").pop() != "undefined" ? (
            <a
              target="_blank"
              href={link_file}
              className="flex items-center gap-2"
            >
              <Icon className="text-white text-lg md:text-xl lg:text-2xl" />
              <p className="text-white font-fredoka font-medium text-xs md:text-sm lg:text-base underline">
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
    </div>
  );
};

export default InputFile;
