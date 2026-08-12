import { site } from "@/lib/site";

export default function InstagramFeed() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <p className="mb-3 text-xs tracking-[0.3em] text-terracotta">
        FOLLOW ALONG
      </p>
      <a
        href={site.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display text-3xl transition-colors hover:text-terracotta"
      >
        @jeevan_productions
      </a>

      <div className="mt-10">
        {site.instagramEmbedUrl ? (
          <iframe
            src={site.instagramEmbedUrl}
            className="h-[400px] w-full border-0"
            scrolling="no"
            title="Instagram feed"
          />
        ) : (
          <div className="border border-dashed border-cypress/30 p-16 text-sm text-cypress/50">
            Instagram feed goes here — add instagramEmbedUrl in src/lib/site.js
          </div>
        )}
      </div>
    </section>
  );
}
