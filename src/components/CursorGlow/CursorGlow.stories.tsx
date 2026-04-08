import type { Meta, StoryObj } from "@storybook/react";
import CursorGlow from "./CursorGlow";

const meta: Meta<typeof CursorGlow> = {
  title: "Components/CursorGlow",
  component: CursorGlow,
  parameters: {
    docs: {
      description: {
        component: "Replaces the default cursor with a mint accent dot on desktop (fine-pointer) devices. Move your mouse to see it in action.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CursorGlow>;

export const Default: Story = {};
