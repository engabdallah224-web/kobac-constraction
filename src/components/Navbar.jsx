import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0" onClick={closeMenu}>
          <img src={logo} alt="Kobac logo" className="h-10 sm:h-11 w-auto shrink-0" />
          <h1 className="text-sm sm:text-lg md:text-xl font-bold leading-tight truncate">
            <span className="text-secondary">Kobac</span> Construction
          </h1>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`transition ${
                  active === item.id ? "text-secondary" : "hover:text-secondary"
                }`}
              >
                {item.label}
              </a>
              <span
                className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-secondary transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-secondary text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Get Quote
        </a>

        <button
          className="md:hidden text-3xl leading-none ml-3"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 sm:px-6 pb-6">
          <div className="flex flex-col gap-5 pt-5 text-base font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`transition ${
                  active === item.id ? "text-secondary" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-secondary text-white px-5 py-3 rounded-xl font-semibold text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}