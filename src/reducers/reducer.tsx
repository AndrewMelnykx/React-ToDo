import React from "react";
import { useReducer, useContext } from "react";
import { tasksData, TaskDataProps } from "data/taskData-statuses";
import { TasksDataContext, DispatcherContext } from "services/context";

interface PropsChildrenContextProvider {
  children: React.ReactNode;
}
export default function ToDoContextProvider({
  children,
}: PropsChildrenContextProvider) {
  const [tasks, dispatch] = useReducer(TasksReducer, tasksData);

  return (
    <TasksDataContext.Provider value={tasks}>
      <DispatcherContext.Provider value={dispatch}>
        {children}
      </DispatcherContext.Provider>
    </TasksDataContext.Provider>
  );
}
export const generateUniqueID = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return randomNumber.toString();
};
export const useTasksDataContext = () => {
  return useContext(TasksDataContext);
};

export const useDispatcherContext = () => {
  return useContext(DispatcherContext);
};

interface deletedTask {
  type: "deleted_task";
  id: string;
}
interface addedNewTask {
  type: "add_new_task";
  name: string;
  id: string;
}
interface editedTask {
  type: "edit_task";
  name: string;
  id: string | number;
}
interface changedTaskStatus {
  type: "change_status";
  id: string;
}

export type Action =
  | deletedTask
  | addedNewTask
  | editedTask
  | changedTaskStatus;

export function TasksReducer(
  state: TaskDataProps[],
  action: Action
): TaskDataProps[] {
  switch (action.type) {
    case "add_new_task": {
      return [
        ...state,
        {
          id: generateUniqueID(),
          name: action.name,
          status: false,
        },
      ];
    }
    case "change_status": {
      return state.map((task) =>
        task.id === action.id ? { ...task, status: !task.status } : task
      );
    }
    case "edit_task": {
      return state.map((task) =>
        task.id === action.id ? { ...task, name: action.name } : task
      );
    }
    case "deleted_task": {
      return state.filter((task) => task.id !== action.id);
    }
    default:
      return state;
  }
}
