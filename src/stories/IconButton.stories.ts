import { IconButton } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "Components/Inputs/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "menggunakan library react/icon",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Basic (contained)",
  args: {
    icon: "ß",
  },
};

export const Outlined: Story = {
  name: "Basic (outlined)",
  args: {
    icon: "🔍",
  },
};

export const Text: Story = {
  name: "Basic (Text)",
  args: {
    icon: "🔍",
  },
};

export const Icon: Story = {
  name: "Menggunakan Icon",
  args: {
    icon: "🔍",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: "🔍",
  },
};

export const Click: Story = {
  name: "Handle Click",
  args: {
    onClick: () => alert("tombol di klik"),
    icon: "Klik Aku",
  },
};
