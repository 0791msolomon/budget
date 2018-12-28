import React from "react";
import { ADD_EXPENSE } from "../actions";

let placeholder = [
  { expense: "CAR", cost: 480 },
  { expense: "PHONE", cost: 60 },
  { expense: "RENT", cost: 800 },
  { expense: "GYM", cost: 40 },
  { expense: "DOGGIES", cost: 100 },
  { expense: "CREDIT CARDS", cost: 170 },
  { expense: "STUDENT LOANS", cost: 95 }
];
export default function(state = placeholder, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];

    default:
      return state;
  }
}
