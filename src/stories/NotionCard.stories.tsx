import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NotionCard, { NotionCardProps } from "../components/Card/NotionCard";

const NotionCardStory: Meta<typeof NotionCard> = {
  title: "Components/NotionCard",
  component: NotionCard,
};

export default NotionCardStory;

const Template: StoryFn<NotionCardProps> = (args) => <NotionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "📘",
  title: "Notion Card Title",
  description: "This is a description of the Notion card.",
};

export const Custom = Template.bind({});
Custom.args = {
  icon: "✨",
  title: "Custom Card",
  description: "A custom card with a different icon and text.",
};
