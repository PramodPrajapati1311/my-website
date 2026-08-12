import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Media | Jeevan Productions",
  description:
    "Photography, videography, and content production that captures your brand's story.",
};

const offerings = [
  {
    name: "Photography",
    text: "Brand, event, headshot, and lifestyle photography that looks like the real thing because it is.",
  },
  {
    name: "Videography",
    text: "Promotional films, interviews, event recaps, and social cutdowns produced end to end.",
  },
  {
    name: "Content Creation",
    text: "Ongoing photo and video libraries so your channels never run dry.",
  },
  {
    name: "Brand Storytelling",
    text: "Finding the thread that runs through your work, then making it visible.",
  },
];

export default function Media() {
  return (
    <>
      <section className="relative flex h-[55vh] items-center justify-center">
        <Image src="/images/media.jpg" alt="Media production" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-cypress/55" />
        <div className="relative z-10 max-w-3xl px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">STORIES</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Media</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg leading-relaxed text-cypress/80">
          We produce high-quality photography and videography that highlight your
          brand&apos;s story, services, and personality — built to captivate your
          audience and create a lasting visual impression online and offline.
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
        <h2 className="font-display text-3xl">See the work.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/portfolio" className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone">
            VIEW PORTFOLIO
          </Link>
          <Link href="/contact" className="bg-cypress px-8 py-3 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta">
            START A PROJECT
          </Link>
        </div>
      </section>
    </>
  );
}
