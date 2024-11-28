import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import javascriptIcon from "../assets/javascript-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import reactIcon from "../assets/react.svg";
import nextjsIcon from "../assets/nextjs-icon.svg";

const techStack = [
  {
    name: "Typescript",
    icon: typescriptIcon,
    position: "top-[50%] left-0",
  },
  {
    name: "React.js",
    icon: reactIcon,
    position: "top-0 left-[50%]",
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
    position: "top-[50%] right-0",
  },
  // {
  //   name:,
  //   icon:,
  //   position: "top-[50%] right-0",
  // },
  // {
  //   name:,
  //   icon:,
  //   position: "bottom-0 right-0",
  // },
  // {
  //   name:,
  //   icon:,
  //   position: "bottom-0 right-[50%]",
  // },
  // {
  //   name:,
  //   icon:,
  //   position: "bottom-0 left-0",
  // },
  // {
  //   name:,
  //   icon:,
  //   position: "left-0 bottom-[50%]",
  // },
];

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
        className="absolute size-[150px] md:size-[250px] bg-foreground rounded-full border border-background cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* orbitting elements */}
      <motion.div
        className="absolute size-[400px] md:size-[700px]"
        style={{
          transformStyle: "preserve-3d",
          transform: useMotionTemplate`rotate3d(1, -0.2, 0, 80deg) rotateZ(${rotate}deg)`,
        }}
      >
        {techStack.map((val, i) => {
          return (
            <motion.img
              key={i}
              src={val.icon}
              alt={`${val.name} icon`}
              className={`absolute ${val.position} size-20 md:size-28 p-2 bg-foreground rounded-md text-background border border-background cursor-pointer`}
              style={{
                transformStyle: "preserve-3d",
                transform: useMotionTemplate`rotateZ(-${rotate}deg) rotateX(-90deg)`,
              }}
              onMouseEnter={() => orbit.pause()}
              onMouseLeave={() => orbit.play()}
              onTapStart={() => orbit.pause()}
              onTapCancel={() => orbit.play()}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
