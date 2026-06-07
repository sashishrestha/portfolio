import { useEffect, useRef } from "react";

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const map = (v, a, b, c, d) => c + ((clamp(v, a, b) - a) / (b - a)) * (d - c);

export default function TextPressure({
  text = "",
  flex = false,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = "currentColor",
  strokeColor = "#5227FF",
  minFontSize = 36,
  className = "",
}) {
  const spanRefs = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999 });

  const chars = [...text];

  useEffect(() => {
    const apply = () => {
      spanRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.hypot(
          mouse.current.x - (r.left + r.width / 2),
          mouse.current.y - (r.top + r.height / 2)
        );
        const p = 1 - clamp(dist / 250, 0, 1);

        const fvs = [];
        if (weight) fvs.push(`'wght' ${Math.round(map(p, 0, 1, 100, 900))}`);
        if (width) fvs.push(`'wdth' ${map(p, 0, 1, 75, 125).toFixed(1)}`);
        if (fvs.length) el.style.fontVariationSettings = fvs.join(", ");

        if (italic)
          el.style.fontStyle = `oblique ${map(p, 0, 1, 0, 12).toFixed(1)}deg`;
        if (alpha) el.style.opacity = map(p, 0, 1, 0.4, 1).toFixed(2);
        if (stroke) {
          el.style.webkitTextStrokeWidth = `${map(p, 0, 1, 0, 1.5).toFixed(2)}px`;
          el.style.webkitTextStrokeColor = strokeColor;
        }
      });
    };

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      apply();
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
      apply();
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [weight, width, italic, alpha, stroke, strokeColor]);

  const containerStyle = flex
    ? { display: "flex", flexWrap: "wrap", alignItems: "baseline" }
    : undefined;

  const colorStyle =
    textColor !== "currentColor" ? { color: textColor } : undefined;

  return (
    <span
      className={className}
      style={{ ...containerStyle, ...colorStyle }}
      aria-label={text.replace(/\n/g, " ")}
    >
      {chars.map((ch, i) =>
        ch === "\n" ? (
          flex ? (
            <span key={i} style={{ flexBasis: "100%", height: 0 }} />
          ) : (
            <br key={i} />
          )
        ) : (
          <span
            key={i}
            ref={(el) => (spanRefs.current[i] = el)}
            aria-hidden="true"
            style={{
              display: "inline-block",
              transition:
                "font-variation-settings 0.12s ease, font-style 0.12s ease, opacity 0.12s ease",
              whiteSpace: ch === " " ? "pre" : undefined,
            }}
          >
            {ch === " " ? " " : ch}
          </span>
        )
      )}
    </span>
  );
}
