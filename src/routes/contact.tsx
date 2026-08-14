import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SITE } from "@/config/site";

const title = `Contact ${SITE.name} — Ask a Relationship Question`;
const description =
  `Get in touch with the ${SITE.name} editors: reader questions, corrections, permissions and advertising enquiries.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Contact us</h1>
      <p className="mt-6 leading-[1.8] text-foreground/85">
        We read everything that arrives, and we answer as much of it as we can. Reader questions
        occasionally become articles — always anonymised, and never without permission.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
          <a href={`mailto:${SITE.email}`} className="text-primary underline">
            {SITE.email}
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Typical reply time is three to five working days. Please include the article title if you
          are writing about something specific.
        </p>
      </div>

      <h2 className="mt-10 font-display text-2xl font-semibold">What to write about</h2>
      <ul className="mt-4 space-y-2 pl-5">
        <li className="list-disc leading-[1.8] text-foreground/85">
          A relationship question you would like covered on the blog.
        </li>
        <li className="list-disc leading-[1.8] text-foreground/85">
          A correction — we will fix and note errors quickly.
        </li>
        <li className="list-disc leading-[1.8] text-foreground/85">
          Advertising, syndication, or republishing enquiries.
        </li>
      </ul>

      <p className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
        We cannot provide crisis support or individual counselling by email. If you are in danger
        or in crisis, please contact your local emergency number or a domestic abuse or mental
        health support service in your country.
      </p>
    </div>
  );
}