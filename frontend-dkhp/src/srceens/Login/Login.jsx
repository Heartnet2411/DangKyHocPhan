// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onLogin, onViewProfile, onFetchProfile } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { student, profile } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  const { id, token } = student;

  //, { state: { id } }

  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(student);
  const handleSubmit = () => {
    // event.preventDefault();
    dispatch(onLogin({ studentID, password })).then((res) => {
      if (res) {
        dispatch(onViewProfile({ studentID })); //change onView / onFetch
        navigate("/home");
        console.log(id);
      } else {
        setError("Sai tài khoản hoặc mật khẩu");
      }
    });
    //navigate('/home')
    //navigate('/home')
  };
  //change onFetch / onView or studentID / id
  useEffect(() => {
    if (token) {
      dispatch(onFetchProfile(studentID)); // fetch the profile
      // dispatch(onViewProfile({ studentID }));
      // navigate('/profile')
    }
  }, [token, dispatch, studentID]);

  return (
    <div>
      <header
        className="header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="/">
          <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/logo-svd516f114-e-e.png" />
        </a>
      </header>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "column",
          height: "100",
          borderRadius: "10px",
        }}
      >
        <div>
          <h1>Cổng thông tin sinh viên</h1>
        </div>
        <div>
          <h2>Đăng nhập hệ thống</h2>
        </div>
        <form>
          <div>
            <input
              type="text"
              name="studentID"
              placeholder="Nhập mã sinh viên"
              required
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <div>
            <button
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
