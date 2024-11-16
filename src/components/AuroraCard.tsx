import {
  animate,
  AnimationSequence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { forwardRef } from "react";

type AuroraCardProps = {
  children: React.ReactNode;
  color: string;
};

const AuroraCard = motion.create(
  forwardRef<HTMLDivElement, AuroraCardProps>(
    ({ children, color = "rgba(255, 255, 255, .5)" }, ref) => {
      const leftGradientSize = useMotionValue(0);
      const middleGradientSize = useMotionValue(0);
      const rightGradientSize = useMotionValue(0);

      const gradientSequence: AnimationSequence = [
        [leftGradientSize, [800, 1100, 800], { ease: "easeInOut" }],
        [middleGradientSize, [800, 1000, 800], { ease: "easeInOut", at: 0.1 }],
        [rightGradientSize, [800, 1100, 800], { ease: "easeInOut", at: 0.2 }],
      ];

      const gradientAnimation = animate(gradientSequence, {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      });
      gradientAnimation.pause();

      return (
        <div
          ref={ref}
          className="group relative rounded-lg border-2 border-foreground/10"
          onMouseEnter={() => gradientAnimation.play()}
          onMouseLeave={() => gradientAnimation.pause()}
        >
          <motion.div
            className="opacity-0 group-hover:opacity-100 -z-20 absolute -inset-0.5 rounded-lg transition-opacity duration-500"
            style={{
              backgroundImage: useMotionTemplate`radial-gradient(${leftGradientSize}px at left bottom, ${color}, transparent 20%), radial-gradient(${middleGradientSize}px at bottom, ${color}, transparent 12%), radial-gradient(${rightGradientSize}px at right bottom, ${color}, transparent 20%)`,
            }}
          />
          <motion.div className="-z-10 absolute -inset-0.5 rounded-lg backdrop-blur-3xl" />

          {children}
        </div>
      );
    }
  )
);

export default AuroraCard;
