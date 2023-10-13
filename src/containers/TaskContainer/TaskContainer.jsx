import AddTask from "../../components/AddTask/AddTask";
import TaskList from "../../components/TaskList/TaskList";
//import { useTheme } from "../../contexts/theme";

const TaskContainer = () => {
  // const handleAddTask = (text) => {
  //   // if (text.length < 5) {
  //   //   alert("Add new task!");
  //   // }
  //   dispatch({
  //     type: ADD_TASK,
  //     id: nextId++,
  //     text: text,
  //     done: false,
  //   })
  // }

  // const handleChangeTask = (task) => {
  //   dispatch({
  //     type: CHANGE_TASK,
  //     task,
  //   })
  // }

  // const handleDeleteTask = (taskId) => {
  //   dispatch({
  //     type: DELETE_TASK,
  //     taskId,
  //   })
  // }

  return (
    <>
      <AddTask />
      <TaskList />
    </>
  );
};

export default TaskContainer;
