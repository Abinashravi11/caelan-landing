import { ImageResponse } from "next/og";

export const alt = "Caelan — AI-powered care management software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BOLD_FONT_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf";

// Satori ships only a 400-weight fallback, so fontWeight is ignored unless a
// bold face is supplied. If the fetch fails the card still renders, just not bold.
async function loadBoldFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(BOLD_FONT_URL);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const boldFont = await loadBoldFont();
  const boldFamily = boldFont ? "Poppins" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0B2230 0%, #14425A 55%, #1B5E70 100%)",
          fontFamily: "sans-serif",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontFamily: boldFamily,
              fontSize: 46,
              fontWeight: 700,
              letterSpacing: "-1px",
              marginRight: "18px",
            }}
          >
            Caelan
          </div>
          <div style={{ fontSize: 24, color: "#5EEAD4" }}>AI that cares</div>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: boldFamily,
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.15,
            marginTop: "44px",
            maxWidth: "940px",
          }}
        >
          AI-Powered Care Management Software
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#A8C4D2",
            marginTop: "36px",
          }}
        >
          Rostering · Care planning · eMAR · Compliance
        </div>
      </div>
    ),
    {
      ...size,
      fonts: boldFont
        ? [{ name: "Poppins", data: boldFont, weight: 700 as const, style: "normal" as const }]
        : undefined,
    },
  );
}
