/**
 * VisionStage — the hero motion graphic.
 * A tailor's dress form runs through the TryStyle vision pipeline live:
 *  - pose keypoints + skeleton draw in
 *  - a scan line sweeps the detection frame
 *  - the garment recolors (generative try-on) via cross-fading gradients
 *  - attribute chips (category, color, pattern, fit) resolve with confidence
 * Pure SVG + CSS — no JS, reduced-motion safe (final state is the rest state).
 */

// Shared silhouette of the bust/dress form (wide shoulders → tapered base).
const BODY =
  "M240 92C232 92 226 96 222 102C214 116 200 126 184 138C166 152 156 182 158 214" +
  "C160 248 178 276 186 300C192 322 196 360 200 392C202 414 210 436 224 448" +
  "C232 454 248 454 256 448C270 436 278 414 280 392C284 360 288 322 294 300" +
  "C302 276 320 248 322 214C324 182 314 152 296 138C280 126 266 116 258 102" +
  "C254 96 248 92 240 92Z";

export default function VisionStage() {
  return (
    <div className="vstage" aria-hidden="true">
      <svg viewBox="0 0 480 600" className="vstage__svg" role="presentation">
        <defs>
          <linearGradient id="vsGarmentA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7b6bff" />
            <stop offset="1" stopColor="#33279c" />
          </linearGradient>
          <linearGradient id="vsGarmentB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d9b977" />
            <stop offset="1" stopColor="#8a6e2f" />
          </linearGradient>
          <linearGradient id="vsGarmentC" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#34b3a1" />
            <stop offset="1" stopColor="#15564e" />
          </linearGradient>
          <linearGradient id="vsScan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="transparent" />
            <stop offset="0.5" stopColor="#c9a35b" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <clipPath id="vsClip">
            <path d={BODY} />
          </clipPath>
        </defs>

        {/* viewport corner brackets */}
        <g className="vs-frame" stroke="rgba(201,163,91,.55)" strokeWidth="1.5" fill="none">
          <path d="M60 78v-26h26" />
          <path d="M420 78v-26h-26" />
          <path d="M60 522v26h26" />
          <path d="M420 522v26h-26" />
        </g>

        {/* stand */}
        <g stroke="rgba(243,241,234,.28)" strokeWidth="1.4" fill="none">
          <line x1="240" y1="448" x2="240" y2="512" />
          <ellipse cx="240" cy="518" rx="56" ry="10" />
          <ellipse cx="240" cy="88" rx="13" ry="5.5" />
        </g>

        {/* dress-form body + clipped generative garment */}
        <g className="vs-form">
          <path d={BODY} fill="rgba(255,255,255,.03)" stroke="rgba(243,241,234,.42)" strokeWidth="1.4" />
          <g clipPath="url(#vsClip)">
            <rect x="150" y="110" width="180" height="350" fill="url(#vsGarmentA)" opacity="0.5" />
            <rect className="vs-garment vs-garment--b" x="150" y="110" width="180" height="350" fill="url(#vsGarmentB)" />
            <rect className="vs-garment vs-garment--c" x="150" y="110" width="180" height="350" fill="url(#vsGarmentC)" />
            {/* drape seams to suggest fabric */}
            <path className="vs-seam" d="M240 120V440" stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none" />
            <path className="vs-seam" d="M198 150C188 230 196 330 210 430" stroke="rgba(255,255,255,.12)" strokeWidth="1" fill="none" />
            <path className="vs-seam" d="M282 150C292 230 284 330 270 430" stroke="rgba(255,255,255,.12)" strokeWidth="1" fill="none" />
          </g>
        </g>

        {/* detection boxes */}
        <rect className="vs-box" x="150" y="120" width="180" height="338" rx="6"
          fill="none" stroke="rgba(124,107,255,.95)" strokeWidth="1.8" />
        <rect className="vs-box vs-box--alt" x="196" y="116" width="88" height="52" rx="5"
          fill="none" stroke="rgba(201,163,91,.8)" strokeWidth="1.3" />

        {/* pose skeleton */}
        <g className="vs-skeleton" stroke="rgba(243,241,234,.9)" strokeWidth="1.5" fill="none">
          <line className="vs-bone" x1="184" y1="138" x2="296" y2="138" />
          <line className="vs-bone" x1="184" y1="138" x2="240" y2="196" />
          <line className="vs-bone" x1="296" y1="138" x2="240" y2="196" />
          <line className="vs-bone" x1="240" y1="196" x2="240" y2="300" />
          <line className="vs-bone" x1="240" y1="300" x2="200" y2="400" />
          <line className="vs-bone" x1="240" y1="300" x2="280" y2="400" />
        </g>
        <g className="vs-joints">
          {[
            [184, 138], [296, 138], [240, 196],
            [240, 300], [200, 400], [280, 400],
          ].map(([cx, cy], i) => (
            <g key={`${cx}-${cy}`} className="vs-joint" style={{ animationDelay: `${i * 0.12}s` }}>
              <circle cx={cx} cy={cy} r="7" fill="rgba(201,163,91,.18)" />
              <circle cx={cx} cy={cy} r="3.5" fill="#c9a35b" />
            </g>
          ))}
        </g>

        {/* sweeping scan line */}
        <g className="vs-scan">
          <rect x="150" y="120" width="180" height="2.5" fill="url(#vsScan)" />
        </g>

        {/* attribute chips with connectors to detection points */}
        <Chip x={336} y={126} w={132} label="OUTERWEAR" value="98.6%" delay="1.0s" tx={336} ty={141} px={296} py={138} />
        <Chip x={342} y={244} w={122} label="COLOR" value="INDIGO" delay="1.25s" tx={342} ty={259} px={300} py={250} />
        <Chip x={10} y={292} w={126} label="PATTERN" value="SOLID" delay="1.5s" tx={136} ty={307} px={186} py={300} />
        <Chip x={302} y={428} w={156} label="FIT" value="REGULAR" delay="1.75s" tx={302} ty={443} px={280} py={400} />

        {/* status badge */}
        <g className="vs-badge" transform="translate(60 32)">
          <circle className="vs-badge__dot" cx="7" cy="7" r="4" fill="#34b3a1" />
          <text x="20" y="11" className="vs-badge__txt">VISION ENGINE · LIVE</text>
        </g>
      </svg>
    </div>
  );
}

function Chip({
  x, y, w, label, value, delay, tx, ty, px, py,
}: {
  x: number; y: number; w: number; label: string; value: string;
  delay: string; tx: number; ty: number; px: number; py: number;
}) {
  return (
    <>
      <g className="vs-connector" style={{ animationDelay: delay }}>
        <line x1={tx} y1={ty} x2={px} y2={py} stroke="rgba(201,163,91,.55)" strokeWidth="1" />
        <circle cx={px} cy={py} r="2.6" fill="#c9a35b" />
      </g>
      <g className="vs-chip" style={{ animationDelay: delay }} transform={`translate(${x} ${y})`}>
        <rect width={w} height="30" rx="15" fill="rgba(10,10,12,.85)" stroke="rgba(201,163,91,.42)" strokeWidth="1" />
        <text x="16" y="19.5" className="vs-chip__label">{label}</text>
        <text x={w - 16} y="19.5" className="vs-chip__value" textAnchor="end">{value}</text>
      </g>
    </>
  );
}
