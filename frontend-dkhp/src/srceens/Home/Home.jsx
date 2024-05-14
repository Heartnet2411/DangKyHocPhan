// Main.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onViewProfile } from "../../store/actions";

function Home() {
  const { student, profile } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  const { id, token } = student;

  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
    }
  }, [token]);

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
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Xem thông tin </a>
            </li>
            <li>
              <a href="#">Đăng ký học phần </a>
            </li>
          </ul>
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
