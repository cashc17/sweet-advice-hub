import { useEffect, useState } from "react";

export type TextSize = "normal" | "large" | "xl";

interface TextSizeControlProps {
  onSizeChange?: (size: TextSize) => void;
}

export function TextSizeControl({ onSizeChange }: TextSizeControlProps) {
  const [size, setSize] = useState<TextSize>("normal");

  useEffect(() => {
    const saved = localStorage.getItem("preferred-text-size") as TextSize | null;
    if (saved && (saved === "normal" || saved === "large" || saved === "xl")) {
      setSize(saved);
      applyTextSize(saved);
      onSizeChange?.(saved);
    }
  }, [onSizeChange]);

  const applyTextSize = (newSize: TextSize) => {
    const root = document.getElementById("article-prose-root");
    if (root) {
      root.classList.remove("text-size-normal", "text-size-large", "text-size-xl");
      root.classList.add(`text-size-${newSize}`);
    }
  };

  const handleSelect = (newSize: TextSize) => {
    setSize(newSize);
    localStorage.setItem("preferred-text-size", newSize);
    applyTextSize(newSize);
    onSizeChange?.(newSize);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/80 bg-background/80 p-1 text-xs font-medium backdrop-blur">
      <span className="px-2 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
        Text:
      </span>
      <button
        type="button"
        onClick={() => handleSelect("normal")}
        aria-label="Normal font size"
        className={`rounded-full px-2 py-1 text-xs transition-colors ${
          size === "normal"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-foreground/75 hover:text-foreground"
        }`}
      >
        A
      </button>
      <button
        type="button"
        onClick={() => handleSelect("large")}
        aria-label="Large font size"
        className={`rounded-full px-2 py-1 text-sm transition-colors ${
          size === "large"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-foreground/75 hover:text-foreground"
        }`}
      >
        A+
      </button>
      <button
        type="button"
        onClick={() => handleSelect("xl")}
        aria-label="Extra large font size"
        className={`rounded-full px-2 py-1 text-base font-bold transition-colors ${
          size === "xl"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-foreground/75 hover:text-foreground"
        }`}
      >
        A++
      </button>
    </div>
  );
}
