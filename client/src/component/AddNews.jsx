import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import axios from 'axios';
import { AdminDash } from './AdminDash';
import Resizer from "react-image-file-resizer";
import "./AddNews.css"
export const AddNews = () => {

  const [addnews, setAddnews] = useState({
    "title": "",
    "description": "",
    "url": "",
    "date": new Date().toLocaleDateString()
  })

  const [selectedimage, setSelectedImage] = useState([])
  const [avtarpreview, setAvatarpreview] = useState()

  const editorRef = useRef(null);

  const Input_handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddnews({ ...addnews, [name]: value })
    console.log(addnews);
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
            addnews.url = uri
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

    console.log(addnews.date);
    if (editorRef.current) {
      addnews.description = editorRef.current.getContent()
      console.log(addnews);
      await axios.post("/api/auth/addnews", addnews, { headers: { "Content-Type": "application/json" } }).then((res) => {
        console.log(res.data);

      })
    }
  }
  
  return (
    <>
      <div className='flex_news bgnews'>
        <AdminDash />
        <div style= {{height:"97vh"}} className="container scroll-main mt-3">
          <h2 style = {{fontSize:"1.5rem"}}>Add News</h2>
          <div>
            <form action="">
              <div className='flex-image'>
                <input type="text" name="title" id="" placeholder='Title' onChange={Input_handler} className="title_input mt-4" />
              <div style = {{position:"relative",bottom:"2rem"}} className='ml-4'>
              <h4 className='ml-2'>Feature Image</h4>
              <div className='flex-file file_input'>
                  <img className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} src={avtarpreview} />
               <input className="file" type="file" name="url" id="file" onChange={input_file} />
                <label className='ml-3' htmlFor="file">
                   Choose Image
                  </label>
              </div>

              </div>
              </div>
              <div className="editor-container">
              <label htmlFor="">Description</label>
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
         
              <button className='btn btn-primary my-2' onClick={log}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
