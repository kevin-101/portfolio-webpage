import Container from "./Container";

export default function About() {
  return (
    <Container id="about">
      <div className="flex flex-col gap-1 w-full min-h-[inherit] justify-center">
        <h3 className="text-4xl font-bold text-gray-500">Kevin k Noel</h3>

        <h1 className="text-6xl min-[412px]:text-7xl min-[600px]:text-8xl font-extrabold">
          Frontend Developer <br /> (React/
          <br className="min-[897px]:hidden" />
          Next.js)
        </h1>
      </div>
    </Container>
  );
}
