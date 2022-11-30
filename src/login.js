import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

import './App.css'

export default function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({

        emailId: "",
        

        password: "",

    });
    const { emailId, password } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmt = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/login", user);
        navigate("/profile");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>


                    <form onSubmit={(e) => onSubmt(e)}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="emailId"
                                value={emailId}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">
                                Password
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Enter your Password"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>

                    </form>
                </div>
            </div>

            <footer>
                <p>First time? <NavLink to="/register">Create an account</NavLink>.</p>
                <p><NavLink to="/">Back to Homepage</NavLink>.</p>
            </footer>
</div>
            )
}