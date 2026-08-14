import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/config/site";

const title = "About Heartlines — Who Writes This Love Advice";
const description =
  "Heartlines is a small editorial blog about love and relationships. Here is who writes it, how articles are researched, and what we will never do.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">About Heartlines</h1>
      <p className="mt-6 leading-[1.8] text-foreground/85">
        {SITE.name} is an independent blog about love: the beginning of it, the maintenance of it,
        and occasionally the end of it. Everything here is written for people in ordinary
        relationships who want a calm second opinion rather than a slogan.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">How we write</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Articles are written and edited by {SITE.author}, a small team of writers and editors with
        backgrounds in journalism and long-form advice writing. We draw on widely accepted
        relationship guidance, our own reader correspondence, and plain common sense. Where an idea
        is contested or the evidence behind it is thin, we say so in the article rather than
        pretending otherwise.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">What we don&apos;t do</h2>
      <ul className="mt-4 space-y-2 pl-5">
        <li className="list-disc leading-[1.8] text-foreground/85">
          We do not invent statistics, studies, testimonials or credentials.
        </li>
        <li className="list-disc leading-[1.8] text-foreground/85">
          We do not diagnose, treat, or offer therapy. We are not clinicians.
        </li>
        <li className="list-disc leading-[1.8] text-foreground/85">
          We do not publish advice that keeps someone in an unsafe situation.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl font-semibold">How the site is funded</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Heartlines is free to read and supported by advertising. Ads are clearly labelled and never
        influence what we write or which topics we cover. Read more in our{" "}
        <Link to="/privacy" className="text-primary underline">
          privacy policy
        </Link>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Get in touch</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Questions, corrections, or a situation you would like us to write about? Our{" "}
        <Link to="/contact" className="text-primary underline">
          contact page
        </Link>{" "}
        has the details.
      </p>
    </div>
  );
}