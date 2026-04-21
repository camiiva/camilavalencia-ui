import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  args: { placeholder: "Write something…" },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: "Message", placeholder: "Your message here…" } };
export const WithHelper: Story = { args: { label: "Bio", helper: "Max 200 characters.", placeholder: "Tell us about yourself…" } };
export const WithError: Story = { args: { label: "Message", error: "This field is required.", value: "", onChange: () => {} } };
export const Disabled: Story = { args: { label: "Disabled", disabled: true, value: "Can't edit this.", onChange: () => {} } };
