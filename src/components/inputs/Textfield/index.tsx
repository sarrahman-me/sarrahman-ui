import React from "react";
import Typography from "../../data-display/Typography";

/**
 * Komponen Textfield yang dapat disesuaikan.
 *
 * @param {string} name - Nama Textfield dalam string.
 * @param {string} variant - Variasi Textfield ("outlined", "standard").
 * @param {string} placeholder - Placeholder Textfield dalam string.
 * @param {string} label - Label Textfield dalam string.
 * @param {string} type - Tipe Textfield ("text", "number", "password", "date", "email").
 * @param {boolean} disabled - Apakah Textfield dinonaktifkan.
 * @param {boolean} autoFocus - Apakah Textfield mendapatkan fokus secara otomatis.
 * @param {string} value - Nilai yang diisi dalam Textfield.
 * @param {string} error - Pesan kesalahan yang ditampilkan di bawah Textfield (opsional).
 * @param {ReactNode} icon - Ikon yang ingin ditampilkan di dalam Textfield (opsional).
 * @param {function} onClickIcon - Fungsi yang dipanggil saat ikon di dalam Textfield diklik (opsional).
 * @param {boolean} fullWidth - Apakah Textfield harus memenuhi lebar penuh (opsional).
 */

interface TextfieldProps {
  name: string;
  type?: "text" | "number" | "password" | "date" | "email" | "tel";
  color?: "indigo" | "lime" | "red" | "orange" | "green";
  placeholder?: string;
  label?: string;
  value?: string;
  error?: string;
  onChange: (value: any) => void;
  variant?: "outlined" | "standard";
  disabled?: true | false;
  autoFocus?: true | false;
  fullWidth?: true | false;
  icon?: React.ReactNode;
  onClickIcon?: () => void;
  otherClass?: string;
}

const Textfield = ({
  placeholder,
  variant = "outlined",
  type,
  disabled,
  value,
  onChange,
  onClickIcon,
  autoFocus,
  fullWidth,
  label,
  icon,
  error,
  name,
  color = "indigo",
  otherClass,
}: TextfieldProps) => {
  const borderColor = {
    indigo: "border-indigo-600 ring-indigo-600 caret-indigo-600",
    lime: "border-lime-600 border-lime-600 caret-lime-600",
    red: "border-red-600 border-red-600 caret-red-600",
    orange: "border-orange-600 border-orange-600 caret-orange-600",
    green: "border-green-600 border-green-600 caret-green-600",
  };

  const classColorBorder = {
    default: `${borderColor[color]}`,
    error: `${borderColor.red}`,
  };

  /* Objek `classVariant` mendefinisikan kelas CSS yang berbeda untuk setiap varian Textfield. */

  const classVariant: Record<string, string> = {
    outlined:
      "bg-white dark:bg-slate-800 border focus:border-2 rounded-md invalid:border-red-500",

    standard:
      "bg-transparent border-b focus:border-b-2 invalid:border-b-red-500",
  };

  /* "defaultClass" adalah class tailwind yang ada di semua variant textfield */

  const defaultClass = `text-black dark:text-white placeholder:select-none dark:placeholder-gray-400 p-2 focus:outline-none disabled:border-gray-500 disabled:cursor-not-allowed transition appearance-none`;

  /* `Const className` membuat string yang berisi kelas CSS untuk komponen Textfield. */

  const className = `
      ${classVariant[variant]} 
      ${defaultClass}
      ${otherClass}
      ${icon && "pr-8"}
      ${fullWidth ? "w-full" : ""}
      ${!error ? classColorBorder.default : classColorBorder.error}
      `;

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 text-sm font-medium select-none text-black dark:text-white first-letter:uppercase">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={name}
          name={name}
          value={value}
          autoComplete="off"
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          type={type}
        />
        {icon && (
          <div onClick={onClickIcon} className="relative flex items-center">
            <button type="submit" className="absolute right-3 text-lime-600">
              {icon}
            </button>
          </div>
        )}
      </div>
      {error && (
        <Typography variant="helper" color="danger">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default Textfield;
