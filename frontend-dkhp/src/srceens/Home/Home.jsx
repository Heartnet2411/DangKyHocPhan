// Main.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onViewProfile } from '../../store/actions';
import { useNavigate } from 'react-router-dom';


function Home() {
    const { student, profile } = useSelector((state) => state.studentReducer);
const dispatch = useDispatch();
const {id, token } = student;
const navigate = useNavigate();
useEffect(() => {
    if (token) {
        dispatch(onViewProfile());
        //console.log(id)
    }
}
, [token]);


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
                            <a>Đăng ký học phần </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Home