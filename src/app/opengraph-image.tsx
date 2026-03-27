import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Randora — We Build Digital Products That Scale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a2e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          CAC Registered · Lagos, Nigeria
        </div>
        <div
          style={{
            fontSize: "80px",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          Randora.
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "700px",
            lineHeight: 1.5,
            fontFamily: "sans-serif",
            fontWeight: 300,
          }}
        >
          We build secure, AI-powered digital products for startups and
          enterprises across Africa and beyond.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            gap: "12px",
          }}
        >
          {["7 Specialists", "40+ Yrs Experience", "CAC Registered"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  fontSize: "14px",
                  padding: "8px 18px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "sans-serif",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
