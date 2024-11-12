export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center px-4 py-3">
      <p className="text-lg text-center">© Kevin k Noel | {year}</p>
    </footer>
  );
}
