import { useState } from "react";
import { useTasksDispatch } from "../../contexts/tasks";
import { ADD_TASK } from "../../containers/TaskContainer/taskReducer";
import { useTheme } from "../../contexts/theme";

let nextId = 0;

function AddTask() {
  const { theme } = useTheme();
  const className = `panel-${theme}`;

  const dispatch = useTasksDispatch();

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = (event) => {
    setText('');
    dispatch({
      type: ADD_TASK,
      id: nextId++,
      text: text,
      done: false,
    })
  }

  return (
    <>
      <section className={className}>
        <input
          placeholder="Add new task"
          value={text}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}>
          Add task
        </button>
      </section>
    </>
  );
};

export default AddTask
