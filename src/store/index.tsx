import { createStore } from "redux";
import { enthusiasm } from "../reducers/index";

export const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});
