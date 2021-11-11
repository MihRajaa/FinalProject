import { ADD_TASK, DELETE_TASK, EDIT_TASK, LIST_TASK } from "./actionTypes";

const init = {
  tasks: [
    {
      id: "",
      todo: "",
      validation: false,
    },
  ],
};

const todoReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { todo: payload, validation: false }],
      };
    case LIST_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) => el),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload.id ? (el = payload) : el
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
