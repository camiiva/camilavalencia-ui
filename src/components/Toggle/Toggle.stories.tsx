import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = { args: { label: "Notifications" } };
export const On: Story = { args: { label: "Notifications", checked: true, onChange: () => {} } };
export const Small: Story = { args: { label: "Small toggle", size: "sm" } };
export const Disabled: Story = { args: { label: "Disabled", disabled: true } };
export const DisabledOn: Story = { args: { label: "Disabled on", disabled: true, checked: true, onChange: () => {} } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Toggle label="Email notifications" defaultChecked />
      <Toggle label="Push notifications" />
      <Toggle label="Marketing emails" size="sm" defaultChecked />
    </div>
  ),
};
