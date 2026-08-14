import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/config/site";

const title = `Terms of Use — ${SITE.name}`;
const description =
  `The terms that apply when you read or share ${SITE.name} articles, including copyright, acceptable use and liability.`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Terms of use</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 14 August 2026</p>

      <p className="mt-6 leading-[1.8] text-foreground/85">
        By using {SITE.name} you agree to these terms. If you do not agree with them, please do not
        use the site.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Content and copyright</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        All articles, images and design elements on this site belong to {SITE.name} unless stated
        otherwise. You may quote short extracts with a visible link back to the original article.
        Republishing whole articles, or using our content to train commercial models, requires
        written permission.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Acceptable use</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Do not attempt to disrupt the site, scrape it at a volume that degrades service for other
        readers, or misrepresent our content as your own or as professional advice you are
        qualified to give.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">No professional relationship</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Reading this site, or emailing us, does not create a therapeutic, medical, or legal
        relationship. See our disclaimer for details.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Liability</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        The site is provided as-is. To the extent permitted by law, we are not liable for any loss
        arising from decisions you make based on what you read here.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">External links</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        We link to other websites where it helps you verify something. We do not control those
        sites and are not responsible for their content or policies.
      </p>
    </div>
  );
}