import { GetData, PostData } from "../../utils";
import { Action } from "../actions";

export const SetAuthToken = async (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.clear();
  }
};

export const onSignup =
  ({ name, studentID, password, email, department, phoneNumber, salt }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/student/create-student", {
        name,
        studentID,
        password,
        email,
        department,
        phoneNumber,
        salt,
      });
      const { token } = response.data;
      await SetAuthToken(token);
      return dispatch({ type: Action.SIGNUP, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const onLogin =
  ({ studentID, password }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/student/login", {
        studentID,
        password,
      });
      const { token } = response.data;
      //console.log(token)
      if (token !== undefined) {
        await SetAuthToken(token);

        return dispatch({ type: Action.LOGIN, payload: response.data });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const onViewProfile = () => async (dispatch) => {
  try {
    const response = await GetData("/student/profile");

    return dispatch({ type: Action.PROFILE, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
export const logout = () => {
  return { type: "LOGOUT" };
};
