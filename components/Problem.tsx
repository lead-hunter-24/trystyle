const problems = [
  { label: "High return rates", w: "88%" },
  { label: "Low customer confidence", w: "74%" },
  { label: "Manual catalog management", w: "81%" },
  { label: "Poor product discovery", w: "69%" },
  { label: "Generic shopping experiences", w: "77%" },
  { label: "Lack of personalization", w: "84%" },
];

export default function Problem() {
  return (
    <section className="section section--dark" id="problem">
      <div className="container">
        <div className="problem">
          <header className="section__head section__head--left reveal">
            <p className="eyebrow">Why Now</p>
            <h2 className="section__title">
              Fashion e-commerce is
              <br />
              built on guesswork.
            </h2>
            <p className="section__intro">
              The industry loses billions to uncertainty at the point of purchase and manual
              operations behind it. TryStyle replaces both with intelligence.
            </p>
          </header>

          <div className="problem__list">
            {problems.map((p) => (
              <div className="problem__item reveal" key={p.label}>
                <span className="problem__bar">
                  <i style={{ "--w": p.w } as React.CSSProperties} />
                </span>
                <span className="problem__label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
