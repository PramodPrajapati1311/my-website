import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Impact | Jeevan Productions",
  description:
    "The people, organizations, and communities we are grateful to work alongside in San Diego.",
};

// ---------------------------------------------------------------------------
// STORIES
// Replace these with real work you have actually done. Each needs an image in
// /public/images/impact/. Delete any you are not ready to publish — an empty
// list shows a placeholder rather than breaking the page.
// ---------------------------------------------------------------------------
const stories = [
  // {
  //   title: "Example: A commercial for a local nonprofit",
  //   image: "/images/impact/example.jpg",
  //   text: "Two or three sentences telling the story. Who they are, what they needed, what happened because of it. Not what you spent.",
  // },
];

// ---------------------------------------------------------------------------
// NUMBERS
// Only turn these on once you can back them up. Leave the list empty until
// then and the section hides itself.
// ---------------------------------------------------------------------------
const numbers = [
  // { value: "12", label: "Businesses supported" },
  // { value: "30+", label: "Events hosted" },
  // { value: "1,400", label: "Attendees welcomed" },
];

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <Image
          src="/images/impact-community.jpg"
          alt="A community gathering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cypress/60" />
        <div className="relative z-10 max-w-3xl px-6 text-center text-bone">
          <p className="mb-6 text-xs tracking-[0.4em]">OUR IMPACT</p>
          <h1 className="font-display text-3xl leading-tight md:text-5xl">
            Business should leave a community better than it found it.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-2xl leading-snug md:text-3xl">
          This page isn&apos;t about us.
        </p>
        <p className="mt-6 leading-relaxed text-cypress/70">
          It&apos;s about the incredible people, organizations, and communities
          we&apos;re grateful to meet along the way. We&apos;re simply honored to
          be a small part of their story.
        </p>
      </section>

      {/* Stories */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="mb-12 text-center text-xs tracking-[0.3em] text-terracotta">
          COMMUNITY STORIES
        </p>

        {stories.length === 0 ? (
          <div className="border border-dashed border-cypress/30 p-16 text-center text-sm text-cypress/50">
            Stories go here. Add them to the `stories` list at the top of this
            file.
          </div>
        ) : (
          <div className="grid gap-12 md:grid-cols-2">
            {stories.map((story) => (
              <article key={story.title}>
                <div className="relative mb-6 h-72 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="font-display text-2xl leading-snug">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cypress/70">
                  {story.text}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Numbers - hides itself while the list is empty */}
      {numbers.length > 0 && (
        <section className="bg-cypress px-6 py-20 text-bone">
          <div className="mx-auto grid max-w-4xl gap-10 text-center sm:grid-cols-3">
            {numbers.map((item) => (
              <div key={item.label}>
                <p className="font-display text-5xl text-gold">{item.value}</p>
                <p className="mt-3 text-xs tracking-[0.2em] text-bone/70">
                  {item.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Philosophy */}
      <section className="bg-sage/25 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">
            WHY IT MATTERS
          </p>
          <h2 className="font-display text-3xl leading-snug">
            Creativity should create opportunity, not just marketing.
          </h2>
          <p className="mt-6 leading-relaxed text-cypress/70">
            Every year, Jeevan Productions donates creative services to
            organizations making a positive impact in our community — because
            the work we do should matter beyond the invoice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl leading-snug">
          Know someone doing good work?
        </h2>
        <p className="mt-4 leading-relaxed text-cypress/70">
          We are always looking for nonprofits, small businesses, and community
          leaders whose story deserves to be told. Tell us about them.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-cypress px-8 py-3 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta"
          >
            NOMINATE SOMEONE
          </Link>
          <Link
            href="/events"
            className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
          >
            JOIN AN EVENT
          </Link>
        </div>
      </section>
    </>
  );
}
