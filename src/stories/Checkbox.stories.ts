import { Checkbox } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Promo",
  },
};

export const Size: Story = {
  name: "Size Large",
  args: {
    label: "Promo",
    size: "large",
  },
};

export const Click: Story = {
  name: "Mengambil Value",
  args: {
    label: "Promo",
    setValue: (bool) => alert(bool ? "ditandai sebagai promo" : "tidak promo"),
  },
};
