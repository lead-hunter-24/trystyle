"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    window.setTimeout(() => setSent(false), 2600);
  }

  return (
    <section className="cta" id="cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner reveal">
        <h2 className="cta__title">
          Experience the future
          <br />
          of fashion commerce.
        </h2>
        <p className="cta__sub">
          Partner with TryStyle to bring generative try-on, automated cataloging, and
          personalized discovery to your storefront.
        </p>
        <form className="cta__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="cta__input"
            placeholder={sent ? "We'll be in touch shortly." : "you@brand.com"}
            aria-label="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn--primary"
            style={sent ? { background: "var(--accent)" } : undefined}
          >
            {sent ? "Request received" : "Request Access"}
          </button>
        </form>
        <p className="cta__fine">
          Built for retail and e-commerce teams. GPU-accelerated, cloud-native.
        </p>
      </div>
    </section>
  );
}
