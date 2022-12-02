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
  const [content, setContent] = useState("this is content")
  const [data, setData] = useState({
    seotitle:"",
    description:"",
    keyword:"",
    pagename:""

  })
  const [avatarpreview, setAvatarpreview] = useState()
  const [imagepreview, setimagePreview] = useState()
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
  console.log(data)


  // const getdata = async () => {
  //   const res = await axios.("/api/auth/getcontent",{pagename:data.pagename})
  //   console.log(res.data)
  //   res.data.map((items, index) => {
  //     setData({
  //       seotitle: items.seotitle,
  //       description: items.description,
  //       keyword: items.keyword,
  //       pagename: items.pagename,
  //     })
  //   })

  // }

  const onChange = (text) => {
    console.log(text)
    // setData({...data,main_title_1:text})
  };

  console.log(text)
  const style = {
    width: "400px",
    paddingBottom: "20px",
    borderStyle: "double",
    marginTop: "20px",
    height: "300px"
  };

  const updatecontent = async (e) => {
    e.preventDefault()
    const res = await axios.post("/api/auth/content",data).then(() => console.log("updated successfully")).catch((error) => console.log(error))
    console.log(res)

    setData({
      seotitle:"",
      description:"",
      keyword:"",
      pagename:""
    })
  }



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


  const handleimage = (e) => {

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
        <AdminDash />
        <div className='container'>
          <form onSubmit={updatecontent} action="">
            <div style={{ margin: "0 auto" }} className="mb-4">




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
                  <label style={{ display: "block" }} htmlFor="">Select Page
                    {/* <input type="text"onChange={(e)=>{setAddnews({...addnews ,catagory:e.target.value})}} /> */}
                    <select name = "pagename" value = {data.pagename} style={{ width: "100%",fontSize:"20px"}} onChange={handleChange} className="form-select mt-2" id="">
                      <option disabled value="">Select Category</option>
                      <option name ={data.pagename} value="Home">HomePage</option>
                      <option  name ={data.pagename} value="About">About Us</option>
                      <option name ={data.pagename} value="News">News</option>
                      <option name ={data.pagename} value="Blog">Blog</option>
                      <option name ={data.pagename} value="Learn">Learn</option>
                      <option name ={data.pagename} value="Career">Career</option>
                    </select>
                  </label>


                </div>
                <div className="inputflex">
                  <label className="inputlabel mt-2" htmlFor="title"> SEO Title
                    <input value={data.seotitle} onChange={handleChange} type="text" name="seotitle" id="" placeholder='seo title' className="title_input mt-1" />
                  </label>

                </div>
                <div className="inputflex">
                  <label className="inputlabel mt-2" htmlFor="title"> Meta description
                    <textarea name = "description" value={data.description} onChange={handleChange} className='inputlabel' style={{ width: "100%", height: "10rem" }}  id="" cols="50" rows="10"></textarea>
                  </label>

                </div>
                <div className="inputflex">
                  <label className="inputlabel mt-2" htmlFor="title">Keyword
                    <input value={data.keyword} onChange={handleChange} type="text" name="keyword" id="" placeholder='Keyword' className="title_input mt-1" />
                  </label>
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
                  {/* <div style= {{display:"flex",alignItems:"center",justifyContent:"center"}} className='flex-file file_in'>
              <img src = {!avatarpreview?data.logo:avatarpreview} className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} alt ="logoimage"/>
              <input className="files" type="file" name="logo" id="file" onChange={input_file}/>
              <label className='ml-3' htmlFor="file">
                Choose Logo
              </label>
            </div> */}
                </div>
              </div>
            </div>
            <input style={{ width: "64%", }} type="submit" className='submitbtn' />
          </form>
        </div>

      </div>
    </>
  )
}
