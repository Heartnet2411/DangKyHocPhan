// Main.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout, onViewProfile } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import "./Home.css";

function Home() {
  const { student, profile } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  const { id, token } = student;
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
      //console.log(id)
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/");
  };

  return (
    <div>
      <header>
        <div>
          <a href="/">
            <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/logo-svd516f114-e-e.png" />
          </a>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Tìm kiếm..." required />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Xem thông tin </a>
            </li>
            <li>
              <Link to="/DangKyHocPhan">Đăng ký học phần</Link>
            </li>
            <li>
              <Link to="/XemLich">Xem Lịch học</Link>
            </li>
          </ul>
        </div>

        <div>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      </header>
      {profile && (
        <div>
          <h1>Thông tin sinh viên</h1>
          <div>
            <p>Tên: {profile.name}</p>
            <p>Mã sinh viên: {profile.studentID}</p>
            <p>Email: {profile.email}</p>
            <p>Phòng ban: {profile.department}</p>
            <p>Số điện thoại: {profile.phoneNumber}</p>
            {/* <p>Giới tính: {profile.gender}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
