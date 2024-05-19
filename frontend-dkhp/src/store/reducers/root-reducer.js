import { combineReducers } from 'redux';
import { StudentReducer } from './student-reducer';
 import { ClassReducer } from './class-reducer';

export default combineReducers({
studentReducer: StudentReducer,
classReducer: ClassReducer
})