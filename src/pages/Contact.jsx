import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactHero from "../assets/gallery/reception.png";
import enquiryImage from "../assets/hero_kalash.png";

const ease = [0.22, 1, 0.36, 1];

const photos = {
  hero: contactHero,
  enquiry: enquiryImage,
  cta: contactHero,
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

function Button({ children, href = "#enquiry", light = false }) {
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

const contactDetails = [
  [
    MapPin,
    "Address",
    "Near Vietnam Temple, Kol Baba Road, New Taridih, Bodhgaya, Gaya Ji, Bihar 824231",
  ],
  [Phone, "Phone", "+91 9876543210"],
  [Mail, "Email", "kalashbodhgaya@gmail.com, thekalash@zohomail.in"],
  [Clock3, "Reception", "Open 24 hours"],
];

function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fieldClass =
    "mt-3 w-full border-b border-ink/25 bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brass";

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitting(true);
    setSent(false);
    setSubmitError("");
    try {
      const enquiry = Object.fromEntries(new FormData(form));
      enquiry.phone = `+91${enquiry.phone}`;
      enquiry._subject = `New ${enquiry.enquiryType} Enquiry — The Kalash`;
      enquiry._replyto = enquiry.email;
      const response = await fetch(
        "https://formsubmit.co/ajax/visionsneha5@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(enquiry),
        },
      );
      const result = await response.json();
      if (!response.ok || result.success !== "true") {
        throw new Error("The enquiry could not be sent.");
      }
      setSent(true);
      form.reset();
    } catch {
      setSubmitError(
        "We could not send your enquiry. Please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2"
      noValidate
    >
      <label className="block text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          pattern="[\\p{L}][\\p{L}\\p{M} .'-]*"
          title="Enter a name using letters only. Spaces, apostrophes, periods and hyphens are allowed."
          className={fieldClass}
        />
      </label>
      <label className="block text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Phone Number
        <div className={`${fieldClass} flex items-center gap-3`}>
          <span aria-hidden="true" className="shrink-0 text-sm text-ink/65">
            +91
          </span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[0-9]{10}"
            maxLength={10}
            title="Enter a 10 digit Indian phone number."
            aria-label="10 digit phone number"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/35"
          />
        </div>
      </label>
      <label className="block text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="block text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Enquiry Type
        <select
          required
          name="enquiryType"
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option>Stay</option>
          <option>Restaurant</option>
          <option>Banquet / Events</option>
          <option>General Enquiry</option>
        </select>
      </label>
      <label className="block text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Preferred Date
        <input name="date" type="date" className={fieldClass} />
      </label>
      <label className="block text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Number of Guests
        <input
          name="guests"
          type="number"
          min="1"
          placeholder="For dining or events"
          className={fieldClass}
        />
      </label>
      <label className="block sm:col-span-2 text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/60">
        Message
        <textarea
          required
          name="message"
          rows="4"
          className={`${fieldClass} resize-y`}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 text-[.66rem] font-semibold uppercase tracking-[.18em] text-white transition-colors duration-300 hover:bg-brass"
        >
          <Send size={14} strokeWidth={1.3} />
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
        {submitError && (
          <p role="alert" className="mt-4 text-sm leading-6 text-red-800">
            {submitError}
          </p>
        )}
        {sent && (
          <p role="status" className="mt-4 text-sm leading-6 text-ink/65">
            Thank you. Your enquiry has been sent to our team.
          </p>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
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
        <div className="relative mx-auto flex min-h-[max(100svh,43rem)] max-w-360 flex-col justify-end px-5 pb-20 pt-[calc(var(--navbar-height)+1rem)] sm:px-8 lg:px-12 lg:pb-24">
          {" "}
          <motion.p
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
                Contact <em className="text-brass-soft">The Kalash.</em>
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base"
          >
            Whether you are planning a stay, dining experience or celebration,
            our team is here to help.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">Contact Information</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Here to make
                <br />
                <em className="text-brass">arrivals easy.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-sm text-sm leading-7 text-ink/65">
                For stays, tables, celebrations and everything in between, begin
                with a conversation.
              </p>
            </Reveal>
          </div>
          <dl className="divide-y divide-ink/15 border-y border-ink/15">
            {contactDetails.map(([Icon, label, value], index) => (
              <Reveal key={label} delay={index * 0.07}>
                <div className="grid gap-3 py-5 sm:grid-cols-[2.5rem_.7fr_1.3fr] sm:items-start">
                  <Icon
                    size={20}
                    strokeWidth={1.25}
                    className="mt-0.5 text-brass"
                  />
                  <dt className="text-[.62rem] font-semibold uppercase tracking-[.17em] text-ink/55">
                    {label}
                  </dt>
                  <dd className="max-w-md text-sm leading-6 text-ink/80">
                    {value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">Find Us</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display mt-5 text-5xl sm:text-6xl">
                  A warm welcome,
                  <br />
                  <em className="text-brass">well located.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Nandeshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="rule-link"
              >
                Get Directions <ChevronRight size={15} />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="mt-14">
            <div className="relative min-h-100 overflow-hidden border border-ink/15 sm:min-h-130">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.740706551389!2d84.97576017526492!3d24.70143867803355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32cf4cd6e0921%3A0x773fe7990603920f!2sNandeshwari!5e0!3m2!1sen!2sin!4v1786865757318!5m2!1sen!2sin"
                title="Hotel location on Google Maps"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 bg-ivory/95 px-5 py-4 text-sm text-ink sm:px-7">
                <span className="eyebrow block text-[.58rem]">The Kalash</span>
                <span className="mt-1 block">
                  Near Vietnam Temple, Kol Baba Road, New Taridih, Bodhgaya,
                  Gaya Ji, Bihar 824231
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="enquiry"
        className="mx-auto max-w-310 px-5 py-24 sm:px-8 lg:py-36"
      >
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <Picture
              src={photos.enquiry}
              alt="A welcoming hotel interior"
              className="aspect-4/5"
            />
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-sm text-sm leading-7 text-ink/60">
                Share a few details about your plans and we will be pleased to
                guide you.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p className="eyebrow">Send an Enquiry</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Let’s plan
                <br />
                <em className="text-brass">something lovely.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-24 lg:py-30">
        <div className="mx-auto max-w-310 px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Quick Assistance</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-5xl sm:text-6xl">
              Where would you
              <br />
              <em className="text-brass">like to begin?</em>
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-ink/15 border-y border-ink/15">
            {[
              ["Stay With Us", "Rooms", "/rooms"],
              ["Dine With Us", "Restaurant", "/restaurant"],
              ["Celebrate With Us", "Banquet", "/banquet"],
            ].map(([title, destination, href], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <a
                  href={href}
                  className="group flex items-center justify-between gap-5 py-5 transition-colors hover:text-brass"
                >
                  <span className="font-display text-3xl sm:text-4xl">
                    {title}
                  </span>
                  <span className="flex items-center gap-3 text-[.62rem] font-semibold uppercase tracking-[.17em]">
                    {destination}
                    <ChevronRight
                      size={17}
                      strokeWidth={1.2}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
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
              We look forward to
              <br />
              <em className="text-brass-soft">welcoming you.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-ivory/75">
              From the first question to the moment you arrive, let us make your
              plans feel effortless.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <Button light>Enquire Now</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer variant="contact" />
    </main>
  );
}
