import React from 'react'
import avatar from "./Images/logo_crop.png"
import { Link, useNavigate } from 'react-router-dom'
import "./Passwordchange.css"
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

export const Passwordchange = () => {
    const navigate = useNavigate()
    const [display, setDisplay] = useState(false)
    const [admindata, setAdmindata] = useState({
        newpassword: ""
    })
    const [recievedOtp, setRecievedOtp] = useState({
        otp: ""
    });

    const Input_handler = (e) => {
        setRecievedOtp({ ...recievedOtp, [e.target.name]: e.target.value })
        // console.log(recievedOtp);
    }

    const form_submit = async (e) => {
        e.preventDefault()
        await axios.post("/api/auth/otpvalid",recievedOtp,{ headers: { "Content-Type": "application/json" } }).then((res) => {
            const response = res
            if (response) {
                setDisplay(true)
            }
            setAdmindata(res.data)
            // console.log(admindata);
        }).catch((e) => {
            alert(e.response.data)
            console.log(e)
        })


    }
    const password_handler = (e) => {
        admindata.newpassword = e.target.value
        // console.log(admindata);
    }
    const password_submit = (e) => {
        e.preventDefault()
        axios.post("/api/auth/passwordchange", admindata, { headers: { "Content-Type": "application/json" } }).then((res) => {
            console.log(res);
            swal("Updated Successfully")
            navigate("/admin")
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <>
            <div className="contentAdmin">
                <div className="login">
                    <div className="avatar">
                        <img src={avatar} />
                    </div>
                    <h2 className={display ? "abc" : ""}>OTP</h2>
                    <h2 className={display ? "" : "abc"}>New Password</h2>
                    <h3 className={display ? "abc" : ""}>Enter recieved otp</h3>
                    <h3 className={display ? "" : "abc"}>Enter new password</h3>

                    <form className="login-form">
                        <div className={display ? "abc" : "textbox"}>
                            <input type="number" max={9999} min={0} placeholder="Enter otp" id="uotp" name="otp" onChange={Input_handler} required />
                            <span class="material-symbols-outlined"><i class='fas fa-key'></i></span>
                        </div>
                        <div class={display ? "textbox" : "abc"}>
                            <input type="password" placeholder="Password" id="pwd" name="password" onChange={password_handler} required />
                            <span class="material-symbols-outlined"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <button type="submit" className={display ? "abc" : ""} onClick={form_submit} >Submit</button>
                        <button type="submit" className={display ? "" : "abc"} onClick={password_submit} >Change</button>

                    </form>
                </div>
            </div>
        </>
    )
}

