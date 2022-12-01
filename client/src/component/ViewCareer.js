import axios from "axios";
import React, { useEffect, useState } from "react";
import { AdminDash } from "./AdminDash";

export const ViewCareer = () => {
  const [data, setdata] = useState([]);
  const [editid, setEditid] = useState();
  const [flag, setFlag] = useState(true);
  const [editblogdata, setEditblogdata] = useState({
    title: "",
    category: "",
    location: "",
    link: "",
  });
  const Input_handler = (e) => {
    setEditblogdata({ ...editblogdata, [e.target.name]: e.target.value });
  };
  const getcareer = async () => {
    setFlag(!flag);
    const res = await axios.get("/api/auth/viewcareer");
    if (res.data) {
      setdata(res.data.result);
    }
  };
  console.log(editblogdata);
  const deletehandler = async (id) => {
    await axios
      .post("/api/auth/deletecareer", { params: id })
      .then((res) => {
        getcareer()
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const log = async (e) => {
    console.log(editblogdata)
    e.preventDefault()
    await axios.post("/api/auth/updatecareer", editblogdata,{ headers: { "Content-Type": "application/json" } }).then((res) => {
        console.log(res.data);

    })
};

  const edithandler = async (id) => {
    setEditid(id);
    console.log(id);
    await axios
      .post("/api/auth/careeredit", { params: id })
      .then((res) => {
        setEditblogdata(res.data.result);
        console.log(editblogdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getcareer();
  }, [editblogdata]);

  return (
    <>
      <div className="flex_email">
        <AdminDash />
        <div className="container ">
          <div className="table-responsive-sm tableContainer ">
            <table className="table tableA">
              <thead>
                <tr style={{textAlign:"center"}}>
                  <th>SNo.</th>
                  <th>job</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((items, index) => {
                  return (
                    <tr style = {{textAlign:"center"}} key={index}>
                      <td>{index + 1}</td>
                      <td>{items.title}</td>
                      <td>{items.category}</td>
                      <td>{items.location}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => deletehandler(items._id)}
                        >
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                   
                        <button
                          type="button"
                          class="btn"
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => edithandler(items._id)}
                        >
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div style={{ width: "120%" }} className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Career</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div>
                  <form action="">
                    <div className="mb-5 mt-3 model_input">
                      <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="title"
                        className="model_title"
                        onChange={Input_handler}
                        value={editblogdata.title}
                      />
                      <input
                        type="text"
                        name="category"
                        id=""
                        placeholder="category"
                        className="model_title"
                        onChange={Input_handler}
                        value={editblogdata.category}
                      />
                      <input
                        type="text"
                        name="location"
                        id=""
                        placeholder="location"
                        className="model_title"
                        onChange={Input_handler}
                        value={editblogdata.location}
                      />
                      <input
                        type="text"
                        name="link"
                        id=""
                        placeholder="link"
                        className="model_title"
                        onChange={Input_handler}
                        value={editblogdata.link}
                      />
                    </div>
                  
                    {/* <div className="ml-3">
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
                          // src={avtarpreview}
                        />
                        <input
                          className="file"
                          type="file"
                          name="url"
                          id="file"
                          // onChange={input_file}
                        />
                        <label className="ml-3" htmlFor="file">
                          Choose Image
                        </label>
                      </div>
                    </div> */}
                    <div className="btn_box">
                      <button
                        className="btn btn-primary mx-auto"
                        onClick={log}
                        data-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="modal-footer p-2">
                  <button
                  onClick={getcareer}
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
