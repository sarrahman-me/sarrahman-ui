"use client";
import React from "react";
import { RxDot } from "react-icons/rx";
import Typography from "../Typography";

/**
 * Komponen ListData digunakan untuk menampilkan item dengan label dan nilainya.
 *
 * @param {string} label - Label untuk item.
 * @param {ReactNode} value - Nilai yang akan ditampilkan.
 */

interface ListDataProps {
  icon?: React.ReactNode;
  label?: string;
  color?: "indigo" | "gray" | "red" | "orange" | "green";
  value: React.ReactNode;
}

export default function ListData({
  label,
  value,
  color = "gray",
  icon = <RxDot />,
}: ListDataProps) {
  const colorClass = {
    gray: "text-gray-500",
    indigo: "text-indigo-500",
    red: "text-red-500",
    orange: "text-orange-500",
    green: "text-green-500",
  };

  return (
    <div className="flex items-center">
      <div className={`mr-2 ${colorClass[color]}  text-sm md:text-base`}>
        {icon}
      </div>
      <div>
        {label && (
          <p className={`text-sm md:text-base ${colorClass[color]}`}>{label}</p>
        )}
        <Typography>{value || "-"}</Typography>
      </div>
    </div>
  );
}
