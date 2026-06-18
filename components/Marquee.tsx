const items = [
  "Generative AI",
  "Virtual Try-On",
  "Computer Vision",
  "Vision-Language Models",
  "Recommendation Engines",
  "Visual Search",
  "Multimodal AI",
  "GPU-Accelerated Workloads",
];

export default function Marquee() {
  // Duplicated track for a seamless loop.
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((label, i) => (
          <span key={`${label}-${i}`} className="marquee__group">
            <span>{label}</span>
            <span className="dot">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
