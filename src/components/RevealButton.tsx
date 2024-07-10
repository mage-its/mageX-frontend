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
          "sm:h-14 h-9 rounded-full flex items-center justify-center px-5 overflow-hidden",
          bgcolor[color]
        )}
        variants={{
          reveal: {
            maxWidth: 200,
            // marginRight: 0,
            padding: "0 20px",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 1.5,
            },
          },
          close: {
            maxWidth: 0,
            // marginRight: -15,
            padding: "0",
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
          className="font-fredoka text-light font-medium sm:text-base text-[10px]"
          variants={{
            reveal: {
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.7,
              },
            },
            close: {
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
          "sm:w-14 sm:h-14 w-9 h-9 rounded-full flex items-center justify-center",
          bgcolor[color]
        )}
        variants={{
          reveal: {
            x: 15,
            scale: 1,
            // marginLeft: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 1,
            },
          },
          close: {
            x: -30,
            scale: 0,
            // marginLeft: -15,
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
          <Icon className="text-light sm:text-3xl text-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
}
