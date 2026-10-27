import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/The_Kalash_logo.png";

const nav = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Restaurant", "/restaurant"],
  ["Banquet", "/banquet"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const address = (
  <>
    Near Vietnam Temple, Kol Baba Road, New Taridih,
    <br />
    Bodhgaya, Gaya Ji, Bihar 824231
  </>
);

export default function Footer({ variant = "standard" }) {
  const showPlaceholders = variant === "contact" || variant === "gallery";

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="The Kalash logo"
                className="h-14 w-14 object-contain"
              />
              <span className="font-display text-3xl">The Kalash</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-ivory/65">
              A warm address for stays, dining, and celebrations made memorable
              through generous hospitality.
            </p>
            <div className="mt-7 flex gap-5 text-ivory/60">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-300 hover:text-brass-soft"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-300 hover:text-brass-soft"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-brass-soft">Explore</p>
            <div className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
              {nav.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="text-ivory/70 transition-colors duration-300 hover:text-ivory"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-brass-soft">Contact</p>
            <address className="mt-6 text-sm leading-6 not-italic text-ivory/70">
              {showPlaceholders ? (
                <>
                  {variant === "gallery" && (
                    <>
                      The Kalash
                      <br />
                    </>
                  )}
                  <p>[Hotel Address]</p>
                  <p className="mt-3">
                    [Phone Number]
                    <br />
                    [Email Address]
                  </p>
                </>
              ) : (
                <>
                  The Kalash
                  <br />
                  {address}
                  <p className="mt-3">
                    <a
                      href="tel:+919876543210"
                      className="transition-colors duration-300 hover:text-ivory"
                    >
                      +91 9876543210
                    </a>
                    <br />
                    <a
                      href="mailto:kalashbodhgaya@gmail.com"
                      className="transition-colors duration-300 hover:text-ivory"
                    >
                      kalashbodhgaya@gmail.com
                    </a>
                    {variant === "home" && (
                      <>
                        <br />
                        <a
                          href="mailto:thekalash@zohomail.in"
                          className="transition-colors duration-300 hover:text-ivory"
                        >
                          thekalash@zohomail.in
                        </a>
                      </>
                    )}
                  </p>
                </>
              )}
            </address>
          </div>
        </div>
        <div className="mt-14 border-t border-white/15 pt-7 text-xs text-ivory/45">
          © {new Date().getFullYear()} The Kalash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
