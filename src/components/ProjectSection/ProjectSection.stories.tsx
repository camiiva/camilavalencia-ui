import type { Meta, StoryObj } from "@storybook/react";
import ProjectSection from "./ProjectSection";

const meta: Meta<typeof ProjectSection> = {
  title: "Components/ProjectSection",
  component: ProjectSection,
  parameters: { backgrounds: { default: "light" } },
  args: {
    sectionId: "research",
    title: "Research & Discovery",
    body: "We started with in-depth user interviews and usability tests to understand pain points in the current flow. This revealed three key friction areas that informed our redesign direction.",
    image: "https://placehold.co/1106x600/185259/33fab3?text=Section+Image",
    imageAlt: "Research findings board",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectSection>;

export const Default: Story = {};

export const WithRichBody: Story = {
  args: {
    body: (
      <ul style={{ paddingLeft: "1.25rem", listStyle: "disc" }}>
        <li>12 user interviews conducted over 2 weeks</li>
        <li>3 key friction areas identified</li>
        <li>Competitive analysis of 6 similar products</li>
      </ul>
    ),
  },
};
