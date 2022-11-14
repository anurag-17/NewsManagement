import React, { useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { AdminDash } from './AdminDash';
import Resizer from "react-image-file-resizer";
import "./AddBlogs.css"

export const AddBlogs = () => {
  const [selectedimage, setSelectedImage] = useState([])
  const [avtarpreview, setAvatarpreview] = useState()

  const [blogdata, setBlogdata] = useState({
    "title": "",
    "description": "",
    "url": "",
    "date":new Date().toLocaleDateString()
  })
  const editorRef = useRef(null);
  const Input_handler = (e) => {
    setBlogdata({ ...blogdata, [e.target.name]: e.target.value })
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
            blogdata.url = uri
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
      blogdata.description = editorRef.current.getContent()
      console.log(blogdata);
      await axios.post("/api/auth/addblogs", blogdata, { headers: { "Content-Type": "application/json" } }).then((res) => {
        console.log(res.data);

      })
    }
  };



  return (
    <>
      <div className="flex_blog">
        <AdminDash />
        <div className="container scroll-main">
          <h2 className='mt-3 mb-2' style={{ fontSize: "1.5rem" }}>Add Blogs</h2>
          <div>
            <form action="">
              <div className='mb-2 flex-image'>
                <input type="text" name="title" id="" placeholder='Title' className='blog_title mt-4' onChange={Input_handler} />
                       <div style = {{position:"relative",bottom:"2rem"}} className='ml-4'>
              <h4 className='ml-2 mt-5'>Feature Image</h4>
              <div className='flex-file file_input'>
                  <img className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} src={avtarpreview} />
               <input className="file" type="file" name="url" id="file" onChange={input_file} />
                <label className='ml-3' htmlFor="file">
                   Choose Image
                  </label>
              </div>

              </div>
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
                <div className='btn_box'>
                <button className='btn btn-primary my-2 give_margin' onClick={log}>Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
