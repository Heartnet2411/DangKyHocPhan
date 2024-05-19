//get all class
import axios from "axios";
import { GetData, PostData } from "../../utils";
import { Action } from "../actions";
export const getAllClass = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3002/class/getAllClass");
    return dispatch({
      type: Action.GET_ALL_CLASS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const onRegisterClassDetails =
  ({ classID, detailsID, studentID, classified }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:3002/class/create-class-details",
        {
          classID,
          detailsID,
          studentID,
          classified,
        }
      );

      return dispatch({
        type: Action.CREATE_CLASS_DETAILS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const onGetClassDetails =
  ({ studentID }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3002/class/getClassDetailsByStudentID?studentID=${studentID}`
      );
      return dispatch({
        type: Action.GET_CLASS_DETAILS_REGISTERED,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
