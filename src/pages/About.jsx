import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  BellRing,
  CarFront,
  ChevronRight,
  ConciergeBell,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutHero from "../assets/gallery/15.jpg";
import hotelImage from "../assets/hero_kalash.png";
import cta from "../assets/gallery/12.jpg";
import stay from "../assets/rooms_hero.png";

const ease = [0.22, 1, 0.36, 1];
const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const photos = {
  hero: aboutHero,
  story: hotelImage,
  philosophy: cta,
  stay,
  dining: image("photo-1517248135467-4c7edcad34c4"),
  events: image("photo-1519167758481-83f550bb49b3"),
  service: image("photo-1566073771259-6a8506099945"),
  cta,
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
      transition={{ duration: 0.7, delay, ease }}
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

function Button({ children, href = "/contact", light = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[.66rem] font-semibold uppercase tracking-[.18em] transition-colors duration-300 ${light ? "border border-white/50 text-white hover:border-brass hover:bg-brass" : "bg-ink text-white hover:bg-brass"}`}
    >
      {children}
      <ChevronRight size={15} strokeWidth={1.3} />
    </a>
  );
}

const principles = [
  [
    "01",
    "Warm hospitality",
    "A welcome that feels personal, easy and unforced from the moment you arrive.",
  ],
  [
    "02",
    "Comfort",
    "Spaces and small details considered for rest, ease and a sense of belonging.",
  ],
  [
    "03",
    "Thoughtful service",
    "Attentive help when it is useful, with room for every guest to settle in at their own pace.",
  ],
  [
    "04",
    "Quality",
    "Care in the everyday—from the way a room is prepared to the way a table is set.",
  ],
  [
    "05",
    "Memorable experiences",
    "Simple, well-held moments that stay with you long after your visit.",
  ],
];
const experiences = [
  [
    "Stay",
    "Restful rooms and suites shaped for unhurried arrivals, quiet evenings and restorative mornings.",
    photos.stay,
    "/rooms",
    "Explore Rooms",
  ],
  [
    "Dining",
    "A welcoming table for familiar flavours, relaxed conversations and meals worth lingering over.",
    photos.dining,
    "/restaurant",
    "Discover Dining",
  ],
  [
    "Celebrations & Events",
    "Considered settings for gatherings, milestones and occasions shared with the people who matter.",
    photos.events,
    "/banquet",
    "Plan an Event",
  ],
  [
    "Guest Services",
    "The reassuring details that make every stay feel smooth, comfortable and well looked after.",
    photos.service,
    "/contact",
    "Make an Enquiry",
  ],
];
const services = [
  [Wifi, "High-speed Wi-Fi", "Stay connected throughout the property."],
  [CarFront, "Parking assistance", "An easier arrival and departure."],
  [UtensilsCrossed, "Dining", "Welcoming meals at an unhurried pace."],
  [ConciergeBell, "Guest assistance", "Helpful guidance when you need it."],
  [BellRing, "In-room comfort", "Thoughtful touches for private downtime."],
  [ShieldCheck, "Care & attention", "A stay supported by considered service."],
];

export default function About() {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  return (
    <main>
      <Navbar />
      <section
        ref={heroRef}
        className="relative min-h-[max(100svh,43rem)] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <motion.img
            src={photos.hero}
            alt="The Kalash property at dusk"
            className="h-full w-full object-cover"
            initial={{ scale: 1.17 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.3, ease }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(25,21,16,.88),rgba(25,21,16,.14)_58%,rgba(25,21,16,.48))]" />
        <div className="relative mx-auto flex min-h-[max(100svh,43rem)] max-w-360 flex-col justify-end px-5 pb-20 pt-[calc(var(--navbar-height)+1rem)] sm:px-8 lg:px-12 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
            className="eyebrow text-brass-soft"
          >
            About The Kalash
          </motion.p>
          <h1 className="display mt-5 text-[clamp(3.8rem,8vw,7.5rem)] text-white">
            <span className="block overflow-hidden pb-[.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.65, ease }}
                className="block"
              >
                A stay made
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.78, ease }}
                className="block"
              >
                <em className="text-brass-soft">warmly memorable.</em>
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease }}
            className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
          >
            A considered place for comfort, connection and the kind of
            hospitality that lets you feel at ease.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Picture
            src={photos.story}
            alt="An inviting hotel interior"
            className="aspect-4/5"
          />
          <div>
            <Reveal>
              <p className="eyebrow">Our Story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                A warm address,
                <br />
                <em className="text-brass">made for lingering.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ink/75">
                The Kalash is imagined as a welcoming pause in the journey—a
                place where guests can rest well, share good food and gather for
                the moments that matter.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">
                Our story is still being written. This space is reserved for the
                hotel’s founding story, local connections and the people whose
                care gives The Kalash its character.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">
                Until then, our guiding idea is simple: thoughtful hospitality
                should feel generous, comfortable and quietly personal.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto grid max-w-360 gap-14 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-24 lg:px-12">
          <div>
            <Reveal>
              <p className="eyebrow">Our Philosophy</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Hospitality in
                <br />
                <em className="text-brass">the details.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-sm leading-7 text-ink/65">
                We believe the most meaningful stays are made from a feeling:
                being welcomed, understood and comfortably at home.
              </p>
            </Reveal>
            <Picture
              src={photos.philosophy}
              alt="Quietly elegant room detail"
              delay={0.2}
              className="mt-10 aspect-4/3"
            />
          </div>
          <div className="self-end border-y border-ink/15">
            {principles.map(([number, title, text], i) => (
              <Reveal key={title} delay={i * 0.07}>
                <article className="grid gap-4 border-b border-ink/15 py-6 last:border-0 sm:grid-cols-[3.5rem_1fr]">
                  <span className="pt-1 text-[.62rem] font-semibold tracking-[.18em] text-brass">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-ink/60">
                      {text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal>
          <p className="eyebrow">The Kalash Experience</p>
        </Reveal>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.08}>
            <h2 className="display text-5xl sm:text-6xl">
              More ways to
              <br />
              <em className="text-brass">feel at home.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-sm leading-7 text-ink/60">
              Every corner of The Kalash is designed around a different way to
              pause, connect or celebrate.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">
          {experiences.map(([title, description, src, href, cta], i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.8, ease }}
            >
              <Picture
                src={src}
                alt={title}
                className="aspect-5/3"
                delay={i * 0.04}
              />
              <div className="mt-6 flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-4xl">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-ink/60">
                    {description}
                  </p>
                </div>
                <span className="mt-2 text-brass">
                  <ChevronRight size={21} strokeWidth={1.2} />
                </span>
              </div>
              <a href={href} className="rule-link mt-6">
                {cta} <ChevronRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-310 px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Facilities & Services</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 max-w-2xl text-5xl sm:text-6xl">
              The comforts that
              <br />
              <em className="text-brass">support your stay.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, name, text], i) => (
              <Reveal key={name} delay={i * 0.06}>
                <article className="min-h-52 py-7 sm:px-7 sm:odd:first:pl-0 lg:px-7 lg:nth-[3n+1]:pl-0">
                  <Icon size={21} strokeWidth={1.2} className="text-brass" />
                  <h3 className="mt-7 font-display text-3xl">{name}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink/50">
            Service availability and details can be confirmed directly with our
            team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Why Stay With Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Comfort has
                <br />
                <em className="text-brass">a feeling.</em>
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-lg leading-8 text-ink/75">
                At The Kalash, we hope every guest finds a stay that feels
                effortless: a calm room, a warm meal, a helping hand and time to
                simply be present.
              </p>
            </Reveal>
            <div className="mt-10 border-y border-ink/15">
              {[
                [HeartHandshake, "A genuinely warm welcome"],
                [Sparkles, "Thoughtful spaces for rest and connection"],
                [ShieldCheck, "Careful attention to the details of your stay"],
              ].map(([Icon, item], i) => (
                <Reveal key={item} delay={0.18 + i * 0.08}>
                  <div className="flex items-center gap-5 border-b border-ink/15 py-5 last:border-0">
                    <Icon
                      size={20}
                      strokeWidth={1.2}
                      className="shrink-0 text-brass"
                    />
                    <p className="font-display text-2xl sm:text-3xl">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.42}>
              <a href="/contact" className="rule-link mt-9">
                Plan Your Stay <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <motion.img
          src={photos.cta}
          alt="The Kalash welcoming exterior"
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
              Experience <em className="text-brass-soft">The Kalash.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              Whether you are planning a stay, a meal or a special gathering, we
              would be delighted to hear from you.
            </p>
          </Reveal>
          <div className="mt-9">
            <Button href="/contact" light>
              Enquire Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
