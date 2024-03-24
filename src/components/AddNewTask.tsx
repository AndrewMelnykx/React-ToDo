import React from "react";
import { Box, FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import {
  useDispatcherContext,
  generateUniqueID,
  useTasksDataContext,
} from "reducers/reducer";

export default function AddTask() {
  const [text, setText] = useState("");
  const handleInputChanging = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const dispatch = useDispatcherContext();
  const data = useTasksDataContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "add_new_task",
      name: text,
      id: generateUniqueID(),
    });
    console.log(`textSubmited ${text}`);
    console.log(data);
    setText("");
  };

  return (
    <Box sx={{ width: "100%" }} marginBottom={"70%"}>
      <FormControl fullWidth component={"form"} onSubmit={handleSubmit}>
        <TextField
          label="New task name"
          id="task_input"
          variant="standard"
          onChange={handleInputChanging}
          value={text}
          sx={{
            m: 1,
            width: "90%",
            position: "absolute",
            top: "15%",
            left: "5%",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  color="primary"
                  sx={{ color: "primary" }}
                >
                  +
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FormControl>
    </Box>
  );
}
