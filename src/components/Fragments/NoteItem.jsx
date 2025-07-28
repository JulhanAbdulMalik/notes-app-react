import React from "react";
import Button from "../Elements/Button";
import NoteBody from "./NoteBody";

function NoteItem({
  id,
  title,
  createdAt,
  body,
  formatedDate,
  onDeleteNote,
  onArchiveNote,
}) {
  return (
    <div className="note-item">
      <NoteBody
        title={title}
        createdAt={createdAt}
        body={body}
        formatedDate={formatedDate}
      />

      <div className="note-item__action">
        <Button
          classname="note-item__delete-button"
          onClick={() => onDeleteNote(id)}
        >
          Delete
        </Button>
        <Button
          classname="note-item__archive-button"
          onClick={() => onArchiveNote(id)}
        >
          Arsipkan
        </Button>
      </div>
    </div>
  );
}

export default NoteItem;
