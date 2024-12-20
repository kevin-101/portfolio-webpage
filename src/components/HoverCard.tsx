import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { forwardRef } from "react";
import cn from "../utils/cn";
import { type ClassValue } from "clsx";

const HoverCard = motion.create(
  forwardRef<
    HTMLDivElement,
    { children: React.ReactNode; className?: ClassValue }
  >(({ children, className }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      clientX,
      clientY,
      currentTarget,
    }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-lg border-2 border-foreground/10",
          className
        )}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="-z-10 absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            backgroundImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.2), transparent 80%)`,
          }}
        />

        {children}
      </div>
    );
  })
);

export default HoverCard;
