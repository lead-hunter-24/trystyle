"use client";

import { useState } from "react";

/**
 * Vector — renders a backgroundless illustration dropped into /public/vectors.
 * If the file isn't there yet, it fails gracefully to an empty slot so the
 * layout never breaks. Filenames are fixed (see /public/vectors/README.md).
 */
export default function Vector({
  name,
  alt = "",
  className = "",
}: {
  name: string;
  alt?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className={`vector vector--empty ${className}`} aria-hidden="true" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/vectors/${name}.png`}
      alt={alt}
      className={`vector ${className}`}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}
