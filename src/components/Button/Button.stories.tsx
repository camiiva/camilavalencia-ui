import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    href: "#",
    children: "View case study",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary
export const Primary: Story = {
  args: { variant: "primary" },
};

export const PrimaryWithIcon: Story = {
  args: { variant: "primary", icon: <ArrowIcon /> },
};

// Secondary
export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const SecondaryWithIcon: Story = {
  args: { variant: "secondary", icon: <ArrowIcon /> },
};

// Tertiary
export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const TertiaryWithIcon: Story = {
  args: { variant: "tertiary", icon: <ArrowIcon /> },
};

// Tertiary no padding
export const TertiaryNoPadding: Story = {
  args: { variant: "tertiary-no-padding", children: "Learn more" },
};

export const TertiaryNoPaddingWithIcon: Story = {
  args: { variant: "tertiary-no-padding", children: "Learn more", icon: <ArrowIcon /> },
};

// All variants together
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "flex-start" }}>
      <Button href="#" variant="primary">Primary</Button>
      <Button href="#" variant="primary" icon={<ArrowIcon />}>Primary + icon</Button>
      <Button href="#" variant="secondary">Secondary</Button>
      <Button href="#" variant="secondary" icon={<ArrowIcon />}>Secondary + icon</Button>
      <Button href="#" variant="tertiary">Tertiary</Button>
      <Button href="#" variant="tertiary" icon={<ArrowIcon />}>Tertiary + icon</Button>
      <Button href="#" variant="tertiary-no-padding">Tertiary no padding</Button>
      <Button href="#" variant="tertiary-no-padding" icon={<ArrowIcon />}>Tertiary no padding + icon</Button>
    </div>
  ),
};
