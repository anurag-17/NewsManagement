import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AddBlogs } from './AddBlogs'
import { AdminDash } from './AdminDash'
import "./viewemail.css"

export const Viewemail = () => {
    const [emaildata, setEmaildata] = useState([])
    useEffect(() => {
        axios.get("/api/auth/viewemail").then((res) => {

            setEmaildata(res.data.result)

        }).catch((e) => {
            console.log(e);
        })
    }, [emaildata])

    const deletehandler = async (id) => {
        await axios.post("/api/auth/deleteemail", { params: id }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })

    }

    return (
        <>
            <div className='flex_email'>
                <AdminDash />
                <div className="container ">

                    <div className='table-responsive-sm tableContainer '>
                        <table className="table tableA">
                            <thead>
                                <tr>
                                    <th>SNo.</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    emaildata.map((items, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{items.email}</td>
                                                <td><button className='btn' onClick={() => deletehandler(items._id)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
