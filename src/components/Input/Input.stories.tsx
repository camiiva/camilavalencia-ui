import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "Type something…" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: "Email address", placeholder: "you@example.com", type: "email" } };
export const WithHelper: Story = { args: { label: "Username", helper: "Must be 3–20 characters.", placeholder: "your_handle" } };
export const WithError: Story = { args: { label: "Email address", error: "Please enter a valid email.", value: "not-an-email", onChange: () => {} } };
export const Disabled: Story = { args: { label: "Disabled", disabled: true, value: "Can't touch this", onChange: () => {} } };
export const SmallSize: Story = { args: { label: "Small input", inputSize: "sm", placeholder: "Small…" } };
