import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/config/site";

const title = "Disclaimer — Heartlines Love Advice";
const description =
  "Heartlines publishes general relationship advice for information only. It is not therapy, medical advice, or crisis support.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/disclaimer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Disclaimer</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 14 August 2026</p>

      <p className="mt-6 leading-[1.8] text-foreground/85">
        {SITE.name} publishes general advice about love and relationships for information and
        reflection. It is written for a broad audience and cannot account for your particular
        circumstances.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Not professional advice</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Nothing on this site is therapy, counselling, medical advice, or legal advice, and the
        editors are not acting as your clinician. For anything serious — persistent depression or
        anxiety, addiction, abuse, family law, custody — please speak to a qualified professional
        in your country.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">If you are unsafe</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        If you are experiencing abuse, or you are thinking about harming yourself, do not rely on
        an article. Contact your local emergency number or a dedicated support service immediately.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Advertising</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Ads on this site are supplied by third parties and are clearly labelled. Their presence is
        not an endorsement of any advertiser or product. See our{" "}
        <Link to="/privacy" className="text-primary underline">
          privacy policy
        </Link>{" "}
        for how advertising cookies work.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Accuracy</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        We try hard to be accurate and we correct mistakes when they are pointed out. If you spot
        one, please{" "}
        <Link to="/contact" className="text-primary underline">
          tell us
        </Link>
        .
      </p>
    </div>
  );
}