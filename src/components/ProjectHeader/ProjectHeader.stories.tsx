import type { Meta, StoryObj } from "@storybook/react";
import ProjectHeader from "./ProjectHeader";

const meta: Meta<typeof ProjectHeader> = {
  title: "Components/ProjectHeader",
  component: ProjectHeader,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Redesigning the onboarding flow",
    description:
      "A complete overhaul of the user onboarding experience, reducing drop-off by 40% and increasing activation rate across all platforms.",
    role: "Lead Product Designer",
    projectType: "Product Design",
    deliverables: ["Research", "UX Design", "UI Design", "Prototype"],
    client: "Acme Corp",
    backHref: "/",
    backLabel: "← Back to work",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectHeader>;

export const Default: Story = {};
