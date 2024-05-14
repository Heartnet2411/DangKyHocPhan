import { combineReducers } from 'redux';
import { StudentReducer } from './student-reducer';

export default combineReducers({
studentReducer: StudentReducer,
})