export function PortraitCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="0" onClick={onClick}>
      <svg
        className="cf-photo"
        viewBox="0 0 240 340"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="p1bg" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#4a4540" />
            <stop offset="100%" stopColor="#111010" />
          </radialGradient>
          <radialGradient id="p1skin" cx="48%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#d8d0c8" />
            <stop offset="60%" stopColor="#b0a898" />
            <stop offset="100%" stopColor="#7a7268" />
          </radialGradient>
          <linearGradient id="p1light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <filter id="blur1">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>
        <rect width="240" height="340" fill="url(#p1bg)" />
        <ellipse cx="60" cy="0" rx="120" ry="90" fill="rgba(255,255,255,0.07)" />
        <ellipse cx="120" cy="310" rx="90" ry="55" fill="#222" />
        <path
          d="M60 280 Q80 260 120 255 Q160 260 180 280 L185 340 L55 340Z"
          fill="#1a1a1a"
        />
        <rect x="105" y="215" width="30" height="50" rx="6" fill="#b8b0a8" />
        <ellipse cx="120" cy="215" rx="15" ry="8" fill="#c0b8b0" />
        <ellipse cx="120" cy="170" rx="52" ry="60" fill="url(#p1skin)" />
        <ellipse cx="120" cy="130" rx="55" ry="48" fill="#1a1818" />
        <path
          d="M68 155 Q60 130 70 110 Q85 95 120 90 Q155 95 170 110 Q180 130 172 155"
          fill="#1a1818"
        />
        <path
          d="M168 145 Q185 160 182 200 Q178 220 172 230 Q165 215 163 195 Q162 170 168 145Z"
          fill="#151414"
        />
        <path
          d="M72 145 Q55 165 58 210 Q62 225 70 235 Q77 218 77 195 Q76 168 72 145Z"
          fill="#151414"
        />
        <ellipse cx="98" cy="165" rx="14" ry="8" fill="#2a2828" opacity="0.5" />
        <ellipse cx="142" cy="165" rx="14" ry="8" fill="#2a2828" opacity="0.5" />
        <ellipse cx="98" cy="164" rx="10" ry="6" fill="#e8e4e0" />
        <ellipse cx="142" cy="164" rx="10" ry="6" fill="#e8e4e0" />
        <ellipse cx="98" cy="165" rx="7" ry="6" fill="#3a3530" />
        <ellipse cx="142" cy="165" rx="7" ry="6" fill="#3a3530" />
        <ellipse cx="98" cy="165" rx="3.5" ry="3.5" fill="#0a0908" />
        <ellipse cx="142" cy="165" rx="3.5" ry="3.5" fill="#0a0908" />
        <ellipse cx="100" cy="163" rx="1.5" ry="1.2" fill="white" opacity="0.8" />
        <ellipse cx="144" cy="163" rx="1.5" ry="1.2" fill="white" opacity="0.8" />
        <path
          d="M88 159 Q93 154 105 157"
          stroke="#111"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M132 157 Q148 154 152 159"
          stroke="#111"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M84 153 Q98 147 112 151"
          stroke="#2a2520"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M128 151 Q142 147 156 153"
          stroke="#2a2520"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M117 168 Q113 185 108 193 Q116 197 124 193 Q130 185 123 168Z"
          fill="rgba(0,0,0,0.12)"
        />
        <ellipse cx="110" cy="192" rx="5" ry="3" fill="rgba(0,0,0,0.15)" />
        <ellipse cx="130" cy="192" rx="5" ry="3" fill="rgba(0,0,0,0.15)" />
        <path
          d="M104 205 Q112 200 120 202 Q128 200 136 205 Q128 213 120 214 Q112 213 104 205Z"
          fill="#8a7870"
        />
        <path
          d="M106 205 Q120 209 134 205"
          stroke="#7a6860"
          strokeWidth="0.5"
          fill="none"
        />
        <ellipse cx="85" cy="183" rx="18" ry="10" fill="rgba(255,255,255,0.06)" />
        <ellipse cx="155" cy="183" rx="18" ry="10" fill="rgba(255,255,255,0.06)" />
        <path
          d="M68 130 Q62 160 65 200 Q70 230 80 240 Q72 200 74 160Z"
          fill="rgba(0,0,0,0.25)"
        />
        <rect width="240" height="340" fill="url(#vig)" opacity="0.7" />
        <rect
          width="240"
          height="340"
          fill="rgba(180,170,160,0.04)"
          filter="url(#grain)"
        />
      </svg>
      <div className="cf-label">Портрет</div>
    </div>
  );
}
