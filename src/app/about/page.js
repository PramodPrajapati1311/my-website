import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">OUR STORY</p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Every brand has a story worth telling.
        </h1>
      </section>

      <section className="mx-auto mb-20 h-[55vh] max-w-6xl px-6">
        <div className="relative h-full overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="The Jeevan Productions team"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-20 text-base leading-relaxed text-cypress/80">
        <p>
          Jeevan Productions was built on the belief that every brand has a
          story worth telling with clarity, creativity, and purpose. Founded by
          strategist Jeevan Dhaker, the agency brings together over five decades
          of collective experience in strategy, storytelling, and execution.
        </p>
        <p>
          We do not just market; we create meaning. Every campaign, design, and
          event begins with understanding who you are, what you stand for, and
          how you want to be remembered. Our process transforms intention into
          impact through branding that defines, marketing that connects, content
          that inspires, and events that move people.
        </p>
        <p>
          From visuals to voices, from on-site teams to strategic direction,
          everything we do follows one idea: make it matter. At Jeevan
          Productions, your brand is not just promoted. It is elevated,
          experienced, and remembered.
        </p>
      </section>

      <section className="bg-sage/25 px-6 py-20 text-center">
        <h2 className="font-display text-3xl">
          Book your in-person consultation.
        </h2>
        <p className="mt-4 text-sm text-cypress/70">
          Call{" "}
          <a href="tel:+13103630288" className="underline">
            (310) 363-0288
          </a>{" "}
          to schedule your appointment.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
        >
          GET IN TOUCH
        </Link>
      </section>
    </>
  );
}
