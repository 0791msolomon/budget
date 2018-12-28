import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions";
import Modal from "react-responsive-modal";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      expense: "",
      cost: 0
    };
  }
  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  renderTableRows = () => {
    let total = this.props.totalMoney;
    return this.props.expenses.map(expense => {
      total -= expense.cost;
      return (
        <tr className="expensesRow" key={expense.expense}>
          <td>{expense.expense}</td>
          <td>{`$${expense.cost}`}</td>
          <td>{`$${total}`}</td>
        </tr>
      );
    });
  };
  calculateTotal = () => {
    let total = this.props.totalMoney;
    console.log("total", total);
    let cost = 0;
    this.props.expenses.forEach(item => (cost += item.cost));
    return `$${total - cost}`;
  };
  addNewExpense = e => {
    e.preventDefault();
    let obj = {
      expense: this.state.expense,
      cost: this.state.cost
    };
    this.props.addExpense(obj);
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  calculateBalance = () => {
    let total = this.props.totalMoney;
    let cost = 0;
    this.props.expenses.forEach(item => (cost += item.cost));
    total -= cost;
    return total - this.state.cost;
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <div id="totalAmount">
          <h1 className="display-2">{this.calculateTotal()}</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Spent on</th>
              <th>Cost</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
        <div>
          <button
            type="button"
            className="form-control btn btn-outline-success"
            onClick={this.openModal}
          >
            ADD NEW EXPENSE
          </button>
        </div>
        <Modal open={open} onClose={this.closeModal} center closeIconSize={12}>
          <h4>
            <u>Enter Expense Info</u>
          </h4>
          <br />
          <div id="container">
            <div>
              <strong> What Are you spending money on Ashley</strong>
              <input
                type="text"
                placeholder="Expense?"
                name="expense"
                onChange={this.onChange}
                className="form-control col-12"
              />
              <div />
              <br />
              <div>
                <strong>How much will this cost you</strong>
                <input
                  type="number"
                  placeholder="Cost? (enter a number)"
                  name="cost"
                  onChange={this.onChange}
                  className=" form-control col-12"
                />
              </div>
              <br />
              {this.state.expense && this.state.cost ? (
                <div>
                  <strong>
                    {`Your new balance will be $${this.calculateBalance()}`}{" "}
                  </strong>
                </div>
              ) : null}
              <br />
              <button
                className="form-control btn-success"
                onClick={this.addNewExpense}
              >
                Add Expense
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps({ expenses, totalMoney }) {
  return { expenses, totalMoney };
}
export default connect(
  mapStateToProps,
  { addExpense }
)(Expenses);
