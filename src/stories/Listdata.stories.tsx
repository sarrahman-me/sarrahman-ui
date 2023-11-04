import React from "react";
import { ListData } from "../components";
import { BsPersonCircle, BsAward, BsLinkedin } from "react-icons/bs";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListData> = {
  title: "Components/Display/ListData",
  component: ListData,
  argTypes: {
    icon: {
      description: "kami menggunakan react/icon library",
      control: false,
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Basic Default",
  args: {
    label: "Nama",
    value: "Jhon Doe",
  },
};

export const InLabel: Story = {
  name: "Tanpa Label",
  args: {
    value: "Jhon Doe",
  },
};

export const Icon: Story = {
  name: "Custom Icon",
  args: {
    icon: <BsPersonCircle />,
    value: "Jhon Doe",
  },
};

export const Color: Story = {
  name: "Custom Color",
  render: () => (
    <div className="space-y-2">
      <ListData
        color="indigo"
        icon={<BsPersonCircle />}
        value="Muhammad Nur Rahman"
      />
      <ListData
        color="indigo"
        icon={<BsAward />}
        value="Creater Sarrahman ui"
      />
      <ListData color="indigo" icon={<BsLinkedin />} value="sarrahman-me" />
    </div>
  ),
};
