import { Check, Mail } from "lucide-react";
import { useState } from "react";

export function NewsletterCard({
  title = "Get the Sunday Love Letter",
  description = "One thoughtful essay on modern relationships, communication, and emotional clarity every Sunday morning. No spam, unsubscribe anytime.",
}: {
  title?: string;
  description?: string;
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <div className="my-12 overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-card via-card to-primary/5 p-6 shadow-sm sm:p-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {subscribed ? (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <Check className="h-4 w-4" />
            <span>Thank you for subscribing! Check your inbox this Sunday.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              aria-label="Email address"
              className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
