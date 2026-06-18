# TryStyle — Vector Assets

Drop your backgroundless (transparent PNG) illustrations in **this folder**, named
**exactly** as listed below. The page auto-loads them — no code changes needed.
Until a file exists, its slot shows a faint placeholder, so nothing breaks.

| Filename                | Where it appears            | Recommended size | Aspect |
|-------------------------|-----------------------------|------------------|--------|
| `hero.png`              | Hero (right side, showpiece)| 1400 × 1750      | 4:5    |
| `build-tryon.png`       | Card 01 — Virtual Try-On    | 800 × 800        | 1:1    |
| `build-catalog.png`     | Card 02 — AI Cataloging     | 800 × 800        | 1:1    |
| `build-recommend.png`   | Card 03 — Recommendations   | 800 × 800        | 1:1    |
| `build-search.png`      | Card 04 — Visual Search     | 800 × 800        | 1:1    |
| `build-styling.png`     | Card 05 — Styling Assistant | 800 × 800        | 1:1    |
| `pipe-ingest.png`       | Pipeline — Ingest           | 600 × 600        | 1:1    |
| `pipe-understand.png`   | Pipeline — Understand       | 600 × 600        | 1:1    |
| `pipe-generate.png`     | Pipeline — Generate         | 600 × 600        | 1:1    |
| `pipe-personalize.png`  | Pipeline — Personalize      | 600 × 600        | 1:1    |

> Format: **PNG with transparent background**. If your tool also gives SVG, keep the PNG
> name above (the code points at `.png`). Want SVG instead? Tell me and I'll switch the paths.

---

## STYLE BLOCK — paste this at the TOP of every prompt

```
Minimal premium line-art vector illustration for a luxury fashion-tech brand.
Single subject, centered, on a fully TRANSPARENT background (PNG with alpha — no
backdrop, no card, no shadow, no ground plane). Thin, elegant, uniform stroke
weight. Strict two-accent palette: champagne gold (#C9A35B) and electric violet
(#6D5CFF), with soft off-white (#F3F1EA) details and dark ink line work. Subtle
flat gradient fills only. No text, no letters, no numbers, no logos, no watermark,
no frame, no border. Sophisticated, editorial, high-end 2025 design-agency
aesthetic. Clean negative space. High resolution.
```

Then add ONE subject block below it. Generate, and if the background isn't clear,
reply in ChatGPT: *"Make the background fully transparent and re-export as PNG."*

---

## SUBJECT PROMPTS

### hero.png  (the showpiece — make this the best one)
```
SUBJECT: An elegant tailor's dress form / mannequin bust wearing a flowing
garment, presented three-quarter view. Floating around it, sparse computer-vision
motifs that read as AI virtual try-on: two or three small attribute tags, a few
glowing connection nodes, and light corner brackets framing the figure. Convey
"AI sees, understands, and re-dresses the garment." Graceful, airy, not cluttered.
Portrait 4:5.
```

### build-tryon.png  (Virtual Try-On)
```
SUBJECT: A dress form with a garment materializing onto it as glowing particles,
plus a single soft scan line — generative virtual try-on. Square 1:1.
```

### build-catalog.png  (AI-Powered Cataloging)
```
SUBJECT: A tidy grid of three or four garment thumbnails, each with a tiny
auto-generated attribute tag (a dot + short line, no text), and a sorting arc —
automated catalog intelligence. Square 1:1.
```

### build-recommend.png  (Personalized Recommendations)
```
SUBJECT: A central shopper silhouette connected by thin nodal lines to several
small garment cards arranged around it — a recommendation network. Square 1:1.
```

### build-search.png  (Visual Search & Discovery)
```
SUBJECT: A magnifier lens over a single garment, with two or three visually
similar garment thumbnails radiating outward on connector lines — visual search
by image. Square 1:1.
```

### build-styling.png  (AI Styling Assistant)
```
SUBJECT: A complete outfit assembling from separate floating pieces — top, bottom,
shoe, and one accessory — drawn together with a small champagne sparkle, an AI
stylist composing a look. Square 1:1.
```

### pipe-ingest.png  (Ingest)
```
SUBJECT: A photograph / image card flowing into the mouth of a slim funnel —
data ingestion. Simple, iconographic. Square 1:1.
```

### pipe-understand.png  (Understand)
```
SUBJECT: A vision lens or stylized eye scanning a garment, with two small
attribute callout dots — image understanding. Simple, iconographic. Square 1:1.
```

### pipe-generate.png  (Generate)
```
SUBJECT: A champagne-gold sparkle burst producing a new garment silhouette from
light — generative AI. Simple, iconographic. Square 1:1.
```

### pipe-personalize.png  (Personalize)
```
SUBJECT: A single shopper profile circle paired with one perfectly matched garment
and a small star or check — personalization. Simple, iconographic. Square 1:1.
```

---

### Tips for a consistent set
- Generate all 10 in one ChatGPT session so the model keeps the same style.
- Keep the **Style Block identical** every time — only swap the SUBJECT.
- The 5 build icons + 4 pipeline icons should feel like one icon family
  (same stroke weight, same gold/violet ratio). If one looks off, regenerate it
  referencing an earlier one: *"same style as the previous icon."*
- The hero can be richer/more detailed; the icons should stay simple.
