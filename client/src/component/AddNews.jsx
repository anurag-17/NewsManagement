import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import axios from "axios";
import { AdminDash } from "./AdminDash";
import Resizer from "react-image-file-resizer";
import "./AddNews.css";
export const AddNews = () => {
  const [addnews, setAddnews] = useState({
    title: "",
    img: "",
    url: "",
    catagory:""
  });
  console.log(addnews)

  const [selectedimage, setSelectedImage] = useState([]);
  const [avtarpreview, setAvatarpreview] = useState();

  const Input_handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddnews({ ...addnews, [name]: value });
    console.log(addnews);
  };

  const input_file = (e) => {
    setSelectedImage(e.target.files);
    setAddnews({...addnews ,img:e.target.value})
    console.log(e.target.files);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setavatarPreview(reader.result);
        setAvatarpreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
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
            addnews.img = uri;
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
    console.log(addnews);
    // return;
    console.log(addnews);
    await axios
      .post("/api/auth/addnews", addnews, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        setAddnews({
          title: "",
          img: "",
          url: "",
          catagory:""
        })
      });
  };

  return (
    <>
      <div className="flex_news bgnews">
        <AdminDash />
        <div className="container adminnews scroll-main mt-3">
          <h2 style={{ fontSize: "1.8rem",fontWeight:"600" }}>Add Vedio</h2>
          <div>
            <form action="">
              <div className="flex-image">
                <input
                  type="text"
                  name="title"
                  id=""
                  placeholder="Title"
                  onChange={Input_handler}
                  className="title_input mt-4"
                />
                <div
                  style={{ position: "relative", bottom: "2rem" }}
                  className="ml-4 mt-5"
                >
                  <h4 className="ml-2">Feature Image</h4>
                  <div className="flex-file file_input">
                    <img
                      className="mt-3"
                      style={{
                        width: "3.2rem",
                        height: "3.1rem",
                        marginLeft: "10px",
                        borderRadius: "50%",
                      }}
                      src={avtarpreview}
                    />
                    <input
                      className="file"
                      type="file"
                      name="url"
                      id="file"
                      onChange={input_file}
                    />
                    <label className="ml-3" htmlFor="file">
                      Choose Image
                    </label>
                  </div>
                </div>
              </div>
              <div className="editor-container">
                <label htmlFor="">Link</label>
                <input value={addnews.url} style ={{padding:"10px"}} type="text"onChange={(e)=>{setAddnews({...addnews ,url:e.target.value})}} />
                <label style = {{display:"block"}} htmlFor="">category
                {/* <input type="text"onChange={(e)=>{setAddnews({...addnews ,catagory:e.target.value})}} /> */}
                <select value={addnews.catagory} style= {{width:"100%",display:"block"}} onChange={(e)=>{setAddnews({...addnews,catagory:e.target.value})}} className="form-select mt-2" name="" id="">
                <option disabled value="">Select Category</option>
                  <option value="All">All</option>
                  <option value="MutualFund">Mutual Fund</option>
                  <option value="BeginnerLesson">Beginner lesson</option>
                  <option value="Finance">Finance</option>
                  <option value="InterestingFacts">Interesting Facts</option>
                </select>
                </label>
                <button className="btn btn-primary my-4 ml-4" onClick={log}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
