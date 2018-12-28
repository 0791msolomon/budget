export const ADD_NOTE = "ADD_NOTE";
export const ADD_EXPENSE = "ADD_EXPENSE";

export function addNote(data) {
  return {
    type: ADD_NOTE,
    payload: data
  };
}

export function addExpense(expense) {
  return {
    type: ADD_EXPENSE,
    payload: expense
  };
}
