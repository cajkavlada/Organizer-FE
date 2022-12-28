import { ListItem, ListItemIcon, Typography } from "@mui/material";
import {
  RadioButtonUnchecked as UncheckedIcon,
  CheckCircleOutline as CheckedIcon,
} from "@mui/icons-material";

const TaskListItem = ({ name, status }) => {
  const checkIcon = status === "DONE" ? <CheckedIcon /> : <UncheckedIcon />;

  return (
    <ListItem>
      <ListItemIcon>{checkIcon}</ListItemIcon>
      <Typography>{name}</Typography>
    </ListItem>
  );
};

export default TaskListItem;
