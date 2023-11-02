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
  name: "Heading 1",
  args: {
    variant: "h1",
    children: "Halo Dunia",
  },
};
