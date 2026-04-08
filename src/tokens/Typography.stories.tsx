import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

interface TypeStyle {
  name: string;
  description: string;
  size: string;
  weight: string;
  lineHeight: string;
  tracking?: string;
  font: "heading" | "body";
  sample: string;
  style: React.CSSProperties;
}

const display: TypeStyle[] = [
  {
    name: "Display",
    description: "64px · Medium · −0.64px",
    size: "64px",
    weight: "500",
    lineHeight: "1.1",
    tracking: "-0.64px",
    font: "heading",
    sample: "Design that scales",
    style: { fontFamily: "var(--font-heading)", fontSize: "64px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.64px" },
  },
  {
    name: "Heading 1",
    description: "48px · Medium · −0.48px",
    size: "48px",
    weight: "500",
    lineHeight: "1.1",
    tracking: "-0.48px",
    font: "heading",
    sample: "Design that scales",
    style: { fontFamily: "var(--font-heading)", fontSize: "48px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.48px" },
  },
  {
    name: "Heading 2",
    description: "36px · Medium · −0.36px",
    size: "36px",
    weight: "500",
    lineHeight: "1.1",
    tracking: "-0.36px",
    font: "heading",
    sample: "Design that scales",
    style: { fontFamily: "var(--font-heading)", fontSize: "36px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.36px" },
  },
  {
    name: "Heading 3",
    description: "28px · Medium",
    size: "28px",
    weight: "500",
    lineHeight: "1.2",
    font: "heading",
    sample: "Design that scales",
    style: { fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 500, lineHeight: 1.2 },
  },
  {
    name: "Heading 4",
    description: "22px · Medium",
    size: "22px",
    weight: "500",
    lineHeight: "1.2",
    font: "heading",
    sample: "Design that scales",
    style: { fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 500, lineHeight: 1.2 },
  },
];

const body: TypeStyle[] = [
  {
    name: "Body Large",
    description: "20px · Regular · 1.4",
    size: "20px",
    weight: "400",
    lineHeight: "1.4",
    font: "body",
    sample: "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.",
    style: { fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 400, lineHeight: 1.4 },
  },
  {
    name: "Body",
    description: "16px · Regular · 1.4",
    size: "16px",
    weight: "400",
    lineHeight: "1.4",
    font: "body",
    sample: "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.",
    style: { fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, lineHeight: 1.4 },
  },
  {
    name: "Body Small",
    description: "14px · Regular · 1.4",
    size: "14px",
    weight: "400",
    lineHeight: "1.4",
    font: "body",
    sample: "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.",
    style: { fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, lineHeight: 1.4 },
  },
];

const ui: TypeStyle[] = [
  {
    name: "Label Large",
    description: "20px · Medium · −0.2px",
    size: "20px",
    weight: "500",
    lineHeight: "1.1",
    tracking: "-0.2px",
    font: "heading",
    sample: "View case study",
    style: { fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.2px" },
  },
  {
    name: "Label",
    description: "16px · Medium · 1.28px",
    size: "16px",
    weight: "500",
    lineHeight: "1.2",
    tracking: "1.28px",
    font: "heading",
    sample: "WORK · ABOUT · RESUME",
    style: { fontFamily: "var(--font-heading)", fontSize: "16px", fontWeight: 500, lineHeight: 1.2, letterSpacing: "1.28px" },
  },
  {
    name: "Label Small",
    description: "12px · Medium · 2px",
    size: "12px",
    weight: "500",
    lineHeight: "1.2",
    tracking: "2px",
    font: "heading",
    sample: "CONTENTS · SECTION",
    style: { fontFamily: "var(--font-heading)", fontSize: "12px", fontWeight: 500, lineHeight: 1.2, letterSpacing: "2px" },
  },
  {
    name: "Metadata",
    description: "20px · Medium · 1.4",
    size: "20px",
    weight: "500",
    lineHeight: "1.4",
    font: "heading",
    sample: "Acme Corp · 2024",
    style: { fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 500, lineHeight: 1.4 },
  },
];

function TypeRow({ style }: { style: TypeStyle }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: "2rem",
        alignItems: "baseline",
        padding: "1.5rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div>
        <p style={{ fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 500, color: "#fff", margin: 0 }}>
          {style.name}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: "4px 0 0" }}>
          {style.description}
        </p>
      </div>
      <p style={{ ...style.style, color: "#fff", margin: 0 }}>
        {style.sample}
      </p>
    </div>
  );
}

function Section({ title, styles }: { title: string; styles: TypeStyle[] }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p style={{
        fontFamily: "var(--font-heading)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "2px",
        color: "#33fab3",
        textTransform: "uppercase",
        margin: "0 0 0.5rem",
      }}>
        {title}
      </p>
      <div>
        {styles.map((s) => <TypeRow key={s.name} style={s} />)}
      </div>
    </div>
  );
}

function TypographyDoc() {
  return (
    <div style={{ padding: "2rem", maxWidth: "960px" }}>
      <Section title="Display & Headings" styles={display} />
      <Section title="Body" styles={body} />
      <Section title="UI & Labels" styles={ui} />
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Typography",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;

export const All: StoryObj = {
  render: () => <TypographyDoc />,
};
