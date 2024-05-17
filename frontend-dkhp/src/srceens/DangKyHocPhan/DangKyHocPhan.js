
export const DangKyHocPhan=()=>{
    return(
        <div>
            <header>
                <div>
                    <a href="/">
                        <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/logo-svd516f114-e-e.png" />
                    </a>
                </div>
                </header>
                <div>
                    <div>
                        <h1>Đăng ký học phần</h1>
                    </div>
                    <div>
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
                                <button type="button" onClick={()=>{
                                    handleSubmit()
                                }}>Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        
                )
}