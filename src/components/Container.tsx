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
        {/* 100svh-100px is the min-height of the container
        and another -84px or -100px for the nav bar depending on the breakpoint,
        since the navbar is still in the normal flow of the dom */}
        {center ? (
          <div className="min-h-[calc((100svh-100px)-84px)] md:min-h-[calc((100svh-100px)-100px)]">
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
