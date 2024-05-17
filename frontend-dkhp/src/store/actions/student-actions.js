import { GetData, PostData } from "../../utils";
import axios from "axios";
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

// export const onViewProfile =
//   ({ studentID }) =>
//   async (dispatch) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No token found");
//       }

//       const response = await GetData("/student/profile", studentID);

//       return dispatch({ type: Action.PROFILE, payload: response.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

export const onViewProfile =
  ({ studentID }) =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get(`/student/profile/${studentID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return dispatch({ type: Action.PROFILE, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const logout = () => {
  return { type: "LOGOUT" };
};

export const onFetchProfile =
  ({ id }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`student/profile/${id}`);
      dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "FETCH_PROFILE_ERROR", error });
    }
  };
