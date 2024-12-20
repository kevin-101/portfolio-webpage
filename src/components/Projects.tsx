import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import diagonalArrow from "../assets/diagonal-arrow-icon.svg";
import { useActiveLink } from "../hooks/useActiveLink";
import Container from "./Container";
import HoverCard from "./HoverCard";

const projects = [
  {
    title: "Platform for Books",
    url: "https://platform-for-books.vercel.app",
    description:
      "This is basically a social platform built with Next.js and Firebase that connects book lovers. Users can create profiles, browse a variety of books, and find others who have the books they're interested in. Whether you're looking to trade, borrow, or discover new reads, this app makes it easy to connect with like-minded individuals and share your passion for books.",
  },
  {
    title: "EuroTech Maritime Website",
    url: "https://eurotechmaritime.org",
    description:
      "This is a website for a maritime institue, built using React. It features dynamic routing with React Router for seamless navigation between pages. State management is handled efficiently with Redux, ensuring smooth data flow across the application. The project showcases the skills I've gained in building responsive, interactive web applications with modern React tools.",
  },
  {
    title: "This page",
    url: "/",
    description: "const thisPage = () => thisPage();",
  },
];

const projectVariants: Variants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? 200 : -200,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

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
      <div className="flex flex-col justify-center gap-8 mt-5 mb-20 w-full min-h-[inherit]">
        <motion.h2
          className="text-2xl font-bold ml-2"
          custom={0}
          variants={projectVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          My Projects:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          {projects.map((project, i) => {
            return (
              <HoverCard
                key={project.title}
                className={
                  i % 4 === 0 || (i - 1) % 4 === 0
                    ? "col-span-1"
                    : "col-span-1 md:col-span-2"
                }
                custom={i + 1}
                variants={projectVariants}
                initial="hidden"
                whileTap={{ scale: 0.95 }}
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-between w-full min-h-52 gap-4 p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>

                  <p className="w-full max-w-[800px]">{project.description}</p>

                  <a href={project.url} className="text-lg cursor-pointer">
                    Visit{" "}
                    <span className="inline-block opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity_transform] duration-300">
                      <img
                        src={diagonalArrow}
                        alt="diagonal arrow icon"
                        className="size-3.5"
                      />
                    </span>
                  </a>
                </div>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
