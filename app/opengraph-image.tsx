import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: 80,
          background: "linear-gradient(135deg, #fff4ed 0%, #ffffff 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#d44a00", fontSize: 28, fontWeight: 600 }}>
          Token-Oriented Object Notation
        </div>
        <div style={{ marginTop: 24, fontSize: 68, fontWeight: 800, color: "#0a0a0b", lineHeight: 1.05 }}>
          Convert JSON to TOON
        </div>
        <div style={{ marginTop: 16, fontSize: 34, color: "#525252" }}>
          Cut LLM tokens by up to 60% — free &amp; private.
        </div>
      </div>
    ),
    size,
  );
}