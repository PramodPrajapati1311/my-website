import Image from "next/image";
import { site } from "@/lib/site";

export const metadata = {
  title: "Careers | Jeevan Productions",
  description:
    "Exceptional work is created by exceptional people. Join the Jeevan Productions team.",
};

const values = [
  {
    title: "Craft",
    text: "We care how the work is made, not only how it looks when it ships.",
  },
  {
    title: "Collaboration",
    text: "Photographers, strategists, and producers in the same room, solving the same problem.",
  },
  {
    title: "Community",
    text: "The work should leave the places and people it touches better than it found them.",
  },
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[55vh] items-center justify-center">
        <Image
          src="/images/about.jpg"
          alt="The Jeevan Productions team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cypress/55" />
        <div className="relative z-10 max-w-3xl px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">CAREERS</p>
          <h1 className="font-display text-3xl leading-tight md:text-5xl">
            Exceptional work is created by exceptional people.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-24 text-center leading-relaxed text-cypress/80">
        <p>
          Jeevan Productions brings together creative professionals across
          media, marketing, and events to produce thoughtful work, meaningful
          experiences, and lasting relationships.
        </p>
        <p>
          If you&apos;re passionate about your craft and enjoy collaborating with
          like-minded people, we&apos;d love to hear from you.
        </p>
      </section>

      {/* Values */}
      <section className="bg-sage/25 px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <h2 className="font-display text-2xl">{value.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cypress/70">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] text-terracotta">
            APPLY
          </p>
          <h2 className="font-display text-3xl leading-snug">
            Tell us about your work.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cypress/70">
            Send us your resume and a link to your portfolio. We read every
            application.
          </p>
        </div>

        {site.careersFormId ? (
          <iframe
            src={`https://tally.so/embed/${site.careersFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            width="100%"
            height="700"
            frameBorder="0"
            title="Careers application form"
          />
        ) : (
          <div className="border border-dashed border-cypress/30 p-16 text-center text-sm text-cypress/50">
            Application form goes here — add careersFormId in src/lib/site.js
          </div>
        )}

        <p className="mt-10 text-center text-xs text-cypress/50">
          Prefer email? Reach us at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      </section>
    </>
  );
}
