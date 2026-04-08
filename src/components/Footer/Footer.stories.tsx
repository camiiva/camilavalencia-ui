import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "hello@yoursite.com", href: "mailto:hello@yoursite.com" },
];

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
  args: { links },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Dark: Story = {};

export const Light: Story = {
  args: { light: true },
  parameters: { backgrounds: { default: "light" } },
};
