import { useEffect, useRef } from "react";
import Container from "./Container";
import { MotionConfig, useInView } from "framer-motion";
import { useActiveLink } from "../hooks/useActiveLink";
import HoverCard from "./HoverCard";

const projects = [
  {
    title: "Platform for Books",
    url: "https://platform-for-books.vercel.app",
  },
  {
    title: "EuroTech Maritime Website",
    url: "https://eurotechmaritime.org",
  },
];

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
      <div className="flex items-center w-full min-h-[inherit]">
        <div className="grid grid-cols-1 w-full gap-4">
          <MotionConfig
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
          >
            {projects.map((project, i) => {
              return (
                <HoverCard
                  key={project.title}
                  style={{ opacity: 0, x: i % 2 === 0 ? -200 : 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col w-full gap-4 p-4">
                    <h2 className="text-xl font-bold">{project.title}</h2>

                    <a
                      href={project.url}
                      target="_blank"
                      className="text-lg cursor-pointer"
                    >
                      Visit{" "}
                      <span className="inline-block opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity_transform] duration-300">
                        ↗️
                      </span>
                    </a>
                  </div>
                </HoverCard>
              );
            })}
          </MotionConfig>
        </div>
      </div>
    </Container>
  );
}
