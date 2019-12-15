import { createStore } from "redux";
import cakeReducer from "./CakeReducer";

const cakeStore = createStore(cakeReducer)

export default cakeStore;