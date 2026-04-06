export function ChildrenCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="4" onClick={onClick}>
      <svg
        className="cf-photo"
        viewBox="0 0 240 340"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ch-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3830" />
            <stop offset="50%" stopColor="#252320" />
            <stop offset="100%" stopColor="#0e0e0c" />
          </linearGradient>
          <radialGradient id="ch-sun" cx="60%" cy="10%" r="45%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="240" height="340" fill="url(#ch-bg)" />
        <rect y="220" width="240" height="120" fill="#181816" opacity="0.8" />
        <rect width="240" height="340" fill="url(#ch-sun)" />
        <path
          d="M88 340 Q92 270 105 250 Q115 238 125 240 Q135 242 140 255 Q148 275 148 340Z"
          fill="#222"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-3 120 280"
            to="3 120 280"
            dur="1.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1"
          />
        </path>
        <path
          d="M95 255 Q110 248 128 250 Q140 255 142 268 L138 300 Q120 306 102 300 L98 268Z"
          fill="#1c1a18"
        />
        <path
          d="M95 262 Q75 252 58 255"
          stroke="#c0b8b0"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M140 265 Q158 258 172 265"
          stroke="#c0b8b0"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="112" y="228" width="16" height="16" rx="4" fill="#c8c0b8" />
        <ellipse cx="120" cy="208" rx="32" ry="34" fill="#c8c0b8" />
        <path
          d="M88 197 Q90 175 120 170 Q150 175 152 197"
          fill="#1c1a18"
        />
        <path
          d="M88 197 Q84 188 86 178 Q90 184 95 190Z"
          fill="#1c1a18"
        />
        <path
          d="M152 197 Q156 188 154 178 Q150 184 145 190Z"
          fill="#1c1a18"
        />
        <path
          d="M115 170 Q120 162 125 170"
          stroke="#1c1a18"
          strokeWidth="4"
          fill="none"
        />
        <ellipse cx="106" cy="205" rx="11" ry="10" fill="#e8e4e0" />
        <ellipse cx="134" cy="205" rx="11" ry="10" fill="#e8e4e0" />
        <ellipse cx="106" cy="206" rx="8" ry="8" fill="#3a3530" />
        <ellipse cx="134" cy="206" rx="8" ry="8" fill="#3a3530" />
        <ellipse cx="106" cy="206" rx="4" ry="4" fill="#0a0908" />
        <ellipse cx="134" cy="206" rx="4" ry="4" fill="#0a0908" />
        <ellipse cx="108" cy="203" rx="2" ry="1.8" fill="white" opacity="0.9" />
        <ellipse cx="136" cy="203" rx="2" ry="1.8" fill="white" opacity="0.9" />
        <path
          d="M104 220 Q120 232 136 220 Q128 228 120 229 Q112 228 104 220Z"
          fill="#5a4a42"
        />
        <path
          d="M104 220 Q120 226 136 220"
          stroke="#7a6860"
          strokeWidth="1"
          fill="none"
        />
        <rect x="113" y="221" width="14" height="5" rx="1" fill="rgba(255,255,255,0.7)" />
        <ellipse cx="90" cy="216" rx="14" ry="8" fill="rgba(255,255,255,0.06)" />
        <ellipse cx="150" cy="216" rx="14" ry="8" fill="rgba(255,255,255,0.06)" />
        <rect width="240" height="340" fill="url(#vig)" opacity="0.6" />
        <rect
          width="240"
          height="340"
          fill="rgba(180,170,160,0.04)"
          filter="url(#grain)"
        />
      </svg>
      <div className="cf-label">Дети</div>
    </div>
  );
}
