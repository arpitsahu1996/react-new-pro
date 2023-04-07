import logo from './logo.svg'
import './App.css'
import Login from './pages/auth/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
