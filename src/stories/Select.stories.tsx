import React, { useState } from "react";
import { Select } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const top10Films = [
  { label: "The Shawshank Redemption", year: 1994, id: 1 },
  { label: "The Godfather", year: 1972, id: 2 },
  { label: "The Godfather: Part II", year: 1974, id: 3 },
  { label: "The Dark Knight", year: 2008, id: 4 },
  { label: "12 Angry Men", year: 1957, id: 5 },
  { label: "Schindler's List", year: 1993, id: 6 },
  { label: "Pulp Fiction", year: 1994, id: 7 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
    id: 8,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966, id: 9 },
  { label: "Fight Club", year: 1999, id: 10 },
].map((a) => a.label);

const meta: Meta<typeof Select> = {
  title: "Components/Inputs/Select",
  component: Select,
  args: {
    lists: top10Films,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: function Basic() {
    const [film, setFilm] = useState("");

    return (
      <Select
        label="Films"
        placeholder="Pilih Film"
        value={film}
        setValue={setFilm}
        lists={top10Films}
      />
    );
  },
};
