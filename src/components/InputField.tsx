import cn from "@/utils/cn";

interface InputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder: string;
}

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

export default InputField;
