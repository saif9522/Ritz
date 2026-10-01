export default function Nav() {
  return (
    <nav className="flex items-center gap-8">
      <a
        href="#services"
        className="text-sm font-medium text-white hover:opacity-70 transition"
      >
        Services
      </a>

      <a
        href="#work"
        className="text-sm font-medium text-white hover:opacity-70 transition"
      >
        Our Work
      </a>

      <a
        href="#company"
        className="text-sm font-medium text-white hover:opacity-70 transition"
      >
        Company
      </a>

      <a
        href="#contact"
        className="text-sm font-medium text-white hover:opacity-70 transition"
      >
        Contact
      </a>

      <a
        href="#consulting"
        className="rounded-md bg-[#d99b2b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c88d24] transition"
      >
        Free Consulting
      </a>

      <button
        type="button"
        aria-label="Open menu"
        className="flex flex-col gap-1.5 ml-1"
      >
        <span className="block h-[2px] w-5 bg-white"></span>
        <span className="block h-[2px] w-5 bg-white"></span>
        <span className="block h-[2px] w-5 bg-white"></span>
      </button>
    </nav>
  );
}