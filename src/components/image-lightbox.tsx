import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  caption?: string;
}

export function ClickableImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
  caption,
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-2xl"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(true);
        }}
        aria-label="Click to view full-resolution image"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={`${className} transition-transform duration-300 group-hover:scale-[1.015]`}
        />
        <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-md opacity-0 shadow-xs transition-opacity duration-200 group-hover:opacity-100">
          <ZoomIn className="h-3.5 w-3.5 text-primary" />
          <span>Zoom</span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 border border-border text-foreground shadow-md transition-transform hover:scale-105 active:scale-95"
            onClick={() => setIsOpen(false)}
            aria-label="Close full view"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[95vw] sm:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-border/60"
            />
            {caption ? (
              <p className="mt-3 text-center text-xs sm:text-sm text-muted-foreground font-medium">
                {caption}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
