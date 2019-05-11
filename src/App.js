
import React, { Component } from "react";
import '../node_modules/css-reset-and-normalize/scss/reset-and-normalize.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/styles/App.scss';
import NoteBook from './components/notebook';

class SnapNoteApp extends Component {
  render() {
    return (
      <React.Fragment>
        <NoteBook></NoteBook>
      </React.Fragment>

    )
  }
}
export default SnapNoteApp;