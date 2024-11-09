import { useEffect, useRef } from "react";
import Container from "./Container";
import { useActiveLink } from "../hooks/useActiveLinks";
import { useInView } from "framer-motion";

export default function Contact() {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { margin: "-50%" });

  const { setActiveLink } = useActiveLink();

  useEffect(() => {
    if (isInView) {
      setActiveLink!("contact");
    }
  }, [isInView, setActiveLink]);

  return (
    <Container ref={contactRef} id="contact">
      Contact
    </Container>
  );
}
