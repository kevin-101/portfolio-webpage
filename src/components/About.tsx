import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useActiveLink } from "../hooks/useActiveLink";
import Container from "./Container";
import TechStack from "./TechStack";

const heroVariants: Variants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? 0 : 300,
    y: i % 2 === 0 ? (i % 4 === 0 ? -300 : 300) : 0,
  }),
  slideFadeIn: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: i * 0.2,
    },
  }),
};

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { margin: "-50%" });

  const { setActiveLink } = useActiveLink();

  // for the text gradient
  const { scrollY } = useScroll();
  const bgX = useTransform(scrollY, [0, 200], [0, 300], { clamp: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink!("about");
    }
  }, [isInView, setActiveLink]);

  return (
    <Container ref={aboutRef} id="about" full center>
      <div className="flex flex-col gap-5 w-full min-h-[inherit] justify-center">
        <motion.h3
          className="text-xl text-gray-500"
          custom={0}
          variants={heroVariants}
          initial="hidden"
          animate="slideFadeIn"
        >
          Hi, I'm Kevin K Noel
        </motion.h3>

        <motion.h1
          className="text-[clamp(52px,8vw,88px)] min-[412px]:text-6xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, #3b3b3b, white 20%, #3b3b3b 95%)`,
            backgroundPositionX: bgX,
          }}
          custom={1}
          variants={heroVariants}
          initial="hidden"
          animate="slideFadeIn"
        >
          A React <br />
          Developer
        </motion.h1>

        <motion.p
          className="text-xl text-gray-500 max-w-[650px]"
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="slideFadeIn"
        >
          I specialize in crafting scalable, user-friendly, and visually
          appealing web applications using React.
        </motion.p>
      </div>

      <div className="mt-[84px] md:mt-[100px] mb-20 flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-cyan-400 text-start w-full">
            // TOOLS OF THE TRADE
          </p>
          <h1 className="text-2xl font-bold text-start w-full">
            My Tech Stack
          </h1>
        </div>

        {/* <TechStackSystem /> */}
        <TechStack />
      </div>
    </Container>
  );
}
