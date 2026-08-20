import { ImageResponse } from "next/og";

export const alt = "Caelan — AI-powered care management software";
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
    size,
  );
}
