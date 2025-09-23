import type { Meta, StoryObj } from "@storybook/preact-vite";
import Footer from "./";

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;

export const Basic: StoryObj<typeof Footer> = {
  args: {
    menus: [
      {
        title: "Documentation",
        children: [
          { name: "Getting Started", href: "#" },
          { name: "Guide", href: "#" },
          { name: "API", href: "#" },
          { name: "Showcase", href: "#" },
          { name: "Pricing", href: "#" },
        ],
      },
      {
        title: "Community",
        children: [
          { name: "Forum", href: "#" },
          { name: "Discord", href: "#" },
        ],
      },
    ],
  },
};
