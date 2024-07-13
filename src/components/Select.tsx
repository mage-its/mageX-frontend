import { forwardRef } from "react";

import cn from "@/utils/cn";

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  label?: string;
}

export interface OptionProps extends React.ComponentPropsWithoutRef<"option"> {}

export function Option({ children, className, ...rest }: OptionProps) {
  return (
    <option {...rest} className={cn("hover:bg-purple-8", className)}>
      {children}
    </option>
  );
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, id, label, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label htmlFor={id} className="ml-1.5">
            <p className="text-white font-fredoka text-xs md:text-sm lg:text-base ">
              {label}
            </p>
          </label>
        )}
        <div
          className={cn(
            "flex w-full bg-white/10 items-center rounded-xl",
            "[&:has(select:disabled)]:bg-dark-9"
          )}
        >
          <select
            {...rest}
            ref={ref}
            id={id}
            className={cn(
              "w-full font-fredoka text-xs md:text-sm lg:text-base text-white outline-none bg-transparent p-2.5",
              "[&>*]:bg-gray-3 [&>*]:text-white [&>*]:text-xs [&>*]:md:text-sm [&>*]:lg:text-base [&>*]:font-fredoka"
            )}
          >
            {children}
          </select>
        </div>
      </div>
    );
  }
);

export default Select;
