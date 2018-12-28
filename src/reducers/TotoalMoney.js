import React from "react";
import { ADD_EXPENSE } from "../actions";

export default function(state = 2800, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return state - action.payload.cost;

    default:
      return state;
  }
}
