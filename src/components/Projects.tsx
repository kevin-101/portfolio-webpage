import { useEffect, useRef } from "react";
import Container from "./Container";
import { useInView } from "framer-motion";
import { useActiveLink } from "../hooks/useActiveLinks";

export default function Projects() {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { margin: "-50%" });

  const { setActiveLink } = useActiveLink();

  useEffect(() => {
    if (isInView) {
      setActiveLink!("projects");
    }
  }, [isInView, setActiveLink]);

  return (
    <Container ref={projectsRef} id="projects">
      Projects
    </Container>
  );
}
