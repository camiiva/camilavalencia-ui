import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  parameters: { layout: "fullscreen" },
  args: {
    links: [
      { label: "WORK", href: "/" },
      { label: "ABOUT", href: "#about" },
      { label: "RESUME", href: "#resume" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};

export const WithLogo: Story = {
  args: {
    logo: <span style={{ fontFamily: "var(--font-heading)", color: "white", fontWeight: 700 }}>CV</span>,
  },
};
