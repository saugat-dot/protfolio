import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saugat Rauniyar – Full Stack Developer & AI Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
          }}
        >
          Saugat{" "}
          <span style={{ color: "#4d80ff" }}>Rauniyar</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#888",
            letterSpacing: "0",
          }}
        >
          Full Stack Developer · AI Enthusiast · CSE Student
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#555",
            marginTop: 8,
          }}
        >
          Building practical software and intelligent digital solutions.
        </div>
      </div>
    ),
    { ...size }
  );
}
