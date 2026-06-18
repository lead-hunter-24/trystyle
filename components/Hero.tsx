import VisionStage from "@/components/VisionStage";

const stats = [
  { num: 40, suffix: "%", label: "Lower return rates with try-before-you-buy confidence" },
  { num: 90, suffix: "%", label: "Of cataloging effort automated end-to-end" },
  { num: 3, suffix: "x", label: "Faster product discovery through visual search" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__layout">
          <div className="hero__copy">
            <p className="eyebrow reveal">AI-Native FashionTech Platform</p>
            <h1 className="hero__title reveal">
              The intelligence layer for <span className="ital">fashion commerce.</span>
            </h1>
            <p className="hero__lede reveal">
              TryStyle transforms online shopping through{" "}
              <strong>Generative AI Virtual Try-On</strong>,{" "}
              <strong>AI-Powered Cataloging</strong>,{" "}
              <strong>Personalized Recommendations</strong>, and{" "}
              <strong>Computer Vision-driven Fashion Intelligence</strong> — helping shoppers
              visualize products before they buy, and enabling brands to automate catalog
              operations at scale.
            </p>
            <div className="hero__actions reveal">
              <a href="#cta" className="btn btn--primary">
                Experience the Platform
              </a>
              <a href="#build" className="btn btn--line">
                See what we build
              </a>
            </div>
          </div>

          <div className="hero__visual reveal">
            <VisionStage />
          </div>
        </div>

        <div className="hero__stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__num" data-count={s.num} data-suffix={s.suffix}>
                0
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  );
}
