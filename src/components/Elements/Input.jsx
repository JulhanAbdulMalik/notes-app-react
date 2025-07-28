import React from "react";

function Input({
  classname,
  type,
  placeholder,
  required = false,
  onChange = () => {},
  value,
}) {
  return (
    <input
      className={classname}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
