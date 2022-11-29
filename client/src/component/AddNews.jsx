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
      });
  };

  return (
    <>
      <div className="flex_news bgnews">
        <AdminDash />
        <div className="container adminnews scroll-main mt-3">
          <h2 style={{ fontSize: "1.5rem" }}>Add News</h2>
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
                <input type="text"onChange={(e)=>{setAddnews({...addnews ,url:e.target.value})}} />
                <label htmlFor="">category</label>
                <input type="text"onChange={(e)=>{setAddnews({...addnews ,catagory:e.target.value})}} />

                <button className="btn btn-primary my-2" onClick={log}>
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
