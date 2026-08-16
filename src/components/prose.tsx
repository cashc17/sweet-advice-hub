import type { Block } from "@/content/types";
import {
  AlertCircle,
  Bookmark,
  Check,
  Flame,
  Heart,
  HelpCircle,
  Info,
  Lightbulb,
  MessageCircle,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  TriangleAlert,
  X,
} from "lucide-react";
import { ClickableImage } from "./image-lightbox";
import { FaqSection } from "./faq-section";
import { KeyTakeaways } from "./key-takeaways";

const ICON_MAP: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Lightbulb,
  Info,
  TriangleAlert,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  Flame,
  Bookmark,
  Star,
  MessageCircle,
  Check,
  HelpCircle,
};

function renderCustomIcon(iconName?: string, defaultFallback = Lightbulb) {
  if (!iconName) {
    const Fallback = defaultFallback;
    return <Fallback className="h-5 w-5" aria-hidden="true" />;
  }

  // Check if icon is an emoji (contains non-ascii or emoji characters)
  if (/\p{Extended_Pictographic}/u.test(iconName)) {
    return <span className="text-lg leading-none" aria-hidden="true">{iconName}</span>;
  }

  const IconComponent = ICON_MAP[iconName] || defaultFallback;
  return <IconComponent className="h-5 w-5" aria-hidden="true" />;
}

/** Renders article body blocks with responsive typography and dynamic text scaling */
export function Prose({
  blocks,
  adAfter,
  ad,
}: {
  blocks: Block[];
  adAfter?: number;
  ad?: React.ReactNode;
}) {
  return (
    <div id="article-prose-root" className="article-prose mt-8 space-y-6">
      {blocks.map((block, i) => (
        <div key={i}>
          <BlockView block={block} />
          {adAfter === i && ad ? ad : null}
        </div>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2": {
      const id =
        block.id ||
        block.text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
      return (
        <h2
          id={id}
          className="scroll-mt-24 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl pt-6 first:pt-0"
        >
          <a href={`#${id}`} className="group inline-flex items-center gap-2 hover:text-primary">
            <span>{block.text}</span>
            <span
              className="text-sm font-normal text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            >
              #
            </span>
          </a>
        </h2>
      );
    }

    case "h3": {
      const id =
        block.id ||
        block.text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
      return (
        <h3
          id={id}
          className="scroll-mt-24 font-display text-xl font-semibold text-foreground sm:text-2xl pt-4"
        >
          {block.text}
        </h3>
      );
    }

    case "p":
      return (
        <p className={block.className || "text-base leading-[1.85] text-foreground/90 sm:text-lg sm:leading-[1.9]"}>
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul className="space-y-3.5 pl-6">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="list-disc text-base leading-relaxed text-foreground/85 marker:text-primary sm:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="space-y-3.5 pl-6">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="list-decimal text-base leading-relaxed text-foreground/85 marker:font-semibold marker:text-primary sm:text-lg"
            >
              {item}
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <figure className="my-8 rounded-2xl border-l-4 border-primary bg-secondary/30 p-6 shadow-2xs sm:p-8">
          <blockquote className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
            &ldquo;{block.text}&rdquo;
          </blockquote>
          {block.author ? (
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
              — {block.author}
            </figcaption>
          ) : null}
        </figure>
      );

    case "callout": {
      const variant = block.variant || "tip";
      const config = {
        tip: {
          border: "border-emerald-500/30 bg-emerald-500/5 text-emerald-950 dark:text-emerald-100",
          iconColor: "text-emerald-600 dark:text-emerald-400",
          defaultIcon: Lightbulb,
        },
        warning: {
          border: "border-amber-500/30 bg-amber-500/5 text-amber-950 dark:text-amber-100",
          iconColor: "text-amber-600 dark:text-amber-400",
          defaultIcon: TriangleAlert,
        },
        info: {
          border: "border-blue-500/30 bg-blue-500/5 text-blue-950 dark:text-blue-100",
          iconColor: "text-blue-600 dark:text-blue-400",
          defaultIcon: Info,
        },
        highlight: {
          border: "border-primary/30 bg-primary/5 text-foreground",
          iconColor: "text-primary",
          defaultIcon: Sparkles,
        },
        custom: {
          border: "border-primary/30 bg-card text-foreground shadow-xs",
          iconColor: "text-primary",
          defaultIcon: Star,
        },
      }[variant];

      return (
        <aside className={`my-8 flex gap-4 rounded-2xl border p-5 sm:p-6 ${config.border}`}>
          <div className={`shrink-0 pt-0.5 ${config.iconColor}`}>
            {renderCustomIcon(block.icon, config.defaultIcon)}
          </div>
          <div>
            {block.title ? (
              <h4 className="font-display text-base font-semibold sm:text-lg">{block.title}</h4>
            ) : null}
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {block.text}
            </p>
          </div>
        </aside>
      );
    }

    case "image":
      return (
        <figure className="my-10">
          <ClickableImage
            src={block.src}
            alt={block.alt}
            width={block.width || 1200}
            height={block.height || 800}
            className="w-full rounded-2xl border border-border object-cover shadow-xs max-h-[500px]"
            caption={block.caption}
          />
          {block.caption ? (
            <figcaption className="mt-3 text-center text-xs text-muted-foreground sm:text-sm">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "takeaways":
      return <KeyTakeaways takeaways={block.items} title={block.title} />;

    case "do-dont":
      return (
        <div className="my-10 space-y-3">
          {block.title ? (
            <h4 className="font-display text-lg font-semibold text-foreground">
              {block.title}
            </h4>
          ) : null}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* 🟢 What To Do */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 dark:bg-emerald-500/10">
              <div className="flex items-center gap-2 font-display text-base font-semibold text-emerald-700 dark:text-emerald-400">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span>What To Do</span>
              </div>
              <ul className="mt-4 space-y-3">
                {block.dos.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-[0.45em] block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 🔴 What To Avoid */}
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 dark:bg-destructive/10">
              <div className="flex items-center gap-2 font-display text-base font-semibold text-destructive">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                  <X className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span>What To Avoid</span>
              </div>
              <ul className="mt-4 space-y-3">
                {block.donts.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-[0.45em] block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    case "icon-list":
      return (
        <div className="my-8 space-y-4 rounded-3xl border border-border/80 bg-card p-6 shadow-xs sm:p-8">
          {block.items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {renderCustomIcon(item.icon, Check)}
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "faq":
      return <FaqSection title={block.title} items={block.items} />;

    case "divider":
      return <hr className="my-10 border-border" />;

    default:
      return null;
  }
}