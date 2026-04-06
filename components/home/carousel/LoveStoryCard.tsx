export function LoveStoryCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="2" onClick={onClick}>
      <svg
        className="cf-photo"
        viewBox="0 0 240 340"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ls-bg" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#1e1c18" />
            <stop offset="100%" stopColor="#0d0c0b" />
          </linearGradient>
          <radialGradient id="ls-light" cx="50%" cy="25%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="240" height="340" fill="url(#ls-bg)" />
        <rect width="240" height="340" fill="url(#ls-light)" />
        <circle cx="20" cy="60" r="18" fill="rgba(255,255,255,0.04)" />
        <circle cx="210" cy="40" r="24" fill="rgba(255,255,255,0.03)" />
        <circle cx="50" cy="300" r="15" fill="rgba(255,255,255,0.03)" />
        <circle cx="190" cy="280" r="20" fill="rgba(255,255,255,0.04)" />
        <circle cx="120" cy="310" r="25" fill="rgba(255,255,255,0.02)" />
        <path
          d="M50 340 L52 200 Q70 188 86 190 Q100 192 102 205 L100 340Z"
          fill="#1a1918"
          opacity="0.9"
        />
        <path
          d="M55 210 L55 310 Q72 318 88 310 L96 210 Q76 204 64 204Z"
          fill="#161514"
        />
        <ellipse cx="77" cy="175" rx="24" ry="27" fill="#bab2aa" />
        <path
          d="M53 165 Q56 148 77 144 Q98 148 101 165"
          fill="#141312"
        />
        <ellipse cx="68" cy="172" rx="6.5" ry="5" fill="#2c2825" />
        <ellipse cx="86" cy="172" rx="6.5" ry="5" fill="#2c2825" />
        <ellipse cx="68" cy="172" rx="2.2" ry="2.2" fill="#080808" />
        <ellipse cx="86" cy="172" rx="2.2" ry="2.2" fill="#080808" />
        <path
          d="M100 220 Q130 212 148 218"
          stroke="#b0a8a0"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M135 340 Q130 280 138 240 Q148 220 162 218 Q178 218 185 235 Q192 260 186 340Z"
          fill="#1c1a18"
        />
        <path
          d="M138 240 Q148 225 162 222 Q176 225 182 240 L180 340 L140 340Z"
          fill="#181716"
        />
        <ellipse cx="163" cy="192" rx="25" ry="28" fill="#c8c0b8" />
        <path
          d="M138 182 Q140 162 163 157 Q186 162 188 182"
          fill="#111010"
        />
        <path
          d="M188 182 Q192 195 188 210 Q185 198 183 185Z"
          fill="#111010"
        />
        <ellipse cx="154" cy="188" rx="7" ry="5.5" fill="#2c2825" />
        <ellipse cx="172" cy="188" rx="7" ry="5.5" fill="#2c2825" />
        <ellipse cx="154" cy="188" rx="2.5" ry="2.5" fill="#080808" />
        <ellipse cx="172" cy="188" rx="2.5" ry="2.5" fill="#080808" />
        <ellipse cx="155" cy="186" rx="1.2" ry="1" fill="white" opacity="0.7" />
        <ellipse cx="173" cy="186" rx="1.2" ry="1" fill="white" opacity="0.7" />
        <path
          d="M154 200 Q163 206 172 200 Q165 208 163 209 Q161 208 154 200Z"
          fill="#7a6860"
        />
        <rect width="240" height="340" fill="url(#vig)" opacity="0.8" />
        <rect
          width="240"
          height="340"
          fill="rgba(180,170,160,0.04)"
          filter="url(#grain)"
        />
      </svg>
      <div className="cf-label">Лав-стори</div>
    </div>
  );
}
