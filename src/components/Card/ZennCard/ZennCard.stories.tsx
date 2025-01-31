import { Meta, StoryFn } from "@storybook/react";
import { ZennCard } from "@/components/Card/ZennCard";
import { ZennArticle } from "@/lib/zenn";
import React from "react";

export default {
  title: "Components/ZennCard",
  component: ZennCard,
} satisfies Meta<typeof ZennCard>;

const Template: StoryFn<ZennArticle> = (args: ZennArticle) => (
  <ZennCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  post_type: "Article",
  title: "Demo Article Title",
  slug: "demo-article-title",
  comments_count: 5,
  liked_count: 100,
  bookmarked_count: 20,
  body_letters_count: 3000,
  article_type: "tech",
  emoji: "🚀",
  published_at: "2025-01-22T00:00:00Z",
  user: {
    id: 1,
    username: "ss",
    name: "ss",
    avatar_small_url: "/my-icon.webp",
  },
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  ...Default.args,
  title:
    "これは非常に長いタイトルの例です。ReactやNext.jsを使用したプロジェクトの中で、UIを構築する際に役立つライブラリやテクニックについての詳細な説明を含んだ記事です。",
};

export const ManyLikesAndComments = Template.bind({});
ManyLikesAndComments.args = {
  ...Default.args,
  liked_count: 999,
  comments_count: 200,
};
