import React, { useRef, useState } from 'react'
import './AddContent.css'
import Resizer from "react-image-file-resizer";
import { AdminDash } from './AdminDash';
import axios from 'axios';
import { useEffect } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import {convertFromRaw, convertToRaw, Editor, EditorState, RichUtils} from 'draft-js';
// import { Toolbaar } from './Toolbaar';

export const AddContent = () => {
  const [content,setContent] = useState("this is content")
  const [data, setData] = useState({
    logo: "",
    main_title_1: "",
    main_title_2:"",
    tagline: "",
    main_subtitle_1: "",
    main_subtitle_2:"",
    main_btn_text: "",
    main_image: "",
    id:"63733a31ca305b1233680676"
  })
  const [avatarpreview, setAvatarpreview] = useState()
  const [imagepreview,setimagePreview] = useState()
  const [text, setText] = React.useState("");

  const editor = useRef(null);
  //   const [editorState, setEditorState] = useState(() =>
  //   EditorState.createWithContent(
  //     convertFromRaw({
  //       blocks: [
  //         {
  //           key: "3eesq",
  //           text: " ",
  //           type: "unstyled",
  //           depth: 0,
  //           inlineStyleRanges: [
  //             {
  //               offset: 19,
  //               length: 6,
  //               style: "BOLD",
  //             },
  //             {
  //               offset: 25,
  //               length: 5,
  //               style: "ITALIC",
  //             },
  //             {
  //               offset: 30,
  //               length: 8,
  //               style: "UNDERLINE",
  //             },
  //           ],
  //           entityRanges: [],
  //           data: {},
  //         },
  //         // {
  //         //   key: "9adb5",
  //         //   text: " ",
  //         //   type: "header-one",
  //         //   depth: 0,
  //         //   inlineStyleRanges: [],
  //         //   entityRanges: [],
  //         //   data: {},
  //         // },
  //       ],
  //       entityMap: {},
  //     })
  //   )
  // );

  // const focusEditor = () => {
  //   editor.current.focus();
  // };
  // const handleKeyCommand = (command) => {
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   if (newState) {
  //     setEditorState(newState);
  //     return true;
  //   }
  //   return false;
  // };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["image"],
      ["link","clean","code-block"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };

  const getdata = async()=>{
    const res = await axios.get("/api/auth/getcontent")
    console.log(res.data)
    res.data.map((items,index)=>{
      setData({
        logo: items.logo,
        main_title_1: items.main_title_1,
        main_title_2:items.main_title_2,
        tagline: items.tagline,
        main_subtitle_1: items.main_subtitle_1,
        main_subtitle_2:items.main_subtitle_2,
        main_btn_text: items.main_btn_text,
        main_image: items.main_image,
        id:"63733a31ca305b1233680676"
      })
    })

  }

  const onChange = (text) => {
    console.log(text)
    // setData({...data,main_title_1:text})
  };

  console.log(text)
  const style = {
    width: "400px",
    paddingBottom:"20px",
    borderStyle: "double",
    marginTop:"20px",
    height:"300px"
  };

  const updatecontent = async(e)=>{
       e.preventDefault()
    const res = await axios.post("/api/auth/content",data).then(()=>console.log("updated successfully")).catch((error)=>console.log(error))
    console.log(res)
    
      setData({
        logo: "",
        main_title_1: "",
        main_title_2:"",
        tagline: "",
        main_subtitle_1: "",
        main_subtitle_2:"",
        main_btn_text: "",
        main_image: "",
        id:"63733a31ca305b1233680676"
      })
  }


  useEffect(()=>{
    getdata()
    // focusEditor();
  },[data])


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  const encodefile2 = (file) => {
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
            data.main_image = uri
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

  return (
    <>
      <div className='flex_blog'>
        <AdminDash/>
        <div className='container'>
        <form onSubmit={updatecontent} action="">
          <div style={{margin: "0 auto" }} className="mb-4">

     


{/* 
          <div className="editor-wrapper" onClick={focusEditor}>
      <Toolbaar editorState={editorState} setEditorState={setEditorState} />
      <div className="editor-container">
        <Editor
          ref={editor}
          placeholder="Write Here"
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          customStyleMap={styleMap}
          blockStyleFn={myBlockStyleFn}
          onChange={(editorState) => {
            const contentState = editorState.getCurrentContent();
            console.log(convertToRaw(contentState));
            setEditorState(editorState);
          }}
        />
      </div>
    </div> */}
            
        
        <div className="doubleinput">
        <div className='inputflex'>
            <label className="inputlabel mt-2" htmlFor="title">Main Title One
            <input value={data.main_title_1} onChange={handleChange} type="text" name="main_title_1" id="" placeholder='Main Title' className="title_input mt-1" />
            </label>
            <label className="inputlabel mt-2" htmlFor="title">Main Tile Two
            <input value={data.main_title_2} onChange={handleChange} type="text" name="main_title_2" id="" placeholder='Main Title Two' className="title_input mt-1" />
            </label>
        </div>
            <div className="inputflex">
            <label className="inputlabel mt-2" htmlFor="title">Sub Title One
            <input value={data.main_subtitle_1} onChange={handleChange} type="text" name="main_subtitle_1" id="" placeholder='Sub Title' className="title_input mt-1" />
            </label>
            <label className="inputlabel mt-2" htmlFor="title">Sub Title Two
            <input  value={data.main_subtitle_2} onChange={handleChange} type="text" name="main_subtitle_2" id="" placeholder='Sub Title Two' className="title_input mt-1" />
            </label>
            </div>
<div className="inputflex">

            <label className="inputlabel mt-2" htmlFor="title">Tagline
            <input value = {data.tagline} onChange={handleChange} type="text" name="tagline" id="" placeholder='Tagline' className="title_input mt-" />
            </label>

            <label className="inputlabel mt-2" htmlFor="title">Button Text
            <input value = {data.main_btn_text} onChange={handleChange} type="text" name="main_btn_text" id="" placeholder='Button Text' className="title_input mt-1" />
            </label>

</div>

<div className="imageinputflex">
<div style= {{display:"flex",alignItems:"center",justifyContent:"center"}} className='flex-file file_in' >
<img src = {!imagepreview?data.main_image:imagepreview} className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} alt="mainimage" />
<input className='files' type="file" name="" id="files" onChange={handleimage}/>
<label className='ml-3' htmlFor="files">
                Banner Image
              </label>
</div>

  {/* <div className='quillclass' style = {{width:"400px"}}>
<ReactQuill
      theme="snow"
      placeholder="Type here"
      value={content}
      onChange={onChange}
      modules={modules}
      style={style}
      name="content"
    />
  </div> */}
            <div style= {{display:"flex",alignItems:"center",justifyContent:"center"}} className='flex-file file_in'>
              <img src = {!avatarpreview?data.logo:avatarpreview} className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} alt ="logoimage"/>
              <input className="files" type="file" name="logo" id="file" onChange={input_file}/>
              <label className='ml-3' htmlFor="file">
                Choose Logo
              </label>
            </div>
</div>
        </div>
          </div>
          <input style= {{width:"64%", }} type="submit" className='submitbtn'/>
        </form>
        </div>

      </div>
    </>
  )
}
