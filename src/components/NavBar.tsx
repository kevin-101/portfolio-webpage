import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useActiveLink } from "../hooks/useActiveLink";

const navLinks = [
  {
    id: "about",
    href: "#about",
    name: "About",
  },
  {
    id: "projects",
    href: "#projects",
    name: "Projects",
  },
  {
    id: "contact",
    href: "#contact",
    name: "Contact",
  },
] as const;

export type ActiveLink = (typeof navLinks)[number]["id"];

export default function NavBar() {
  const { activeLink } = useActiveLink();

  // get scroll position on the Y axis
  const { scrollY } = useScroll();

  // smoothing the Y value
  const smoothScrollY = useSpring(scrollY, { stiffness: 80, damping: 20 });

  // get the velocity at which scrollY changes
  const scrollYVelocity = useVelocity(smoothScrollY);

  // use the velocity to get new Y value for nav
  const y = useTransform(scrollYVelocity, [-2000, 2000], [10, -10], {
    clamp: false,
  });

  return (
    <header className="z-10 sticky top-0 flex justify-center py-4 px-2 md:text-2xl">
      <motion.nav
        className="flex gap-2 md:gap-6 py-1 px-1 overflow-hidden rounded-full border-2 border-white/15 bg-background/30 backdrop-blur-sm"
        style={{ y }}
      >
        {navLinks.map((link, key) => (
          <a
            key={key}
            href={link.href}
            className="relative rounded-full py-2 md:py-3 px-5 active:text-gray-500 md:hover:text-gray-500 transition-colors"
          >
            {activeLink === link.id && (
              <motion.div
                layoutId="active-pill"
                style={{ borderRadius: 9999 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="absolute inset-0 bg-foreground mix-blend-difference"
              />
            )}
            <span
              className={`${
                activeLink === link.id && "font-semibold"
              } "relative z-10 mix-blend-exclusion"`}
            >
              {link.name}
            </span>
          </a>
        ))}
      </motion.nav>
    </header>
  );
}
