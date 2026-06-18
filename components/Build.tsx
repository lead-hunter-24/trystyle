const cards = [
  {
    index: "01",
    title: "Generative AI Virtual Try-On",
    body: "Generative AI and computer vision models render apparel on diverse body types, building purchase confidence and reducing returns before checkout.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="14" y="6" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 38c2-5 5-7 8-7s6 2 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "02",
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
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="7" y="9" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="27" y="9" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="29" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M27 31h14M27 36h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Personalized Recommendations",
    body: "Machine learning reads customer preferences, browsing behavior, and live fashion trends to deliver recommendations tuned to each shopper.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="37" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="35" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="37" cy="35" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="m20.5 21.5-6.5-5m14 5 6.5-5m-14 5 6.5 5m-6.5-5-6.5 5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "Visual Search & Discovery",
    body: "Shoppers upload an image and surface visually similar products through advanced computer vision models and vector search.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="21" cy="21" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="m30 30 9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 21h10M21 16v10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "05",
    title: "AI Styling Assistant",
    body: "Generates complete outfit recommendations and styling suggestions based on preference, occasion, and current trends.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6c2 6 5 9 11 11-6 2-9 5-11 11-2-6-5-9-11-11 6-2 9-5 11-11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="38" cy="34" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11" cy="36" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
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
              <span className="card__icon" aria-hidden="true">
                {c.icon}
              </span>
              <h3>{c.title}</h3>
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
