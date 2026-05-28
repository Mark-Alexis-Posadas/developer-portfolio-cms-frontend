import React from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-3 transition-all placeholder:text-gray-400 outline-hidden"
      />
    </div>
  );
}
