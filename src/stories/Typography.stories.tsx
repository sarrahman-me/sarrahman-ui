import React from "react";
import { Typography } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Components/Display/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    otherClass: {
      description: "digunakan untuk mengatur classtailwind tambahan pada text",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  name: "Basic Default",
  args: {
    children: "Halo Dunia",
  },
};

export const Size: Story = {
  render: () => (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="subtitle">Subtitle</Typography>
      <Typography variant="body">Body</Typography>
      <Typography variant="helper">Helper</Typography>
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div>
      <Typography variant="subtitle" color="primary">
        Default color
      </Typography>
      <Typography variant="subtitle" color="secondary">
        Secondary color
      </Typography>
      <Typography variant="subtitle" color="success">
        Success color
      </Typography>
      <Typography variant="subtitle" color="warning">
        Warning color
      </Typography>
      <Typography variant="subtitle" color="danger">
        Danger color
      </Typography>
    </div>
  ),
};

export const Align: Story = {
  render: () => (
    <div className="border min-w-max w-40">
      <Typography align="left" variant="subtitle">
        Left
      </Typography>
      <Typography align="center" variant="subtitle">
        Center
      </Typography>
      <Typography align="right" variant="subtitle">
        Right
      </Typography>
    </div>
  ),
};
