import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../srceens/Login/Login'
import Home from '../srceens/Home/Home'
import { DangKyHocPhan } from '../srceens/DangKyHocPhan/DangKyHocPhan'
const Navigation=()=>{
    return(
        <Router>
            <Routes>
                {/* <Route path="/login" element={<Login/>}/> */}
                {/* <Route path="/home" element={<Home/>}/> */}
                {/* <Route path="/DangKyHocPhan" element={<DangKyHocPhan/>}/> */}

            </Routes>
        </Router>
    )
}
export default Navigation