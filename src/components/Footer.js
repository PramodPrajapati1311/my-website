import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cypress text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg tracking-[0.2em]">
            JEEVAN <span className="text-gold">PRODUCTIONS</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/70">
            Creative media, storytelling, and strategy built for brands that
            want more.
          </p>
          <div className="mt-6 flex gap-5 text-sm text-bone/70">
            <a
              href="https://www.instagram.com/jeevan_productions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61560525371598"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/jeevan-productions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-4 tracking-widest text-gold">EXPLORE</p>
          <div className="flex flex-col gap-2 text-bone/70">
            <Link href="/services" className="hover:text-bone">Services</Link>
            <Link href="/portfolio" className="hover:text-bone">Portfolio</Link>
            <Link href="/impact" className="hover:text-bone">Impact</Link>
            <Link href="/blog" className="hover:text-bone">Blog</Link>
            <Link href="/careers" className="hover:text-bone">Careers</Link>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-4 tracking-widest text-gold">CONNECT</p>
          <div className="flex flex-col gap-2 text-bone/70">
            <a href="mailto:Team@JeevanProductions.com" className="hover:text-bone">
              Team@JeevanProductions.com
            </a>
            <a href="tel:+13103630288" className="hover:text-bone">
              SD / LA (310) 363-0288
            </a>
            <a href="tel:+18169746089" className="hover:text-bone">
              KC (816) 974-6089
            </a>
            <span className="pt-2">Mon-Fri, 8AM-5PM</span>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10 px-6 py-6 text-center text-xs text-bone/50">
        &copy; {new Date().getFullYear()} Jeevan Productions LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
