// this is the user reducers
import * as actionType from './type';

export const initialUserState = {
  user: [],
};

export default function FileReducer(state = initialUserState, action) {
  switch (action.type) {
    case actionType.UPLOADING:
      return {
        ...state,
        user: action.payload,
      };
    case actionType.GET_USERS_FAILURE:
      return {
        ...state,
        user: [],
      };
    case actionType.GET_USERS_LOGOUT:
      console.log('logout');
      return {
        ...state,
        user: [],
      };

    default:
      return state;
  }
}
