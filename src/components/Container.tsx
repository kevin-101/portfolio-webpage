import { forwardRef } from "react";

type ContainerProps = {
  children: React.ReactNode;
  id?: string;
  full?: boolean;
  center?: boolean;
};

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, id, full, center }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`${
          full && "min-h-[calc(100svh-84px)] md:min-h-[calc(100svh-100px)]"
        } w-full max-w-[1300px] mx-auto px-4 scroll-m-[84px] md:scroll-m-[100px]`}
      >
        {/* 100svh-84px/100px is the min-height of the container,
        depending on the breakpoint and you subtract the height of the navbar twice,
        to center the div since the navbar is still in the normal flow of the dom */}
        {center ? (
          <div className="min-h-[calc((100svh-(84px*2)))] md:min-h-[calc((100svh-(100px*2)))]">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

export default Container;
