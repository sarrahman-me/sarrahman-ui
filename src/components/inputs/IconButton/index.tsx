import React from "react";

/**
 * Komponen IconButton digunakan untuk membuat tombol dengan ikon yang dapat diklik.
 *
 * @param {ReactNode} icon - Ikona yang akan ditampilkan dalam tombol.
 * @param {function} onClick - Fungsi yang dipanggil saat tombol diklik.
 * @param {string} color - Warna latar belakang tombol (opsional). Pilihan: "primary", "secondary", "danger", "success", "warning".
 * @param {string} size - Ukuran tombol (opsional). Pilihan: "small", "medium", "large".
 * @param {string} otherClass - Kelas tambahan yang dapat diberikan pada IconButton (opsional).
 *
 */

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  color?: "indigo" | "lime" | "red" | "orange" | "green";
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "contained";
  otherClass?: string;
  disabled?: boolean;
}

const IconButton = ({
  icon,
  onClick,
  color = "indigo",
  size = "medium",
  variant = "contained",
  otherClass,
  disabled,
}: IconButtonProps) => {
  const classColor = {
    indigo: "bg-indigo-600 text-white hover:bg-indigo-50 hover:text-indigo-600",
    lime: "bg-lime-600 text-white hover:bg-lime-50 hover:text-lime-600",
    red: "bg-red-600 text-white hover:bg-red-50 hover:text-red-600",
    orange: "bg-orange-600 text-white hover:bg-orange-50 hover:text-orange-600",
    green: "bg-green-600 text-white hover:bg-green-50 hover:text-green-600",
  };

  const borderColor = {
    indigo:
      "border border-indigo-600 hover:shadow hover:shadow-indigo-300 dark:hover:shadow-indigo-700 text-indigo-600",
    lime: "border border-lime-600 hover:shadow hover:shadow-lime-300 dark:hover:shadow-lime-700 text-lime-600",
    red: "border border-red-600 hover:shadow hover:shadow-red-300 dark:hover:shadow-red-700 text-red-600",
    orange:
      "border border-orange-600 hover:shadow hover:shadow-orange-300 dark:hover:shadow-orange-700 text-orange-600",
    green:
      "border border-green-600 hover:shadow hover:shadow-green-300 dark:hover:shadow-green-700 text-green-600",
  };

  const variantClass = {
    contained: `${classColor[color]}`,
    outlined: `${borderColor[color]}`,
  };

  // Daftar kelas CSS untuk setiap ukuran tombol
  const classSize = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  // Membentuk kelas CSS sesuai dengan properti yang diberikan
  const className = `
   rounded-md p-1 px-2 transition cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:text-white
  ${classSize[size]}
  ${variantClass[variant]}
  ${otherClass}
  `;

  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {icon}
    </button>
  );
};

export default IconButton;
