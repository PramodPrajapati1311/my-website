import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Media",
    image: "/images/media.jpg",
    text: "We produce high-quality photography and videography that highlight your brand's story, services, and personality - built to captivate your audience and create a lasting visual impression online and offline.",
    items: [
      "Photography",
      "Videography",
      "Content Creation",
      "Brand Storytelling",
    ],
  },
  {
    name: "Marketing",
    image: "/images/marketing.jpg",
    text: "Our marketing solutions cover social media, ads, email, direct mail, graphic design, event marketing, and consulting - all crafted to boost visibility, drive engagement, and deliver results that help brands grow with confidence.",
    items: [
      "Social Media Management",
      "Advertising & Email",
      "Graphic & Website Design",
      "Marketing Strategy & Consulting",
    ],
  },
  {
    name: "Events",
    image: "/images/events.jpg",
    text: "From planning to production, we deliver seamless event experiences covering logistics, coordination, design, execution, and event marketing - creating meaningful connections and memorable moments for every occasion.",
    items: [
      "Logistics & Coordination",
      "Event Design",
      "On-site Execution",
      "Event Marketing",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">
          WHAT WE DO
        </p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Built for brands that think different.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {services.map((service, i) => (
          <div
            key={service.name}
            className="mb-24 grid items-center gap-12 md:grid-cols-2"
          >
            <div
              className={
                i % 2 === 1
                  ? "relative h-96 overflow-hidden md:order-2"
                  : "relative h-96 overflow-hidden"
              }
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-4xl">{service.name}</h2>
              <p className="mt-4 leading-relaxed text-cypress/70">
                {service.text}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-cypress/80">
                {service.items.map((item) => (
                  <li key={item} className="border-b border-cypress/10 pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="text-center">
          <Link
            href="/contact"
            className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </>
  );
}
