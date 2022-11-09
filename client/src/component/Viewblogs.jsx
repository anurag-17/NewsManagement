import React, {useRef} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { AdminDash } from './AdminDash';
import "./Viewblog.css"
import { useNavigate } from 'react-router';
import { Editor } from '@tinymce/tinymce-react';
import Resizer from "react-image-file-resizer";




export const Viewblogs = () => {
    const navigate = useNavigate()
    const [blogdata, setBlogdata] = useState([])
    const [deleteid, setDeleteid] = useState()
    const [editid, setEditid] = useState()
    const [selectedimage, setSelectedImage] = useState([])
    const [avtarpreview, setAvatarpreview] = useState()
    const [editblogdata, setEditblogdata] = useState({
        "title": "",
        "description": "",
        "url": ""
    })
    const editorRef = useRef(null);

    
    useEffect(() => {
        axios.get("/api/auth/viewblogs").then((res) => {
            // console.log(res.data.result);
            setBlogdata(res.data.result)
        })
        navigate("/viewblogs")
    }, [blogdata])
    const deletehandler = async (id) => {

        setDeleteid(id)
        console.log(id);

        await axios.post("/api/auth/deleteblogs", { params: id }).then((res) => {

        }).catch((error) => {
            console.log(error);
        })

    }
    const edithandler = async (id) => {
        setEditid(id)
        console.log(id);
    }



    const Input_handler = (e) => {
        setEditblogdata({ ...editblogdata, [e.target.name]: e.target.value })
    }
    const input_file = (e) => {
        setSelectedImage(e.target.files)
        console.log(e.target.files);

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                // setavatarPreview(reader.result);
                setAvatarpreview(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);

    }
    const encodefile = (file) => {
        if (file) {
            try {
                Resizer.imageFileResizer(
                    file,
                    300,
                    300,
                    "jpg",
                    100,
                    0,
                    (uri) => {
                        editblogdata.url = uri
                    },
                    "base64",
                    200,
                    200
                );
            } catch (err) {
                console.log(err);
            }
        }
    };
    encodefile(selectedimage[0]);
    const log = async (e) => {

        if (editorRef.current) {
            editblogdata.description = editorRef.current.getContent()
            console.log(blogdata);
            //   await axios.post("/api/auth/addblogs", editblogdata, { headers: { "Content-Type": "application/json" } }).then((res) => {
            //     console.log(res.data);

            //   })
        }
    };



    return (


        <>
            <div className="flex_blog">
                <AdminDash />
                <div className="container">
                    <div className='blogbox'><h3>View Blogs</h3></div>
                    <div className='blogcard'>
                        {
                            blogdata.slice(0).reverse().map((items, index) => {
                                return (
                                    <div className="card mt-4" style={{ "width": "300px" }} key={index}>
                                        <img className="card-img-top blogimg" src={items.url} alt="Card image" />
                                        <div className="card-body">
                                            <h4 className="card-title">{items.title}</h4>
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: items.description }}></p>

                                        </div>
                                        <div className="card-footer">
                                            <button className='btn' onClick={() => deletehandler(items._id)}>
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal" onClick={() => edithandler(items._id)}>
                                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </button>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">


                                <div class="modal-header">
                                    <h4 class="modal-title">Modal Heading</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div>
                                    <form action="">
                                        <div className='mb-5'>

                                            <input type="text" name="title" id="" placeholder='Title' className='blog_title' onChange={Input_handler} />
                                        </div>
                                        <label htmlFor=""><strong>Description</strong></label>
                                        <Editor

                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue=""
                                            init={{
                                                height: 400,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar: 'undo redo | formatselect | ' +
                                                    'bold italic backcolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                    'removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                        />

                                        <div className='mt-4'>
                                            <h5>Feature Image</h5>
                                            <label htmlFor="url"><img style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} src={avtarpreview} /></label>
                                            <input type="file" name="url" id="" onChange={input_file} />
                                        </div>
                                        <div className='btn_box'>
                                            <button className='btn btn-primary mt-2 give_margin' onClick={log}>Submit</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
