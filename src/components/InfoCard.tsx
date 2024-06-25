import cn from "@/utils/cn";

interface InfoCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  value: string;
}

export default function InfoCard({ title, value, ...props }: InfoCardProps) {
  return (
    <div
      className={cn(
        "bg-vertical-gta border-[5px] border-light/50 rounded-2xl sm:rounded-[30px] pl-4 pt-6 sm:p-6 md:p-8",
        "w-[166px] sm:w-[230px] md:w-[290px] 2xl:w-[400px] h-[120px] sm:h-[170px] md:h-[220px] 2xl:h-[300px]"
      )}
      {...props}
    >
      <p className="font-roboto font-black text-3xl sm:text-5xl md:text-6xl text-light text-start">
        {value}
      </p>
      <p className="font-fredoka font-medium text-sm sm:text-xl md:text-2xl text-light text-start">
        {title}
      </p>
    </div>
  );
}
