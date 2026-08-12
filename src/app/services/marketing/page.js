import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Marketing | Jeevan Productions",
  description:
    "Social media, advertising, design, websites, and strategy built to help brands grow.",
};

const offerings = [
  {
    name: "Social Media Management",
    text: "Planning, producing, and publishing content that sounds like you rather than everyone else.",
  },
  {
    name: "Advertising & Email",
    text: "Paid campaigns, email, and direct mail aimed at the people most likely to care.",
  },
  {
    name: "Graphic & Website Design",
    text: "Identity systems, collateral, and websites that hold up next to your best work.",
  },
  {
    name: "Strategy & Consulting",
    text: "Positioning, messaging, and the plan that connects the pieces together.",
  },
];

export default function Marketing() {
  return (
    <>
      <section className="relative flex h-[55vh] items-center justify-center">
        <Image src="/images/marketing.jpg" alt="Marketing strategy" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-cypress/55" />
        <div className="relative z-10 max-w-3xl px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">BRANDS</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Marketing</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg leading-relaxed text-cypress/80">
          Our marketing solutions cover social media, ads, email, direct mail,
          graphic design, event marketing, and consulting — all crafted to boost
          visibility, drive engagement, and deliver results that help brands grow
          with confidence.
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
        <h2 className="font-display text-3xl">Let&apos;s build the plan.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services" className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone">
            ALL SERVICES
          </Link>
          <Link href="/contact" className="bg-cypress px-8 py-3 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
