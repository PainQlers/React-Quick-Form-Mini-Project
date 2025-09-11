import React from "react";

function FormField({ label, type, value, onChange, error, name, ...rest }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-start">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border-1 border-gray-300 mb-1 w-full"
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default FormField;
