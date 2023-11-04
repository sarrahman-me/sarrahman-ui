import React from "react";
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

export const Variant: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Button size="full">Full width</Button>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Button variant="contained" icon="📖">
        Docs
      </Button>
      <Button variant="outlined" icon="🎵">
        Music
      </Button>
      <Button variant="text" icon="🗓">
        Calender
      </Button>
    </div>
  ),
};

export const Warna: Story = {
  render: () => (
    <div className="space-y-1">
      <div className="flex items-center space-x-1">
        <Button color="indigo">Default</Button>
        <Button color="lime">Lime</Button>
        <Button color="red">red</Button>
        <Button color="orange">orange</Button>
        <Button color="green">green</Button>
      </div>
      <div className="flex items-center space-x-1">
        <Button variant="outlined" color="indigo">
          Default
        </Button>
        <Button variant="outlined" color="lime">
          Lime
        </Button>
        <Button variant="outlined" color="red">
          red
        </Button>
        <Button variant="outlined" color="orange">
          orange
        </Button>
        <Button variant="outlined" color="green">
          green
        </Button>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Button loading variant="contained">
        Loading
      </Button>
      <Button loading variant="outlined" icon="😶">
        Loading dengan tombol
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Button disabled variant="contained">
        Disabled
      </Button>
      <Button disabled variant="outlined">
        Disabled
      </Button>
      <Button disabled variant="text">
        Disabled
      </Button>
    </div>
  ),
};

export const Click: Story = {
  name: "Handle Click",
  args: {
    onClick: () => alert("tombol di klik"),
    children: "Klik Aku",
  },
};
