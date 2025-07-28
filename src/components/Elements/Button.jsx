import React from "react";

function Button({ classname, type = "button", children, onClick = () => {} }) {
  return (
    <button className={classname} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
