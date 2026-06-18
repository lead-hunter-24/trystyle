// Generate the TryStyle vector set via fal.ai (nano-banana-2) + birefnet cutout.
// Usage: FAL_KEY=... node scripts/gen-vectors.mjs [name ...]
import { writeFile, mkdir } from "node:fs/promises";

const FAL = process.env.FAL_KEY;
if (!FAL) throw new Error("FAL_KEY not set");

const OUT = new URL("../public/vectors/", import.meta.url);

const STYLE =
  "Flat minimal premium vector illustration, thin clean uniform line art with subtle flat fills, " +
  "strict palette of champagne gold #C9A35B, electric violet #6D5CFF and warm cream #F3F1EA, " +
  "single centered subject with generous padding, on a plain solid flat light grey #D5D6D4 background, " +
  "sophisticated high-end fashion-tech brand aesthetic, no text, no words, no letters, no numbers, no logo, no hard shadow.";

const ICON =
  "Flat minimal vector ICON, thin clean uniform line art, champagne gold #C9A35B + electric violet #6D5CFF + cream #F3F1EA, " +
  "one simple centered subject, lots of padding, on a plain solid flat light grey #D5D6D4 background, no text, no words, no shadow.";

const assets = [
  {
    name: "hero",
    ar: "3:4",
    prompt:
      STYLE +
      " Subject: an elegant tailor's dress form mannequin wearing a flowing draped gown, three-quarter view, " +
      "with two or three small delicate sparkles and a couple of tiny floating attribute tags nearby, " +
      "evoking AI virtual try-on. Graceful, airy, refined.",
  },
  { name: "build-tryon", ar: "1:1", prompt: ICON + " Subject: a dress form mannequin with a garment appearing on it as glowing particles and one soft sparkle — generative virtual try-on." },
  { name: "build-catalog", ar: "1:1", prompt: ICON + " Subject: a neat grid of three folded garments with small clothing tags, being auto-organized — automated catalog intelligence." },
  { name: "build-recommend", ar: "1:1", prompt: ICON + " Subject: a central shopper silhouette connected by thin lines to a few small garment cards around it — recommendation network." },
  { name: "build-search", ar: "1:1", prompt: ICON + " Subject: a magnifier lens over a t-shirt with two similar garment thumbnails radiating out on connector lines — visual search by image." },
  { name: "build-styling", ar: "1:1", prompt: ICON + " Subject: a complete outfit assembling from separate floating pieces — top, trousers, shoe and one accessory — with a champagne sparkle — AI stylist." },
  { name: "pipe-ingest", ar: "1:1", prompt: ICON + " Subject: a photo image card flowing into the mouth of a slim funnel — data ingestion." },
  { name: "pipe-understand", ar: "1:1", prompt: ICON + " Subject: a vision lens / stylized eye scanning a garment, with two small callout dots — image understanding." },
  { name: "pipe-generate", ar: "1:1", prompt: ICON + " Subject: a champagne-gold sparkle burst producing a new garment silhouette out of light — generative AI." },
  { name: "pipe-personalize", ar: "1:1", prompt: ICON + " Subject: a single shopper profile circle paired with one perfectly matched garment and a small star — personalization." },
];

async function falJson(url, payload) {
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Key ${FAL}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`${url} -> ${r.status} ${(await r.text()).slice(0, 200)}`);
  return r.json();
}

async function makeOne(a) {
  const gen = await falJson("https://fal.run/fal-ai/nano-banana-2", {
    prompt: a.prompt,
    aspect_ratio: a.ar,
  });
  const genUrl = gen.images?.[0]?.url;
  if (!genUrl) throw new Error(`no image url for ${a.name}`);

  const cut = await falJson("https://fal.run/fal-ai/birefnet", { image_url: genUrl });
  const cutUrl = cut.image?.url;
  if (!cutUrl) throw new Error(`no cutout url for ${a.name}`);

  const buf = Buffer.from(await (await fetch(cutUrl)).arrayBuffer());
  await writeFile(new URL(`${a.name}.png`, OUT), buf);
  console.log(`✓ ${a.name}.png  (${(buf.length / 1024).toFixed(0)} KB)`);
}

// simple concurrency pool
async function run(list, limit = 3) {
  await mkdir(OUT, { recursive: true });
  const only = process.argv.slice(2);
  const work = only.length ? list.filter((a) => only.includes(a.name)) : list;
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, work.length) }, async () => {
    while (i < work.length) {
      const a = work[i++];
      try {
        await makeOne(a);
      } catch (e) {
        console.error(`✗ ${a.name}: ${e.message}`);
      }
    }
  });
  await Promise.all(workers);
  console.log("done.");
}

await run(assets);
