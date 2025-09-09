import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./index";

const meta = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "#" },
      { label: "Products", href: "#" },
      { label: "Laptops" },
    ],
  },
};

export const OneItem: Story = {
  args: {
    breadcrumbs: [{ label: "Home" }],
  },
};

export const WithLongNames: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "#" },
      { label: "Very Long Category Name That Might Wrap", href: "#" },
      { label: "Even Longer Product Name That Will Definitely Wrap" },
    ],
  },
};
