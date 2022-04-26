import { combineReducers } from "redux";
import tasks from "./tasks";
import idreducer from "./idreducer";

export const reducers = combineReducers({
    tasks,
    idreducer,
});