import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Stories",
    service: "Media",
    image: "/images/media.jpg",
    text: "Photography, video, and content that捕 captures what actually happened — not a staged version of it.",
  },
  {
    title: "Brands",
    service: "Marketing",
    image: "/images/marketing.jpg",
    text: "Strategy, websites, and social media built to sound like you rather than like everyone else.",
  },
  {
    title: "Experiences",
    service: "Events",
    image: "/images/events.jpg",
    text: "Social Hours, collaborations, and activations where the room feels alive and people stay late.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[85vh] items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Jeevan Productions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cypress/50" />
        <div className="relative z-10 px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">MEDIA · MARKETING · EVENTS</p>
          <h1 className="font-display text-5xl leading-tight md:text-7xl">
            Creative experiences.
            <br />
            Meaningful connections.
          </h1>
          <Link
            href="/contact"
            className="mt-10 inline-block border border-bone px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-bone hover:text-cypress"
          >
            LET'S BUILD SOMETHING MEMORABLE
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">WHO WE ARE</p>
        <h2 className="font-display text-3xl leading-snug md:text-4xl">
          A San Diego creative house for businesses, organizations, and communities
          that value meaningful experiences.
        </h2>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <div className="relative mb-6 h-72 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs tracking-[0.3em] text-terracotta">
                {pillar.service.toUpperCase()}
              </p>
              <h3 className="mt-2 font-display text-3xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cypress/70">
                {pillar.text}
              </p>
            </div>
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

      {/* Instagram placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-3 text-xs tracking-[0.3em] text-terracotta">FOLLOW ALONG</p>
        <h2 className="font-display text-3xl">@jeevanproductions</h2>
        <div className="mt-10 border border-dashed border-cypress/30 p-16 text-sm text-cypress/50">
          Instagram feed widget goes here
        </div>
      </section>
    </>
  );
}