import { ADD_NOTE } from "../actions";

export default function(state = ["this is the first note"], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    default:
      return state;
  }
}
