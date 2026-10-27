import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronRight,
  Coffee,
  CookingPot,
  ConciergeBell,
  Soup,
  UtensilsCrossed,
  UsersRound,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ease = [0.22, 1, 0.36, 1];
const image = (id, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const photos = {
  hero: image("photo-1414235077428-338989a2e8c0", 2200),
  introduction: image("photo-1515003197210-e0cd71810b5f"),
  experience: image("photo-1517248135467-4e7edcad34c4"),
  hours: image("photo-1550966871-3ed3cdb5ed0c"),
  dishOne: image("photo-1547592180-85f173990554"),
  dishTwo: image("photo-1540189549336-e6e99c3679fe"),
  dishThree: image("photo-1565299624946-b28f40a0ae38"),
  services: image("photo-1559339352-11d035aa65de"),
  privateDining: image("photo-1414235077428-338989a2e8c0"),
  cta: image("photo-1504674900247-0877df9cc836", 2200),
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

const dishes = [
  [
    "Garden Market Plate",
    "Sample seasonal selection",
    "A chef-led composition that celebrates fresh produce, texture and gentle spice.",
    photos.dishOne,
  ],
  [
    "Slow-Cooked Table Curry",
    "Sample house favourite",
    "A comforting, richly layered preparation made for lingering over with warm breads.",
    photos.dishTwo,
  ],
  [
    "Evening Hearth Flatbread",
    "Sample sharing plate",
    "A crisp, generously topped plate designed for relaxed conversations around the table.",
    photos.dishThree,
  ],
];

const services = [
  [
    UtensilsCrossed,
    "All-Day Dining",
    "A relaxed table for the changing pace of the day.",
  ],
  [Coffee, "Breakfast", "A considered morning start, served with ease."],
  [Soup, "Lunch & Dinner", "Warm, flavourful dishes for unhurried meals."],
  [
    ConciergeBell,
    "In-Room Dining",
    "Comfortable dining in the privacy of your room.",
  ],
  [
    UsersRound,
    "Private & Family Dining",
    "Thoughtful settings for the people closest to you.",
  ],
  [
    CookingPot,
    "Chef Specials",
    "Seasonal inspirations and daily kitchen expressions.",
  ],
];

export default function Restaurant() {
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
            alt="Restaurant table set for dinner"
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
            The Kalash Restaurant
          </motion.p>
          <h1 className="display mt-5 overflow-hidden pb-[.1em] text-[clamp(4rem,9vw,8rem)] text-white">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.65, ease }}
              className="block"
            >
              Restaurant
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
          >
            A table of familiar comforts, fresh flavours and the easy pleasure
            of sharing a meal well.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease }}
            className="mt-9"
          >
            <Button href="#dining" light>
              Discover Dining
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Picture
            src={photos.introduction}
            alt="Inviting restaurant interior"
            className="aspect-4/5"
          />
          <div>
            <Reveal>
              <p className="eyebrow">The Kalash Restaurant</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                A place to
                <br />
                <em className="text-brass">gather over flavour.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ink/75">
                From a quiet morning coffee to dinner shared with family, our
                restaurant is imagined as a warm and welcoming extension of your
                stay.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">
                The menus and service details shown here are placeholders while
                the restaurant’s final offering is being confirmed. Expect an
                atmosphere that lets conversation, comfort and good food take
                their time.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <a href="#hours" className="rule-link mt-9">
                Dining Information <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="dining"
        className="border-y border-ink/10 bg-sand py-24 lg:py-36"
      >
        <div className="mx-auto grid max-w-360 gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-12">
          <div>
            <Reveal>
              <p className="eyebrow">Cuisine & Experience</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Made for every
                <br />
                <em className="text-brass">kind of appetite.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-sm leading-7 text-ink/65">
                A flexible dining experience shaped around breakfast, long
                lunches and relaxed dinners — with vegetarian and non-vegetarian
                choices thoughtfully prepared from fresh ingredients.
              </p>
            </Reveal>
            <Picture
              src={photos.experience}
              alt="Warmly lit dining room"
              delay={0.2}
              className="mt-10 aspect-4/3"
            />
          </div>
          <div className="self-end">
            <div className="border-y border-ink/15">
              {[
                [
                  "Cuisine",
                  "Regional inspirations alongside familiar Indian and continental comforts.",
                ],
                [
                  "Breakfast",
                  "A gentle start with fresh, made-to-order favourites.",
                ],
                ["Lunch", "Balanced plates for an easy midday pause."],
                [
                  "Dinner",
                  "Comforting, chef-crafted dishes for a relaxed evening.",
                ],
                [
                  "The Table",
                  "An elegant, unhurried setting for families, travellers and friends.",
                ],
              ].map(([title, text]) => (
                <Reveal key={title} delay={0.08}>
                  <article className="border-b border-ink/15 py-6 last:border-0">
                    <p className="font-display text-3xl">{title}</p>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-ink/60">
                      {text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="hours"
        className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-20">
          <Picture
            src={photos.hours}
            alt="Chef preparing a fresh dish"
            className="aspect-5/4"
          />
          <div>
            <Reveal>
              <p className="eyebrow">Service Hours</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                At your table,
                <br />
                <em className="text-brass">through the day.</em>
              </h2>
            </Reveal>
            <dl className="mt-9 divide-y divide-ink/15 border-y border-ink/15 text-sm">
              {[
                ["Breakfast", "[Timing]"],
                ["Lunch", "[Timing]"],
                ["Dinner", "[Timing]"],
                ["In-room Dining", "[Timing]"],
                ["Seating", "[Capacity]"],
                ["Reservations", "[Contact / Enquiry]"],
              ].map(([label, value]) => (
                <div
                  className="grid grid-cols-[1fr_auto] gap-4 py-4"
                  key={label}
                >
                  <dt className="text-[.62rem] font-semibold uppercase tracking-[.16em] text-ink/55">
                    {label}
                  </dt>
                  <dd className="text-right text-ink/75">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <a href="/contact" className="rule-link">
                Reserve a Table <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow">Signature Dining</p>
          </Reveal>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal delay={0.08}>
              <h2 className="display text-5xl sm:text-6xl">
                A few plates
                <br />
                <em className="text-brass">to imagine.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-7 text-ink/60">
                Representative sample dishes shown for inspiration, not a
                confirmed menu.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid border-t border-ink/15 md:grid-cols-3">
            {dishes.map(([name, tag, description, src], i) => (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease }}
                className="border-b border-ink/15 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <Picture
                  src={src}
                  alt={name}
                  className="aspect-5/4"
                  delay={i * 0.08}
                />
                <p className="mt-6 text-[.6rem] font-semibold uppercase tracking-[.18em] text-brass">
                  {tag}
                </p>
                <h3 className="mt-3 font-display text-3xl">{name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow">Dining Services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                The comfort of
                <br />
                <em className="text-brass">choice.</em>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {services.map(([Icon, name, note], i) => (
                <Reveal key={name} delay={i * 0.05}>
                  <div className="border-t border-ink/15 py-5">
                    <Icon size={20} strokeWidth={1.25} className="text-brass" />
                    <h3 className="mt-4 font-display text-2xl">{name}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/60">{note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Picture
            src={photos.services}
            alt="Friends sharing a meal"
            className="order-1 aspect-4/5 lg:order-2"
          />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-310 px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Our Food Philosophy</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 max-w-2xl text-5xl sm:text-6xl">
              Food that feels
              <br />
              <em className="text-brass">considered and generous.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Fresh ingredients",
                "We value ingredients that arrive with colour, character and a sense of the season.",
              ],
              [
                "02",
                "Thoughtful preparation",
                "Every dish is given the time and attention it needs before it reaches the table.",
              ],
              [
                "03",
                "Regional flavours",
                "Familiar spice and local inspiration are treated with warmth and respect.",
              ],
              [
                "04",
                "Warm hospitality",
                "The meal is only part of the experience; feeling looked after is the rest.",
              ],
            ].map(([number, title, text], i) => (
              <Reveal key={title} delay={i * 0.07}>
                <article className="min-h-56 border-b border-ink/15 py-7 sm:border-r sm:px-7 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0 lg:last:pr-0">
                  <span className="text-[.62rem] font-semibold tracking-[.18em] text-brass">
                    {number}
                  </span>
                  <h3 className="mt-8 font-display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
          <Picture
            src={photos.privateDining}
            alt="Dining table prepared for a special occasion"
            className="aspect-4/3"
          />
          <div>
            <Reveal>
              <p className="eyebrow">Private & Group Dining</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Made for the
                <br />
                <em className="text-brass">people at your table.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-sm leading-7 text-ink/65">
                For family gatherings, celebrations, business dinners and small
                private events, our team can help shape a dining experience with
                a relaxed sense of occasion.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
                {[
                  "Family gatherings",
                  "Celebrations",
                  "Business dinners",
                  "Small private events",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="font-display text-2xl">{item}</span>
                    <ChevronRight
                      size={17}
                      strokeWidth={1.2}
                      className="text-brass"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <a href="/contact" className="rule-link mt-8">
                Enquire About Group Dining <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <motion.img
          src={photos.cta}
          alt="A beautifully prepared dining table"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease }}
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-40">
          <Reveal>
            <p className="eyebrow text-brass-soft">The Kalash Restaurant</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-5xl text-ivory sm:text-6xl lg:text-7xl">
              Dine <em className="text-brass-soft">with us.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              For a quiet meal, a table for family, or a moment worth
              celebrating, we look forward to welcoming you.
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
