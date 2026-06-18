import EmbeddingField from "@/components/EmbeddingField";

const tech = [
  "Generative AI Models",
  "Computer Vision Systems",
  "Vision-Language Models",
  "Recommendation Engines",
  "Vector Databases",
  "Embedding Models",
  "Retrieval-Augmented Generation",
  "AI Catalog Intelligence",
  "Image Understanding Models",
  "Personalization Systems",
  "Cloud-Native Infrastructure",
  "GPU-Accelerated Workloads",
];

export default function Tech() {
  return (
    <section className="section section--dark section--field" id="tech">
      <EmbeddingField />
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Technology</p>
          <h2 className="section__title">
            Built on advanced AI and
            <br />
            cloud-native infrastructure.
          </h2>
          <p className="section__intro">
            A composable stack of generative, perceptual, and retrieval systems —
            GPU-accelerated and engineered for production scale.
          </p>
        </header>

        <div className="tech-grid">
          {tech.map((label, i) => (
            <div className="tech-chip reveal" key={label}>
              <span className="tech-chip__no">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
