import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "New" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { variant: "default" } };
export const Accent: Story = { args: { variant: "accent" } };
export const Muted: Story = { args: { variant: "muted" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="default" size="sm">Small</Badge>
    </div>
  ),
};
