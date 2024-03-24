import React from "react";
import { ChangeEvent, useState } from "react";
import {
  FormControl,
  Box,
  InputAdornment,
  IconButton,
  Input,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Task {
  id: string;
  status: boolean;
  name: string;
}

interface ToDoTaskProps {
  handleTaskNameChanging: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTaskStatus: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTasKDelete: () => void;
  task: Task;
}

export default function ToDoTask({
  handleTasKDelete,
  handleTaskStatus,
  handleTaskNameChanging,
  task,
}: ToDoTaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <Box width={"100%"}>
          <FormControl>
            <Input
              onChange={handleTaskNameChanging}
              name="taskAdding"
              value={task.name}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsEditing(false)}>
                    <CheckIcon color="secondary" fontSize="medium" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <FormGroup style={{ flex: 1 }}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleTaskStatus}
                  name={task.name}
                  checked={task.status}
                />
              }
              label={task.name}
            ></FormControlLabel>
          </FormGroup>
          <Box display="flex" alignItems="center" marginLeft={"25%"}>
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon color="secondary" fontSize="medium" />
            </IconButton>

            <IconButton onClick={handleTasKDelete}>
              <DeleteIcon color="warning" fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}
