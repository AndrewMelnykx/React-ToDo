import * as React from "react";
import { Box } from "@mui/material/";
import { Typography } from "@mui/material";
import { statuses } from "data/taskData-statuses";
import DoneTask from "./DoneTask";
import { useDispatcherContext, useTasksDataContext } from "reducers/reducer";

export default function DoneTasksList() {
  const useTasksData = useTasksDataContext();
  const dispatcher = useDispatcherContext();

  const doneTasks = useTasksData.filter(
    (task) => task.status !== statuses.inPlan
  );

  const tasksQuantity = doneTasks.length;
  const handleTaskDelete = (id: string) => {
    dispatcher({
      type: "deleted_task",
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
        marginTop={"5%"}
        marginLeft={"40%"}
        component={"p"}
      >
        Done({tasksQuantity})
      </Typography>
      <Box
        width="100%"
        height="0%"
        component={"div"}
        position={"absolute"}
        marginLeft={"2%"}
        display="flex"
        flexDirection="column"
        marginTop={`${tasksQuantity * 15}%`}
      >
        {doneTasks.map((task) => (
          <Box key={task.id}>
            <DoneTask
              task={task}
              handleTasKDelete={() => handleTaskDelete(task.id)}
              handleTaskStatus={() => handleTasksStatus(task.id)}
            />
          </Box>
        ))}
      </Box>
    </>
  ) : null;
}
