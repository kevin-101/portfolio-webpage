import { motion, useAnimate, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import githubIcon from "../assets/github-icon.svg";
import gmailIcon from "../assets/gmail-icon.svg";
import linkedInIcon from "../assets/linkedin-icon.svg";
import redirectIcon from "../assets/redirect-icon.svg";
import { useActiveLink } from "../hooks/useActiveLink";
import AuroraCard from "./AuroraCard";
import Container from "./Container";

const contacts = [
  {
    name: "Github",
    href: "https://github.com/kevin-101",
    icon: githubIcon,
    color: "rgba(255, 255, 255, 0.5)",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-noel-666015244/",
    icon: linkedInIcon,
    color: "rgba(0, 96, 151, 0.7)",
  },
  {
    name: "Email",
    href: "mailto:kevinknoel7@gmail.com",
    icon: gmailIcon,
    color: "rgba(219, 68, 55, 0.7)",
  },
] as const;

const contactVariants: Variants = {
  hidden: (i) => ({
    opacity: 0,
    y: i % 2 === 0 ? -50 : 50,
  }),
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: i * 0.2,
    },
  }),
};

// abstracted for useAnimate hook scoping
function CardContent({ contact }: { contact: (typeof contacts)[number] }) {
  const [scope, animate] = useAnimate();

  function bounce() {
    animate("a", { scale: [1.3, 1] }, { type: "spring", stiffness: 300 });
  }

  return (
    <motion.div
      ref={scope}
      className="flex flex-col justify-end items-center p-4 aspect-square"
      onHoverStart={bounce}
      onTap={bounce}
    >
      <img
        src={contact.icon}
        alt={`${contact.name} Icon`}
        className="size-[60%] flex-1"
      />

      <div className="flex justify-between items-center w-full">
        <h2 className="text-lg font-bold text-start w-full">{contact.name}</h2>

        <motion.a
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-foreground/20 p-3 rounded-lg"
        >
          <img src={redirectIcon} alt="redirect icon" className="size-6" />
        </motion.a>
      </div>
    </motion.div>
  );
}

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
      <div className="flex flex-col gap-8 w-full mb-20">
        <h2 className="ml-2 text-2xl font-bold">Contact me:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((contact, i) => {
            return (
              <AuroraCard
                key={contact.color}
                color={contact.color}
                variants={contactVariants}
                custom={i}
                initial="hidden"
                whileTap={{ scale: 0.95 }}
                whileInView="show"
                viewport={{ once: true }}
              >
                <CardContent contact={contact} />
              </AuroraCard>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
