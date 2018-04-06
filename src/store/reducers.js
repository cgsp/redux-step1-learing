export default (state = 0, action) => {
  state = state || { counter: 0 };
  switch (action.type) {
    case 'ADD':
      return { counter: state.counter + 1 }
      break;
    case 'SUB':
      return { counter: state.counter - 1 }
      break;
    default:
      return state;
      break;
  }
}