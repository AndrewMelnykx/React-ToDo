import { createContext, Dispatch } from "react";
import { Action } from "../reducers/reducer";
import { tasksData } from "data/taskData-statuses";

export const TasksDataContext = createContext(tasksData);
export const DispatcherContext = createContext<Dispatch<Action>>(() => []);
