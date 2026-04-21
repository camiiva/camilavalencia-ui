import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  args: { message: "Your changes have been saved." },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = { args: { variant: "info" } };
export const Success: Story = { args: { variant: "success", message: "Profile updated successfully." } };
export const Error: Story = { args: { variant: "error", message: "Something went wrong. Please try again." } };
export const Warning: Story = { args: { variant: "warning", message: "Your session will expire in 5 minutes." } };
export const Dismissible: Story = { args: { variant: "success", message: "Saved!", onDismiss: () => alert("dismissed") } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 360 }}>
      <Toast variant="info" message="Informational message." onDismiss={() => {}} />
      <Toast variant="success" message="Action completed successfully." onDismiss={() => {}} />
      <Toast variant="error" message="An error occurred." onDismiss={() => {}} />
      <Toast variant="warning" message="Proceed with caution." onDismiss={() => {}} />
    </div>
  ),
};
