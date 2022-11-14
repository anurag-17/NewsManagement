import React, { useState } from 'react'
import './AddContent.css'
import Resizer from "react-image-file-resizer";
import { AdminDash } from './AdminDash';
import axios from 'axios';
import { useEffect } from 'react';

export const AddContent = () => {
  const [content,setContent] = useState("")
  const [data, setData] = useState({
    logo: "",
    main_title: "",
    tagline: "",
    main_subtitle: "",
    main_btn_text: "",
    main_image: "",
    id:"636e15b91b10152061f717c0"
  })
  const [avatarpreview, setAvatarpreview] = useState()

  const getdata = async()=>{
    const res = await axios.get("/api/auth/getcontent")
    if(res.data){
      setContent(res.data[0]._id)
    }
  }

  const updatecontent = async(e)=>{
       e.preventDefault()
    const res = await axios.post("/api/auth/content",data).then(()=>console.log("updated successfully")).catch((error)=>console.log(error))
    console.log(res)
  }

  useEffect(()=>{
    getdata()
  },[])


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  console.log(data)
  const input_file = (e) => {
    console.log(e.target.value)
    encodefile(e.target.files[0]);
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
            data.logo = uri
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


  return (
    <>
      <div className='flex_blog'>
        <AdminDash/>
        <div className='container'>
        <form onSubmit={updatecontent} action="">
          <div style={{ width: "90%", margin: "0 auto" }} className="mb-4">
        
            <label className="inputlabel mt-2" htmlFor="title">Main Title
            </label>
            <input onChange={handleChange} type="text" name="main_title" id="" placeholder='Main Title' className="title_input mt-1" />
            <br />
           <br />
            {/* <div className='flex-file file_input'>
              <img className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} />
              <input onChange={(e)=>newencodefile(e.target.files[0])} className="file" type="file" name="main_image" id="file" />
              <label className='ml-3' htmlFor="file">
                Main Image
              </label>
            </div> */}
            <label className="inputlabel mt-2" htmlFor="title">Sub Title
            </label>
            <input onChange={handleChange} type="text" name="main_subtitle" id="" placeholder='Sub Title' className="title_input mt-1" />

            <label className="inputlabel mt-2" htmlFor="title">Tagline
            </label>
            <input onChange={handleChange} type="text" name="tagline" id="" placeholder='Tagline' className="title_input mt-" />

            <label className="inputlabel mt-2" htmlFor="title">Button Text
            </label>
            <input onChange={handleChange} type="text" name="main_btn_text" id="" placeholder='Button Text' className="title_input mt-1" />

            <div style= {{display:"flex",alignItems:"center"}} className='flex-file file_in'>
              <img src = {avatarpreview} className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} />
              <input className="files" type="file" name="logo" id="file" onChange={input_file}/>
              <label className='ml-3' htmlFor="file">
                Choose Logo
              </label>
            </div>
          </div>
          <input type="submit" className='submitbtn'/>
        </form>
        </div>

      </div>
    </>
  )
}
