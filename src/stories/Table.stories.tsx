import React from "react";
import "../../globals.css";
import { Table } from "../components/index";
import type { Meta, StoryObj } from "@storybook/react";

const columns = [
  {
    label: "Nama",
    renderCell: (item: any) => item.nama,
  },
  {
    label: "Umur",
    renderCell: (item: any) => item.umur,
  },
  {
    label: "Hobi",
    renderCell: (item: any) => item.hobby,
  },
];

const columns2 = [
  {
    label: "Nama",
    renderCell: (item: any) => item.nama,
  },
  {
    label: "Umur",
    renderCell: (item: any) => item.umur,
  },
  {
    label: "Hobi",
    renderCell: (item: any) => item.hobby,
  },
  {
    label: "Aksi",
    renderCell: (item: any) => (
      <div className="flex items-center space-x-1">
        <button className="bg-orange-500 hover:opacity-50 rounded-md py-1 px-2 text-white">
          Edit
        </button>
        <button className="bg-red-500 hover:opacity-50 rounded-md py-1 px-2 text-white">
          Hapus
        </button>
      </div>
    ),
  },
];

const data = [
  {
    nama: "Rahman",
    umur: 21,
    hobby: "Koding",
  },
  {
    nama: "Sarah",
    umur: 21,
    hobby: "Merajut",
  },
];

const meta: Meta<typeof Table> = {
  title: "Components/Display/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    columns: columns,
    datas: data,
  },
};


export const WithComponent: Story = {
  args: {
    columns: columns2,
    datas: data,
  },
};

export const NoData: Story = {
  name: "Tida ada data",
  args: {
    columns: columns,
    datas: [],
  },
};