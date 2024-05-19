import { Action } from "../actions";
const initialState = {
  student: {},
  profile: {},
};
export const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.LOGIN:
      return {
        ...state,
        student: action.payload,
      };
    case Action.SIGNUP:
      return {
        ...state,
        student: action.payload,
      };
    case Action.PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
