import { forwardRef } from "react";

type ContainerProps = { children: React.ReactNode; id: string };

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className="min-h-[calc(100dvh-84px)] md:min-h-[calc(100dvh-100px)] w-full max-w-[1300px] mx-auto px-4 scroll-m-[84px] md:scroll-m-[100px]"
      >
        {/* 100dvh-100px is the min-height of the container
        and another -84px or -100px for the nav bar depending on the breakpoint,
        since the navbar is still in the normal flow of the dom */}
        <div className="min-h-[calc((100dvh-100px)-84px)] md:min-h-[calc((100dvh-100px)-100px)]">
          {children}
        </div>
      </section>
    );
  }
);

export default Container;
