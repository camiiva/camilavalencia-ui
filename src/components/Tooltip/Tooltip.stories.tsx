import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [(Story) => <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Trigger = <button style={{ background: "none", border: "1px solid #33fab3", color: "#33fab3", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontFamily: "inherit" }}>Hover me</button>;

export const Top: Story = { args: { content: "Tooltip on top", placement: "top", children: Trigger } };
export const Bottom: Story = { args: { content: "Tooltip on bottom", placement: "bottom", children: Trigger } };
export const Left: Story = { args: { content: "Tooltip on left", placement: "left", children: Trigger } };
export const Right: Story = { args: { content: "Tooltip on right", placement: "right", children: Trigger } };
