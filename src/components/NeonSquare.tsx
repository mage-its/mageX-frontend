import cn from "@/utils/cn";

interface NeonSquareProps extends React.ComponentPropsWithoutRef<"div"> {}

export default function NeonSquare({ className, ...props }: NeonSquareProps) {
  return (
    <div
      className={cn(
        "bg-orange-grad w-20 h-20 drop-shadow-[0_0_20px_rgba(251,162,119,1)] rounded-3xl",
        className
      )}
      {...props}
    />
  );
}
