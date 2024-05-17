import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../srceens/Login/Login'
import Home from '../srceens/Home/Home'
const Navigation=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                
            </Routes>
        </Router>
    )
}
export default Navigation