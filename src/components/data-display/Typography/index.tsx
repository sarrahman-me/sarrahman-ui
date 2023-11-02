"use client";
import React from "react";

/**
 * Komponen Typography digunakan untuk menampilkan teks dengan variasi gaya, ukuran, dan warna yang dapat disesuaikan.
 *
 * @param {function} onClick - Fungsi yang dipanggil saat text diklik.
 * @param {ReactNode} children - Teks yang akan ditampilkan.
 * @param {string} variant - Variasi teks (opsional). Pilihan: "h1", "h2", "h3", "h4", "subtitle", "body", "helper".
 * @param {string} color - Warna teks (opsional dengan default primary). Pilihan: "primary", "secondary", "danger", "success", "warning".
 * @param {string} otherClass - Kelas tambahan yang dapat diberikan pada Typography (opsional).
 * @param {string} align - posisi text yang dapat diberikan pada Typography (opsional).
 *
 */

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "subtitle" | "body" | "helper";
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  otherClass?: string;
  align?: "left" | "center" | "right";
  onClick?: () => void;
}

const Typography = ({
  children,
  variant = "body",
  color = "primary",
  align = "left",
  otherClass,
  onClick,
}: TypographyProps) => {
  const classVariant = {
    h1: "text-3xl md:text-4xl font-semibold",
    h2: "text-2xl md:text-3xl font-semibold",
    h3: "text-xl md:text-2xl font-semibold",
    h4: "text-lg md:text-xl font-semibold",
    subtitle: "text-base md:text-lg font-medium",
    body: "text-sm md:text-base",
    helper: "text-xs md:text-sm",
  };

  const classColor = {
    primary: "text-slate-950 dark:text-slate-50",
    secondary: "text-gray-500",
    danger: "text-red-500",
    success: "text-green-500",
    warning: "text-orange-500",
  };

  const classAlign = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const className = `
  ${classVariant[variant]} 
  ${classColor[color]} 
  ${classAlign[align]}
  ${otherClass}
  `;

  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
};

export default Typography;
