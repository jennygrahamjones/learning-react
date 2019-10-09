// reducer takes two params:
// 1. the action (information about what happened)
// 2. a copy of the current state

function posts(state = [], action) {
  console.log(state, action);

  // it returns an updated copy of the store in response to the action
  return state;
}

export default posts;
