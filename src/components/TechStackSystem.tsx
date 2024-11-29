import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  Variants,
} from "framer-motion";
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
        className="absolute size-[100px] md:size-[250px] bg-foreground rounded-full border-2 border-background cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* orbitting elements container */}
      <motion.div
        className="absolute size-[300px] md:size-[700px]"
        style={{
          transformStyle: "preserve-3d",
          transform: useMotionTemplate`rotate3d(1, -0.2, 0, 80deg) rotateZ(${rotate}deg)`,
        }}
      >
        {techStack.map((val, i) => {
          return (
            <motion.div
              key={i}
              className={`absolute ${val.position}`}
              style={{
                transformStyle: "preserve-3d",
                transform: useMotionTemplate`rotateZ(-${rotate}deg) rotateX(-90deg) rotateZ(10deg)`,
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
                  className="text-center absolute top-1/2 left-1/2 min-w-24 md:min-w-32 p-2 border border-background rounded-lg bg-foreground text-background pointer-events-none"
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
