import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const options = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "product", label: "Product" },
  { value: "other", label: "Other", disabled: true },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: { options },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

function Controlled(props: Partial<React.ComponentProps<typeof Dropdown>>) {
  const [value, setValue] = useState("");
  return <Dropdown options={options} value={value} onChange={setValue} {...props} />;
}

export const Default: Story = { render: () => <Controlled placeholder="Pick a department…" /> };
export const WithLabel: Story = { render: () => <Controlled label="Department" placeholder="Pick one…" /> };
export const WithHelper: Story = { render: () => <Controlled label="Department" helper="Choose the team you work in." placeholder="Pick one…" /> };
export const WithError: Story = { render: () => <Controlled label="Department" error="Please select a department." /> };
export const Preselected: Story = {
  render: () => {
    const [value, setValue] = useState("engineering");
    return <Dropdown options={options} value={value} onChange={setValue} label="Department" />;
  },
};
export const Disabled: Story = { args: { label: "Department", disabled: true, placeholder: "Can't pick" } };
export const SmallSize: Story = { render: () => <Controlled label="Department" dropdownSize="sm" placeholder="Small…" /> };

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const manyOptions = Array.from({ length: 20 }, (_, i) => ({ value: String(i), label: `Option ${i + 1}` }));
    return <Dropdown options={manyOptions} value={value} onChange={setValue} label="Choose one" placeholder="Scroll to explore…" />;
  },
};
