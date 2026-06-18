const caps = [
  "Virtual Try-On Generation",
  "AI Outfit Creation",
  "Smart Product Tagging",
  "Automated Product Cataloging",
  "Fashion Attribute Extraction",
  "Style Similarity Search",
  "Personalized Shopping Experiences",
  "Trend Prediction & Analysis",
  "AI Product Description Generation",
  "Multi-Modal Fashion Search",
  "Visual Recommendation Systems",
];

export default function Capabilities() {
  return (
    <section className="section section--accent" id="capabilities">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">AI Capabilities</p>
          <h2 className="section__title">
            A fashion intelligence
            <br />
            engine in development.
          </h2>
        </header>

        <div className="cap-list">
          {caps.map((c) => (
            <div className="cap reveal" key={c}>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
