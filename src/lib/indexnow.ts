import { INDEXNOW_KEY, SITE } from "@/config/site";
import { sortedPosts } from "@/content/posts";
import { categories } from "@/content/categories";

/**
 * Submits URLs to IndexNow (Bing, Yandex, Seznam, Naver) for instant indexing.
 */
export async function submitToIndexNow(urls?: string[]) {
  if (!INDEXNOW_KEY) {
    throw new Error("INDEXNOW_KEY is not configured in src/config/site.ts");
  }

  const host = new URL(SITE.url).host;
  const keyLocation = `${SITE.url}/${INDEXNOW_KEY}.txt`;

  const urlList =
    urls && urls.length > 0
      ? urls
      : [
          `${SITE.url}/`,
          `${SITE.url}/blog`,
          ...categories.map((c) => `${SITE.url}/category/${c.slug}`),
          ...sortedPosts.map((p) => `${SITE.url}/blog/${p.slug}`),
          `${SITE.url}/about`,
          `${SITE.url}/contact`,
          `${SITE.url}/privacy`,
          `${SITE.url}/terms`,
          `${SITE.url}/disclaimer`,
        ];

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  return {
    status: response.status,
    ok: response.ok,
    count: urlList.length,
  };
}
