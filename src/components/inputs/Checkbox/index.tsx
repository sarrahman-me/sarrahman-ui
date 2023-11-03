import React from "react";

/**
 * Komponen Checkbox digunakan untuk membuat pilihan yang dapat dicentang atau tidak.
 *
 * @param {ReactNode} label - Label yang mendeskripsikan checkbox.
 * @param {string} name - Nama checkbox.
 * @param {boolean} value - Nilai checkbox (tercentang atau tidak).
 * @param {function} onChange - Fungsi yang dipanggil saat status checkbox berubah.
 * @param {boolean} disabled - Apakah checkbox dinonaktifkan (opsional).
 */

interface CheckboxProps {
  label: React.ReactNode;
  name: string;
  value: boolean;
  setValue: (item: boolean) => void;
  disabled?: boolean;
  color?: "indigo" | "lime" | "red" | "orange" | "green";
  size?: "small" | "medium" | "large";
}

const Checkbox = ({
  label,
  name,
  value,
  disabled,
  color = "indigo",
  size = "medium",
  setValue,
}: CheckboxProps) => {
  const colorClassName = {
    indigo: "accent-indigo-500",
    lime: "accent-lime-500",
    red: "accent-red-500",
    orange: "accent-orange-500",
    green: "accent-green-500",
  };

  const sizeClassName = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-5 h-5",
  };

  const className = `
    ${colorClassName[color]}
    ${sizeClassName[size]}
  `;

  const labelClassName = `
  ml-2 text-sm font-medium select-none  first-letter:uppercase
  ${disabled ? "text-gray-500" : "text-black dark:text-white"}
  `;

  return (
    <div className="flex items-center">
      <input
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        name={name}
        disabled={disabled}
        id={name}
        type="checkbox"
        className={className}
      />
      <label className={labelClassName}>{label}</label>
    </div>
  );
};

export default Checkbox;
