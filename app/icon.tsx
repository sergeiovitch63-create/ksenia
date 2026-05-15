import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 52,
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "-0.02em",
          paddingBottom: 4,
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
