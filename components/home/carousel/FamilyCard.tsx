export function FamilyCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="cf-card" data-i="1" onClick={onClick}>
      <svg
        className="cf-photo"
        viewBox="0 0 240 340"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="f1bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2824" />
            <stop offset="50%" stopColor="#1e1c18" />
            <stop offset="100%" stopColor="#0e0d0c" />
          </linearGradient>
          <radialGradient id="f1light" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="240" height="340" fill="url(#f1bg)" />
        <rect width="240" height="340" fill="url(#f1light)" />
        <rect y="270" width="240" height="70" fill="#181614" rx="0" />
        <path
          d="M42 340 L42 195 Q55 185 72 185 Q89 185 92 195 L92 340Z"
          fill="#252320"
        />
        <path
          d="M48 220 L48 300 Q60 310 76 300 L86 220 Q72 215 60 215Z"
          fill="#1a1918"
        />
        <ellipse cx="67" cy="170" rx="25" ry="28" fill="#c8c0b8" />
        <path
          d="M42 160 Q45 142 67 138 Q89 142 92 160 Q85 148 67 146 Q49 148 42 160Z"
          fill="#1c1a18"
        />
        <ellipse cx="58" cy="167" rx="7" ry="5" fill="#3a3530" />
        <ellipse cx="76" cy="167" rx="7" ry="5" fill="#3a3530" />
        <ellipse cx="58" cy="167" rx="2.5" ry="2.5" fill="#0c0b0a" />
        <ellipse cx="76" cy="167" rx="2.5" ry="2.5" fill="#0c0b0a" />
        <path
          d="M59 178 Q67 183 75 178"
          stroke="#8a7870"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M148 340 L148 195 Q162 182 180 182 Q198 182 200 195 L200 340Z"
          fill="#222020"
        />
        <path
          d="M150 210 Q165 205 180 205 Q195 205 198 210 L202 340 L148 340Z"
          fill="#1c1a18"
        />
        <ellipse cx="175" cy="166" rx="26" ry="30" fill="#c8c0b8" />
        <path
          d="M149 158 Q152 136 175 131 Q198 136 201 158"
          fill="#181616"
        />
        <path
          d="M149 158 Q145 185 147 220 Q150 210 152 190 Q151 170 149 158Z"
          fill="#181616"
        />
        <path
          d="M201 158 Q205 185 203 220 Q200 210 198 190 Q199 170 201 158Z"
          fill="#181616"
        />
        <ellipse cx="165" cy="162" rx="7" ry="5" fill="#3a3530" />
        <ellipse cx="185" cy="162" rx="7" ry="5" fill="#3a3530" />
        <ellipse cx="165" cy="162" rx="2.5" ry="2.5" fill="#0c0b0a" />
        <ellipse cx="185" cy="162" rx="2.5" ry="2.5" fill="#0c0b0a" />
        <path
          d="M161 176 Q175 183 189 176"
          stroke="#8a7870"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M103 340 L103 230 Q115 222 127 222 Q139 222 137 230 L137 340Z"
          fill="#202020"
        />
        <ellipse cx="120" cy="212" rx="20" ry="22" fill="#c8c0b8" />
        <path
          d="M100 205 Q103 192 120 189 Q137 192 140 205"
          fill="#1c1a18"
        />
        <ellipse cx="112" cy="208" rx="6" ry="4.5" fill="#3a3530" />
        <ellipse cx="128" cy="208" rx="6" ry="4.5" fill="#3a3530" />
        <ellipse cx="112" cy="208" rx="2" ry="2" fill="#0c0b0a" />
        <ellipse cx="128" cy="208" rx="2" ry="2" fill="#0c0b0a" />
        <path
          d="M111 218 Q120 226 129 218"
          stroke="#7a6860"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M92 230 Q107 218 120 222"
          stroke="#b8b0a8"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M148 230 Q133 218 120 222"
          stroke="#b8b0a8"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <rect width="240" height="340" fill="url(#vig)" opacity="0.75" />
        <rect
          width="240"
          height="340"
          fill="rgba(180,170,160,0.03)"
          filter="url(#grain)"
        />
      </svg>
      <div className="cf-label">Семья</div>
    </div>
  );
}
