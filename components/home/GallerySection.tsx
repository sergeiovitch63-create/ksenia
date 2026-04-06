import { Reveal } from "@/components/Reveal";

export function GallerySection() {
  return (
    <section className="sec" id="galerie">
      <Reveal className="reveal">
        <span className="sec-label">Портфолио</span>
        <h2>Моменты в чёрно-белом</h2>
      </Reveal>
      <Reveal className="gallery-grid reveal">
        <div className="gallery-item">
          <svg
            className="g-ph"
            viewBox="0 0 400 560"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="st-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0e0c0a" />
              </linearGradient>
              <radialGradient id="st-light" cx="30%" cy="15%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="560" fill="url(#st-bg)" />
            <rect width="400" height="560" fill="url(#st-light)" />
            <rect x="0" y="100" width="130" height="460" fill="#181614" opacity="0.8" />
            <rect x="270" y="80" width="130" height="480" fill="#181614" opacity="0.8" />
            <rect x="15" y="130" width="35" height="45" fill="rgba(255,255,255,0.04)" />
            <rect x="65" y="130" width="35" height="45" fill="rgba(255,255,255,0.03)" />
            <rect x="15" y="200" width="35" height="45" fill="rgba(255,255,255,0.05)" />
            <rect x="65" y="200" width="35" height="45" fill="rgba(255,255,255,0.02)" />
            <rect x="285" y="120" width="35" height="45" fill="rgba(255,255,255,0.04)" />
            <rect x="335" y="120" width="35" height="45" fill="rgba(255,255,255,0.03)" />
            <rect y="420" width="400" height="140" fill="#161412" />
            <rect y="430" width="400" height="2" fill="rgba(255,255,255,0.05)" />
            <path
              d="M168 560 Q162 440 165 370 Q172 340 200 336 Q228 340 235 370 Q238 440 232 560Z"
              fill="#1a1816"
            />
            <path
              d="M165 375 Q180 365 200 363 Q220 365 235 375 L238 560 L162 560Z"
              fill="#161412"
            />
            <path
              d="M182 370 Q192 360 200 362 Q200 375 195 380 Q190 378 182 370Z"
              fill="#1e1c1a"
            />
            <path
              d="M218 370 Q208 360 200 362 Q200 375 205 380 Q210 378 218 370Z"
              fill="#1e1c1a"
            />
            <path
              d="M165 390 Q148 385 135 392"
              stroke="#c0b8b0"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M178 340 Q188 334 200 333 Q212 334 222 340 L224 370 Q210 378 200 379 Q190 378 176 370Z"
              fill="#202020"
            />
            <rect x="192" y="318" width="16" height="20" rx="4" fill="#c0b8b0" />
            <ellipse cx="200" cy="292" rx="34" ry="38" fill="#c8c0b8" />
            <path
              d="M166 280 Q169 256 200 250 Q231 256 234 280"
              fill="#111010"
            />
            <path
              d="M234 280 Q238 295 234 320 Q230 305 228 288Z"
              fill="#111010"
            />
            <path
              d="M166 280 Q162 295 166 320 Q170 305 172 288Z"
              fill="#111010"
            />
            <ellipse cx="200" cy="252" rx="20" ry="12" fill="#111010" />
            <ellipse cx="188" cy="288" rx="9" ry="7" fill="#2c2825" />
            <ellipse cx="212" cy="288" rx="9" ry="7" fill="#2c2825" />
            <ellipse cx="188" cy="288" rx="3.5" ry="3.5" fill="#080808" />
            <ellipse cx="212" cy="288" rx="3.5" ry="3.5" fill="#080808" />
            <ellipse cx="189" cy="285" rx="1.8" ry="1.4" fill="white" opacity="0.8" />
            <ellipse cx="213" cy="285" rx="1.8" ry="1.4" fill="white" opacity="0.8" />
            <path
              d="M178 280 Q188 274 198 277"
              stroke="#1a1816"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M202 277 Q212 274 222 280"
              stroke="#1a1816"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M197 293 Q194 302 191 306 Q198 309 203 309 Q208 309 205 306 Q202 302 203 293Z"
              fill="rgba(0,0,0,0.1)"
            />
            <path
              d="M187 316 Q200 321 213 316 Q205 324 200 325 Q195 324 187 316Z"
              fill="#7a6860"
            />
            <path
              d="M188 315 Q200 320 212 315"
              stroke="#6a5850"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M168 430 Q162 460 165 520 Q182 515 200 516 Q218 515 235 520 Q238 460 232 430Z"
              fill="rgba(26,24,22,0.4)"
            />
            <rect width="400" height="560" fill="url(#vig)" opacity="0.75" />
            <rect
              width="400"
              height="560"
              fill="rgba(180,170,160,0.04)"
              filter="url(#grain)"
            />
          </svg>
          <div className="g-overlay">
            <span className="g-tag">Уличная съёмка</span>
          </div>
        </div>

        <div className="gallery-item">
          <svg
            className="g-ph"
            viewBox="0 0 200 280"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="ind-bg" cx="60%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#3a3530" />
                <stop offset="100%" stopColor="#0d0c0b" />
              </radialGradient>
            </defs>
            <rect width="200" height="280" fill="url(#ind-bg)" />
            <path
              d="M140 0 L200 0 L200 280 L120 280 Q160 180 140 0Z"
              fill="rgba(255,255,255,0.06)"
            />
            <path
              d="M30 280 L35 195 Q60 182 100 180 Q140 182 165 195 L170 280Z"
              fill="#1a1816"
            />
            <path
              d="M35 200 Q55 190 80 192"
              stroke="#b0a8a0"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="90" y="167" width="20" height="18" rx="4" fill="#c0b8b0" />
            <ellipse cx="102" cy="140" rx="38" ry="42" fill="#c8c0b8" />
            <path
              d="M64 128 Q67 104 102 98 Q137 104 140 128"
              fill="#101010"
            />
            <path
              d="M64 128 Q58 148 62 185 Q68 170 70 150Z"
              fill="#101010"
            />
            <path
              d="M140 128 Q146 148 142 185 Q136 170 134 150Z"
              fill="#101010"
            />
            <path
              d="M64 128 Q55 155 58 200"
              stroke="#0e0e0e"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="90" cy="138" rx="9" ry="7" fill="#2c2825" />
            <ellipse cx="112" cy="136" rx="9" ry="7" fill="#2c2825" />
            <ellipse cx="90" cy="138" rx="3.5" ry="3.5" fill="#060606" />
            <ellipse cx="112" cy="136" rx="3.5" ry="3.5" fill="#060606" />
            <ellipse cx="91" cy="135" rx="1.8" ry="1.4" fill="white" opacity="0.75" />
            <ellipse cx="113" cy="133" rx="1.8" ry="1.4" fill="white" opacity="0.75" />
            <path
              d="M80 128 Q90 122 100 125"
              stroke="#181615"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M104 124 Q114 121 122 126"
              stroke="#181615"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M98 143 Q95 153 92 157 Q98 160 103 157 Q107 153 105 143Z"
              fill="rgba(0,0,0,0.12)"
            />
            <path
              d="M88 165 Q102 171 115 165 Q107 174 102 175 Q97 174 88 165Z"
              fill="#7a6860"
            />
            <path
              d="M58 182 Q78 174 100 173 Q122 174 142 182"
              stroke="rgba(192,184,176,0.4)"
              strokeWidth="1.2"
              fill="none"
            />
            <rect width="200" height="280" fill="url(#vig)" opacity="0.7" />
            <rect
              width="200"
              height="280"
              fill="rgba(180,170,160,0.04)"
              filter="url(#grain)"
            />
          </svg>
          <div className="g-overlay">
            <span className="g-tag">Индивидуальная</span>
          </div>
        </div>

        <div className="gallery-item">
          <svg
            className="g-ph"
            viewBox="0 0 200 280"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="p2-bg" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#454038" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
            </defs>
            <rect width="200" height="280" fill="url(#p2-bg)" />
            <ellipse cx="100" cy="310" rx="110" ry="70" fill="#1a1816" />
            <rect x="87" y="212" width="26" height="40" rx="6" fill="#bab2aa" />
            <ellipse cx="100" cy="175" rx="68" ry="76" fill="#c8c0b8" />
            <path
              d="M32 155 Q36 108 100 100 Q164 108 168 155"
              fill="#0e0e0e"
            />
            <path
              d="M32 155 Q24 175 28 225 Q34 205 38 180Z"
              fill="#0e0e0e"
            />
            <path
              d="M168 155 Q176 175 172 225 Q166 205 162 180Z"
              fill="#0e0e0e"
            />
            <ellipse cx="76" cy="170" rx="20" ry="13" fill="#2c2825" opacity="0.4" />
            <ellipse cx="124" cy="170" rx="20" ry="13" fill="#2c2825" opacity="0.4" />
            <ellipse cx="76" cy="169" rx="16" ry="10" fill="#e8e4e0" />
            <ellipse cx="124" cy="169" rx="16" ry="10" fill="#e8e4e0" />
            <ellipse cx="76" cy="170" rx="11" ry="10" fill="#3a3530" />
            <ellipse cx="124" cy="170" rx="11" ry="10" fill="#3a3530" />
            <ellipse cx="76" cy="170" rx="6" ry="6" fill="#080808" />
            <ellipse cx="124" cy="170" rx="6" ry="6" fill="#080808" />
            <ellipse cx="79" cy="166" rx="3" ry="2.5" fill="white" opacity="0.85" />
            <ellipse cx="127" cy="166" rx="3" ry="2.5" fill="white" opacity="0.85" />
            <path
              d="M56 162 Q68 154 90 160"
              stroke="#0c0c0c"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M110 160 Q132 154 144 162"
              stroke="#0c0c0c"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M52 155 Q76 146 96 150"
              stroke="#1a1816"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M104 150 Q124 146 148 155"
              stroke="#1a1816"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M96 178 Q90 194 84 200 Q94 206 100 205 Q106 206 116 200 Q110 194 104 178Z"
              fill="rgba(0,0,0,0.1)"
            />
            <path
              d="M76 214 Q88 208 100 210 Q112 208 124 214 Q112 226 100 228 Q88 226 76 214Z"
              fill="#8a7870"
            />
            <path
              d="M78 214 Q100 220 122 214"
              stroke="#7a6860"
              strokeWidth="0.8"
              fill="none"
            />
            <rect width="200" height="280" fill="url(#vig)" opacity="0.8" />
            <rect
              width="200"
              height="280"
              fill="rgba(180,170,160,0.04)"
              filter="url(#grain)"
            />
          </svg>
          <div className="g-overlay">
            <span className="g-tag">Портрет</span>
          </div>
        </div>

        <div className="gallery-item">
          <svg
            className="g-ph"
            viewBox="0 0 200 280"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="ls2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#222018" />
                <stop offset="100%" stopColor="#0c0c0a" />
              </linearGradient>
            </defs>
            <rect width="200" height="280" fill="url(#ls2-bg)" />
            <circle cx="30" cy="50" r="20" fill="rgba(255,255,255,0.03)" />
            <circle cx="170" cy="30" r="28" fill="rgba(255,255,255,0.02)" />
            <circle cx="160" cy="240" r="22" fill="rgba(255,255,255,0.03)" />
            <circle cx="40" cy="230" r="18" fill="rgba(255,255,255,0.02)" />
            <path
              d="M20 280 L22 180 Q38 168 55 170 Q70 172 72 185 L70 280Z"
              fill="#1a1816"
            />
            <ellipse cx="47" cy="155" rx="22" ry="25" fill="#b8b0a8" />
            <path
              d="M25 144 Q28 128 47 124 Q66 128 69 144"
              fill="#101010"
            />
            <ellipse cx="40" cy="152" rx="6" ry="5" fill="#2c2825" />
            <ellipse cx="54" cy="150" rx="6" ry="5" fill="#2c2825" />
            <ellipse cx="40" cy="152" rx="2.2" ry="2.2" fill="#080808" />
            <ellipse cx="54" cy="150" rx="2.2" ry="2.2" fill="#080808" />
            <path
              d="M128 280 Q125 200 130 175 Q140 160 158 158 Q175 160 180 175 Q185 200 182 280Z"
              fill="#1c1a18"
            />
            <ellipse cx="155" cy="143" rx="25" ry="27" fill="#c8c0b8" />
            <path
              d="M130 132 Q133 113 155 109 Q177 113 180 132"
              fill="#0e0e0e"
            />
            <path
              d="M130 132 Q126 148 128 175 Q132 160 134 145Z"
              fill="#0e0e0e"
            />
            <ellipse cx="145" cy="140" rx="7" ry="5.5" fill="#2c2825" />
            <ellipse cx="163" cy="140" rx="7" ry="5.5" fill="#2c2825" />
            <ellipse cx="145" cy="140" rx="2.5" ry="2.5" fill="#080808" />
            <ellipse cx="163" cy="140" rx="2.5" ry="2.5" fill="#080808" />
            <path
              d="M69 148 Q100 135 130 142"
              stroke="rgba(180,170,160,0.15)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="100" cy="142" rx="22" ry="18" fill="rgba(255,255,255,0.025)" />
            <rect width="200" height="280" fill="url(#vig)" opacity="0.8" />
            <rect
              width="200"
              height="280"
              fill="rgba(180,170,160,0.04)"
              filter="url(#grain)"
            />
          </svg>
          <div className="g-overlay">
            <span className="g-tag">Лав-стори</span>
          </div>
        </div>

        <div className="gallery-item">
          <svg
            className="g-ph"
            viewBox="0 0 200 280"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="prg2-bg" cx="70%" cy="20%" r="70%">
                <stop offset="0%" stopColor="#3a3530" />
                <stop offset="100%" stopColor="#0e0c0a" />
              </radialGradient>
              <radialGradient id="prg2-light" cx="80%" cy="15%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="200" height="280" fill="url(#prg2-bg)" />
            <rect width="200" height="280" fill="url(#prg2-light)" />
            <path
              d="M55 280 Q52 220 58 190 Q68 170 100 165 Q128 170 138 195 Q145 225 140 280Z"
              fill="#b8b0a8"
            />
            <path
              d="M75 200 Q72 220 75 245 Q88 262 100 263 Q115 262 125 248 Q132 230 130 200 Q118 188 100 186 Q82 188 75 200Z"
              fill="#c0b8b0"
            />
            <ellipse cx="105" cy="230" rx="28" ry="24" fill="rgba(255,255,255,0.12)" />
            <path
              d="M60 218 Q68 210 80 215"
              stroke="#c0b8b0"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M140 218 Q132 210 120 215"
              stroke="#c0b8b0"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="93" y="152" width="14" height="18" rx="4" fill="#bab2a8" />
            <ellipse cx="100" cy="132" rx="28" ry="32" fill="#c8c0b8" />
            <path
              d="M72 122 Q75 102 100 97 Q125 102 128 122"
              fill="#0e0e0e"
            />
            <path
              d="M128 122 Q132 136 128 158 Q124 143 122 128Z"
              fill="#0e0e0e"
            />
            <ellipse cx="100" cy="98" rx="18" ry="10" fill="#0e0e0e" />
            <ellipse cx="89" cy="129" rx="8" ry="6" fill="#2c2825" />
            <ellipse cx="89" cy="129" rx="3" ry="3" fill="#060606" />
            <ellipse cx="90" cy="127" rx="1.5" ry="1.2" fill="white" opacity="0.7" />
            <path
              d="M87 145 Q100 151 108 147"
              stroke="#7a6860"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <rect width="200" height="280" fill="url(#vig)" opacity="0.65" />
            <rect
              width="200"
              height="280"
              fill="rgba(180,170,160,0.04)"
              filter="url(#grain)"
            />
          </svg>
          <div className="g-overlay">
            <span className="g-tag">Беременность</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
