import type { Meta, StoryObj } from "@storybook/preact-vite";
import type { CardProps } from "./";
import Card from "./";

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    title: { control: "text" },
    authorName: { control: "text" },
    authorImage: { control: "text" },
    date: { control: "text" },
    tags: { control: "object" },
    coverImage: { control: "text" },
    reactions: { control: "number" },
    comments: { control: "number" },
    readingTime: { control: "number" },
  },
};

export default meta;

const defaultArgs: CardProps = {
  title: "Svelte Event Forwarding & Advanced Component Patterns",
  authorName: "Ali Aslam",
  authorImage:
    "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/3423581/0d6a184d-4390-4d86-9e67-d0c49b4753b1.png",
  date: "Sep 6",
  tags: ["webdev", "javascript", "svelte", "webperf"],
  coverImage:
    "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s6xnq2fo2yaltqez1pvx.png",
  reactions: 42,
  comments: 12,
  readingTime: 7,
};

export const Basic: StoryObj<typeof Card> = {
  args: defaultArgs,
};

export const NoCoverImage: StoryObj<typeof Card> = {
  args: {
    ...defaultArgs,
    coverImage: undefined,
  },
};
