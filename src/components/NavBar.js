import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ""
    };
  }
  onChange = e => {
    this.setState({
      listItem: e.target.value
    });
  };
  addToList = e => {
    e.preventDefault();
    this.props.addNote(this.state.listItem);
    this.setState({
      listItem: ""
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/expenses">
                  Expenses Table
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moneyAccumulated">
                  Money Accumulated
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notesList">
                  Personal Notes
                </Link>
              </li>
            </ul>
          </div>
          <form className="form-inline">
            <div>
              <input
                className="form-control col-lg-12"
                type="search"
                value={this.state.listItem}
                onChange={this.onChange}
              />
              <button
                disabled={!this.state.listItem}
                className="btn btn-outline-info form-control col-lg-12"
                onClick={this.addToList}
              >
                Add To List
              </button>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(NavBar);
