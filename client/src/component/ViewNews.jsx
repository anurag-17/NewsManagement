import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { AdminDash } from './AdminDash';
import "./ViewNews.css"
import { useNavigate } from 'react-router';
import { Editor } from '@tinymce/tinymce-react';
import Resizer from "react-image-file-resizer";

export const ViewNews = () => {
    const navigate = useNavigate()
    const [newsdata, setNewsdata] = useState([])
    const [deleteid, setDeleteid] = useState()
    const [editid, setEditid] = useState()
    const [selectedimage, setSelectedImage] = useState([])
    const [avtarpreview, setAvatarpreview] = useState()
    const [editnewsdata, setEditnewsdata] = useState({
        "title": "",
        "description": "",
        "url": ""
    })
    const editorRef = useRef(null);
    useEffect(() => {
        axios.get("/api/auth/viewnews").then((res) => {
            
            setNewsdata(res.data.result)
            newsdata.reverse()
        })
        navigate("/viewnews")
    }, [newsdata])

    const deletehandler = async (id) => {

        setDeleteid(id)
        console.log(id);

        await axios.post("/api/auth/deletenews", { params: id }).then((res) => {

        }).catch((error) => {
            console.log(error);
        })

    }
    const edithandler = async (id) => {
        setEditid(id)
        console.log(id);
        await axios.post("/api/auth/editidnews", { params: id }).then((res) => {
            setEditnewsdata(res.data.result)
            console.log(res.data.result);
            setAvatarpreview(res.data.result.url)
        }).catch((error) => {
            console.log(error);
        })
    }



    const Input_handler = (e) => {
        setEditnewsdata({ ...editnewsdata, [e.target.name]: e.target.value })
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
                        editnewsdata.url = uri
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
        e.preventDefault()
        if (editorRef.current) {
            editnewsdata.description = editorRef.current.getContent()
            console.log(editnewsdata);
            await axios.post("/api/auth/editnews", editnewsdata, { headers: { "Content-Type": "application/json" } }).then((res) => {
                console.log(res.data);

            })
        }
    };



    return (
        <>
            <div className="flex_viewnews">
                <AdminDash />
                <div className="container">
                    <div className='newsbox'><h3>News</h3></div>
                    <div className='imgcardnews'>
                        {newsdata.slice(0).reverse().map((items, index) => {
                            return (
                                <div className="card mt-3" style={{ "width": "300px" }}>

                                    <img class="card-img-top cardimgnews" src={items.url} alt="Card image" />
                                    <div class="card-body">
                                        <h4 class="card-title">{items.title}</h4>
                                        <p class="card-text" dangerouslySetInnerHTML={{ __html: items.description }}></p>

                                    </div>
                                    <div className='card-footer'>
                                        <button className='btn' onClick={() => deletehandler(items._id)}>
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                        <button type="button" class="btn" data-toggle="modal" data-target="#myModal" onClick={() => edithandler(items._id)}>
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </button>
                                        <p>{items.date}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">


                                <div class="modal-header">
                                    <h4 class="modal-title">Edit News</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div>
                                    <form action="">
                                        <div className='mb-5'>

                                            <input type="text" name="title" id="" placeholder='Title' className='blog_title' onChange={Input_handler} value={editnewsdata.title}/>
                                        </div>
                                        <label htmlFor=""><strong>Description</strong></label>
                                        <Editor

                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue={editnewsdata.description}
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
                                            <input type="file" name="url" id=""  onChange={input_file} />
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
