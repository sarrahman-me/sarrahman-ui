import { Autocomplete } from "../components";
import "../../globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const top50Films = [
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
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    id: 11,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    id: 12,
  },
  { label: "Forrest Gump", year: 1994, id: 13 },
  { label: "Inception", year: 2010, id: 14 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
    id: 15,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975, id: 16 },
  { label: "Goodfellas", year: 1990, id: 17 },
  { label: "The Matrix", year: 1999, id: 18 },
  { label: "Seven Samurai", year: 1954, id: 19 },
  { label: "Star Wars: Episode IV - A New Hope", year: 1977, id: 20 },
  { label: "City of God", year: 2002, id: 21 },
  { label: "Se7en", year: 1995, id: 22 },
  { label: "The Silence of the Lambs", year: 1991, id: 23 },
  { label: "It's a Wonderful Life", year: 1946, id: 24 },
  { label: "Life Is Beautiful", year: 1997, id: 25 },
  { label: "The Usual Suspects", year: 1995, id: 26 },
  { label: "Léon: The Professional", year: 1994, id: 27 },
  { label: "Spirited Away", year: 2001, id: 28 },
  { label: "Saving Private Ryan", year: 1998, id: 29 },
  { label: "Once Upon a Time in the West", year: 1968, id: 30 },
  { label: "American History X", year: 1998, id: 31 },
  { label: "Interstellar", year: 2014, id: 32 },
  { label: "Casablanca", year: 1942, id: 33 },
  { label: "City Lights", year: 1931, id: 34 },
  { label: "Psycho", year: 1960, id: 35 },
  { label: "The Green Mile", year: 1999, id: 36 },
  { label: "The Intouchables", year: 2011, id: 37 },
  { label: "Modern Times", year: 1936, id: 38 },
  { label: "Raiders of the Lost Ark", year: 1981, id: 39 },
  { label: "Rear Window", year: 1954, id: 40 },
  { label: "The Pianist", year: 2002, id: 41 },
  { label: "The Departed", year: 2006, id: 42 },
  { label: "Terminator 2: Judgment Day", year: 1991, id: 43 },
  { label: "Back to the Future", year: 1985, id: 44 },
  { label: "Whiplash", year: 2014, id: 45 },
  { label: "Gladiator", year: 2000, id: 46 },
  { label: "Memento", year: 2000, id: 47 },
  { label: "The Prestige", year: 2006, id: 48 },
  { label: "The Lion King", year: 1994, id: 49 },
  { label: "Apocalypse Now", year: 1979, id: 50 },
];

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Inputs/Autocomplete",
  component: Autocomplete,
  args: {
    lists: top50Films,
    keyValue: {
      key: "id",
      value: "label",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Films",
    placeholder: "Cari film",
  },
};
