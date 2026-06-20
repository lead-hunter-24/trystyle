import Vector from "@/components/Vector";

const cards = [
  {
    index: "01",
    vector: "build-tryon",
    title: "Generative AI Virtual Try-On",
    body: "Generative AI and computer vision models render apparel on diverse body types, building purchase confidence and reducing returns before checkout.",
  },
  {
    index: "02",
    vector: "build-catalog",
    title: "AI-Powered Cataloging",
    body: "An intelligence engine that classifies and enriches product catalogs automatically.",
    list: [
      "Detect apparel categories",
      "Identify colors & patterns",
      "Generate product attributes",
      "SEO-friendly descriptions",
      "Automated product tagging",
      "Inventory organized at scale",
    ],
  },
  {
    index: "03",
    vector: "build-recommend",
    title: "Personalized Recommendations",
    body: "Machine learning reads customer preferences, browsing behavior, and live fashion trends to deliver recommendations tuned to each shopper.",
  },
  {
    index: "04",
    vector: "build-search",
    title: "Visual Search & Discovery",
    body: "Shoppers upload an image and surface visually similar products through advanced computer vision models and vector search.",
  },
  {
    index: "05",
    vector: "build-styling",
    title: "AI Styling Assistant",
    body: "Generates complete outfit recommendations and styling suggestions based on preference, occasion, and current trends.",
  },
];

export default function Build() {
  return (
    <section className="section" id="build">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">What We Build</p>
          <h2 className="section__title">
            AI infrastructure for
            <br />
            modern fashion commerce.
          </h2>
          <p className="section__intro">
            Five core systems, one intelligence layer. Each module works standalone or as part
            of a unified engine that understands product, person, and preference.
          </p>
        </header>

        <div className="build-grid">
          {cards.map((c) => (
            <article className="card card--feature reveal" key={c.index}>
              <span className="card__index">{c.index}</span>
              <h3>{c.title}</h3>
              <span className="card__icon" aria-hidden="true">
                <Vector name={c.vector} alt={c.title} className="card__vector" />
              </span>
              <p>{c.body}</p>
              {c.list && (
                <ul className="card__list">
                  {c.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
