export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="grayNoise"
          />
          <feBlend
            in="SourceGraphic"
            in2="grayNoise"
            mode="multiply"
            result="blend"
          />
          <feComponentTransfer in="blend">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        <filter id="soft-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="grayNoise"
          />
          <feComposite
            in="SourceGraphic"
            in2="grayNoise"
            operator="over"
          />
          <feBlend
            in="SourceGraphic"
            in2="grayNoise"
            mode="soft-light"
            result="blend"
          />
        </filter>
        <radialGradient id="vig" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
