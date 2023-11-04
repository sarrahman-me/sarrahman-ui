"use client";
import React from "react";
import { Switch } from "@headlessui/react";

/**
 * Komponen SwitchToggle digunakan untuk membuat tombol toggle yang dapat mengganti nilai boolean.
 *
 * @param {boolean} value - Nilai boolean yang akan diatur oleh tombol toggle.
 * @param {function} setValue - Fungsi yang akan dipanggil saat tombol toggle diubah.
 * @param {string} label - Label yang mendeskripsikan fungsi dari tombol toggle (opsional).
 */

interface SwitchProps {
  setValue: (e: boolean) => void;
  value: boolean;
  label?: string;
  color?: "indigo" | "lime" | "red" | "orange" | "green";
}

const Toggle = ({ value, setValue, label, color = "indigo" }: SwitchProps) => {
  const colorClassName = {
    indigo: "bg-indigo-600",
    lime: "bg-lime-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
  };

  return (
    <div className="flex items-center">
      <Switch
        checked={value}
        onChange={setValue}
        className={`${
          value ? colorClassName[color] : "bg-gray-200 dark:bg-slate-800"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            value ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      {label && (
        <label className="ml-2 text-sm font-medium select-none text-black dark:text-white first-letter:uppercase">
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;
