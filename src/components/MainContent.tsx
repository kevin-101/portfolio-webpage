import Container from "./Container";

export default function MainContent() {
  return (
    <main>
      <Container id="about">
        {/* 100dvh-100px is the min-height of the container
          and another -84px or -100px for the nav bar depending on the breakpoint,
          since the navbar is still in the normal flow of the dom */}
        <div className="flex flex-col gap-1 w-full min-h-[calc((100dvh-100px)-84px)] md:min-h-[calc((100dvh-100px)-100px)] justify-center">
          <h3 className="text-4xl font-bold text-gray-500">Kevin k Noel</h3>

          <h1 className="text-6xl min-[412px]:text-7xl min-[600px]:text-8xl font-extrabold">
            Frontend Developer <br /> (React/
            <br className="min-[897px]:hidden" />
            Next.js)
          </h1>
        </div>
      </Container>

      <section
        id="projects"
        className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-100px)] scroll-m-[84px] md:scroll-m-[100px] bg-blue-950"
      >
        Projects
      </section>

      <section
        id="contact"
        className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-100px)] scroll-m-[84px] md:scroll-m-[100px] bg-green-950"
      >
        Contact
      </section>
    </main>
  );
}
