import type { Meta, StoryObj } from "@storybook/react";
import TableOfContents from "./TableOfContents";

const meta: Meta<typeof TableOfContents> = {
  title: "Components/TableOfContents",
  component: TableOfContents,
  parameters: { backgrounds: { default: "light" } },
  args: {
    sections: [
      { id: "research", title: "Research & Discovery" },
      { id: "ideation", title: "Ideation" },
      { id: "design", title: "Design" },
      { id: "testing", title: "Testing & Iteration" },
      { id: "outcome", title: "Outcome" },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

export const Default: Story = {};
