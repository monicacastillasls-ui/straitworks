import type { TourTheme } from "@/content/business";

// Stylised silhouette of the Rock of Gibraltar seen from the bay (north face on the left,
// long ridge sloping south to Europa Point). Drawn in a 1200×600 box, sea level at y=470.
export const ROCK_PATH =
  "M0 470 L180 470 L215 455 L245 330 L268 250 L300 196 L322 172 L344 184 L372 166 L402 190 L436 182 L470 206 L512 198 L560 226 L612 236 L668 268 L730 300 L800 338 L872 376 L944 406 L1010 428 L1060 446 L1110 456 L1200 462 L1200 470 Z";

// Jebel Musa on the African coast, in the distance.
const AFRICA_PATH =
  "M760 470 L840 420 L900 388 L948 352 L992 330 L1030 346 L1070 372 L1120 400 L1200 420 L1200 470 Z";

export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#123C63" />
          <stop offset="0.45" stopColor="#2A6CA3" />
          <stop offset="0.72" stopColor="#DB9A72" />
          <stop offset="0.8" stopColor="#F1C08C" />
        </linearGradient>
        <linearGradient id="hero-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16466F" />
          <stop offset="1" stopColor="#06192B" />
        </linearGradient>
        <linearGradient id="hero-rock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A2540" />
          <stop offset="1" stopColor="#06192B" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFE7C2" />
          <stop offset="0.5" stopColor="#F6C48E" stopOpacity="0.6" />
          <stop offset="1" stopColor="#F6C48E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#hero-sky)" />
      <circle cx="930" cy="330" r="150" fill="url(#hero-sun)" />
      <circle cx="930" cy="330" r="42" fill="#FFE2B8" />
      <path d={AFRICA_PATH} fill="#7B6A80" opacity="0.55" />
      <path d={ROCK_PATH} fill="url(#hero-rock)" />
      {/* Ridge highlight catching the sunset */}
      <path
        d="M322 172 L344 184 L372 166 L402 190 L436 182 L470 206 L512 198 L560 226 L612 236 L668 268 L730 300 L800 338 L872 376 L944 406"
        fill="none"
        stroke="#DB7A60"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <rect y="468" width="1200" height="132" fill="url(#hero-sea)" />
      {[492, 512, 536, 564].map((y, i) => (
        <path
          key={y}
          d={`M${820 + i * 18} ${y} H${1040 - i * 18}`}
          stroke="#F6C48E"
          strokeOpacity={0.5 - i * 0.1}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {/* A small sailing boat */}
      <g transform="translate(1090 492) scale(0.8)">
        <path d="M0 14 H44 L36 22 H8 Z" fill="#06192B" />
        <path d="M22 -22 V12 H4 Z" fill="#F5EFE3" opacity="0.9" />
        <path d="M25 -14 V12 H40 Z" fill="#F5EFE3" opacity="0.7" />
      </g>
    </svg>
  );
}

const palettes: Record<TourTheme, { sky: [string, string]; rock: string; sea: string; accent: string }> = {
  sunset: { sky: ["#F1C08C", "#DB7A60"], rock: "#0F3355", sea: "#16466F", accent: "#FFE2B8" },
  stone: { sky: ["#F5EFE3", "#D9C7A4"], rock: "#4F4E4A", sea: "#1E5C8F", accent: "#C8553D" },
  sea: { sky: ["#BFE0F2", "#6FA9D4"], rock: "#16466F", sea: "#0A2540", accent: "#FFFFFF" },
  night: { sky: ["#0A2540", "#16466F"], rock: "#06192B", sea: "#0F3355", accent: "#F5EFE3" },
  dolphin: { sky: ["#D7EEF3", "#8CC5D6"], rock: "#1E5C8F", sea: "#16466F", accent: "#F5EFE3" },
  map: { sky: ["#EADFC9", "#D9C7A4"], rock: "#A8432E", sea: "#6B6A66", accent: "#0A2540" },
};

export function TourArt({ theme, className = "" }: { theme: TourTheme; className?: string }) {
  const p = palettes[theme];
  const id = `tour-${theme}`;
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky[0]} />
          <stop offset="1" stopColor={p.sky[1]} />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill={`url(#${id})`} />

      {theme === "sunset" && <circle cx="900" cy="300" r="70" fill={p.accent} />}
      {theme === "night" &&
        [
          [120, 80], [300, 130], [520, 60], [700, 120], [880, 70], [1040, 150], [1120, 60], [420, 200],
        ].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={p.accent} opacity="0.8" />)}
      {theme === "night" && <circle cx="960" cy="180" r="48" fill={p.accent} opacity="0.9" />}
      {theme === "sea" && (
        <g transform="translate(760 360)" fill="#FFFFFF">
          {/* Cruise ship */}
          <path d="M0 80 H360 L320 120 H30 Z" fill="#0A2540" />
          <rect x="40" y="40" width="260" height="40" rx="6" />
          <rect x="90" y="10" width="160" height="30" rx="6" />
          <rect x="200" y="-20" width="30" height="30" fill="#C8553D" />
        </g>
      )}

      <path d={ROCK_PATH} fill={p.rock} />
      <rect y="468" width="1200" height="132" fill={p.sea} />

      {theme === "dolphin" && (
        <g fill={p.accent}>
          <path d="M240 540 C 270 470, 340 450, 380 500 C 340 490, 300 505, 280 540 Z" />
          <path d="M420 560 C 445 505, 500 492, 530 530 C 500 522, 470 532, 455 560 Z" opacity="0.8" />
        </g>
      )}
      {theme === "stone" && (
        <g fill="none" stroke={p.accent} strokeWidth="10" transform="translate(200 180) scale(0.45)">
          <path d="M100 120 h80 v-40 h40 v40 h40 v-40 h40 v40 h80 v120 h-280 z" fill={p.sky[0]} />
        </g>
      )}
      {theme === "map" && (
        <g fill="none" stroke={p.accent} strokeWidth="6" strokeLinecap="round">
          <path d="M120 400 C 220 260, 360 330, 440 200 S 640 120, 760 90" strokeDasharray="4 22" />
          <circle cx="760" cy="90" r="18" fill={p.accent} />
          <circle cx="120" cy="400" r="12" fill={p.sky[0]} />
        </g>
      )}

      {[510, 540, 570].map((y, i) => (
        <path
          key={y}
          d={`M${600 + i * 60} ${y} H${1000 - i * 40}`}
          stroke="#FFFFFF"
          strokeOpacity="0.18"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
