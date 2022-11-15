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
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };

  const getdata = async()=>{
    const res = await axios.get("/api/auth/getcontent")
    if(res.data){
      setContent(res.data[0]._id)
    }
  }

  const onChange = (text) => {
    setText(text);
  };
  const style = {
    width: "300px",
    paddingBottom:"20px",
    borderStyle: "double"
  };

  const updatecontent = async(e)=>{
       e.preventDefault()
    const res = await axios.post("/api/auth/content",data).then(()=>console.log("updated successfully")).catch((error)=>console.log(error))
    console.log(res)
  }

  // const styleMap = {
  //   CODE: {
  //     backgroundColor: "rgba(0, 0, 0, 0.05)",
  //     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
  //     fontSize: 16,
  //     padding: 2,
  //   },
  //   HIGHLIGHT: {
  //     backgroundColor: "#F7A5F7",
  //   },
  //   UPPERCASE: {
  //     textTransform: "uppercase",
  //   },
  //   LOWERCASE: {
  //     textTransform: "lowercase",
  //   },
  //   CODEBLOCK: {
  //     fontFamily: '"fira-code", "monospace"',
  //     fontSize: "inherit",
  //     background: "#ffeff0",
  //     fontStyle: "italic",
  //     lineHeight: 1.5,
  //     padding: "0.3rem 0.5rem",
  //     borderRadius: " 0.2rem",
  //   },
  //   SUPERSCRIPT: {
  //     verticalAlign: "super",
  //     fontSize: "80%",
  //   },
  //   SUBSCRIPT: {
  //     verticalAlign: "sub",
  //     fontSize: "80%",
  //   },
  // };

  // const myBlockStyleFn = (contentBlock) => {
  //   const type = contentBlock.getType();
  //   switch (type) {
  //     case "blockQuote":
  //       return "superFancyBlockquote";
  //     case "leftAlign":
  //       return "leftAlign";
  //     case "rightAlign":
  //       return "rightAlign";
  //     case "centerAlign":
  //       return "centerAlign";
  //     case "justifyAlign":
  //       return "justifyAlign";
  //     default:
  //       break;
  //   }
  // };



  useEffect(()=>{
    getdata()
    // focusEditor();
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

          <ReactQuill
      theme="snow"
      placeholder="Type here"
      value={text}
      onChange={onChange}
      modules={modules}
      style={style}
    />


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
            
{/*         
            <label className="inputlabel mt-2" htmlFor="title">Main Title
            </label>
            <input onChange={handleChange} type="text" name="main_title" id="" placeholder='Main Title' className="title_input mt-1" />
            <br /> */}
           <br />
            {/* <div className='flex-file file_input'>
              <img className="mt-3" style={{ width: "3.2rem", height: "3.1rem", marginLeft: "10px", borderRadius: "50%" }} />
              <input onChange={(e)=>newencodefile(e.target.files[0])} className="file" type="file" name="main_image" id="file" />
              <label className='ml-3' htmlFor="file">
                Main Image
              </label>
            </div> */}
            {/* <label className="inputlabel mt-2" htmlFor="title">Sub Title
            </label>
            <input onChange={handleChange} type="text" name="main_subtitle" id="" placeholder='Sub Title' className="title_input mt-1" /> */}

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
