import {
  motion,
  MotionConfig,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "./Container";
import { useActiveLink } from "../hooks/useActiveLinks";
import { useEffect, useRef } from "react";

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
    <Container ref={aboutRef} id="about">
      <div className="flex flex-col gap-10 w-full min-h-[inherit] justify-center">
        <MotionConfig
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
        >
          <div className="flex flex-col gap-1 w-full">
            <motion.h3
              className="text-4xl font-bold text-gray-500"
              style={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Kevin k Noel
            </motion.h3>

            <motion.h1
              className="text-6xl min-[412px]:text-7xl min-[600px]:text-8xl font-extrabold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3b3b3b, white 20%, #3b3b3b 95%)`,
                backgroundPositionX: bgY,
                opacity: 0,
                y: -300,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frontend Developer <br /> (React/
              <br className="min-[897px]:hidden" />
              Next.js)
            </motion.h1>
          </div>

          <motion.p
            className="text-2xl font-bold text-gray-500 max-w-[650px]"
            style={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            I'm a passionate Computer Science graduate, pursing a career in
            Frontend Web Development
          </motion.p>
        </MotionConfig>
      </div>
    </Container>
  );
}
