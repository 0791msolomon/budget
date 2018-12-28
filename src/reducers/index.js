import { combineReducers } from "redux";
import notes from "./NotesReducers";
import expenses from "./ExpensesReducer";
import totalMoney from "./TotoalMoney";

const reducers = combineReducers({
  notes,
  expenses,
  totalMoney
});

export default reducers;
