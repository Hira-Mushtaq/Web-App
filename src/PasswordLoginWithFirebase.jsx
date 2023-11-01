import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import HomeScreen from './Home'

const PasswordLoginWithFirebase = () => {
    return (
        <BrowserRouter>
            <div>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<HomeScreen />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default PasswordLoginWithFirebase