import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            toast.success('Successfully logged in!')
            setIsLoggedIn(true)
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } else {
            toast.error('Please enter email and password')
        }
    }
  return (
    <div>
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-group checkbox-group">
                        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login