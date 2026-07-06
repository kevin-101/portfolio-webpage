import firebaseIcon from "../assets/firebase-icon.svg";
import javascriptIcon from "../assets/javascript-icon.svg";
import nextjsIcon from "../assets/nextjs-icon.svg";
import nodejsIcon from "../assets/nodejs-icon.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import reduxIcon from "../assets/redux-icon.svg";
import githubIcon from "../assets/github-icon.svg";

import { motion, Variants } from "framer-motion";

const techStack = [
  {
    name: "Javascript",
    icon: javascriptIcon,
  },
  {
    name: "Typescript",
    icon: typescriptIcon,
  },
  { name: "CSS", icon: cssIcon },
  {
    name: "React.js",
    icon: reactIcon,
  },
  {
    name: "Redux",
    icon: reduxIcon,
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
  },
  {
    name: "GitHub",
    icon: githubIcon,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const techStackVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.3,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.01,
    },
  },
};

function TechStack() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-5 gap-3 w-full"
    >
      {techStack.map(({ icon, name }) => (
        <motion.div
          key={name}
          whileHover={{ translateY: -3 }}
          variants={techStackVariants}
          className="group flex flex-col items-center bg-zinc-900 border border-foreground/10 rounded-[10px] px-3 py-7 cursor-default"
        >
          <img src={icon} className="size-7 mb-2 block" />
          <span className="text-sm text-muted block transition-colors duration-200 group-hover:text-accent">
            {name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default TechStack;
