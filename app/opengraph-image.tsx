import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#04060B",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 30%, rgba(61,107,255,0.25), transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
          }}
        >
          STRAIT WORKS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#9BA3B5",
            letterSpacing: "0.02em",
          }}
        >
          Web Design · Shopify · Brand Identity
        </div>
      </div>
    ),
    { ...size }
  );
}
