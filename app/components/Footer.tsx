export default function Footer() {
  return (
    <footer className="mt-40 pb-16 text-sm text-white/50">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-6 px-8 md:px-24">
        <span>
          © {new Date().getFullYear()} kumaR ai
        </span>

        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-white transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
