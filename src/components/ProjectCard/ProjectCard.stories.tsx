import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  args: {
    title: "Redesigning the onboarding flow",
    description: "A complete overhaul of the user onboarding experience, reducing drop-off by 40% and increasing activation rate.",
    company: "Acme Corp",
    year: "2024",
    href: "#",
    image: "https://placehold.co/800x500/185259/33fab3?text=Project",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {};

export const Featured: Story = {
  args: { featured: true },
};

export const Compact: Story = {
  args: { compact: true },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomCta: Story = {
  args: { ctaLabel: "Read more" },
};
