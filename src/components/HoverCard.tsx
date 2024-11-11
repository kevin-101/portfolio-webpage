import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { forwardRef } from "react";

const HoverCard = motion.create(
  forwardRef<HTMLDivElement, { children: React.ReactNode }>(
    ({ children }, ref) => {
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
          className="group relative rounded-lg border border-foreground/10"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="-z-10 absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              backgroundImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.2), transparent 80%)`,
            }}
          />

          {children}
        </div>
      );
    }
  )
);

export default HoverCard;
