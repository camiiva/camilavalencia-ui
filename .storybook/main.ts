import type { StorybookConfig } from "@storybook/react-vite";
import type { InlineConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config: InlineConfig) {
    if (process.env.NODE_ENV === "production") {
      config.base = "/camilavalencia-ui/";
    }
    return config;
  },
};

export default config;
