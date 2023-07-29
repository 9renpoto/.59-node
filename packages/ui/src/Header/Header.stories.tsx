import type { Meta, StoryObj } from "@storybook/preact";
import Header from "./";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

export const Basic: StoryObj<typeof Header> = {};
