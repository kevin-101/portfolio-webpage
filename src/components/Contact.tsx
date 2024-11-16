import { useEffect, useRef } from "react";
import Container from "./Container";
import { useActiveLink } from "../hooks/useActiveLink";
import { useInView } from "framer-motion";
import AuroraCard from "./AuroraCard";

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
      <div className="flex flex-col gap-8 w-full min-h-[inherit]">
        <h2 className="ml-2 text-2xl font-bold">Contact me:</h2>

        <div className="grid grid-cols-3 gap-4">
          <AuroraCard>
            <div className="p-4 min-h-[400px]">
              <h2 className="text-lg font-bold">Github</h2>
            </div>
          </AuroraCard>
        </div>
      </div>
    </Container>
  );
}
