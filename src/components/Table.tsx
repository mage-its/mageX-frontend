import cn from "@/utils/cn";
import { FaSortDown, FaSortUp } from "react-icons/fa";


export interface tableProps extends React.ComponentPropsWithoutRef<"table"> {}
export interface tableHeadProps extends React.ComponentPropsWithoutRef<"thead"> {}
export interface tableBodyProps extends React.ComponentPropsWithoutRef<"tbody"> {}
export interface tableRowProps extends React.ComponentPropsWithoutRef<"tr"> {}
export interface tableDataProps extends React.ComponentPropsWithoutRef<"td"> {}

export type sortType = "none" | "asc" | "desc";
export interface tableHeaderProps extends React.ComponentPropsWithoutRef<"th"> {
  sortType?: sortType;
}

export function THead({ children, className, ...rest }: tableHeadProps) {
    return (
        <thead
        {...rest}
        className={cn(
            "text-left bg-navy-7",
            className
        )}
        >
        {children}
        </thead>
    );
}

export function TBody({ children, className, ...rest }: tableBodyProps) {
    return (
        <tbody
        className={className}
        {...rest}
        >
        {children}
        </tbody>
    );
}

export function TD({ children, className, ...rest }: tableDataProps) {
    return (
        <td
        {...rest}
        className={cn(
            "border border-dark-10 px-2.5 sm:px-[14px] py-2.5 sm:py-4",
            className
        )}
        >
        {children}
        </td>
    );
}

export function TR({ children, className, ...rest }: tableRowProps) {
    return (
        <tr
        {...rest}
        className={className}
        >
        {children}
        </tr>
    );
}

export function TH({ children, className, sortType="none", onClick, ...rest }: tableHeaderProps) {
    return (
        <th
        {...rest}
        onClick={onClick}
        className={cn(
            "border border-dark-10 px-2.5 sm:px-[14px] py-2.5 sm:py-4 font-medium",
            {"cursor-pointer": onClick},
            className
        )}
        >   
          {sortType != "none" ? (
                <div className="flex gap-4 items-center justify-center h-fit"> 
                    {children}
                    {sortType === "asc" ? 
                    <FaSortUp className=" text-blue-1 mb-2 cursor-pointer"/> 
                    : 
                    <FaSortDown className=" text-blue-1 mt-2 cursor-pointer"/> 
                    }
                </div>
            )
            : 
            children
          }
        </th>
    );
}

export default function Table({ children, className, ...rest }: tableProps) {
    return (
        <table
        {...rest}
        className={cn(
            "text-sm sm:text-xl font-medium leading-[normal] text-blue-1",
            "table-auto border-collapse rounded-[14px] border border-dark-10 overflow-hidden bg-navy-10",
            className
        )}
        >
        {children}
        </table>
    );
}