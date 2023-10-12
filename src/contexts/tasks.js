import { createContext, useContext, useReducer } from "react";
import taskReducer from "../containers/TaskContainer/taskReducer";

const initialTasks = [];

const TaskContext = createContext(null);

const TasksDispatchContext = createContext(null);

const TaskProvider = ({ children }) => {
const [tasks, dispath] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispath}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  )
}


export const useTasks = () => {
  const value = useContext(TaskContext);
  if (value === null) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return value;
}

export const useTasksDispatch = () => {
  const value = useContext(TasksDispatchContext);
  if (value === null) {
    throw new Error('useTasksDispatch must be used within a TasksProvider')
  }

  return value;
}


export default TaskProvider
