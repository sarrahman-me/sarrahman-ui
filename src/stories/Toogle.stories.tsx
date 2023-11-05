import React, { useState } from "react";
import { Toggle } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Inputs/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ["autodocs"],
  render: function BasicToggle() {
    const [state, setState] = useState(true);

    return <Toggle setValue={setState} value={state} />;
  },
};

export const Label: Story = {
  name: "menambahkan label",
  render: function BasicToggle() {
    const [state, setState] = useState(false);

    return (
      <Toggle
        color="lime"
        label={state ? "Promo" : "Tidak Promo"}
        setValue={setState}
        value={state}
      />
    );
  },
};

export const Color: Story = {
  name: "warna",
  render: function BasicToggle() {
    const [state, setState] = useState(false);

    return (
      <div className="flex items-center space-x-1">
        <Toggle color="indigo" setValue={setState} value={state} />
        <Toggle color="lime" setValue={setState} value={state} />
        <Toggle color="red" setValue={setState} value={state} />
        <Toggle color="orange" setValue={setState} value={state} />
        <Toggle color="green" setValue={setState} value={state} />
      </div>
    );
  },
};
