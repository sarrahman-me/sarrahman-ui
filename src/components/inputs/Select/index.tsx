"use client";
import React from "react";
import { Listbox } from "@headlessui/react";
import { Typography } from "../../data-display";

/**
 * Komponen Select digunakan untuk membuat kotak pilihan sederhana hanya string[] dengan daftar pilihan.
 *
 * @param {string} value - Nilai yang saat ini dipilih.
 * @param {function} setValue - Fungsi yang dipanggil saat nilai dipilih.
 * @param {string} placeholder - Teks placeholder yang ditampilkan saat tidak ada pilihan yang dipilih.
 * @param {string[]} lists - Daftar pilihan yang tersedia.
 * @param {string} label - Label Textfield dalam string.
 * @param {string} error - Pesan kesalahan yang ditampilkan di bawah Textfield (opsional).
 */

interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  lists: string[];
  placeholder?: string;
  label?: string;
  error?: string;
  color?: "indigo" | "lime" | "red" | "orange" | "green";
}

const Select = ({
  setValue,
  value,
  placeholder,
  lists,
  label,
  error,
  color = "indigo",
}: SelectProps) => {
  const bgColor = {
    indigo: {
      active: "bg-indigo-100 text-indigo-600",
      inActive: "bg-indigo-600 text-white",
    },
    lime: {
      active: "bg-lime-100 text-lime-600",
      inActive: "bg-lime-600 text-white",
    },
    red: {
      active: "bg-red-100 text-red-600",
      inActive: "bg-red-600 text-white",
    },
    orange: {
      active: "bg-orange-100 text-orange-600",
      inActive: "bg-orange-600 text-white",
    },
    green: {
      active: "bg-green-100 text-green-600",
      inActive: "bg-green-600 text-white",
    },
  };

  const borderColor = {
    indigo: "border-indigo-600 ring-indigo-600",
    lime: "border-lime-600 ring-lime-600",
    red: "border-red-600 ring-red-600",
    orange: "border-orange-600 ring-orange-600",
    green: "border-green-600 ring-green-600",
  };

  const classColorBorder = {
    default: `${borderColor[color]}`,
    error: `${borderColor.red}`,
  };

  const classNameButton = `border text-left text-black dark:text-white bg-white dark:bg-slate-800 focus:border-2 p-2 focus:outline-none disabled:border-gray-500 disabled:cursor-not-allowed w-full rounded-md ${
    !error ? classColorBorder.default : classColorBorder.error
  }`;

  const classNameOptions = `mt-2 p-2 border ${borderColor[color]} bg-white dark:bg-slate-800 rounded-md shadow-md max-h-48 overflow-scroll`;

  return (
    <div>
      {label && (
        <label className="mb-1 text-sm font-medium select-none text-black dark:text-white first-letter:uppercase">
          {label}
        </label>
      )}

      <Listbox value={value} onChange={setValue}>
        {/* tombol untuk pilih data */}
        <Listbox.Button className={classNameButton}>
          {value || placeholder}
        </Listbox.Button>

        {/* pilihan listbox */}
        <Listbox.Options className={classNameOptions}>
          {lists.map((list, i) => (
            <Listbox.Option key={i} value={list}>
              {({ active, selected }) => (
                <div
                  className={`${
                    active
                      ? bgColor[color].active
                      : selected
                      ? bgColor[color].inActive
                      : "text-black dark:text-white"
                  } cursor-pointer select-none p-2 rounded-md`}
                >
                  {list}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      {error && (
        <Typography variant="helper" color="danger">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default Select;
