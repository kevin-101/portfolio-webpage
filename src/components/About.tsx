import { useInView } from "framer-motion";
import Container from "./Container";
import { useActiveLink } from "../hooks/useActiveLinks";
import { useEffect, useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { margin: "-50%" });

  const { setActiveLink } = useActiveLink();

  useEffect(() => {
    if (isInView) {
      setActiveLink!("about");
    }
  }, [isInView, setActiveLink]);

  return (
    <Container ref={aboutRef} id="about">
      <div className="flex flex-col gap-1 w-full min-h-[inherit] justify-center">
        <h3 className="text-4xl font-bold text-gray-500">Kevin k Noel</h3>

        <h1 className="text-6xl min-[412px]:text-7xl min-[600px]:text-8xl font-extrabold">
          Frontend Developer <br /> (React/
          <br className="min-[897px]:hidden" />
          Next.js)
        </h1>
      </div>
    </Container>
  );
}
