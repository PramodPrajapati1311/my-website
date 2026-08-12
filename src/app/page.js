import Image from "next/image";
import Link from "next/link";
import Partners from "@/components/Partners";
import InstagramFeed from "@/components/InstagramFeed";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Stories",
    service: "Media",
    href: "/services/media",
    image: "/images/media.jpg",
    text: "Photography, video, and content that captures what actually happened — not a staged version of it.",
  },
  {
    title: "Brands",
    service: "Marketing",
    href: "/services/marketing",
    image: "/images/marketing.jpg",
    text: "Strategy, websites, and social media built to sound like you rather than like everyone else.",
  },
  {
    title: "Experiences",
    service: "Events",
    href: "/services/events",
    image: "/images/events.jpg",
    text: "Social Hours, collaborations, and activations where the room feels alive and people stay late.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[85vh] items-center justify-center">
        <Image src="/images/hero.jpg" alt={site.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-cypress/50" />
        <div className="relative z-10 px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">MEDIA · MARKETING · EVENTS</p>
          <h1 className="font-display text-5xl leading-tight md:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 text-sm tracking-[0.2em] text-bone/80">
            SERVING {site.cities.toUpperCase()}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block border border-bone px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-bone hover:text-cypress"
          >
            LET&apos;S BUILD SOMETHING MEMORABLE
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">WHO WE ARE</p>
        <h2 className="font-display text-3xl leading-snug md:text-4xl">
          Built for brands that think different.
        </h2>
        <p className="mt-6 leading-relaxed text-cypress/70">
          A creative house for businesses, organizations, and communities that
          value meaningful experiences and exceptional presentation.
        </p>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href} className="group block">
              <div className="relative mb-6 h-72 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-[0.3em] text-terracotta">
                {pillar.service.toUpperCase()}
              </p>
              <h3 className="mt-2 font-display text-3xl transition-colors group-hover:text-terracotta">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cypress/70">
                {pillar.text}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
          >
            EXPLORE OUR SERVICES
          </Link>
        </div>
      </section>

      {/* Events strip */}
      <section className="bg-cypress px-6 py-24 text-center text-bone">
        <p className="mb-6 text-xs tracking-[0.3em] text-gold">UPCOMING EVENTS</p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-snug md:text-4xl">
          Discover upcoming experiences.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-bone/70">
          Outdoor adventures, networking evenings, social gatherings, and
          community dinners across San Diego.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/events"
            className="border border-bone px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-bone hover:text-cypress"
          >
            SEE ALL EVENTS
          </Link>
          <a
            href={site.eventbrite}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold px-8 py-3 text-xs tracking-[0.2em] text-cypress transition-opacity hover:opacity-80"
          >
            BOOK ON EVENTBRITE
          </a>
        </div>
      </section>

      {/* Impact strip */}
      <section className="bg-sage/25 px-6 py-24 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">OUR IMPACT</p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-snug md:text-4xl">
          Business should leave a community better than it found it.
        </h2>
        <Link
          href="/impact"
          className="mt-10 inline-block border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
        >
          SEE OUR WORK IN THE COMMUNITY
        </Link>
      </section>

      <Partners />
      <InstagramFeed />
    </>
  );
}
