import { Textfield } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textfield> = {
  title: "Components/Inputs/Textfield",
  component: Textfield,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Penggunaan basic (outlined)",
  args: {
    label: "Nama",
    placeholder: "e.g Jhon Doe",
    name: "nama",
  },
};

export const Variant: Story = {
  name: "Penggunaan basic (standard)",
  args: {
    variant: "standard",
    name: "nama",
  },
};

export const Icon: Story = {
  name: "Menggunakan Icon",
  args: {
    placeholder: "pencarian...",
    icon: "🔎",
  },
};

export const Label: Story = {
  name: "Menggunakan Label",
  args: {
    name: "nama",
    label: "Nama",
  },
};

export const Error: Story = {
  name: "Error text",
  args: {
    type: "password",
    error: "Password salah",
    name: "nama",
    label: "Nama",
  },
};
