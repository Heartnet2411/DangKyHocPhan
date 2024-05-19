import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';
import { Login } from './srceens/Login/Login';
import Home from './srceens/Home/Home';
import { DangKyHocPhan } from './srceens/DangKyHocPhan/DangKyHocPhan';

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} exact />

            <Route path="/home" element={<Home />} exact />
            <Route path='/DangKyHocPhan' element={<DangKyHocPhan/>} exact/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
