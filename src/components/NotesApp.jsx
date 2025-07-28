import React from "react";
import Header from "./Layouts/Header";
import NoteInput from "./Fragments/NoteInput";
import NotesList from "./Fragments/NotesList";
import { getInitialData, showFormattedDate } from "../utils/data";
import Footer from "./Layouts/Footer";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  onArchiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          }

          return note;
        }),
      };
    });
  }

  onSearchChangeHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  render() {
    // Filter pencarian
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.searchKeyword.toLowerCase());
    });

    // Filter Catatan sesuai 'filteredNotes'
    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <>
        <Header
          onSearchChange={this.onSearchChangeHandler}
          searchKeyword={this.state.searchKeyword}
        />

        <div className="note-app__body">
          <div className="note-input">
            <h2>Buat Catatan</h2>

            <NoteInput onAddNote={this.onAddNoteHandler} />
          </div>

          <h2>Catatan</h2>
          <NotesList
            notes={activeNotes}
            formatedDate={showFormattedDate}
            onDeleteNote={this.onDeleteNoteHandler}
            onArchiveNote={this.onArchiveNoteHandler}
          />

          <h2>
            Catatan - <i>Arsip</i>
          </h2>
          <NotesList
            notes={archivedNotes}
            formatedDate={showFormattedDate}
            onDeleteNote={this.onDeleteNoteHandler}
            onArchiveNote={this.onArchiveNoteHandler}
          />
        </div>

        <Footer />
      </>
    );
  }
}

export default NotesApp;
