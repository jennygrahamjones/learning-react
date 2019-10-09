// reducer takes two params:
// 1. the action (information about what happened)
// 2. a copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES": {
      const index = action.index;
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1 },
        state.slice(index + 1)
      ];
    }
    default:
      return state; // because all reducers return in response to all actions
  }
}

export default posts;
