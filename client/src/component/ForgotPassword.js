import React, { useState } from 'react'
import avatar from "./Images/logo_crop.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import emailjs from '@emailjs/browser'
import "./ForgotPassword.css"
import swal from 'sweetalert';

export const ForgotPassword = () => {
    const [admindata, setAdmindata] = useState({
        email: '',
        otp: ''
    })
const navigate = useNavigate()
    const Input_handler = (e) => {
        setAdmindata({ ...admindata, [e.target.name]: e.target.value })
        console.log(admindata);
    }

    const form_handler = async (e) => {
        e.preventDefault()
       await axios.post("/api/auth/validadmin", admindata, { headers: { "Content-Type": "application/json" } }).then(async(res) => {
            console.log(res.data);
            alert(res.data)
            admindata.otp = Math.floor(1000 + Math.random() * 9000);
            // console.log(admindata.otp);
       await axios.post("/api/auth/otpsave", admindata, { headers: { "Content-Type": "application/json" } }).then((res) => {
            console.log(res);
            }).catch((e) => {
                console.log(e);
            })
            emailjs.send(
                "service_gv50nwn",
                "template_l4ydu4s",
                admindata,
                "cdnwdKhKt0gj3lcT3"
            ).then((result) => {
                navigate("/passwordchange")
                console.log(result, "emailjs");
            }).catch((e) => {
                console.log(e, "emailjs");
            })
        }).catch((e) => {
            console.log(e.response.data);
            alert(e.response.data)
        })
    }
    return (
        <>
            <div className="contentAdmin">
                <div className="login">
                    <div className="avatar">
                        <img src={avatar} />
                    </div>
                    <h2>Forgot Password</h2>
                    <h3>Enter registered email</h3>
                    <form className="login-form">
                        <div className="textbox">
                            <input type="email" placeholder="Registered email" id="uname" name="email" onChange={Input_handler} required />
                            <span class="material-symbols-outlined"> <i class='fas fa-user-alt'></i> </span>
                        </div>
                        {/* <div class="textbox">
                            <input type="password" placeholder="Password" id="pwd" name="password"  required />
                            <span class="material-symbols-outlined"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        </div> */}
                        <button type="submit" onClick={form_handler}>Send Otp</button>

                    </form>
                </div>
            </div>
        </>
    )
}
