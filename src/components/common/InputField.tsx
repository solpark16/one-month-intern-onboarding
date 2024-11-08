import React from "react";

function InputField({
  title,
  value,
  type,
  setState,
  placeholder,
}: {
  title: string;
  value: string;
  type: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}) {
  return (
    <div className="flex gap-2 justify-center w-full items-center">
      <label className="w-[60px] flex-shrink-0">{title}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        className="border border-black rounded w-full p-2"
      />
    </div>
  );
}

export default InputField;
