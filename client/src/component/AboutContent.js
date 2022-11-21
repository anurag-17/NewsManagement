import React, { useEffect, useState } from 'react'
import { AdminDash } from './AdminDash';
import './AboutContent.css'
import Resizer from "react-image-file-resizer";
import axios from 'axios';


export const AboutContent = () => {

  const [data, setData] = useState({
    headline: "",
    title_1: "",
    title_2: "",
    title_3: "",
    description_1: "",
    description_2: "",
    description_3: "",
    banner_image: "",
    main_image: "",
    id:"63760e782500b952097b0d3f"
  })
  const [avatarpreview, setAvatarpreview] = useState()
  const [imagepreview,setimagePreview] = useState()
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const getdata = async()=>{
    const res = await axios.get("/api/auth/getaboutcontent")
    console.log(res.data)
    res.data.map((items,index)=>{
      setData({
        headline:items.headline,
        title_1: items.title_1,
        title_2:items.title_2,
        title_3: items.title_3,
        description_1: items.description_1,
        description_2:items.description_2,
       description_3: items.description_3,
        banner_image: items.banner_image,
        main_image:items.main_image,
        id:"63760e782500b952097b0d3f"
      })
    })

  }


  const updatecontent = async(e)=>{
    e.preventDefault()
 const res = await axios.post("/api/auth/aboutcontent",data).then(()=>console.log("updated successfully")).catch((error)=>console.log(error))
 console.log(res)
 
   setData({
    headline: "",
    title_1: "",
    title_2: "",
    title_3: "",
    description_1: "",
    description_2: "",
    description_3: "",
    banner_image: "",
    main_image: "",
    id:"63760e782500b952097b0d3f"
   })
}

  const encodefile = (file) => {
    if (file) {
      try {
        Resizer.imageFileResizer(
          file,
          500,
          500,
          "jpg",
          100,
          0,
          (uri) => {
            data.main_image = uri
          },
          "base64",
        );
      } catch (err) {
        console.log(err);
      }
    }
  };


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


  const encodefile2 = (file) => {
    if (file) {
      try {
        Resizer.imageFileResizer(
          file,
          500,
          500,
          "jpg",
          100,
          0,
          (uri) => {
            data.banner_image = uri
          },
          "base64",
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleimage =  (e)=>{

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setavatarPreview(reader.result);
        setimagePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

encodefile2(e.target.files[0])
  }

useEffect(()=>{
getdata()
},[])
  
  console.log(data)
  return (
    <>
      <div className='flex_blog'>
        <AdminDash />
        <div className='container'>
          <form
            onSubmit={updatecontent} 
            action="">
            <h2 className='mb-4' style={{ textAlign: 'center' }}>About Page</h2>
            <br />
            <div style={{ margin: "0 auto", width: "inherit" }}>
              <div className="doubleaboutinput">
                <div className=''>
                  <label className="inputlabel mt-2" htmlFor="title">Headline
                    <input value={data.headline} onChange={handleChange} type="text" name="headline" id="" placeholder='Headline' className="title_in mt-1" />
                  </label>
                </div>

                <div className="aboutflex">
                  <div style={{ width: "48%" }} >
                    <label className="inputlabel mt-2" htmlFor="title">Title One
                      <input value={data.title_1} onChange={handleChange} type="text" name="title_1" id="" placeholder='Title One' className="title_in mt-1" />
                    </label>
                    <label>Description
                      <textarea value={data.description_1} onChange={handleChange} placeholder='Description One' name="description_1" className='about-textarea title_in'  id="" cols="30" rows="20"></textarea>
                    </label>
                  </div>
                  <div style={{ width: "48%" }} >
                    <label className="inputlabel mt-2" htmlFor="title">Title Two
                      <input value={data.title_2} onChange={handleChange} type="text" name="title_2" id="" placeholder='Title Two' className="title_in mt-1" />
                    </label>
                    <label className="inputlabel mt-2" htmlFor="title">Description
                      <textarea value={data.description_2} onChange={handleChange} type="text" name="description_2" id="" placeholder='Description Two' className="about-textarea title_in" />
                    </label>
                  </div>
                </div>


                <div className="aboutflex">
                  <div style={{ width: "48%" }}>
                    <label className="inputlabel mt-2" htmlFor="title">Title3
                      <input value={data.title_3} onChange={handleChange} type="text" name="title_3" id="" placeholder='Tagline' className="title_in" />
                    </label>
                    <label className="inputlabel mt-2" htmlFor="title"> Description
                      <textarea value={data.description_3} onChange={handleChange} type="text" name="description_3" id="" placeholder='Description three' className="about-textarea title_in" />
                    </label>
                  </div>

                  <div style={{ width: "43%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className='flex file_in' >
                      <img src={imagepreview} className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} alt="mainimage" />
                      <input className='files' type="file" name="" id="files"
                       onChange={handleimage}
                      />
                      <label className='ml-3' htmlFor="files">
                        Banner Image
                      </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className='flex file_in'>
                      <img src={avatarpreview}className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} alt="logoimage" />
                      <input className="files" type="file" name="logo" id="file"
                       onChange={input_file}
                      />
                      <label className='ml-3' htmlFor="file">
                        Main image
                      </label>
                    </div>


                    <input type="submit" className='submitbtn mt-4' />

                  </div>


                </div>

                <div className="imageinputflex">


                  {/* <div className='quillclass' style = {{width:"400px"}}>
<ReactQuill
      theme="snow"
      placeholder="Type here"
      value={data.main_title_1}
      onChange={onChange}
      modules={modules}
      style={style}
      name="main_title"
    />
  </div> */}

                </div>
              </div>

            </div>
          </form>
        </div>

      </div>
    </>
  )
}
