import React from "react";
import { Route } from "react-router-dom";
import NotesList from "../components/NotesList";
import Home from "../components/Home";
import Expenses from "../containers/Expenses";

const Router = props => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/notesList" component={NotesList} />
      <Route path="/expenses" component={Expenses} />
    </div>
  );
};
export default Router;
