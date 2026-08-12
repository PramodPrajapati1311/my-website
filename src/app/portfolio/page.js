import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Jeevan Productions",
  description:
    "Photography, videography, and event production work from Jeevan Productions.",
};

// Reads every image sitting in /public/images/portfolio at build time.
// Drop a photo in that folder and it appears here. No code change needed.
function getPhotos() {
  const dir = path.join(process.cwd(), "public", "images", "portfolio");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort();
}

export default function Portfolio() {
  const photos = getPhotos();

  return (
    <>
      {/* Heading */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">
          OUR WORK
        </p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Connect. Engage. Inspire.
        </h1>
        <p className="mt-6 leading-relaxed text-cypress/70">
          Real people, real moments. A look at the brands, gatherings, and
          communities we have had the privilege of documenting.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        {photos.length === 0 ? (
          <div className="border border-dashed border-cypress/30 p-16 text-center text-sm text-cypress/50">
            No photos yet. Add images to public/images/portfolio and they will
            appear here automatically.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
              <div
                key={photo}
                className="group relative aspect-square overflow-hidden bg-sage/20"
              >
                <Image
                  src={`/images/portfolio/${photo}`}
                  alt="Jeevan Productions work"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-sage/25 px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-snug md:text-4xl">
          Every brand has a story worth telling.
        </h2>
        <p className="mt-4 text-sm text-cypress/70">
          Let us tell yours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="border border-cypress px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:bg-cypress hover:text-bone"
          >
            OUR SERVICES
          </Link>
          <Link
            href="/contact"
            className="bg-cypress px-8 py-3 text-xs tracking-[0.2em] text-bone transition-colors hover:bg-terracotta"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </>
  );
}
