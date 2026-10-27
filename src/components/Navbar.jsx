import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import logo from "../assets/The_Kalash_logo.png";

const ease = [0.22, 1, 0.36, 1];
const nav = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Restaurant", "/restaurant"],
  ["Banquet", "/banquet"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = window.location.pathname === "/";
  const enquiryHref = window.location.pathname === "/contact" ? "#enquiry" : "/contact";
  const light = !scrolled && !open;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-ink/10 bg-ivory/95 backdrop-blur-md" : ""}`}
      >
        <nav className="mx-auto flex min-h-19 max-w-360 items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href={isHome ? "#top" : "/"} className="flex items-center gap-3">
            <img
              src={logo}
              alt="The Kalash logo"
              className="h-11 w-11 object-contain"
            />
            <span
              className={`block font-display text-2xl ${light ? "text-white" : "text-ink"}`}
            >
              The Kalash
            </span>
          </a>
          <div className="hidden items-center gap-6 xl:flex">
            {nav.map(([name, href]) => (
              <a
                key={name}
                href={isHome && name === "Home" ? "#top" : href}
                className={`text-[.68rem] uppercase tracking-[.14em] transition-colors duration-300 ${light ? "text-white" : "text-ink/75"} hover:text-brass`}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={enquiryHref}
              className={`hidden px-5 py-3 text-[.62rem] font-semibold uppercase tracking-[.16em] text-white transition-colors duration-300 lg:block ${light ? "border border-white/50 hover:border-brass hover:bg-brass" : "bg-ink hover:bg-brass"}`}
            >
              Enquire Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className={`grid h-10 w-10 place-items-center xl:hidden ${light ? "text-white" : ""}`}
            >
              {open ? <X strokeWidth={1.4} /> : <Menu strokeWidth={1.4} />}
            </button>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-8 pt-28 sm:px-8 xl:hidden"
          >
            <p className="eyebrow mb-8 text-brass">Explore</p>
            <nav className="border-t border-ink/10">
              {nav.map(([name, href], i) => (
                <motion.a
                  key={name}
                  href={isHome && name === "Home" ? "#top" : href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 + i * 0.06, ease }}
                  className="group flex items-center justify-between border-b border-ink/10 py-5 font-display text-3xl text-ink transition-colors duration-300 hover:text-brass sm:text-4xl"
                >
                  <span>{name}</span>
                  <ChevronRight
                    size={18}
                    strokeWidth={1.2}
                    className="text-ink/30 group-hover:text-brass"
                  />
                </motion.a>
              ))}
            </nav>
            <a
              href={enquiryHref}
              onClick={() => setOpen(false)}
              className="mt-auto flex min-h-12 items-center justify-center bg-ink px-6 text-[.65rem] font-semibold uppercase tracking-[.18em] text-white transition-colors duration-300 hover:bg-brass"
            >
              Enquire Now
            </a>
            <div className="mt-6 flex items-center justify-between text-[.6rem] uppercase tracking-[.18em] text-ink/45">
              <span>The Kalash</span>
              <span>Hotel · Restaurant · Banquet</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
