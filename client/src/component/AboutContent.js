import React, { useEffect, useState } from 'react'
import { AdminDash } from './AdminDash';
import './AboutContent.css'
import Resizer from "react-image-file-resizer";
import axios from 'axios';


export const AboutContent = () => {

  const [data, setData] = useState([])
  const [editid, setEditid] = useState()
  const [editcontent,setEditContent] = useState({
   "seotitle":"",
   "description":"",
    "keyword":"",
    "pagename":""
  })
  

  const getdata = async () => {
    const res = await axios.get("/api/auth/getcontent")
    setData(res.data)
  }
  const edithandler = async (id) => {
    setEditid(id)
    console.log(id);
    
    await axios.post("/api/auth/editcontent", { params: id }).then((res) => {
        console.log(res.data.result);
        setEditContent(res.data.result)
    }).catch((error) => {
        console.log(error);
    })
}
console.log(data)


const log = async (e) => {
  e.preventDefault()
  await axios.post("/api/auth/updatecontent",editcontent, { headers: { "Content-Type": "application/json" } }).then((res) => {
    console.log(res.data);
    getdata()
  })
};

const deletehandler = async (id) =>{
  await axios.post("/api/auth/deletecontent", { params: id }).then((res) =>{
  }).catch((error) => {
      console.log(error);
  })
  getdata()
}

const handleChange = (e) => {
  setEditContent({ ...editcontent, [e.target.name]: e.target.value });
}

useEffect(()=>{
getdata()
},[])
  
  
  return (
    <>
      <div className='flex_blog'>
        <AdminDash />
        <div className='container scroll-main'>
        <div className='blogcard'>
                        {
                            data.map((items, index) => {
                              console.log(items)
                                return (
                                    <div className="card mt-4 col-5 card-main" key={index}>
                                        <div className="image-center">
                                        </div>
                                        <div className="card-body scocard">
                                          <span>Title:</span>
                                            <h5 className="card-title">{items.seotitle}</h5>
                                            <span>Description:</span>
                                            <h5>{items.description}</h5>
                                            <span>keyword:</span>
                                            <p>{items.keyword}</p>
                                            {/* <p className="card-text" dangerouslySetInnerHTML={{ __html: items.description }}></p> */}
                                        </div>
                                        <div className="card-bottom">
                                            <div>
                                                {/* <button className='btn' 
                                                onClick={() => deletehandler(items._id)}
                                                >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button> */}
                                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal" 
                                                onClick={() => edithandler(items._id)}
                                                >
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>  
        </div>
      </div>
    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div style={{ width: "120%" }} className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div>
                                    <form action="">
                                    <div className='inputflex'>
                  {/* <label htmlFor="">Select Page
                    <input type="text"onChange={(e)=>{setAddnews({...addnews ,catagory:e.target.value})}} />
                    <select name = "pagename" value = {data.pagename} style={{ width: "100%",fontSize:"15px"}} onChange={handleChange} className="form-select mt-2" id="">
                      <option disabled value="">Select Category</option>
                      <option name ={data.pagename} value="Home">HomePage</option>
                      <option  name ={data.pagename} value="About">About Us</option>
                      <option name ={data.pagename} value="News">News</option>
                      <option name ={data.pagename} value="Blog">Blog</option>
                      <option name ={data.pagename} value="Learn">Learn</option>
                      <option name ={data.pagename} value="Career">Career</option>
                    </select>
                  </label> */}
                </div>
                <div className="inputflex">
                  <label style={{display:"block"}} className="inputlabel mt-2" htmlFor="title"> SEO Title
                    <input value={editcontent.seotitle} onChange={handleChange} type="text" name="seotitle" id="" placeholder='seo title' className="title_input mt-1" />
                  </label>

                </div>
                <div className="inputflex">
                  <label className="inputlabel mt-2" htmlFor="title"> Meta description
                    <textarea name = "description" value={editcontent.description} onChange={handleChange} className='inputlabel' style={{ width: "100%", height: "10rem" }}  id="" cols="50" rows="10"></textarea>
                  </label>

                </div>
                <div className="inputflex">
                  <label className="inputlabel mt-2" htmlFor="title">Keyword
                    <input value={editcontent.keyword} onChange={handleChange} type="text" name="keyword" id="" placeholder='Keyword' className="title_input mt-1" />
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
                <div className='btn_box'>
                                            <button className='btn btn-primary give_margin mx-auto' onClick={log}>Submit</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="modal-footer p-2">
                                    <button onClick={getdata} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
    </>
  )
}
