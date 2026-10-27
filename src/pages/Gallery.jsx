import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/gallery/22.jpg";
import reception from "../assets/gallery/reception.png";
import gallery25 from "../assets/gallery/25.jpg";
import gallery01 from "../assets/gallery/01.jpg";
import gallery02 from "../assets/gallery/02.jpg";
import gallery03 from "../assets/gallery/03.jpg";
import gallery04 from "../assets/gallery/04.jpg";
import gallery05 from "../assets/gallery/05.jpg";
import gallery08 from "../assets/gallery/08.jpg";
import gallery12 from "../assets/gallery/12.jpg";
import gallery16 from "../assets/gallery/16.jpg";
import gallery21 from "../assets/gallery/21.jpg";
import gallery13 from "../assets/gallery/13.jpg";
import gallery23 from "../assets/gallery/23.jpg";
import gallery24 from "../assets/gallery/24.jpg";
import gallery26 from "../assets/gallery/26.jpg";

const ease = [0.22, 1, 0.36, 1];

const photos = {
  hero: heroImage,
  exterior: gallery12,
  lobby: gallery13,
  common: gallery26,
  ambience: gallery25,
  room: gallery01,
  bed: gallery02,
  bath: gallery16,
  detail: gallery08,
  restaurant: gallery12,
  food: gallery03,
  table: gallery04,
  dinner: gallery05,
  hall: gallery24,
  wedding: gallery26,
  event: gallery23,
  decor: gallery21,
  experience: gallery25,
  welcome: gallery12,
  cta: gallery04,
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
    <motion.figure
      className={`group overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-1400 group-hover:scale-[1.045]"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease }}
      />
    </motion.figure>
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

function GalleryHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-sm leading-7 text-ink/65">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

export default function Gallery() {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  return (
    <main id="top">
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
        <div className="relative mx-auto flex min-h-[max(100svh,43rem)] max-w-360 flex-col justify-end px-5 pb-20 pt-[calc(var(--navbar-height)+1rem)] sm:px-8 lg:px-12 lg:pb-24">          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
            className="eyebrow text-brass-soft"
          >
            The Kalash
          </motion.p>
          <h1 className="display mt-5 text-[clamp(3.8rem,8vw,7.5rem)] text-white">
            <span className="block overflow-hidden pb-[.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.65, ease }}
                className="block"
              >
                The Kalash <em className="text-brass-soft">Gallery.</em>
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
          >
            A collection of quiet corners, warm gatherings and the moments that
            make a stay memorable.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <GalleryHeading
          eyebrow="The Property"
          title={
            <>
              A sense of
              <br />
              <em className="text-brass">place.</em>
            </>
          }
          text="Architecture, atmosphere and the thoughtful spaces that welcome every guest."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-7">
          <Picture
            src={photos.exterior}
            alt="The Kalash exterior"
            className="col-span-2 aspect-video lg:col-span-8"
          />
          <Picture
            src={photos.lobby}
            alt="Warm hotel lobby"
            delay={0.08}
            className="aspect-4/5 lg:col-span-4 lg:row-span-2"
          />
          <Picture
            src={photos.common}
            alt="Hotel common area"
            delay={0.12}
            className="aspect-square lg:col-span-4"
          />
          <Picture
            src={photos.ambience}
            alt="Relaxed hotel ambience"
            delay={0.16}
            className="aspect-square lg:col-span-4"
          />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <GalleryHeading
              eyebrow="Rooms & Suites"
              title={
                <>
                  Rest, <em className="text-brass">framed beautifully.</em>
                </>
              }
              text="Interiors shaped for slow mornings, deep rest and unhurried moments of your own."
            />
            <Reveal
              delay={0.15}
              className="max-w-xs text-sm leading-7 text-ink/60"
            >
              Each image is a glimpse of the considered comfort awaiting at The
              Kalash.
            </Reveal>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
            <Picture
              src={photos.room}
              alt="Quietly appointed room interior"
              className="aspect-5/4 lg:col-span-7 lg:row-span-2 lg:aspect-auto"
            />
            <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:gap-7">
              <Picture
                src={photos.bed}
                alt="Restful hotel bed"
                delay={0.08}
                className="aspect-4/5"
              />
              <Picture
                src={photos.detail}
                alt="Room interior detail"
                delay={0.12}
                className="aspect-4/5"
              />
            </div>
            <Picture
              src={photos.bath}
              alt="Elegant bathroom space"
              delay={0.16}
              className="aspect-16/7 lg:col-span-5"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <GalleryHeading
          eyebrow="Dining"
          title={
            <>
              Gather around
              <br />
              <em className="text-brass">the table.</em>
            </>
          }
          text="From a beautifully laid table to familiar flavours served with care."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-7">
          <Picture
            src={photos.restaurant}
            alt="The Kalash restaurant"
            className="col-span-2 aspect-video lg:col-span-7"
          />
          <Picture
            src={photos.food}
            alt="A plated dish"
            delay={0.08}
            className="aspect-square lg:col-span-5 lg:row-span-2"
          />
          <Picture
            src={photos.table}
            alt="Restaurant table setting"
            delay={0.12}
            className="aspect-4/5 lg:col-span-4"
          />
          <Picture
            src={photos.dinner}
            alt="Dining atmosphere"
            delay={0.16}
            className="aspect-4/5 lg:col-span-3"
          />
        </div>
      </section>

      <section className="bg-ink py-24 text-ivory lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-brass-soft">Banquet & Celebrations</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Occasions,
                <br />
                <em className="text-brass-soft">beautifully held.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/70">
                The settings, details and shared joy of the celebrations we are
                privileged to host.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-7">
            <Picture
              src={photos.hall}
              alt="Banquet hall prepared for an event"
              className="col-span-2 aspect-video lg:col-span-8"
            />
            <Picture
              src={photos.wedding}
              alt="Wedding celebration details"
              delay={0.08}
              className="aspect-4/5 lg:col-span-4 lg:row-span-2"
            />
            <Picture
              src={photos.event}
              alt="Celebration table setting"
              delay={0.12}
              className="aspect-square lg:col-span-4"
            />
            <Picture
              src={photos.decor}
              alt="Event decor"
              delay={0.16}
              className="aspect-square lg:col-span-4"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid items-end gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <GalleryHeading
              eyebrow="Hotel Experience"
              title={
                <>
                  The moments
                  <br />
                  <em className="text-brass">in between.</em>
                </>
              }
              text="Warm service, easy conversation and the quiet pleasure of feeling looked after."
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-7">
            <Picture
              src={photos.experience}
              alt="A tranquil hotel setting"
              className="col-span-2 aspect-video"
            />
            <Picture
              src={photos.welcome}
              alt="A welcoming moment at the hotel"
              delay={0.1}
              className="aspect-4/5"
            />
            <Picture
              src={photos.ambience}
              alt="A restful moment by the pool"
              delay={0.16}
              className="aspect-4/5"
            />
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
              Your story,
              <br />
              <em className="text-brass-soft">waiting to unfold.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              Let us help you plan a stay, table or celebration worth
              remembering.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <Button light>Enquire Now</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer variant="gallery" />
    </main>
  );
}
