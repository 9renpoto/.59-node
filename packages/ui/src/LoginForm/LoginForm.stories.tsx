import type { Meta, StoryObj } from "@storybook/preact";
import { LoginForm } from "./LoginForm";

const meta = {
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
