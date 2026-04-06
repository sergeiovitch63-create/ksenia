export function PregnancyCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="3" onClick={onClick}>
      <svg
        className="cf-photo"
        viewBox="0 0 240 340"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="preg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2824" />
            <stop offset="100%" stopColor="#141210" />
          </linearGradient>
          <radialGradient id="preg-window" cx="80%" cy="30%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="preg-dress" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e0d8d0" />
            <stop offset="40%" stopColor="#c8c0b8" />
            <stop offset="100%" stopColor="#8a8278" />
          </linearGradient>
        </defs>
        <rect width="240" height="340" fill="url(#preg-bg)" />
        <rect width="240" height="340" fill="url(#preg-window)" />
        <path
          d="M60 340 Q65 280 72 240 Q80 215 120 210 Q160 215 168 240 Q175 280 180 340Z"
          fill="#c0b8b0"
        />
        <path
          d="M85 250 Q120 245 155 250 Q145 290 120 295 Q95 290 85 250Z"
          fill="rgba(255,255,255,0.08)"
        />
        <path
          d="M88 230 Q95 215 120 212 Q145 215 152 230 Q158 255 155 280 Q140 295 120 297 Q100 295 85 280 Q82 255 88 230Z"
          fill="#b8b0a8"
        />
        <ellipse cx="120" cy="262" rx="38" ry="32" fill="rgba(255,255,255,0.12)" />
        <path
          d="M88 258 Q95 250 108 255 Q102 262 96 268 Q90 264 88 258Z"
          fill="#c0b8b0"
        />
        <path
          d="M152 258 Q145 250 132 255 Q138 262 144 268 Q150 264 152 258Z"
          fill="#c0b8b0"
        />
        <rect x="110" y="196" width="20" height="22" rx="5" fill="#c0b8b0" />
        <ellipse cx="120" cy="172" rx="30" ry="34" fill="#c8c0b8" />
        <path
          d="M90 162 Q93 140 120 135 Q147 140 150 162"
          fill="#141212"
        />
        <path
          d="M150 162 Q155 180 150 205 Q146 192 143 175Z"
          fill="#141212"
        />
        <path
          d="M90 162 Q85 180 90 205 Q94 192 97 175Z"
          fill="#141212"
        />
        <ellipse cx="110" cy="168" rx="7.5" ry="5.5" fill="#2c2825" />
        <ellipse cx="130" cy="168" rx="7.5" ry="5.5" fill="#2c2825" />
        <ellipse cx="110" cy="168" rx="2.8" ry="2.8" fill="#080808" />
        <ellipse cx="130" cy="168" rx="2.8" ry="2.8" fill="#080808" />
        <ellipse cx="111" cy="166" rx="1.3" ry="1" fill="white" opacity="0.8" />
        <ellipse cx="131" cy="166" rx="1.3" ry="1" fill="white" opacity="0.8" />
        <path
          d="M118 172 Q115 180 112 184 Q118 187 122 187 Q126 187 128 184 Q125 180 122 172Z"
          fill="rgba(0,0,0,0.1)"
        />
        <path
          d="M109 192 Q120 198 131 192"
          stroke="#8a7870"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="120" cy="240" rx="6" ry="4" fill="rgba(255,255,255,0.05)" />
        <rect width="240" height="340" fill="url(#vig)" opacity="0.65" />
        <rect
          width="240"
          height="340"
          fill="rgba(180,170,160,0.04)"
          filter="url(#grain)"
        />
      </svg>
      <div className="cf-label">Беременность</div>
    </div>
  );
}
