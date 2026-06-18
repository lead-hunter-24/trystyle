const cols = [
  {
    title: "Platform",
    links: [
      ["Virtual Try-On", "#build"],
      ["AI Cataloging", "#build"],
      ["Recommendations", "#build"],
      ["Visual Search", "#build"],
    ],
  },
  {
    title: "Technology",
    links: [
      ["Generative AI", "#tech"],
      ["Computer Vision", "#tech"],
      ["Vision-Language Models", "#tech"],
      ["GPU Acceleration", "#tech"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Vision", "#vision"],
      ["Why Now", "#problem"],
      ["Contact", "#cta"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__word">TryStyle</span>
          <p>
            The AI operating system for fashion commerce. Generative AI, Computer Vision, and
            Machine Learning for the next generation of online retail.
          </p>
        </div>
        <div className="footer__cols">
          {cols.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__base">
        <span>&copy; 2026 TryStyle. All rights reserved.</span>
        <span>Fashion AI · Retail AI · Cloud-Native AI</span>
      </div>
    </footer>
  );
}
