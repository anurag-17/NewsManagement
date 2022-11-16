import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import avatar from "./Images/logo_crop.png"
import "./Admin.css"
export const Admin = () => {

    const [token, setToken] = useState(JSON.parse(localStorage.getItem("newstoken")))

    useEffect(() => {

        if (token) {
            navigate("/admindash")
        }
    }, [])

    const [admindata, setAdmindata] = useState({
        "email": "",
        "password": ""
    })
    const navigate = useNavigate()
    const input_handler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdmindata({ ...admindata, [name]: value })
    }
    const form_handler = async (e) => {
        e.preventDefault()
        await axios.post("/api/auth/admin", admindata, { headers: { "Content-Type": "application/json" } }).then((res) => {
            console.log(res.data.token);
            const now = new Date().getTime()

            const item = {
                token: res.data.token,
                expiry: now + 25200000
            }
            localStorage.setItem("newstoken", JSON.stringify(item))
            navigate("/addnews")
        })
    }
    return (
        <>
            <div className="contentAdmin">
                <div className="login">
                    <div className="avatar">
                        <img src={avatar} />
                    </div>
                    <h2>Login</h2>
                    <h3>Welcome back Admin</h3>

                    <form className="login-form">
                        <div className="textbox">
                            <input type="email" placeholder="Username" id="uname" name="email" onChange={input_handler} required />
                            <span class="material-symbols-outlined"> <i class="fa fa-user-circle-o" aria-hidden="true"></i> </span>
                        </div>
                        <div class="textbox">
                            <input type="password" placeholder="Password" id="pwd" name="password" onChange={input_handler} required />
                            <span class="material-symbols-outlined"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <button type="submit" onClick={form_handler}>LOGIN</button>
                        {/* <a href="">Forgot your credentials?</a> */}
                    </form>
                </div>
            </div>









            {/* <div style={{ width: "50%" }} className="container mt-5">
                <h3>Admin</h3>
                <form className="was-validated" onSubmit={form_handler}>
                    <div className="mb-3 mt-3">
                        <label for="uname" className="form-label">Username:</label>
                        <input type="email" className="form-control aa" id="uname" placeholder="Enter username" name="email" onChange={input_handler} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control aa" id="pwd" placeholder="Enter password" name="password" onChange={input_handler} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <input type="submit" value="Login" className='btn btn-primary' />
                </form>
            </div> */}
        </>
    )
}
