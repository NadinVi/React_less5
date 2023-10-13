import { useTasksDispatch } from "../../contexts/tasks";
import { CHANGE_TASK, DELETE_TASK } from "../../containers/TaskContainer/taskReducer";
import { useTheme } from "../../contexts/theme";

function Task({ task }) {
  const dispatch = useTasksDispatch();
  const { theme } = useTheme();
  console.log('[Task]', theme);

  const className = `panel-${theme}`;
  const buttonClassName = `button-${theme}`;


  const handleChangeCheckbox = (e) => {
    dispatch({
      type: CHANGE_TASK,
      task: {
        ...task,
        done: e.target.checked,
      }
    })
  };

  const handleDelete = () => {
    dispatch({
      type: DELETE_TASK,
      taskId: task.id,
    })
  };

  return (
    <section className={className}>
      <div className="task">
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleChangeCheckbox}></input>
        <label className="task">{task.text}</label>
        <button className={buttonClassName}
          onClick={handleDelete}>Delete</button>
      </div>
    </section>
  )
}

export default Task
