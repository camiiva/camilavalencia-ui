import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const options = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "other", label: "Other", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: { options },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: "Department", placeholder: "Pick one…" } };
export const WithHelper: Story = { args: { label: "Department", helper: "Choose your team.", placeholder: "Pick one…" } };
export const WithError: Story = { args: { label: "Department", error: "This field is required.", value: "", onChange: () => {} } };
export const Disabled: Story = { args: { label: "Department", disabled: true } };
export const Small: Story = { args: { label: "Department", selectSize: "sm", placeholder: "Pick one…" } };
