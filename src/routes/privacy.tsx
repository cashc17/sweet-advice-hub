import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/config/site";

const title = "Privacy Policy — Heartlines";
const description =
  "How Heartlines handles data, cookies, analytics and advertising, including Google AdSense and third-party vendor cookies.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Privacy policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 14 August 2026</p>

      <p className="mt-6 leading-[1.8] text-foreground/85">
        This policy explains what information {SITE.name} collects when you visit this website, why
        it is collected, and the choices you have.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Information we collect</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        We do not ask you to create an account and we do not sell personal information. If you
        email us, we hold your message and address only for as long as it takes to reply and keep a
        record of any correction. Our hosting provider processes standard server logs, which may
        include your IP address, browser type and the pages you requested.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Cookies and advertising</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        This site is supported by advertising. Third-party vendors, including Google, use cookies
        to serve ads based on your prior visits to this and other websites. Google&apos;s use of
        advertising cookies enables it and its partners to serve ads to you based on your visit to
        this site and/or other sites on the internet.
      </p>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        You may opt out of personalised advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-primary underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Ads Settings
        </a>
        , or opt out of third-party vendor cookies at{" "}
        <a
          href="https://www.aboutads.info/choices/"
          className="text-primary underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          aboutads.info
        </a>
        . Where required by law, we ask for consent before setting non-essential cookies.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Analytics</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        We may use privacy-respecting analytics to understand which articles are read, in aggregate
        only. We do not attempt to identify individual readers.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Your rights</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        Depending on where you live, you may have the right to access, correct or delete personal
        information we hold about you, or to object to its processing. Email{" "}
        <a href={`mailto:${SITE.email}`} className="text-primary underline">
          {SITE.email}
        </a>{" "}
        and we will respond within a reasonable period.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Children</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        This site is intended for adults and is not directed at children under 13.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold">Changes</h2>
      <p className="mt-4 leading-[1.8] text-foreground/85">
        We will update this page whenever our practices change, and we will change the date at the
        top when we do.
      </p>
    </div>
  );
}