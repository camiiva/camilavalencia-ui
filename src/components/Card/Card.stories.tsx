import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: { children: <p style={{ color: "white", margin: 0 }}>Card content goes here.</p> },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const Bordered: Story = { args: { variant: "bordered" } };
export const Flat: Story = { args: { variant: "flat" } };
export const NoPadding: Story = { args: { padding: "none" } };
export const LargePadding: Story = { args: { padding: "lg" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 400 }}>
      <Card variant="default">Default card</Card>
      <Card variant="bordered">Bordered card</Card>
      <Card variant="flat">Flat card</Card>
    </div>
  ),
};
