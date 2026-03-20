import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            toast.success('Successfully logged in!')
            login()
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } else {
            toast.error('Please enter email and password')
        }
    }
  return (
    <div className="auth-container">
        <div className="auth-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group checkbox-group">
                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login