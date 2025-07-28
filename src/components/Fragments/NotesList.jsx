import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, formatedDate, onDeleteNote, onArchiveNote }) {
  // Kondisi jika tidak ada catatan
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            {...note}
            formatedDate={formatedDate}
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
