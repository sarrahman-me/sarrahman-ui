"use client";
import React from "react";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { Typography } from "../../data-display";

/**
 * Komponen Autocomplete digunakan untuk membuat kotak seleksi dengan kemampuan pencarian otomatis.
 *
 * @param {any} value - Nilai yang saat ini dipilih.
 * @param {function} setValue - Fungsi yang dipanggil saat nilai dipilih.
 * @param {Object[]} lists - Daftar item yang tersedia untuk dipilih.
 * @param {Object} keyValue - Objek yang berisi dua properti: `key` dan `value`.
 *   - key: Nama properti dalam objek daftar yang berfungsi sebagai kunci unik.
 *   - value: Nama properti dalam objek daftar yang digunakan untuk pencarian dan tampilan.
 * @param {string} placeholder - Teks placeholder yang ditampilkan saat tidak ada pilihan yang dipilih.
 * @param {string} label - Label Textfield dalam string.
 * @param {string} error - Pesan kesalahan yang ditampilkan di bawah Textfield (opsional).
 */

interface AutocompleteProps {
  value: any;
  setValue: (item: string) => void;
  lists: any;
  keyValue: {
    key: string;
    value: string;
  };

  // optional params
  placeholder?: string;
  label?: string;
  error?: string;
  color?: "indigo" | "lime" | "red" | "orange" | "green";
}

function Autocomplete({
  value,
  keyValue,
  lists,
  setValue,
  placeholder,
  label,
  error,
  color = "indigo",
}: AutocompleteProps) {
  const [query, setQuery] = useState("");

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

  const classNameTextfield = `border text-left bg-white dark:bg-slate-800 focus:border-2 p-2 focus:outline-none disabled:border-gray-500 disabled:cursor-not-allowed w-full rounded-md 
  ${!error ? classColorBorder.default : classColorBorder.error}`;

  const classNameOptions = `mt-2 p-2 border ${borderColor[color]} bg-white dark:bg-slate-800 rounded-md shadow-md max-h-48 overflow-scroll`;

  /* `filteredList` digunakan untuk memfilter array `lists` berdasarkan nilai `query`. */
  const filteredList =
    query === ""
      ? lists
      : lists.filter((list: any) =>
          list[keyValue.value].toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div>
      {label && (
        <label className="mb-1 text-sm font-medium select-none text-black dark:text-white first-letter:uppercase">
          {label}
        </label>
      )}
      <Combobox value={value} onChange={setValue}>
        <Combobox.Input
          autoComplete="off"
          placeholder={placeholder}
          className={classNameTextfield}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className={classNameOptions}>
          {filteredList.map((list: any) => (
            <Combobox.Option
              key={list[keyValue.key]}
              value={list[keyValue.value]}
            >
              {({ active, selected }) => (
                <div
                  className={`${
                    active
                      ? bgColor[color].active
                      : selected
                      ? bgColor[color].inActive
                      : ""
                  } cursor-pointer select-none p-2 rounded-md`}
                >
                  {list[keyValue.value]}
                </div>
              )}
            </Combobox.Option>
          ))}

          {/* menampilkan "Data tidak ada" saat data yang dicari tidak ada */}
          {filteredList.length === 0 && query.length > 0
            ? "Data tidak ditemukan"
            : null}
        </Combobox.Options>
      </Combobox>

      {/* menampilkan pesan error */}

      {error && (
        <Typography variant="helper" color="danger">
          {error}
        </Typography>
      )}
    </div>
  );
}

export default Autocomplete;
