import type { Meta, StoryObj } from "@storybook/react";
import NotionCard from "@/components/Card/NotionCard";

const meta: Meta<typeof NotionCard> = {
  title: "Components/Card/NotionCard",
  component: NotionCard,
  tags: ["autodocs"],
  argTypes: {
    article: {
      description: "記事のデータ",
      table: {
        type: { summary: "Article" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NotionCard>;

export const Default: Story = {
  args: {
    article: {
      id: "1",
      title: "Sample Notion Article",
      date: "2025-01-25T12:40:00.000Z",
      url: "https://www.notion.so/",
      cover: "https://via.placeholder.com/500x300.png?text=Notion+Cover",
    },
  },
};

export const WithoutCover: Story = {
  args: {
    article: {
      id: "2",
      title: "No Cover Article",
      date: "2025-01-25T12:40:00.000Z",
      url: "https://www.notion.so/test2",
      cover: "No Cover",
    },
  },
};
