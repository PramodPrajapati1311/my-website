import fs from "fs";
import path from "path";
import Image from "next/image";

// Drop partner logos into /public/images/partners and they show up here.
// PNG with transparent background works best. SVG is even better.
function getLogos() {
  const dir = path.join(process.cwd(), "public", "images", "partners");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .sort();
}

export default function Partners() {
  const logos = getLogos();

  if (logos.length === 0) return null;

  return (
    <section className="border-t border-cypress/10 px-6 py-20">
      <p className="mb-12 text-center text-xs tracking-[0.3em] text-terracotta">
        PARTNERS WHO TRUST US
      </p>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-14 gap-y-10">
        {logos.map((logo) => (
          <div key={logo} className="relative h-14 w-32">
            <Image
              src={`/images/partners/${logo}`}
              alt="Partner logo"
              fill
              className="object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
