type ContainerProps = { children: React.ReactNode; id: string };

export default function Container({ children, id }: ContainerProps) {
  return (
    <section
      id={id}
      className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-100px)] w-full max-w-[1200px] mx-auto scroll-m-[84px] md:scroll-m-[100px]"
    >
      {children}
    </section>
  );
}
