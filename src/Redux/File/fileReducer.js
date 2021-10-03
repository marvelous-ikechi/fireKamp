import * as ActionTypes from './type';

const initalState = {
  completed: [],
  nextUp: [],
  uploading: [],
  incomplete: [],
};

const FileReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.COMPLETED:
      return {
        ...state,
        payload: action.payload,
      };
    case ActionTypes.NEXT_UP:
      return {
        ...state,
        payload: action.payload,
      };
    case ActionTypes.INCOMPLETE:
      return {
        ...state,
        payload: action.payload,
      };
    case ActionTypes.UPLOADING:
      console.log('this just came in uploaded', action.payload.title);
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default FileReducer;
