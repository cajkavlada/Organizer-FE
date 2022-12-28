import { useEffect, useState } from 'react';
import {List, Typography} from "@mui/material";
import TaskListItem from "./TaskListItem";
import axios from '../../utils/axios';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    axios
      .get('tasks')
      .then(({ data }) => {
        setTasks(data);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0) {
    return <Typography>No tasks to display. Please create some.</Typography>;
  }

  return (
    <List>
      {tasks.map((task) => (
        <TaskListItem key={task.name} name={task.name} status={task.status} />
      ))}
    </List>
  );
};

export default TaskList;
