import React from "react";

/**
 * Tombol yang dapat disesuaikan.
 *
 * @param {string} variant - Variasi tombol ("contained", "outlined", "text").
 * @param {string} size - Ukuran tombol ("medium", "small", "large", "full").
 * @param {string} type - Tipe tombol ("button", "reset", "submit").
 * @param {boolean} disabled - Apakah tombol dinonaktifkan.
 * @param {boolean} loading - Apakah tombol sedang dalam status "loading".
 * @param {function} onClick - Fungsi yang dipanggil saat tombol diklik.
 * @param {ReactNode} children - Konten tombol.
 * @param {ReactNode} icon - Ikon yang ditampilkan di samping teks tombol.
 */

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "medium" | "small" | "large" | "full";
  type?: "button" | "reset" | "submit";
  disabled?: true | false;
  loading?: true | false;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: "indigo" | "lime";
}

const Button = ({
  variant = "contained",
  children,
  size = "medium",
  type,
  disabled,
  loading,
  icon,
  color = "indigo",
  onClick,
}: ButtonProps) => {
  const bgColor = {
    indigo: "bg-indigo-600 hover:bg-indigo-800",
    lime: "bg-lime-600 hover:bg-lime-800",
  };

  const borderColor = {
    indigo: "border-indigo-600",
    lime: "border-lime-600",
  };

  const classVariant = {
    contained: `border ${bgColor[color]} ${borderColor[color]}  text-white disabled:bg-gray-500 disabled:border-none`,

    outlined: `border-2 ${borderColor[color]} hover:shadow-md disabled:border-gray-500`,

    text: "hover:bg-slate-200 dark:hover:bg-slate-800",
  };

  const classSize = {
    small: "text-xs py-1 px-2",
    medium: "text-sm py-1.5 px-3",
    large: "text-base py-2 px-4",
    full: "w-full py-1.5 justify-center",
  };

  const defaultClass = `flex items-center font-medium rounded-md disabled:cursor-not-allowed transition`;

  const className = `
  ${defaultClass}
  ${classVariant[variant]} 
  ${classSize[size]}
  `;

  const classIcon = `ml-2 ${loading ? "animate-spin" : ""}`;

  return (
    <button
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      className={className}
    >
      {loading ? "Loading ..." : children}
      {icon && <span className={classIcon}>{icon}</span>}
    </button>
  );
};

export default Button;
