import * as React from "react";
import { Box } from "@mui/material/";
import { Typography } from "@mui/material";
import AddTask from "./AddNewTask";
import ToDoTasksList from "./ToDoTasksList";
import DoneTasksList from "./DoneTasksList";
import ToDoContextProvider from "reducers/reducer";

export default function ToDoList() {
  return (
    <ToDoContextProvider>
      <Box
        sx={{
          backgroundColor: "white",
          position: "absolute",
          right: "35%",
          borderRadius: "2%",
        }}
        width={514}
        height={566}
        component="div"
        display="flex"
        alignItems="center"
        marginTop={"5%"}
      >
        <Typography
          color="primary"
          sx={{ position: "absolute", top: "5%", fontSize: "250%", left: "5%" }}
        >
          TODO
        </Typography>
        <AddTask></AddTask>
        <ToDoTasksList></ToDoTasksList>
        <DoneTasksList></DoneTasksList>
      </Box>
    </ToDoContextProvider>
  );
}
