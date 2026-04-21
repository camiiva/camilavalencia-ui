import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Radio, { RadioGroup } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Unchecked: Story = { args: { label: "Option A", name: "demo" } };
export const Checked: Story = { args: { label: "Option A", name: "demo", checked: true, onChange: () => {} } };
export const Disabled: Story = { args: { label: "Disabled", name: "demo", disabled: true } };

export const Group: Story = {
  render: () => (
    <RadioGroup legend="Pick a plan">
      <Radio label="Starter" name="plan" defaultChecked />
      <Radio label="Pro" name="plan" />
      <Radio label="Enterprise" name="plan" />
      <Radio label="Unavailable" name="plan" disabled />
    </RadioGroup>
  ),
};
