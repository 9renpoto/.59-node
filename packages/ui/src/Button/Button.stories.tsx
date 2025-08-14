import type { Meta, StoryObj } from "@storybook/preact-vite";
import Button from "./";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Basic: StoryObj<typeof Button> = {
  render: () => <Button>hello</Button>,
};
