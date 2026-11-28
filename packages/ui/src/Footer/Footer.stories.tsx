import type { Meta, StoryObj } from "@storybook/preact-vite";
import { expect, within } from "storybook/test";
import Footer from "./";

const meta: Meta<typeof Footer> = {
  component: Footer,
  argTypes: {
    menus: { control: "object" },
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const githubLink = canvas.getByRole("link", { name: "GitHub" });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/9renpoto/.59-node",
    );

    const icon = githubLink.querySelector("svg");
    expect(icon).not.toBeNull();
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveAttribute("width", "24");
    expect(icon).toHaveAttribute("height", "24");
    expect(icon).toHaveAttribute("viewBox", "0 0 24 24");
    expect(icon).not.toHaveClass("lucide-github");
  },
};
