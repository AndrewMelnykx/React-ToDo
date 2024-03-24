import * as React from "react";
import { Box } from "@mui/material/";
import { Typography } from "@mui/material";
import { statuses } from "data/taskData-statuses";
import ToDoTask from "./ToDoTask";
import { useDispatcherContext, useTasksDataContext } from "reducers/reducer";

export default function ToDoTasksList() {
  const useTasksData = useTasksDataContext();
  const dispatcher = useDispatcherContext();

  const ToDoTasks = useTasksData.filter(
    (task) => task.status !== statuses.done
  );

  const tasksQuantity = ToDoTasks.length;
  const handleTaskDelete = (id: string) => {
    dispatcher({
      type: "deleted_task",
      id: id,
    });
  };

  const handleTaskNameChanging = (changedTaskName: string, id: string) => {
    dispatcher({
      type: "edit_task",
      name: changedTaskName,
      id: id,
    });
  };

  const handleTasksStatus = (id: string) => {
    dispatcher({
      type: "change_status",
      id: id,
    });
  };
  return tasksQuantity ? (
    <>
      <Typography
        position={"absolute"}
        align="center"
        marginBottom={"35%"}
        marginLeft={"40%"}
        component={"p"}
      >
        ToDo({tasksQuantity})
      </Typography>
      <Box
        width="100%"
        height="10%"
        component={"div"}
        position={"absolute"}
        marginLeft={"2%"}
        display="flex"
        flexDirection="column"
        marginBottom={"30%"}
        style={{ height: `${tasksQuantity / 15}%` }}
      >
        {ToDoTasks.map((task) => (
          <Box key={task.id}>
            <ToDoTask
              task={task}
              handleTasKDelete={() => handleTaskDelete(task.id)}
              handleTaskNameChanging={(e) =>
                handleTaskNameChanging(e.target.value, task.id)
              }
              handleTaskStatus={() => handleTasksStatus(task.id)}
            />
          </Box>
        ))}
      </Box>
    </>
  ) : null;
}
