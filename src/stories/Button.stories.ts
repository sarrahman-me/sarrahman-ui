import { Button } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Inputs/Button",
  component: Button,
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
    children: "Button",
  },
};

export const Outlined: Story = {
  name: "Basic (outlined)",
  args: {
    variant: "outlined",
    children: "Button",
  },
};

export const Text: Story = {
  name: "Basic (Text)",
  args: {
    variant: "text",
    children: "Button",
  },
};

export const Icon: Story = {
  name: "Menggunakan Icon",
  args: {
    children: "Button",
    icon: "😍",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Button",
  },
};

export const LoadingIcon: Story = {
  name: "Loading dengan Icon",
  args: {
    variant: "outlined",
    children: "Button",
    loading: true,
    icon: "😍",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};

export const Click: Story = {
  name: "Handle Click",
  args: {
    onClick: () => alert("tombol di klik"),
    children: "Klik Aku",
  },
};
