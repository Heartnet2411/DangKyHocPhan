// Main.js
import React from 'react'

function Main() {
    return (
        <div>
            <header>
                <div>
                    <a href="/">
                        <img
                            src="https://media.iuh.edu.vn/Media/2_sviuh/Images/iuh7313e0f8-4-e.png"
                            style={{ maxHeight: '40' }}
                        />
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
        </div>
    )
}

export default Main
