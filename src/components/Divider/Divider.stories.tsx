import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Plain: Story = {};
export const WithLabel: Story = { args: { label: "or" } };
export const WithNodeLabel: Story = { args: { label: <span style={{ color: "#33fab3" }}>Section</span> } };
