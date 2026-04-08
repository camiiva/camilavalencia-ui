import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const colors = [
  { name: "Abyss",     value: "#071e21", style: { backgroundColor: "#071e21" } },
  { name: "Void",      value: "#0a2326", style: { backgroundColor: "#0a2326" } },
  { name: "Deep Sea",  value: "#0b3439", style: { backgroundColor: "#0b3439" } },
  { name: "Lagoon",    value: "#133e43", style: { backgroundColor: "#133e43" } },
  { name: "Tide",      value: "#185259", style: { backgroundColor: "#185259" } },
  { name: "Glow",      value: "#33fab3", style: { backgroundColor: "#33fab3" } },
  { name: "Mist",      value: "#cce1e4", style: { backgroundColor: "#cce1e4" } },
  { name: "Frost",     value: "#dbe9ea", style: { backgroundColor: "#dbe9ea" } },
  { name: "Cloud",     value: "#eff9fa", style: { backgroundColor: "#eff9fa" } },
];

function Swatch({ name, value, style }: { name: string; value: string; style: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "120px" }}>
      <div
        style={{
          ...style,
          height: "80px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "13px", color: "#fff", margin: 0 }}>
        {name}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
        {value}
      </p>
    </div>
  );
}

function ColorsDoc() {
  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {colors.map((c) => (
          <Swatch key={c.value} name={c.name} value={c.value} style={c.style} />
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Colors",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;

export const All: StoryObj = {
  render: () => <ColorsDoc />,
};
