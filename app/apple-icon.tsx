import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0c",
          color: "#c8a46a",
          fontFamily: "Georgia, serif",
          fontSize: 140,
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "-0.02em",
          paddingBottom: 12,
        }}
      >
        К
      </div>
    ),
    {
      ...size,
    }
  );
}
