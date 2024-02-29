import React from "react";

export const Input = ({ label, value, placeholder, id, onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-accent uppercase text-xs tracking-widest font-bold pb-1"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="border border-background rounded-md py-3 pl-3 w-full focus:outline-none focus:border-primary md:w-28 uppercase font-bold text-text"
        type="text"
        pattern="[0-9]*"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
