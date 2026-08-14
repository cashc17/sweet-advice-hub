import type { Block } from "@/content/posts";

/** Renders article body blocks with an ad unit injected after a given block index. */
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
    <div className="mt-8">
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
  if (block.t === "h2") {
    return (
      <h2 className="mt-10 font-display text-2xl font-semibold leading-tight text-foreground">
        {block.text}
      </h2>
    );
  }
  if (block.t === "ul") {
    return (
      <ul className="mt-5 space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item} className="list-disc text-[1.02rem] leading-[1.75] text-foreground/85">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.t === "quote") {
    return (
      <blockquote className="my-8 border-l-2 border-primary pl-5 text-lg italic leading-relaxed text-foreground/90">
        {block.text}
      </blockquote>
    );
  }
  return (
    <p className="mt-5 text-[1.02rem] leading-[1.8] text-foreground/85">{block.text}</p>
  );
}