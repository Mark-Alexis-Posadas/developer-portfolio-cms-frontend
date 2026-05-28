import React from "react";

interface TextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export default function Textarea({
  label,
  placeholder,
  value,
  rows = 3,
  onChange,
  className = "",
}: TextareaProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-medium text-gray-700">{label}</label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-3 transition-all placeholder:text-gray-400 outline-hidden resize-none"
      />
    </div>
  );
}
