export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const DELETE_TASK = 'DELETE_TASK';


export default function taskReducer(tasks, action) {
if (action.type === ADD_TASK) {
    return [
        ...tasks,
        {
            id: action.id,
      text: action.text,
      done: action.done,
        }
    ]
}

if (action.type === CHANGE_TASK) {
    return tasks.map((t) => {
        if (t.id === action.task.id) {
            return action.task;
        } else {
            return t;
        }
    })
}

if (action.type === DELETE_TASK) {
    return tasks.filter((t) => t.id !== action.taskId)
}


    return tasks;
}