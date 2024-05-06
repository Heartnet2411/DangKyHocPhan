// Login.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = event.target.elements
        onLogin(username.value, password.value)
        navigate('/main') // navigate to main page after form submission
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                            value={username}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={() => navigate('/main')}>
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
