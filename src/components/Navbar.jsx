import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "/images/logo.svg";
import { useThemeContext } from "../App";

const links = [
  { label: "hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work Process", href: "#work-process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="p-1.5 rounded-md text-(--color-muted) hover:text-(--color-accent) hover:bg-(--color-surface) transition-colors duration-200"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-(--color-border)/50 ${
          scrolled ? "bg-(--color-bg)/90 backdrop-blur-xl " : "bg-transparent"
        }`}
      >
        <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNav("#hero")}
            aria-label="Go to top"
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Sashi Identity" className="h-8 w-8 grayscale-dark" />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              l.label != "hero" &&
             ( <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  aria-current={active === l.href ? "page" : undefined}
                  className={`text-sm font-medium transition-colors duration-200 relative group cursor-pointer ${
                    active === l.href
                      ? "text-(--color-accent)"
                      : "text-(--color-muted) hover:text-(--color-accent)"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-(--color-accent2) transition-all duration-300 group-hover:w-full" />
                </button>
              </li>)
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-(--color-accent) p-1"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-(--color-bg) flex flex-col pt-20 px-8"
          >
            <ul className="flex flex-col gap-6 mt-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-3xl font-display font-medium text-(--color-accent) hover:text-(--color-accent2) transition-colors"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto mb-12">
              <a
                href="mailto:loginu.shrestha@gmail.com"
                className="inline-flex text-sm font-medium text-(--color-bg) bg-(--color-accent) px-6 py-3 rounded-full"
              >
                loginu.shrestha@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
