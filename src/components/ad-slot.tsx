import { useEffect, useRef } from "react";
import { ADSENSE_PUBLISHER_ID } from "@/config/site";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  /** AdSense ad unit ID (data-ad-slot). Empty hides the ad unit completely. */
  slot?: string;
  /** Reserved height so the layout never shifts when the ad loads. */
  minHeight?: number;
  label?: string;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({
  slot,
  minHeight = 280,
  label = "Advertisement",
  className,
}: AdSlotProps) {
  const live = Boolean(ADSENSE_PUBLISHER_ID && slot);
  const pushed = useRef(false);

  useEffect(() => {
    if (!live || pushed.current) return;
    pushed.current = true;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense script blocked or unavailable — nothing to do.
    }
  }, [live]);

  // If AdSense is not configured or slot is missing, do not show any ad card or placeholder
  if (!live) {
    return null;
  }

  return (
    <aside
      aria-label={label}
      className={cn("my-10 w-full", className)}
      style={{ minHeight }}
    >
      <p className="mb-2 text-center text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight }}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}