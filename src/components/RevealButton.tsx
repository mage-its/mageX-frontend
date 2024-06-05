import cn from "@/utils/cn";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { LuChevronRightCircle } from "react-icons/lu";

interface RevealButton extends React.ComponentPropsWithRef<"div"> {
  text: string;
  Icon?: IconType;
  color?: "gray" | "red";
  isAnimate?: boolean;
}

export function RevealButton({
  text,
  Icon = LuChevronRightCircle,
  className,
  color = "gray",
  isAnimate = true,
  ...props
}: RevealButton) {
  const buttonRef = useRef<HTMLDivElement>(null);
  // const textRef = useRef<HTMLParagraphElement>(null)
  const buttonControls = useAnimation();
  const bgcolor = {
    gray: "bg-gray-2",
    red: "bg-red-2",
  };
  useEffect(() => {
    if (isAnimate) {
      buttonControls.start("reveal");
    } else {
      buttonControls.start("close");
    }
  }, [buttonControls, isAnimate]);

  return (
    <div
      className={cn("flex justify-center cursor-pointer", className)}
      {...props}
    >
      <motion.div
        ref={buttonRef}
        className={cn(
          "h-14 rounded-full flex items-center justify-center",
          bgcolor[color]
        )}
        variants={{
          reveal: {
            width: 150,
            marginRight: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 1,
            },
          },
          close: {
            width: 0,
            marginRight: -15,
            transition: {
              duration: 0.1,
              ease: "easeInOut",
            },
          },
        }}
        initial="close"
        animate={buttonControls}
      >
        <motion.p
          ref={buttonRef}
          className="font-fredoka text-light font-medium text-[16px]"
          variants={{
            reveal: {
              display: "block",
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.3,
              },
            },
            close: {
              display: "none",
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeInOut",
              },
            },
          }}
          initial="close"
          animate={buttonControls}
        >
          {text}
        </motion.p>
      </motion.div>
      <motion.div
        ref={buttonRef}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center",
          bgcolor[color]
        )}
        variants={{
          reveal: {
            x: 30,
            marginLeft: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 1,
            },
          },
          close: {
            x: 0,
            marginLeft: -15,
            transition: {
              duration: 0.1,
              ease: "easeInOut",
            },
          },
        }}
        initial="close"
        animate={buttonControls}
      >
        <motion.div
          ref={buttonRef}
          variants={{
            reveal: {
              display: "block",
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.3,
              },
            },
            close: {
              display: "none",
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeInOut",
              },
            },
          }}
          initial="close"
          animate={buttonControls}
        >
          <Icon className="text-light w-[30px] h-[30px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
