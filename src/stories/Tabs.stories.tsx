import React from "react";
import { Tabs } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Variant contained",
  args: {
    pages: [
      {
        title: "Products",
        content: (
          <div>
            <p className="text-black dark:text-white">Halaman products</p>
          </div>
        ),
      },
      {
        title: "Customer",
        content: (
          <div>
            <p className="text-black dark:text-white">Halaman Customer</p>
          </div>
        ),
      },
      {
        title: "Suplier",
        content: (
          <div>
            <p className="text-black dark:text-white">Halaman Suplier</p>
          </div>
        ),
      },
    ],
  },
};

export const Outlined: Story = {
  name: "Variant Outlined",
  args: {
    variant: "outlined",
    pages: [
      {
        title: "Products",
        content: (
          <div>
            <p className="text-black dark:text-white">Halaman products</p>
          </div>
        ),
      },
      {
        title: "Customer",
        content: (
          <div>
            <p className="text-black dark:text-white">Halaman Customer</p>
          </div>
        ),
      },
      {
        title: "Suplier",
        content: (
          <div>
            <p className="text-black dark:text-white">Halaman Suplier</p>
          </div>
        ),
      },
    ],
  },
};
