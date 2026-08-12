// ---------------------------------------------------------------------------
// Paste your Tally form ID below once you have created the form.
// From a Tally share URL like https://tally.so/r/wAbC12 the ID is "wAbC12".
// Leave it as is and the page shows a placeholder box instead.
// ---------------------------------------------------------------------------
const TALLY_FORM_ID = "";

const details = [
  { label: "Location", lines: ["San Diego, CA", "Serving San Diego, Los Angeles & Kansas City"] },
  { label: "Email", lines: ["Team@JeevanProductions.com"], href: "mailto:Team@JeevanProductions.com" },
  { label: "Phone", lines: ["SD / LA (310) 363-0288", "KC (816) 974-6089"] },
  { label: "Office Hours", lines: ["Monday - Friday", "8:00 AM - 5:00 PM"] },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/jeevan_productions/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61560525371598" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/jeevan-productions/" },
];

export const metadata = {
  title: "Contact | Jeevan Productions",
  description:
    "Let's connect. Reach the Jeevan Productions team in San Diego, Los Angeles, and Kansas City.",
};

export default function Contact() {
  return (
    <>
      {/* Heading */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">
          GET IN TOUCH
        </p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Let&apos;s build something memorable.
        </h1>
        <p className="mt-6 leading-relaxed text-cypress/70">
          Tell us about your brand, your event, or the story you want told. We
          read everything that comes through and reply within two business days.
        </p>
      </section>

      {/* Details + form */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Left column - details */}
          <div className="space-y-10 md:col-span-2">
            {details.map((item) => (
              <div key={item.label}>
                <p className="mb-3 text-xs tracking-[0.25em] text-terracotta">
                  {item.label.toUpperCase()}
                </p>
                {item.lines.map((line) =>
                  item.href ? (
                    <a
                      key={line}
                      href={item.href}
                      className="block text-sm leading-relaxed text-cypress/80 underline-offset-4 hover:underline"
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={line}
                      className="text-sm leading-relaxed text-cypress/80"
                    >
                      {line}
                    </p>
                  )
                )}
              </div>
            ))}

            <div>
              <p className="mb-3 text-xs tracking-[0.25em] text-terracotta">
                FOLLOW
              </p>
              <div className="flex flex-col gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cypress/80 underline-offset-4 hover:underline"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div className="md:col-span-3">
            {TALLY_FORM_ID ? (
              <iframe
                src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                width="100%"
                height="600"
                frameBorder="0"
                title="Contact form"
              />
            ) : (
              <div className="flex h-full min-h-96 items-center justify-center border border-dashed border-cypress/30 p-12 text-center text-sm text-cypress/50">
                Contact form goes here — add your Tally form ID at the top of
                this file.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-sage/25 px-6 py-20 text-center">
        <h2 className="font-display text-3xl leading-snug">
          Prefer to talk it through?
        </h2>
        <p className="mt-4 text-sm text-cypress/70">
          Book an in-person consultation. Call{" "}
          <a href="tel:+13103630288" className="underline">
            (310) 363-0288
          </a>{" "}
          to schedule your appointment.
        </p>
      </section>
    </>
  );
}
