import React from "react";

function Textarea({
  classname,
  placeholder,
  required = false,
  onChange = () => {},
  value,
}) {
  return (
    <textarea
      className={classname}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}

export default Textarea;
