import React from "react";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Textarea from "../Elements/Textarea";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeHandler = (event) => {
    const maxTitleLength = 50;
    const newTitle = event.target.value;

    if (newTitle.length <= maxTitleLength) {
      this.setState({
        title: newTitle,
      });
    }
  };

  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.onAddNote(this.state);

    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {50 - this.state.title.length}
        </p>
        <Input
          classname="note-input__title"
          type="text"
          placeholder="Judul ..."
          required
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <Textarea
          classname="note-input__body"
          placeholder="Catatan ..."
          required
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <Button type="submit">Buat</Button>
      </form>
    );
  }
}

export default NoteInput;
