import React from "react";

function NoteBody({ title, createdAt, body, formatedDate }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formatedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteBody;
