interface InfoCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  value: string;
}

export default function InfoCard({ title, value, ...props}: InfoCardProps) {
  return (
    <div className="bg-vertical-gta border-[5px] w-[304px] 2xl:w-[400px] h-[220px] 2xl:h-[300px] border-light/50 rounded-[30px] p-8" {...props}>
      <p className="font-roboto font-black text-[60px] text-light text-start">{value}</p>
      <p className="font-fredoka font-medium text-[24px] text-light text-start">{title}</p>
    </div>
  )
}