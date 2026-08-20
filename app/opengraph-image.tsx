import { ImageResponse } from "next/og";

export const alt = "Caelan — AI-powered care management software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf";

// A `fonts` array replaces Satori's default font set rather than adding to it,
// so this single face is used for every element on the card — hence no per-element
// fontFamily or fontWeight below, which Satori would ignore anyway. If the fetch
// fails the card still renders, just in Satori's default font.
async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(FONT_URL);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const font = await loadFont();

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
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ fontSize: 46, letterSpacing: "-1px", marginRight: "18px" }}
          >
            Caelan
          </div>
          <div style={{ fontSize: 24, color: "#5EEAD4" }}>AI that cares</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 66,
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
      fonts: font
        ? [{ name: "Poppins", data: font, weight: 700 as const, style: "normal" as const }]
        : undefined,
    },
  );
}
