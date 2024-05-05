// Login.js
import React from 'react'

function Login({ onLogin }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = event.target.elements
        onLogin(username.value, password.value)
    }

    return (
        <div>
            <header
                className="header"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <a href="/">
                    <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/logo-svd516f114-e-e.png" />
                </a>
            </header>
            <div
                className="main"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyItems: 'center',
                    flexDirection: 'column',
                    height: '100',
                    borderRadius: '10px',
                }}
            >
                <div>
                    <h1>Cổng thông tin sinh viên</h1>
                </div>
                <div>
                    <h2>Đăng nhập hệ thống</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Nhập mã sinh viên"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
