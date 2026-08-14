import { Check, Copy, Facebook, Linkedin, Share2 } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  title: string;
  url?: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return url ? (url.startsWith("http") ? url : `${window.location.origin}${url}`) : window.location.href;
    }
    return url || "";
  };

  const handleCopy = async () => {
    try {
      const shareUrl = getShareUrl();
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const shareUrl = encodeURIComponent(getShareUrl());
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${shareUrl}`,
      icon: (
        <svg
          className="h-4 w-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.896-.8-1.501-1.788-1.677-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.633-.93-2.238-.244-.589-.493-.509-.678-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.055 1.03-1.055 2.513 1.08 2.915 1.231 3.116c.15.2 2.124 3.243 5.146 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.125-.277-.2-.578-.35z" />
          <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.947.558 3.766 1.523 5.307L2.146 21.854l4.706-1.332A9.948 9.948 0 0 0 12.004 22c5.522 0 10.004-4.48 10.004-10s-4.482-10-10.004-10zm0 18.25a8.208 8.208 0 0 1-4.22-1.161l-.302-.18-2.791.79.803-2.719-.197-.314A8.212 8.212 0 1 1 12.004 20.25z" />
        </svg>
      ),
      ariaLabel: "Share on WhatsApp",
      className: "hover:bg-emerald-600 hover:text-white hover:border-emerald-600",
    },
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${shareUrl}`,
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      ariaLabel: "Share on X",
      className: "hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: <Facebook className="h-4 w-4" aria-hidden="true" />,
      ariaLabel: "Share on Facebook",
      className: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: <Linkedin className="h-4 w-4" aria-hidden="true" />,
      ariaLabel: "Share on LinkedIn",
      className: "hover:bg-sky-700 hover:text-white hover:border-sky-700",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
        <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
        Share:
      </span>

      <div className="flex flex-wrap items-center gap-1.5">
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground/75 transition-all duration-200 hover:scale-105 ${item.className}`}
          >
            {item.icon}
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy article link"
          className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-xs font-medium text-foreground/75 transition-all duration-200 hover:border-primary hover:text-primary active:scale-95"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
