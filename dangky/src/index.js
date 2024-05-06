import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

import Login from './resources/login_ui'
import Main from './resources/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} exact />

            <Route path="/main" element={<Main />} exact />
        </Routes>
    </BrowserRouter>
    //  {/* <React.StrictMode>
    //         {/* <Login /> */}
    //         <Main />
    //     </React.StrictMode>    */}
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
