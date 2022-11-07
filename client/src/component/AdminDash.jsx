import React from 'react'
import { Link } from 'react-router-dom'

export const AdminDash = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Add News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Add Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">View News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">View Blogs</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
