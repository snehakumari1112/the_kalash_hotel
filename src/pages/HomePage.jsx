//banquet

import { motion } from "framer-motion";
import banquetImg from "@/assets/banquet.jpg";
import { Reveal, EASE } from "@/components/site/motion";

const capacities = [
  ["Grand Hall", "Up to 600 guests"],
  ["Terrace Lawn", "Up to 350 guests"],
  ["Board Room", "Up to 40 guests"],
];

const facilities = [
  "In-house catering",
  "Décor & floral partners",
  "Valet parking",
  "Stage, sound & lighting",
];

export default function Banquet() {
  return (
    <section id="banquet" className="relative isolate overflow-hidden bg-ink text-ivory">
      <motion.img
        src={banquetImg}
        alt="Banquet hall set for a wedding"
        width={1600}
        height={1100}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: EASE }}
      />
      <div className="absolute inset-0 -z-10 bg-ink/55" />

      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:py-40">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-brass-soft">Banquet & Events</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-5 text-ivory">
              Weddings, receptions
              <span className="block italic text-brass-soft">and every celebration between</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 text-base leading-[1.85] text-ivory/70">
              From intimate ceremonies to full-scale wedding functions, corporate evenings and
              milestone birthdays — our halls, lawns and event team handle the whole occasion.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-20">
          <div className="divide-y divide-ivory/15 border-y border-ivory/15">
            {capacities.map(([name, cap], i) => (
              <Reveal key={name} delay={0.1 + i * 0.08}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-5">
                  <span className="font-display text-2xl">{name}</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory/60">
                    {cap}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h3 className="text-[0.65rem] uppercase tracking-[0.28em] text-brass-soft">
                Included
              </h3>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {facilities.map((f, i) => (
                <Reveal key={f} delay={0.1 + i * 0.06}>
                  <li className="text-sm text-ivory/75">{f}</li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.4}>
              <a href="#contact" className="btn-base btn-outline-light mt-10">
                Plan Your Event
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

//facilities

import { Wifi, Car, UtensilsCrossed, Waves, ConciergeBell, Dumbbell } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion";

const items = [
  { icon: Wifi, label: "High-speed Wi-Fi", note: "Complimentary throughout the property" },
  { icon: Car, label: "Valet Parking", note: "Secure on-site parking for guests" },
  { icon: UtensilsCrossed, label: "In-room Dining", note: "Full menu served until midnight" },
  { icon: Waves, label: "Outdoor Pool", note: "Open sunrise to sunset" },
  { icon: ConciergeBell, label: "24-hour Reception", note: "Travel desk and airport transfers" },
  { icon: Dumbbell, label: "Fitness Room", note: "Equipped gym for resident guests" },
];

export default function Facilities() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-36">
      <SectionHeading eyebrow="Facilities" title="What we look after" />

      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <div className="flex min-w-0 items-start gap-4 border-t border-border pt-6">
              <item.icon size={22} strokeWidth={1.1} className="mt-1 shrink-0 text-brass" />
              <div className="min-w-0">
                <h3 className="font-display text-2xl leading-none">{item.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


//final cta

import { motion } from "framer-motion";
import ctaImg from "@/assets/cta.jpg";
import { Reveal, EASE } from "@/components/site/motion";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <motion.img
        src={ctaImg}
        alt="The Kalash entrance at night"
        width={1920}
        height={1000}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: EASE }}
      />
      <div className="absolute inset-0 -z-10 bg-ink/65" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-40">
        <Reveal>
          <span className="eyebrow text-brass-soft">The Kalash</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-lg mt-6 text-ivory">
            Stay with us, dine with us,
            <span className="block italic text-brass-soft">celebrate with us</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-lg text-base leading-[1.85] text-ivory/70">
            Tell us what you have in mind — a night, a table, or a celebration for six hundred. Our
            team will take it from there.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <a
            href="#contact"
            className="btn-base mt-10 bg-ivory text-ink hover:bg-brass hover:text-white"
          >
            Enquire Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}


//gallery

import pool from "@/assets/gallery-pool.jpg";
import detail from "@/assets/gallery-detail.jpg";
import food from "@/assets/food.jpg";
import banquet from "@/assets/banquet.jpg";
import room from "@/assets/room-premium.jpg";
import { Reveal, RevealImage } from "@/components/site/motion";

const hoverImg = "transition-transform duration-[1400ms] ease-out hover:scale-[1.06]";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-border bg-card py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Gallery</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-5">The property, in frames</h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="shrink-0">
            <a href="#contact" className="link-rule">
              View Gallery
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
          <RevealImage
            src={pool}
            alt="Courtyard pool at dusk"
            className="col-span-2 aspect-[4/5] lg:col-span-5 lg:row-span-2"
            imgClassName={hoverImg}
          />
          <RevealImage
            src={banquet}
            alt="Banquet hall"
            delay={0.08}
            className="col-span-2 aspect-[16/10] lg:col-span-7"
            imgClassName={hoverImg}
          />
          <RevealImage
            src={food}
            alt="Plated dish"
            delay={0.16}
            className="aspect-square lg:col-span-3"
            imgClassName={hoverImg}
          />
          <RevealImage
            src={room}
            alt="Premium room"
            delay={0.24}
            className="aspect-square lg:col-span-4"
            imgClassName={hoverImg}
          />
          <RevealImage
            src={detail}
            alt="Brass door detail"
            delay={0.32}
            className="col-span-2 aspect-[16/7] lg:col-span-12"
            imgClassName={hoverImg}
          />
        </div>
      </div>
    </section>
  );
}


//hero
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import { EASE } from "@/components/site/motion";

const words = ["Stay.", "Dine.", "Celebrate."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.img
          src={heroImg}
          alt="The Kalash hotel at dusk"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,16,12,0.85),rgba(20,16,12,0.25)_55%,rgba(20,16,12,0.55))]" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 sm:px-8 lg:pb-28"
      >
        <motion.span
          className="eyebrow text-brass-soft"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
        >
          A Hotel · Restaurant · Banquet
        </motion.span>

        <h1 className="display-xl mt-6 max-w-4xl text-white">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.75 + i * 0.13, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-md text-base leading-relaxed text-white/75"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.35, ease: EASE }}
        >
          The Kalash brings together restful rooms, a warm kitchen and grand celebration spaces
          under one roof — hospitality in its most generous form.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: EASE }}
        >
          <a href="#rooms" className="btn-base bg-ivory text-ink hover:bg-brass hover:text-white">
            Explore Rooms
          </a>
          <a href="#banquet" className="btn-base btn-outline-light">
            Plan Your Event
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-white/25">
          <motion.span
            className="absolute inset-x-0 top-0 block h-5 bg-brass-soft"
            animate={{ y: ["-100%", "280%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

//intro
import introImg from "@/assets/intro.jpg";
import { Reveal, RevealImage } from "@/components/site/motion";

export default function Intro() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <RevealImage
          src={introImg}
          alt="The Kalash lobby lounge"
          className="aspect-[4/5] w-full lg:aspect-[4/5]"
        />

        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">Welcome</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-5">
              A house built for
              <span className="block italic text-brass">gathering</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="body-lead mt-7">
              Named for the vessel that marks every auspicious beginning, The Kalash was imagined as
              a place where journeys pause and occasions are given room to breathe. Quiet rooms,
              generous daylight, and a kitchen that cooks with intent.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="body-lead mt-5">
              From an unhurried night's rest to a wedding that fills every hall, our teams look
              after the detail so you can be present for the moment.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <a href="#gallery" className="link-rule mt-10">
              Discover Our Story
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

//location
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/site/motion";

const rows = [
  { icon: MapPin, label: "Address", value: "123 Placeholder Road, City, State 000000" },
  { icon: Phone, label: "Reservations", value: "+91 00000 00000" },
  { icon: Mail, label: "Email", value: "stay@thekalash.com" },
  { icon: Clock, label: "Reception", value: "Open 24 hours" },
];

export default function Location() {
  return (
    <section id="contact" className="border-t border-border bg-card py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Find Us</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-5">Come and see the place</h2>
            </Reveal>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {rows.map((r, i) => (
                <Reveal key={r.label} delay={0.12 + i * 0.06}>
                  <div className="flex min-w-0 items-start gap-4 py-5">
                    <r.icon size={18} strokeWidth={1.2} className="mt-1 shrink-0 text-brass" />
                    <div className="min-w-0">
                      <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {r.label}
                      </dt>
                      <dd className="mt-1 text-base">{r.value}</dd>
                    </div>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.4}>
              <a href="#contact" className="btn-base btn-outline-ink mt-10">
                Get Directions
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border border-border bg-secondary lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <MapPin size={26} strokeWidth={1} className="text-brass" />
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                Map placeholder
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

//restaurant
import restaurantImg from "@/assets/restaurant.jpg";
import foodImg from "@/assets/food.jpg";
import { Reveal, RevealImage } from "@/components/site/motion";

const details = [
  ["Cuisine", "North Indian · Mughlai · Continental"],
  ["Breakfast", "7:00 — 10:30"],
  ["Lunch & Dinner", "12:30 — 15:30 · 19:00 — 23:00"],
  ["Seating", "80 covers · private dining for 12"],
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div className="relative">
          <RevealImage
            src={restaurantImg}
            alt="The restaurant at The Kalash"
            className="aspect-[4/3] w-full"
          />
          <RevealImage
            src={foodImg}
            alt="A plated dish"
            delay={0.25}
            className="absolute -bottom-10 right-6 hidden aspect-square w-40 border-8 border-background lg:block xl:w-52"
          />
        </div>

        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">The Restaurant</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-5">
              Cooked slowly,
              <span className="block italic text-brass">served warmly</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="body-lead mt-7">
              Our kitchen leans on regional spice, seasonal produce and recipes that have been in
              the family longer than the building. Evenings are candlelit and unhurried.
            </p>
          </Reveal>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {details.map(([label, value], i) => (
              <Reveal key={label} delay={0.2 + i * 0.06}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-6 py-4">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-right text-sm">{value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.5}>
            <a href="#contact" className="link-rule mt-10">
              Explore Restaurant
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


//rooms
import { motion } from "framer-motion";
import deluxe from "@/assets/room-deluxe.jpg";
import premium from "@/assets/room-premium.jpg";
import suite from "@/assets/room-suite.jpg";
import { Reveal, SectionHeading, EASE } from "@/components/site/motion";

const rooms = [
  {
    name: "Deluxe Room",
    image: deluxe,
    description:
      "A calm, light-filled room with a king bed and a quiet corner to work or read.",
    amenities: ["King bed", "28 sq m", "City view", "Rain shower"],
  },
  {
    name: "Premium Room",
    image: premium,
    description:
      "Extra space, a lounge seat by the window and views over the garden courtyard.",
    amenities: ["King bed", "36 sq m", "Garden view", "Lounge seating"],
  },
  {
    name: "Executive Suite",
    image: suite,
    description:
      "A separate living room for long stays, private dinners and slow mornings.",
    amenities: ["Living room", "52 sq m", "Balcony", "Bath tub"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="border-t border-border bg-card py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Rooms & Suites"
            title="Rest, considered"
            intro="Three room types, each finished in warm neutrals with linens chosen for a long night's sleep."
          />
          <Reveal delay={0.2} className="shrink-0">
            <a href="#contact" className="link-rule">
              Explore Rooms
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 lg:gap-8">
          {rooms.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-7 font-display text-3xl">{room.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {room.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                {room.amenities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

//testinmonals
import { Reveal } from "@/components/site/motion";

const quotes = [
  {
    text: "We held our daughter's wedding across two days at The Kalash. Every hall was ready before we asked, and the food is still what our guests talk about.",
    name: "Meera & Rajesh Nair",
    role: "Wedding, Grand Hall",
  },
  {
    text: "A quiet, beautifully kept room and a breakfast worth waking early for. Easily the most comfortable stay I've had on this route.",
    name: "Aditya Sharma",
    role: "Executive Suite, three nights",
  },
  {
    text: "The team handled a 200-guest corporate evening without a single hiccup. Understated service, exactly the way it should be.",
    name: "Priya Menon",
    role: "Corporate event",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-36">
      <Reveal>
        <span className="eyebrow">Guest Notes</span>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-3 lg:gap-16">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.12}>
            <figure className="flex h-full flex-col border-t border-border pt-8">
              <blockquote className="font-display text-2xl leading-[1.45] lg:text-[1.7rem]">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <p className="text-sm">{q.name}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {q.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

//navbar
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kalash-logo.png.asset.json";
import { EASE } from "./motion";

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Rooms", href: "#rooms" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Banquet", href: "#banquet" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

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
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "border-b border-border bg-background/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-4 sm:px-8 lg:py-5">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="The Kalash"
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 object-contain lg:h-12 lg:w-12"
            />
            <span
              className={`hidden font-display text-xl leading-none tracking-wide transition-colors duration-500 sm:block ${
                light ? "text-white" : "text-foreground"
              }`}
            >
              The Kalash
            </span>
          </a>

          <ul className="hidden justify-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`text-[0.7rem] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-brass ${
                    light ? "text-white/85" : "text-foreground/75"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3">
            <a
              href="#contact"
              className={`btn-base hidden lg:inline-flex ${light ? "btn-outline-light" : "btn-solid"}`}
            >
              Enquire Now
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={`grid h-10 w-10 shrink-0 place-items-center lg:hidden ${
                light ? "text-white" : "text-foreground"
              }`}
            >
              {open ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
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
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-background px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.05, ease: EASE }}
                  className="border-b border-border"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-display text-3xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="btn-base btn-solid mt-10 w-full"
            >
              Enquire Now
            </motion.a>
            <p className="mt-auto pt-10 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              +91 00000 00000
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

//footer
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/kalash-logo.png.asset.json";
import { NAV_LINKS } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="The Kalash"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 object-contain"
              />
              <span className="font-display text-2xl">The Kalash</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              A place to stay, to dine and to celebrate — where warm hospitality meets considered
              design.
            </p>
            <div className="mt-7 flex gap-5 text-ivory/60">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-brass-soft">
                <Instagram size={18} strokeWidth={1.3} />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-brass-soft">
                <Facebook size={18} strokeWidth={1.3} />
              </a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-brass-soft">
                <Youtube size={18} strokeWidth={1.3} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.65rem] uppercase tracking-[0.28em] text-brass-soft">Explore</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.65rem] uppercase tracking-[0.28em] text-brass-soft">Contact</h3>
            <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed text-ivory/70">
              <p>
                The Kalash
                <br />
                123 Placeholder Road
                <br />
                City, State 000000
              </p>
              <p>
                <a href="tel:+910000000000" className="transition-colors hover:text-ivory">
                  +91 00000 00000
                </a>
                <br />
                <a href="mailto:stay@thekalash.com" className="transition-colors hover:text-ivory">
                  stay@thekalash.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-7 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Kalash. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ivory">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-ivory">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

//motion
import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* Image that scales down into place as it enters view */
export function RevealImage({ src, alt, className = "", imgClassName = "", delay = 0 }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.6, delay, ease: EASE }}
      />
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left", className = "" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="display-lg mt-5">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.16}>
          <p className="body-lead mt-6">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

