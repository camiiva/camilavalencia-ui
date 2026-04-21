import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  args: { alt: "Camila Valencia" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {};
export const CustomInitials: Story = { args: { initials: "CV" } };
export const WithImage: Story = { args: { src: "https://i.pravatar.cc/150?img=47" } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Avatar size="xs" alt="Camila Valencia" />
      <Avatar size="sm" alt="Camila Valencia" />
      <Avatar size="md" alt="Camila Valencia" />
      <Avatar size="lg" alt="Camila Valencia" />
      <Avatar size="xl" alt="Camila Valencia" />
    </div>
  ),
};
