import { motion } from "framer-motion";
import {
  ChevronRight,
  Coffee,
  ConciergeBell,
  Monitor,
  ShowerHead,
  Snowflake,
  Tv,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ease = [0.22, 1, 0.36, 1];
const image = (id, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const photos = {
  hero: image("photo-1611892440504-42a792e24d32", 2200),
  intro: image("photo-1600607687939-ce8a6c25118c"),
  deluxe: image("photo-1590490360182-c33d57733427"),
  premium: image("photo-1566665797739-1674de7a421a"),
  executive: image("photo-1618773928121-c32242e63f39"),
  suite: image("photo-1600210492486-724fe5c67fb0"),
  experience: image("photo-1600566753190-17f0baa2a6c3"),
  cta: image("photo-1542314831-068cd1dbfeeb", 2200),
};

const rooms = [
  {
    name: "Deluxe Room",
    image: photos.deluxe,
    description:
      "A calm, welcoming room shaped around the essentials of a good night's rest.",
    details: [
      ["Guests", "[Guest Capacity]"],
      ["Bed", "[Bed Type]"],
      ["Size", "[Room Size]"],
    ],
    amenities: "[Amenities: Wi-Fi · Television · Air conditioning]",
  },
  {
    name: "Premium Room",
    image: photos.premium,
    description:
      "An inviting space with room to slow down between a busy day and an easy evening.",
    details: [
      ["Guests", "[Guest Capacity]"],
      ["Bed", "[Bed Type]"],
      ["Size", "[Room Size]"],
    ],
    amenities: "[Amenities: Wi-Fi · Television · Work desk]",
  },
  {
    name: "Executive Room",
    image: photos.executive,
    description:
      "Designed for considered comfort, with a composed setting for both work and rest.",
    details: [
      ["Guests", "[Guest Capacity]"],
      ["Bed", "[Bed Type]"],
      ["Size", "[Room Size]"],
    ],
    amenities: "[Amenities: Wi-Fi · In-room dining · Work desk]",
  },
  {
    name: "Executive Suite",
    image: photos.suite,
    description:
      "A more generous stay, with separate moments for unwinding, hosting and sleeping well.",
    details: [
      ["Guests", "[Guest Capacity]"],
      ["Bed", "[Bed Type]"],
      ["Size", "[Room Size]"],
    ],
    amenities: "[Amenities: Wi-Fi · Lounge seating · In-room dining]",
  },
];

const amenities = [
  [Wifi, "Complimentary Wi-Fi"],
  [Snowflake, "Air Conditioning"],
  [Tv, "Television"],
  [UtensilsCrossed, "In-room Dining"],
  [ShowerHead, "Hot Water"],
  [Monitor, "Work Desk"],
  [Coffee, "Daily Housekeeping"],
  [ConciergeBell, "24-hour Reception"],
];

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

export default function Rooms() {
  return (
    <main id="top">
      <Navbar />
      <section className="relative min-h-[max(100svh,43rem)] overflow-hidden">
        <motion.img
          src={photos.hero}
          alt="A peaceful guest room at The Kalash"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.16 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(25,21,16,.88),rgba(25,21,16,.12)_60%,rgba(25,21,16,.45))]" />
        <div className="relative mx-auto flex min-h-[max(100svh,43rem)] max-w-360 flex-col justify-end px-5 pb-20 pt-[calc(var(--navbar-height)+1rem)] sm:px-8 lg:px-12 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease }}
            className="eyebrow text-brass-soft"
          >
            The Kalash
          </motion.p>
          <h1 className="display mt-5 text-[clamp(3.8rem,8vw,7.5rem)] text-white">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease }}
                className="block"
              >
                Rooms <em>&amp; Suites.</em>
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease }}
            className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
          >
            Thoughtfully designed spaces for restful stays and memorable
            moments.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Picture
            src={photos.intro}
            alt="Warm and restful hotel interior"
            className="aspect-4/5"
          />
          <div>
            <Reveal>
              <p className="eyebrow">A restful address</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                A stay shaped around <em className="text-brass">ease.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ink/75">
                Every room at The Kalash is imagined as a welcome pause: quiet
                interiors, considered details and the comfort to settle in at
                your own pace.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">
                Whether you are arriving after a long journey or making time for
                a slower morning, our spaces offer a warm, uncomplicated place
                to rest.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Rooms &amp; Suites</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Find your <em className="text-brass">own rhythm.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-ink/65">
                A collection of thoughtfully appointed rooms for short pauses,
                unhurried weekends and longer stays.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 space-y-20 lg:space-y-28">
            {rooms.map((room, i) => (
              <article
                key={room.name}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <Picture
                  src={room.image}
                  alt={room.name}
                  delay={0.06}
                  className="aspect-5/4"
                />
                <div className="max-w-xl">
                  <Reveal delay={0.08}>
                    <p className="eyebrow">0{i + 1}</p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <h3 className="display mt-4 text-4xl sm:text-5xl">
                      {room.name}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-5 text-sm leading-7 text-ink/65">
                      {room.description}
                    </p>
                  </Reveal>
                  <dl className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
                    {room.details.map(([label, value]) => (
                      <Reveal key={label} delay={0.24}>
                        <div className="grid grid-cols-[.8fr_1.2fr] gap-4 py-3 text-sm">
                          <dt className="text-[.6rem] font-semibold uppercase tracking-[.17em] text-ink/55">
                            {label}
                          </dt>
                          <dd className="text-right">{value}</dd>
                        </div>
                      </Reveal>
                    ))}
                  </dl>
                  <Reveal delay={0.32}>
                    <p className="mt-5 text-[.62rem] font-medium uppercase tracking-[.15em] text-ink/55">
                      {room.amenities}
                    </p>
                  </Reveal>
                  <Reveal delay={0.38}>
                    <div className="mt-8">
                      <Button>Enquire Now</Button>
                    </div>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <Reveal>
          <p className="eyebrow">At your service</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-5 text-5xl sm:text-6xl">
            The thoughtful <em className="text-brass">essentials.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(([Icon, label], i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="flex items-center gap-4 border-t border-ink/15 pt-5">
                <Icon
                  size={21}
                  strokeWidth={1.2}
                  className="shrink-0 text-brass"
                />
                <h3 className="font-display text-2xl">{label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto grid max-w-310 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <Picture
            src={photos.experience}
            alt="A quietly appointed hotel space"
            className="aspect-4/3"
          />
          <div>
            <Reveal>
              <p className="eyebrow">The stay experience</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Comfort, quietly <em className="text-brass">considered.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-lg leading-8 text-ink/75">
                Peaceful interiors, warm service and the small practical details
                that make a stay feel effortless.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 text-sm leading-7 text-ink/60">
                From an attentive welcome to a comfortable night and a
                convenient departure, our team is here with the kind of
                hospitality that feels natural rather than formal.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <motion.img
          src={photos.cta}
          alt="The Kalash exterior at sunset"
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
              Plan your <em className="text-brass-soft">stay.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              Tell us what you have in mind and our team will be pleased to help
              find the right room for your visit.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <Button light>Enquire Now</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
