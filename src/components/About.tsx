import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import Container from "./Container";
import { useActiveLink } from "../hooks/useActiveLink";
import { useEffect, useRef } from "react";

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
  const bgY = useTransform(scrollY, [0, 200], [0, 300], { clamp: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink!("about");
    }
  }, [isInView, setActiveLink]);

  return (
    <Container ref={aboutRef} id="about" full center>
      <div className="flex flex-col gap-10 w-full min-h-[inherit] justify-center">
        <div className="flex flex-col gap-1 w-full">
          <motion.h3
            className="text-4xl font-bold text-gray-500"
            custom={0}
            variants={heroVariants}
            initial="hidden"
            animate="slideFadeIn"
          >
            Hi I'm,
            <br />
            <span className="inline-block mt-1">Kevin k Noel</span>
          </motion.h3>

          <motion.h1
            className="text-6xl min-[412px]:text-7xl min-[600px]:text-8xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, #3b3b3b, white 20%, #3b3b3b 95%)`,
              backgroundPositionX: bgY,
            }}
            custom={1}
            variants={heroVariants}
            initial="hidden"
            animate="slideFadeIn"
          >
            A React Developer
          </motion.h1>
        </div>

        <motion.p
          className="text-2xl font-bold text-gray-500 max-w-[650px]"
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="slideFadeIn"
        >
          I specialize in crafting scalable, user-friendly, and visually
          appealing web applications using React.
        </motion.p>
      </div>
    </Container>
  );
}
