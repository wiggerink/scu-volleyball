import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SCU Emlichheim Volleyball – 2. Bundesliga Pro Damen";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(120deg, #0a0a0a 0%, #1a1700 55%, #FFF001 160%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              padding: "10px 22px",
              background: "#FFF001",
              color: "#0a0a0a",
              borderRadius: 999,
              fontSize: 22,
              letterSpacing: 4,
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            2. Bundesliga Pro · Damen
          </div>
          <div style={{ fontSize: 22, opacity: 0.7, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>
            Saison 2025 / 26
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 110, fontWeight: 900, lineHeight: 1, letterSpacing: -3 }}>
            SCU Emlichheim
          </div>
          <div style={{ fontSize: 54, fontWeight: 900, lineHeight: 1, color: "#fff84d", letterSpacing: -2 }}>
            Volleyball. Heimat. Leidenschaft.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 26, opacity: 0.8 }}>scuvolleyball.de</div>
          <div style={{ display: "flex", gap: 28, fontSize: 22, opacity: 0.8 }}>
            <span>15 Mannschaften</span>
            <span>·</span>
            <span>120+ Jugend</span>
            <span>·</span>
            <span>30+ Jahre Bundesliga</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
