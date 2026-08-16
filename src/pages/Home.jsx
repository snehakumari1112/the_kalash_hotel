import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  CarFront,
  ChevronRight,
  Clock3,
  Dumbbell,
  Mail,
  MapPin,
  Menu,
  Phone,
  UtensilsCrossed,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import logo from "../assets/The_Kalash_logo.png";
import heroImage from "../assets/hero.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

const nav = [
  ["Home", "#top"],
  ["Rooms", "#rooms"],
  ["Restaurant", "#restaurant"],
  ["Banquet", "#banquet"],
  ["Gallery", "#gallery"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const photos = {
  hero: image("photo-1601918774946-25832a4be0d6", 2200),
  lobby: image("photo-1566073771259-6a8506099945"),
  deluxe: image("photo-1590490360182-c33d57733427"),
  premium: image("photo-1566665797739-1674de7a421a"),
  suite: image("photo-1618773928121-c32242e63f39"),
  restaurant: image("photo-1517248135467-4c7edcad34c4"),
  food: image("photo-1547592180-85f173990554"),
  banquet: image("photo-1519167758481-83f550bb49b3", 2200),
  pool: image("photo-1582719478250-c89cae4dc85b"),
  detail: image("photo-1600607687920-4e2a09cf159d"),
  exterior: image("photo-1542314831-068cd1dbfeeb", 2200),
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Picture({ src, alt, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-1400 hover:scale-[1.045]"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease }}
      />
    </motion.div>
  );
}

function Button({ children, href = "#contact", light = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[.66rem] font-semibold uppercase tracking-[.18em] text-white transition-colors ${light ? "border border-white/50 hover:border-brass hover:bg-brass" : "bg-ink hover:bg-brass"}`}
    >
      {children}
      <ChevronRight size={15} strokeWidth={1.3} />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(scrollY > 35);
    addEventListener("scroll", handler, { passive: true });
    return () => removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const light = !scrolled && !open;
  return (
    <>
      <motion.header
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-ink/10 bg-ivory/95 backdrop-blur-md" : ""}`}
      >
        <nav className="mx-auto flex min-h-19 max-w-360 items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="The Kalash logo"
              className="h-11 w-11 object-contain"
            />
            <span
              className={`hidden font-display text-2xl sm:block ${light ? "text-white" : "text-ink"}`}
            >
              The Kalash
            </span>
          </a>
          <div className="hidden items-center gap-6 xl:flex">
            {nav.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className={`text-[.68rem] uppercase tracking-[.14em] transition-colors duration-300 ${
                  light ? "text-white" : "text-ink/75"
                } hover:text-brass`}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden px-5 py-3 text-[.62rem] font-semibold uppercase tracking-[.16em] text-white transition-colors duration-300 lg:block ${
                light
                  ? "border border-white/50 hover:border-brass hover:bg-brass"
                  : "bg-ink hover:bg-brass"
              }`}
            >
              Enquire Now
            </a>
            <button
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
            {/* Menu heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mb-8"
            >
              <span className="eyebrow text-brass">Explore</span>
            </motion.div>

            {/* Navigation */}
            <nav className="border-t border-ink/10">
              {nav.map(([name, href], i) => (
                <motion.a
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.12 + i * 0.06,
                    ease,
                  }}
                  className="group flex items-center justify-between border-b border-ink/10 py-5 font-display text-3xl text-ink transition-colors duration-300 hover:text-brass sm:text-4xl"
                >
                  <span>{name}</span>

                  <span className="text-sm text-ink/30 transition-colors duration-300 group-hover:text-brass">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-auto"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center bg-ink px-6 text-[.65rem] font-semibold uppercase tracking-[.18em] text-white transition-colors duration-300 hover:bg-brass"
              >
                Enquire Now
              </a>

              <div className="mt-6 flex items-center justify-between text-[.6rem] uppercase tracking-[.18em] text-ink/45">
                <span>The Kalash</span>
                <span>Hotel · Restaurant · Banquet</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[max(100svh,45rem)] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.img
          src={heroImage}
          alt="The Kalash hotel at dusk"
          className="h-full w-full object-cover"
          initial={{ scale: 1.17 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.3, ease }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(25,21,16,.88),rgba(25,21,16,.15)_58%,rgba(25,21,16,.46))]" />
      <div className="relative mx-auto flex min-h-[max(100svh,45rem)] max-w-360 flex-col justify-end px-5 pb-20 pt-[calc(var(--navbar-height)+1rem)] sm:px-8 lg:px-12 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease }}
          className="eyebrow text-brass-soft"
        >
          A Hotel · Restaurant · Banquet
        </motion.p>
        <h1 className="display mt-5 text-[clamp(3.5rem,8vw,7.5rem)] text-white">
          {["Stay.", "Dine.", "Celebrate."].map((word, i) => (
            <span key={word} className="block overflow-hidden pb-[0.10em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.65 + i * 0.13, ease }}
                className="block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8, ease }}
          className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
        >
          A considered place for restful stays, memorable meals and the
          celebrations that deserve to be held close.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#rooms"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-ivory px-6 text-[.66rem] font-semibold uppercase tracking-[.18em] text-ink transition-colors duration-300 hover:bg-brass hover:text-white"
          >
            Explore Rooms
            <ChevronRight size={15} strokeWidth={1.3} />
          </a>
          <a
            href="#banquet"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-6 text-[.66rem] font-semibold uppercase tracking-[.18em] text-white transition-colors duration-300 hover:border-brass hover:bg-brass"
          >
            Plan Your Event
            <ChevronRight size={15} strokeWidth={1.3} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const rooms = [
  [
    "Deluxe Room",
    photos.deluxe,
    "Quiet, sunlit and composed for a deeply restful stay.",
    ["King bed", "28 sq m", "City view", "Rain shower"],
  ],
  [
    "Premium Room",
    photos.premium,
    "Generous space and considered comforts for unhurried days.",
    ["King bed", "36 sq m", "Garden view", "Lounge seating"],
  ],
  [
    "Executive Suite",
    photos.suite,
    "A private living space for long stays and special occasions.",
    ["Living room", "52 sq m", "Balcony", "Bath tub"],
  ],
];

const facilities = [
  [Wifi, "High-speed Wi-Fi", "Complimentary throughout the property"],
  [CarFront, "Valet Parking", "Secure on-site arrival and departure"],
  [UtensilsCrossed, "In-room Dining", "Comfort, served to your door"],
  [Waves, "Outdoor Pool", "A serene pause under open skies"],
  [Clock3, "24-hour Reception", "Thoughtful assistance, around the clock"],
  [Dumbbell, "Fitness Room", "A well-equipped space to recharge"],
];

function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
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

            {/* Social Icons */}
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

          {/* Explore */}
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

          {/* Contact */}
          <div>
            <p className="eyebrow text-brass-soft">Contact</p>

            <address className="mt-6 text-sm leading-6 not-italic text-ivory/70">
              <p>
                The Kalash
                <br />
                Near Vietnam Temple, Kol Baba Road, New Taridih,
                <br />
                Bodhgaya, Gaya Ji, Bihar 824231
              </p>

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
                <br />
                <a
                  href="mailto:thekalash@zohomail.in"
                  className="transition-colors duration-300 hover:text-ivory"
                >
                  thekalash@zohomail.in
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-ivory/45 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} The Kalash. All rights reserved.
          </span>

          {/* <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-ivory"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-ivory"
            >
              Terms of Use
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section
        id="about"
        className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Picture
            src={photos.lobby}
            alt="Warm hotel lobby"
            className="aspect-4/5"
          />
          <div>
            <Reveal>
              <p className="eyebrow">Welcome</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                A house made
                <br />
                for <em className="text-brass">gathering.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ink/75">
                The Kalash is a welcoming pause in the rhythm of travel — a
                place where the details feel natural and every arrival is
                received with care.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">
                From calm rooms and a generous kitchen to occasions shared with
                the people you love, we make space for the moments that matter.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <a href="#gallery" className="rule-link mt-9">
                Discover Our Story <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
      <section id="rooms" className="bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">Rooms & Suites</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display mt-5 text-5xl sm:text-6xl">
                  Rest, considered.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-xl text-sm leading-7 text-ink/65">
                  Three distinct rooms, each designed in warm materials and
                  quietly considered comfort.
                </p>
              </Reveal>
            </div>
            <a href="#contact" className="rule-link">
              Explore Rooms <ChevronRight size={15} />
            </a>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
            {rooms.map(([name, src, text, amenities], i) => (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.11, duration: 0.8, ease }}
              >
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1200 hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-display text-3xl">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{text}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink/15 pt-4 text-[.58rem] font-medium uppercase tracking-[.16em] text-ink/60">
                  {amenities.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="restaurant"
        className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="relative">
            <Picture
              src={photos.restaurant}
              alt="Elegant restaurant"
              className="aspect-4/3"
            />
            <Picture
              src={photos.food}
              alt="Plated food"
              delay={0.2}
              className="absolute -bottom-10 right-5 hidden aspect-square w-48 border-[9px] border-ivory lg:block"
            />
          </div>
          <div>
            <Reveal>
              <p className="eyebrow">The Restaurant</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Cooked slowly,
                <br />
                <em className="text-brass">served warmly.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-sm leading-7 text-ink/70">
                Our menus find their rhythm in regional spice, familiar recipes
                and seasonal ingredients — thoughtfully prepared for long
                lunches and easy evenings.
              </p>
            </Reveal>
            <dl className="mt-9 divide-y divide-ink/15 border-y border-ink/15 text-sm">
              {[
                ["Cuisine", "North Indian · Mughlai · Continental"],
                ["Breakfast", "7:00 — 10:30"],
                ["Lunch & Dinner", "12:30 — 15:30 · 19:00 — 23:00"],
                ["Seating", "80 covers · private dining for 12"],
              ].map(([a, b]) => (
                <div className="grid grid-cols-[.8fr_1.2fr] gap-4 py-4" key={a}>
                  <dt className="text-[.6rem] font-semibold uppercase tracking-[.16em] text-ink/55">
                    {a}
                  </dt>
                  <dd className="text-right">{b}</dd>
                </div>
              ))}
            </dl>
            <a href="#contact" className="rule-link mt-8">
              Explore Restaurant <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <section
        id="banquet"
        className="relative isolate overflow-hidden bg-ink text-ivory"
      >
        <motion.img
          src={photos.banquet}
          alt="Event table setting"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease }}
        />
        <div className="absolute inset-0 -z-10 bg-ink/55" />
        <div className="mx-auto max-w-310 px-5 py-28 sm:px-8 lg:py-40">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-brass-soft">Banquet & Events</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Celebrations,
                <br />
                <em className="text-brass-soft">beautifully held.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-sm leading-7 text-ivory/75">
                Weddings, receptions, milestone celebrations and corporate
                events find a graceful setting — and a team attentive to every
                part of the occasion.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="divide-y divide-white/20 border-y border-white/20">
              {[
                ["Grand Hall", "Up to 600 guests"],
                ["Terrace Lawn", "Up to 350 guests"],
                ["Board Room", "Up to 40 guests"],
              ].map(([a, b]) => (
                <div
                  className="flex items-baseline justify-between gap-4 py-5"
                  key={a}
                >
                  <span className="font-display text-3xl">{a}</span>
                  <span className="text-right text-[.6rem] uppercase tracking-[.17em] text-ivory/65">
                    {b}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p className="eyebrow text-brass-soft">For every occasion</p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/70">
                In-house catering, valet parking, stage and sound arrangements,
                and a hospitality team that ensures the day unfolds with ease.
              </p>
              <div className="mt-8">
                <Button light>Plan Your Event</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <Reveal>
          <p className="eyebrow">Facilities</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-5 text-5xl sm:text-6xl">
            Thoughtful by nature.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(([Icon, title, note], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="flex gap-4 border-t border-ink/15 pt-5">
                <Icon
                  className="mt-1 text-brass"
                  size={21}
                  strokeWidth={1.25}
                />
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        id="gallery"
        className="border-y border-ink/10 bg-sand py-24 lg:py-36"
      >
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">Gallery</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display mt-5 text-5xl sm:text-6xl">
                  The property, in frames.
                </h2>
              </Reveal>
            </div>
            <a href="#contact" className="rule-link">
              View Gallery <ChevronRight size={15} />
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-7">
            <Picture
              src={photos.pool}
              alt="Hotel pool"
              className="col-span-2 aspect-4/5 lg:col-span-5 lg:row-span-2"
            />
            <Picture
              src={photos.exterior}
              alt="Hotel property"
              delay={0.08}
              className="col-span-2 aspect-video lg:col-span-7"
            />
            <Picture
              src={photos.food}
              alt="Dining detail"
              delay={0.12}
              className="aspect-square lg:col-span-3"
            />
            <Picture
              src={photos.suite}
              alt="Hotel suite"
              delay={0.16}
              className="aspect-square lg:col-span-4"
            />
            <Picture
              src={photos.detail}
              alt="Interior detail"
              delay={0.2}
              className="col-span-2 aspect-16/7 lg:col-span-12"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <Reveal>
          <p className="eyebrow">Guest Notes</p>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
          {[
            [
              "“We held our daughter’s wedding across two days here. Every detail was quietly in hand, and the food is still what our guests mention.”",
              "Meera & Rajesh Nair",
              "Wedding, Grand Hall",
            ],
            [
              "“A beautifully kept room, warm people and a breakfast worth getting up early for. Exactly what a stay should feel like.”",
              "Aditya Sharma",
              "Executive Suite, three nights",
            ],
            [
              "“The team handled our corporate evening for 200 guests with a calm confidence that made all the difference.”",
              "Priya Menon",
              "Corporate event",
            ],
          ].map(([quote, name, context], i) => (
            <Reveal key={name} delay={i * 0.1}>
              <figure className="flex h-full flex-col border-t border-ink/15 pt-7">
                <blockquote className="font-display text-2xl leading-[1.35]">
                  {quote}
                </blockquote>
                <figcaption className="mt-auto pt-8 text-sm">
                  <strong className="font-medium">{name}</strong>
                  <span className="mt-1 block text-[.6rem] uppercase tracking-[.17em] text-ink/55">
                    {context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="contact" className="bg-sand py-24 lg:py-36">
        <div className="mx-auto grid max-w-310 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Find Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Come and see
                <br />
                the place.
              </h2>
            </Reveal>
            <dl className="mt-9 divide-y divide-ink/15 border-y border-ink/15">
              {[
                [
                  MapPin,
                  "Address",
                  "Near Vietnam Temple, Kol Baba Road, New Taridih, Bodhgaya, Gaya Ji, Bihar 824231",
                ],
                [Phone, "Reservations", "+91 9876543210"],
                [
                  Mail,
                  "Email",
                  "kalashbodhgaya@gmail.com, thekalash@zohomail.in",
                ],
                [Clock3, "Reception", "Open 24 hours"],
              ].map(([Icon, label, value]) => (
                <div className="flex gap-4 py-4" key={label}>
                  <Icon
                    size={18}
                    strokeWidth={1.25}
                    className="mt-1 text-brass"
                  />
                  <div>
                    <dt className="text-[.6rem] font-semibold uppercase tracking-[.17em] text-ink/55">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <Button>Get Directions</Button>
            </div>
          </div>
          <div className="min-h-85 overflow-hidden border border-ink/15 lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.740706551389!2d84.97576017526492!3d24.70143867803355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32cf4cd6e0921%3A0x773fe7990603920f!2sNandeshwari!5e0!3m2!1sen!2sin!4v1786865757318!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full min-h-85 w-full"
              title="The Kalash location on Google Maps"
            />
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden">
        <motion.img
          src={photos.exterior}
          alt="Hotel exterior at sunset"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease }}
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-40">
          <Reveal>
            <p className="eyebrow text-brass-soft">The Kalash</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-5xl text-ivory sm:text-6xl lg:text-7xl">
              Stay with us, dine with us,{" "}
              <em className="text-brass-soft">celebrate with us.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              Whether it’s a night away, a table for family, or an occasion to
              remember, our team is ready to welcome you.
            </p>
          </Reveal>
          <div className="mt-9">
            <Button light>Enquire Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
