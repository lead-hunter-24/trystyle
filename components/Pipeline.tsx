const steps = [
  { num: "A", title: "Ingest", body: "Product imagery and customer signals enter the pipeline through multimodal encoders." },
  { num: "B", title: "Understand", body: "Vision-language models extract attributes, categories, colors, and patterns automatically." },
  { num: "C", title: "Generate", body: "Generative models render try-on visuals, descriptions, and styling combinations." },
  { num: "D", title: "Personalize", body: "Embeddings and vector search match each shopper with the products most likely to convert." },
];

export default function Pipeline() {
  return (
    <section className="section" id="pipeline">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">The Fashion Intelligence Engine</p>
          <h2 className="section__title">
            From raw image to
            <br />
            intelligent commerce.
          </h2>
        </header>

        <ol className="pipeline">
          {steps.map((s) => (
            <li className="pipeline__step reveal" key={s.num}>
              <span className="pipeline__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
