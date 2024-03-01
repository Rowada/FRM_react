import React from "react";

export const Input = ({ label, value, placeholder, id, onChange, error }) => {
  return (
    <div className="flex flex-col relative">
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

      {error && (
        <span className="text-[10px] text-accent font-italic absolute top-full left-0">
          {error}
        </span>
      )}
    </div>
  );
};
