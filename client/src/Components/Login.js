import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import toast from 'react-hot-toast';

function Login() {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
         try {
            const { data } = await axios.post("http://localhost:4000/api/login", {
                ...values,
            }, {
                withCredentials: true,
            })

            if (data.isLoggedIn) {
                navigate("/dashboard")
            }

        } catch (error) {
            toast.error("login failed", {
                id: 'loginErr'
            });
            
        }
    };

    return (
        <div className="page">
            <div className='container'>
                <h2>Login</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" name='password'
                            placeholder='Password'
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <button type='submit'>Login</button>
                    <span>
                        Don't have an account ? <Link to="/register">Register</Link>
                    </span>
                </form>

            </div>
        </div>
    )
}

export default Login