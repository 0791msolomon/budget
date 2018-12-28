import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Router from "./components/Router";
import NotesList from "./components/NotesList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <NavBar />
              {/* <NotesList /> */}
              <Router />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
