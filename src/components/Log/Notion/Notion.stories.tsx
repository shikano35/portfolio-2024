import type { Meta, StoryObj } from "@storybook/react";
import Notion from "@/components/Log/Notion";
import { ComponentProps } from "react";
import React from "react";

const mockArticles = [
  {
    id: "1",
    title: "Sample Article 1",
    date: "2025-01-25T12:40:00.000Z",
    url: "https://www.notion.so/test1",
    cover:
      "https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600",
  },
  {
    id: "2",
    title: "Sample Article 2",
    date: "2025-01-25T12:40:00.000Z",
    url: "https://www.notion.so/test2",
    cover: "No Cover",
  },
  {
    id: "3",
    title: "looooooooooooong title sample article takes up more space",
    date: "2025-01-25T12:40:00.000Z",
    url: "https://www.notion.so",
    cover:
      "https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg",
  },
];

const meta: Meta<typeof Notion> = {
  title: "Components/Log/Notion",
  component: Notion,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Notion>>;

export const Default: Story = {
  args: {
    articles: mockArticles,
  },
};
