import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Joi from 'joi'

const Register = ({ setIsLoggedIn }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const user = { name, email, password, confirm_password: confirmPassword }
        const { error } = validateRegisterForm(user)

        if (error) {
            error.details.forEach(err => toast.error(err.message))
            return
        }

        toast.success('Registration successful!')
        setIsLoggedIn(true)
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    function validateRegisterForm(user) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      password: Joi.string().min(4).required(),
      confirm_password: Joi.string().valid(Joi.ref('password')).required(),
    });

    return schema.validate(user, { abortEarly: false });
  }

    
  return (
    <div>
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register