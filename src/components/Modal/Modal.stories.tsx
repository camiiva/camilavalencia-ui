import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({ size }: { size?: "sm" | "md" | "lg" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ background: "#33fab3", color: "#0a2326", border: "none", borderRadius: 999, padding: "8px 20px", cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}
      >
        Open modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal title" size={size}>
        <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6 }}>
          This is the modal body. Add any content here — forms, confirmations, detail views.
        </p>
      </Modal>
    </>
  );
}

export const Default: Story = { render: () => <ModalDemo /> };
export const Small: Story = { render: () => <ModalDemo size="sm" /> };
export const Large: Story = { render: () => <ModalDemo size="lg" /> };
