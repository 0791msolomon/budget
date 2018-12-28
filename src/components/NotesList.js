import React, { Component } from "react";
import { connect } from "react-redux";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = { noteList: [] };
  }

  showAllNotes = () => {
    return this.props.notes.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  };
  render() {
    return (
      <div id="notesContainer">
        <div>
          <ol>{this.showAllNotes()}</ol>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ notes }) {
  return {
    notes
  };
}

export default connect(
  mapStateToProps,
  null
)(NotesList);
