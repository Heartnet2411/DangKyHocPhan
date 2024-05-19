//reducer for load all class and class details

import { Action } from "../actions";
const initialState = {
    classes: [],
    classDetails: {},
    classRegister:[]
}
export const ClassReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_ALL_CLASS:
            return {
                ...state,
                classes: action.payload
            }
        case Action.GET_CLASS_DETAILS_BY_STUDENT_ID:
            return {
                ...state,
                classRegister: action.payload
            }
        case Action.CREATE_CLASS_DETAILS:
            return {
                ...state,
                classDetails: action.payload
            }

        default:
            return state
    }

}