import Image from "next/image";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata = {
  title: "Blog | Jeevan Productions",
  description:
    "Notes on media, marketing, and building brands that people remember.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="mb-6 text-xs tracking-[0.3em] text-terracotta">JOURNAL</p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Notes on the work.
        </h1>
        <p className="mt-6 leading-relaxed text-cypress/70">
          Thoughts on media, marketing, and building brands people remember.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        {posts.length === 0 ? (
          <div className="border border-dashed border-cypress/30 p-16 text-center text-sm text-cypress/50">
            No posts yet. Add a .md file to src/content/blog and it appears
            here.
          </div>
        ) : (
          <div className="grid gap-12 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  {post.image && (
                    <div className="relative mb-6 h-64 overflow-hidden bg-sage/20">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="text-xs tracking-[0.2em] text-terracotta">
                    {formatDate(post.date).toUpperCase()}
                  </p>
                  <h2 className="mt-2 font-display text-2xl leading-snug transition-colors group-hover:text-terracotta">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cypress/70">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
