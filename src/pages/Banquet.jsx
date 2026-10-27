import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  CalendarDays,
  CarFront,
  ChevronRight,
  ClipboardList,
  ConciergeBell,
  Mic2,
  Sparkles,
  UtensilsCrossed,
  UsersRound,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ease = [0.22, 1, 0.36, 1];
const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const photos = {
  hero: image("photo-1519167758481-83f550bb49b3", 2200),
  intro: image("photo-1507504031003-b417219a0fde", 1800),
  hall: image("photo-1464366400600-7168b8af9bc3", 1800),
  wedding: image("photo-1519741497674-611481863552", 2000),
  corporate: image("photo-1511578314322-379afb476865", 1600),
  food: image("photo-1547592180-85f173990554", 1600),
  galleryOne: image("photo-1507504031003-b417219a0fde"),
  galleryTwo: image("photo-1464366400600-7168b8af9bc3"),
  galleryThree: image("photo-1507504031003-b417219a0fde", 1200),
  galleryFour: image("photo-1519167758481-83f550bb49b3", 1200),
  galleryFive: image("photo-1519225421980-715cb0215aed", 1200),
  cta: image("photo-1511795409834-ef04bbd61622", 2200),
};

const events = [
  ["Weddings", "A welcoming setting for celebrations shared with family and friends."],
  ["Receptions", "A considered space for a joyful evening with your guests."],
  ["Family celebrations", "Warm gatherings for milestones and special occasions."],
  ["Corporate events", "Flexible arrangements for meetings and professional gatherings."],
  ["Social gatherings", "A relaxed backdrop for bringing people together."],
];

const support = [
  [CalendarDays, "Event planning", "Thoughtful support as your plans take shape."],
  [CarFront, "Valet parking", "An easy arrival and departure for your guests."],
  [ClipboardList, "Event coordination", "Careful attention to timing and arrangements."],
  [ConciergeBell, "Guest assistance", "A welcoming team to help throughout the occasion."],
  [Mic2, "Sound & staging", "Options for the key moments of your gathering."],
  [Sparkles, "Personal touches", "Details considered to suit your celebration."],
  [UtensilsCrossed, "Catering", "Food and service arranged around your event."],
  [UsersRound, "Hospitality team", "Attentive service for you and your guests."],
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

export default function Banquet() {
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
            alt="An elegantly decorated celebration venue"
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
            Banquets & Celebrations
          </motion.p>
          <h1 className="display mt-5 text-[clamp(3.5rem,8vw,7.5rem)] text-white">
            <span className="block overflow-hidden pb-[.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.65, ease }}
                className="block"
              >
                A beautiful setting
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.78, ease }}
                className="block"
              >
                for <em className="text-brass-soft">life’s occasions.</em>
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease }}
            className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
          >
            From meaningful gatherings to joyful celebrations, The Kalash offers
            a warm, considered place to bring people together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8, ease }}
            className="mt-9"
          >
            <Button href="/contact" light>
              Enquire Now
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Picture
            src={photos.intro}
            alt="Elegant banquet table arrangement"
            className="aspect-4/5"
          />
          <div>
            <Reveal>
              <p className="eyebrow">Celebrate Together</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Gather well.
                <br />
                <em className="text-brass">Celebrate fully.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ink/75">
                The Kalash is imagined as a setting where an occasion can unfold
                with ease—welcoming guests, sharing a meal and making room for
                the moments everyone will remember.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">
                Our team can help you begin the conversation around your event,
                with thoughtful service and attention to the pace, people and
                details that make it your own.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow">Events We Host</p>
          </Reveal>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal delay={0.08}>
              <h2 className="display text-5xl sm:text-6xl">
                Every reason
                <br />
                <em className="text-brass">to come together.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-7 text-ink/60">
                From the most personal milestones to professional gatherings,
                every occasion begins with a conversation.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
            {events.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.04}>
                <article className="min-h-52 py-7 sm:px-6 lg:px-6 lg:nth-[5n+1]:pl-0 lg:nth-[5n+5]:border-r-0">
                  <span className="text-[.62rem] font-semibold tracking-[.18em] text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-7 font-display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-20">
          <Picture
            src={photos.hall}
            alt="Banquet hall dressed for an event"
            className="aspect-5/4"
          />
          <div>
            <Reveal>
              <p className="eyebrow">The Banquet Hall</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">[Hall Name]</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-sm leading-7 text-ink/65">
                A versatile main event space that can be discussed and arranged
                around the scale and style of your celebration.
              </p>
            </Reveal>
            <dl className="mt-8 divide-y divide-ink/15 border-y border-ink/15 text-sm">
              {[
                ["Capacity", "[Capacity]"],
                [
                  "Seating arrangements",
                  "[Theatre / Round Table / U-Shape / etc.]",
                ],
                ["Area", "[Hall Area]"],
                ["Air conditioning", "[Available / Details]"],
                ["Parking", "[Details]"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[.85fr_1.15fr] gap-4 py-4"
                >
                  <dt className="text-[.62rem] font-semibold uppercase tracking-[.16em] text-ink/55">
                    {label}
                  </dt>
                  <dd className="text-right text-ink/75">{value}</dd>
                </div>
              ))}
            </dl>
            <Reveal delay={0.22}>
              <a href="/contact" className="rule-link mt-8">
                Discuss Your Event <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-310 px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Event Experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 max-w-2xl text-5xl sm:text-6xl">
              Thoughtful support,
              <br />
              <em className="text-brass">from idea to occasion.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {support.map(([Icon, title, text], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <article className="min-h-60 py-7 sm:px-7 lg:px-7 lg:nth-[4n+1]:pl-0">
                  <Icon size={21} strokeWidth={1.2} className="text-brass" />
                  <h3 className="mt-7 font-display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink/50">
            Services and arrangements are subject to discussion and
            availability.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <motion.img
          src={photos.wedding}
          alt="Wedding celebration at sunset"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease }}
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8 lg:py-40">
          <Reveal>
            <p className="eyebrow text-brass-soft">Weddings & Celebrations</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-5xl text-ivory sm:text-6xl lg:text-7xl">
              Made for the
              <br />
              <em className="text-brass-soft">moments that matter.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              Wedding receptions, engagement ceremonies, anniversaries,
              birthdays and family gatherings find a warm backdrop here—held
              with attentive hospitality, comforting food and a sense of
              occasion.
            </p>
          </Reveal>
          <div className="mt-9">
            <Button href="/contact" light>
              Plan a Celebration
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Corporate Events</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                A considered room
                <br />
                <em className="text-brass">for good ideas.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-sm leading-7 text-ink/65">
                For corporate meetings, conferences, business gatherings,
                seminars, workshops and private corporate dinners, our team can
                help you explore an arrangement suited to the day’s purpose.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <dl className="mt-8 divide-y divide-ink/15 border-y border-ink/15 text-sm">
                {[
                  [
                    "Meeting format",
                    "[Boardroom / Theatre / Classroom / U-Shape]",
                  ],
                  ["Conference set-up", "[Details to be confirmed]"],
                  ["Dining arrangements", "[Tea / Lunch / Dinner options]"],
                  [
                    "Technical requirements",
                    "[Audio / visual support on request]",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[.9fr_1.1fr] gap-4 py-4"
                  >
                    <dt className="text-[.62rem] font-semibold uppercase tracking-[.16em] text-ink/55">
                      {label}
                    </dt>
                    <dd className="text-right text-ink/75">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="/contact" className="rule-link mt-8">
                Enquire for Business <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
          <Picture
            src={photos.corporate}
            alt="Professional gathering around a table"
            className="aspect-4/5"
          />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto grid max-w-360 gap-14 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-24 lg:px-12">
          <div>
            <Reveal>
              <p className="eyebrow">Catering & Dining</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                A table made
                <br />
                <em className="text-brass">for the occasion.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-sm leading-7 text-ink/65">
                Food has a way of drawing people together. Event dining can be
                discussed around the rhythm of your day, your guests and the
                kind of gathering you are planning.
              </p>
            </Reveal>
            <Picture
              src={photos.food}
              alt="Food prepared for sharing"
              delay={0.2}
              className="mt-10 aspect-4/3"
            />
          </div>
          <div className="self-end">
            <div className="border-y border-ink/15">
              {[
                [
                  "Welcome refreshments",
                  "A gentle welcome for arriving guests.",
                ],
                ["Buffet", "Flexible event dining arrangements to discuss."],
                [
                  "À la carte",
                  "Selected service possibilities, subject to planning.",
                ],
                [
                  "Vegetarian options",
                  "Menu requirements can be shared with the team.",
                ],
                [
                  "Non-vegetarian options",
                  "Menu requirements can be shared with the team.",
                ],
                ["Desserts & beverages", "A considered finish to the table."],
              ].map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <article className="border-b border-ink/15 py-5 last:border-0">
                    <h3 className="font-display text-3xl">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/60">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.38}>
              <a href="/restaurant" className="rule-link mt-8">
                Explore Our Restaurant <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal>
          <p className="eyebrow">Event Gallery</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-5 text-5xl sm:text-6xl">
            Imagine the
            <br />
            <em className="text-brass">atmosphere.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
          <Picture
            src={photos.galleryOne}
            alt="Banquet setting"
            className="col-span-2 aspect-4/3 lg:col-span-7 lg:row-span-2 lg:aspect-auto"
          />
          <Picture
            src={photos.galleryTwo}
            alt="Event decor"
            delay={0.08}
            className="aspect-square lg:col-span-5"
          />
          <Picture
            src={photos.galleryThree}
            alt="Dining table setup"
            delay={0.12}
            className="aspect-square lg:col-span-2"
          />
          <Picture
            src={photos.galleryFour}
            alt="Celebration ambience"
            delay={0.16}
            className="aspect-square lg:col-span-3"
          />
          <Picture
            src={photos.galleryFive}
            alt="Table details"
            delay={0.2}
            className="col-span-2 aspect-4/3 lg:col-span-5"
          />
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <motion.img
          src={photos.cta}
          alt="A celebration table set with flowers"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease }}
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-40">
          <Reveal>
            <p className="eyebrow text-brass-soft">The Kalash Events</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-5xl text-ivory sm:text-6xl lg:text-7xl">
              Plan Your <em className="text-brass-soft">Celebration.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              Share your event date, guest count and requirements with us, and
              let’s begin shaping the occasion together.
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
