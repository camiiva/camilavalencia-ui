import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { label: "Accept terms" } };
export const Checked: Story = { args: { label: "Accept terms", checked: true, onChange: () => {} } };
export const Indeterminate: Story = { args: { label: "Select all", indeterminate: true } };
export const Disabled: Story = { args: { label: "Disabled option", disabled: true } };
export const DisabledChecked: Story = { args: { label: "Disabled checked", disabled: true, checked: true, onChange: () => {} } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C (disabled)" disabled />
    </div>
  ),
};
