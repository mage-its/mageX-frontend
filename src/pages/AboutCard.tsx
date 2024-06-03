import { motion } from 'framer-motion'

interface AboutCardProps extends React.ComponentPropsWithRef<'div'> {
  title: string,
  desc: string,
  img: string,
}

export default function AboutCard({title, desc, img, ...props}: AboutCardProps) {
  return (
    <div className="relative w-[390px]" {...props}>
      <img src={img} alt="about" className="h-[500px] w-[410px] object-cover rounded-3xl" />
      <motion.div 
        whileHover={{ opacity: 1}}
        initial={{ opacity: 0}}
        className=" bg-black/50 h-full w-full absolute top-0 left-0 rounded-3xl items-center justify-center flex"
      >
        <div className="rounded-xl border-light border-2 w-[270px] h-fit p-4 text-center">
          <h2 className="font-roboto font-extrabold text-2xl text-light">{title}</h2>
          <p className="font-fredoka font-regular text-base text-light">{desc}</p>
        </div>
      </motion.div>
    </div>
  )
}