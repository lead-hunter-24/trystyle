export default function Nav() {
  return (
    <header className="nav" id="nav">
      <div className="nav__inner">
        <a href="#top" className="brand" aria-label="TryStyle home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
              <path
                d="M16 2 4 8v9c0 7.2 5 11.3 12 13 7-1.7 12-5.8 12-13V8L16 2Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M11 15.5 14.5 19 21 11.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="brand__word">TryStyle</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#build">Platform</a>
          <a href="#tech">Technology</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#problem">Why Now</a>
          <a href="#vision">Vision</a>
        </nav>
        <a href="#cta" className="btn btn--ghost nav__cta">
          Request Access
        </a>
      </div>
    </header>
  );
}
