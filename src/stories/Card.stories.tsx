import { Card } from "../components";
import "../../globals.css";
import { MdOutlineDesignServices } from "react-icons/md";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/Surface/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      description: "rekomendasi : gunakan react/icons library",
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    icon: <MdOutlineDesignServices />,
    title: "Complete Card Design - Sarrahman UI",
    description:
      "Component sederhana yang dibuat dari developer untuk developer",
    button: {
      title: "Gunakan",
      onClick: () => alert("terima kasih sudah menggunakan sarrahman ui"),
    },
  },
};

export const Simple: Story = {
  args: {
    title: "Simple Card Design - Sarrahman UI",
    description:
      "Component sederhana yang dibuat dari developer untuk developer",
  },
};
