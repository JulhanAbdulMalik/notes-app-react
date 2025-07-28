import React from "react";
import Input from "../Elements/Input";

function Header({ onSearchChange, searchKeyword }) {
  return (
    <div className="note-app__header">
      <h1>Notes App React</h1>

      <div className="note-search">
        <Input
          type="text"
          placeholder="Search notes ..."
          onChange={onSearchChange}
          value={searchKeyword}
        />
      </div>
    </div>
  );
}

export default Header;
