import { ADD_COMMENT } from "../actions/commentActions";

const initialState: Comment[] = JSON.parse(localStorage.getItem('comments') || '[]');

// Reducer
const commentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMMENT:
        const updatedComments = [...state, action.payload];
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        return updatedComments;
      default:
        return state;
  }
};

export default commentReducer;

export {};