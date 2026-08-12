import Image from "next/image";
import Link from "next/link";

const EVENTBRITE = "https://www.eventbrite.com/o/121470153411?aff=ebdsshios";

const categories = [
  {
    name: "Outdoor Experiences",
    text: "Hikes, nature walks, and scenic adventures across Southern California.",
  },
  {
    name: "Networking Evenings",
    text: "Connect, collaborate, and grow alongside people building something of their own.",
  },
  {
    name: "Social Gatherings",
    text: "Meet new people and build the kind of relationships that outlast the evening.",
  },
  {
    name: "Dinners & Community",
    text: "Good food, long conversations, and connections that carry forward.",
  },
];

const series = [
  "Social Hours",
  "Coffee & Conversations",
  "Seven Bridges",
  "Afternoon Tea",
  "Volunteer Days",
];

export const metadata = {
  title: "Events | Jeevan Productions",
  description:
    "Thoughtfully curated experiences across San Diego — outdoor adventures, networking evenings, social gatherings, and community dinners.",
};

export default function Events() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <Image
          src="/images/event-social-hour.jpg"
          alt="A Jeevan Productions gathering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cypress/55" />
        <div className="relative z-10 px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">UPCOMING EVENTS</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Discover upcoming experiences.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-lg leading-relaxed text-cypress/80">
          Join thoughtfully curated experiences across San Diego — from outdoor
          adventures and social gatherings to networking evenings and community
          dinners.
        </p>
        <a
          href={EVENTBRITE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-cypress px-10 py-4 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta"
        >
          VIEW ALL EVENTS ON EVENTBRITE
        </a>
        <p className="mt-4 text-xs text-cypress/50">
          New experiences added regularly.
        </p>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-px bg-cypress/15 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="bg-bone p-10">
              <h2 className="font-display text-2xl">{category.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cypress/70">
                {category.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recurring series */}
      <section className="bg-sage/25 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">
            OUR SERIES
          </p>
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            Gatherings we host again and again.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {series.map((name) => (
              <span
                key={name}
                className="border border-cypress/30 px-6 py-3 text-xs tracking-[0.15em]"
              >
                {name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl leading-snug">
          Planning an event of your own?
        </h2>
        <p className="mt-4 leading-relaxed text-cypress/70">
          From logistics and design to on-site execution and event marketing, we
          produce experiences people remember.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
          >
            EVENT SERVICES
          </Link>
          <Link
            href="/contact"
            className="bg-cypress px-8 py-3 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta"
          >
            LET'S TALK
          </Link>
        </div>
      </section>
    </>
  );
}
