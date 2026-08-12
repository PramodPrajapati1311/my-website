import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Event Production | Jeevan Productions",
  description:
    "Logistics, coordination, design, execution, and event marketing for events people remember.",
};

const offerings = [
  {
    name: "Logistics & Coordination",
    text: "Vendors, timelines, run of show, and the hundred details nobody should have to think about.",
  },
  {
    name: "Event Design",
    text: "Look, feel, and flow — so the room says the right thing before anyone speaks.",
  },
  {
    name: "On-site Execution",
    text: "A team on the ground making sure the plan survives contact with the day.",
  },
  {
    name: "Event Marketing",
    text: "Filling the room, then making the content that outlives the evening.",
  },
];

export default function EventServices() {
  return (
    <>
      <section className="relative flex h-[55vh] items-center justify-center">
        <Image src="/images/events.jpg" alt="Event production" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-cypress/55" />
        <div className="relative z-10 max-w-3xl px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">EXPERIENCES</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Event Production</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg leading-relaxed text-cypress/80">
          From planning to production, we deliver seamless event experiences
          covering logistics, coordination, design, execution, and event
          marketing — creating meaningful connections and memorable moments for
          every occasion.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-px bg-cypress/15 md:grid-cols-2">
          {offerings.map((item) => (
            <div key={item.name} className="bg-bone p-10">
              <h2 className="font-display text-2xl">{item.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cypress/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage/25 px-6 py-20 text-center">
        <h2 className="font-display text-3xl">Planning something?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/events" className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone">
            OUR OWN EVENTS
          </Link>
          <Link href="/contact" className="bg-cypress px-8 py-3 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta">
            LET&apos;S TALK
          </Link>
        </div>
      </section>
    </>
  );
}
