import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'


export default function Home() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center w-10">
                <Link to="/login">
                <button type="submit" className="btn btn-outline-primary">
            Login
          </button><br/>
                </Link>
                <Link to="/register">
                <button type="submit" className="btn btn-outline-primary">
            Register
          </button>
                </Link>
            </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}