import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  Variants,
} from "framer-motion";
import { useRef } from "react";
import firebaseIcon from "../assets/firebase-icon.svg";
import javascriptIcon from "../assets/javascript-icon.svg";
import nextjsIcon from "../assets/nextjs-icon.svg";
import nodejsIcon from "../assets/nodejs-icon.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";

const techStack = [
  {
    name: "Typescript",
    icon: typescriptIcon,
    position: "top-0 left-0",
  },
  {
    name: "React.js",
    icon: reactIcon,
    position: "top-0 left-[50%] -translate-x-1/2",
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
    position: "top-0 right-0",
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
    position: "bottom-0 right-0",
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
    position: "bottom-0 right-[50%] translate-x-1/2",
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    position: "bottom-0 left-0",
  },
];

const orbitVariants: Variants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

export default function TechStackSystem() {
  const orbitContainerRef = useRef<HTMLDivElement>(null);

  // to evenly distribute the elements circularly
  // inspired by (stolen from) https://stackoverflow.com/a/55212378
  let angle = 360 - 90;
  const dAngle = 360 / techStack.length;
  const radius = orbitContainerRef.current?.clientWidth;

  const rotate = useMotionValue(0);
  const orbit = animate(rotate, [0, 360], {
    duration: 15,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
  });

  return (
    <div
      className="relative flex justify-center items-center w-full min-h-[400px]"
      style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
    >
      {/* center body */}
      <img
        src={javascriptIcon}
        alt="javascript icon"
        className="absolute size-24 md:size-64 bg-foreground rounded-full border-2 border-background cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* orbitting elements container */}
      <motion.div
        ref={orbitContainerRef}
        className="absolute size-[300px] md:size-[700px]"
        style={{
          transformStyle: "preserve-3d",
          transform: useMotionTemplate`rotate3d(1, -0.2, 0, 80deg) rotateZ(${rotate}deg)`,
        }}
      >
        {techStack.map((val, i) => {
          angle += dAngle;

          return (
            // negative margins are there to center the element
            // and the values comes form the size of the image
            <motion.div
              key={i}
              className={`absolute top-1/2 left-1/2 m-[calc(-4rem/2)] md:m-[calc(-7rem/2)]`}
              style={{
                transformStyle: "preserve-3d",
                // the transform order is important
                // atleast upto the second rotate function
                transform: useMotionTemplate`rotate(${angle}deg) translate(${
                  radius! / 2
                }px) rotate(-${angle}deg) rotateZ(-${rotate}deg) rotateX(-90deg) rotateZ(10deg)`,
              }}
            >
              <motion.div
                className="relative"
                initial="hidden"
                whileTap="show"
                whileHover="show"
              >
                <motion.img
                  src={val.icon}
                  alt={`${val.name} icon`}
                  className="size-16 md:size-28 p-2 bg-foreground rounded-lg text-background border-2 border-background cursor-pointer"
                  onMouseEnter={() => orbit.pause()}
                  onMouseLeave={() => orbit.play()}
                  onTapStart={() => orbit.pause()}
                  onTapCancel={() => orbit.play()}
                />

                <motion.p
                  className="text-center absolute md:top-1/2 md:left-1/2 min-w-24 md:min-w-32 p-2 border-2 border-background rounded-lg bg-foreground text-background pointer-events-none"
                  variants={orbitVariants}
                  style={{ x: "-50%", y: "-50%" }}
                >
                  {val.name}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
