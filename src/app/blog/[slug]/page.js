import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Jeevan Productions`,
    description: post.excerpt,
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const html = marked.parse(post.content);

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-[0.2em] text-terracotta">
        {formatDate(post.date).toUpperCase()}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
        {post.title}
      </h1>

      {post.image && (
        <div className="relative my-12 h-96 overflow-hidden bg-sage/20">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div
        className="article mt-12"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-16 border-t border-cypress/10 pt-8">
        <Link
          href="/blog"
          className="text-xs tracking-[0.2em] text-terracotta hover:underline"
        >
          &larr; BACK TO ALL POSTS
        </Link>
      </div>
    </article>
  );
}
