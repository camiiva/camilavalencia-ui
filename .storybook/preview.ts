import "./storybook.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#071e21" },
        { name: "surface", value: "#0b3439" },
        { name: "light", value: "#eff9fa" },
      ],
    },
  },
};

export default preview;
