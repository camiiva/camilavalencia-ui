import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

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

export const Default: Story = {};

export const CustomLabel: Story = {
  args: { children: "Get in touch" },
};

export const WithCustomClass: Story = {
  args: { className: "w-full", children: "Full width button" },
};
