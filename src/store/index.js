import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { tech: "Javascript " };
export const store = createStore(reducer, initialState);