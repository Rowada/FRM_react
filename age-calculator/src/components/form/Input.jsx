import React from "react";

export const Input = ({ label, value, placeholder, id, onChange }) => {
  return (
    <div className="flex flex-col flex-grow">
      <label className="text-accent uppercase" htmlFor={id}>
        {label}
      </label>
      <input
        className="border border-background rounded-md py-3 pl-3 w-full"
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
