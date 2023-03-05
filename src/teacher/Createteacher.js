import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Createteacher() {
  const [isloading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      t_name: "",
      email: "",
      cellno: "",
      Course: "",
      batch: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.t_name) {
        errors.t_name = "Please enter your username";
      } else if (values.t_name.length < 3) {
        errors.s_name = "Username must be at least 3 characters";
      } else if (values.t_name.length > 20) {
        errors.s_name = "Username must be less than 20 characters";
      }

      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email";
      }

      if (!values.cellno) {
        errors.cellno = "Please enter your Contact Number";
      } else if (values.cellno.length != 10) {
        errors.cellno = "Please enter a valid Contact Number";
      }

      if (!values.Course) {
        errors.Course = "Please select your course";
      }

      if (!values.batch) {
        errors.batch = "Please select your batch";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          "https://6394ae6686829c49e8243706.mockapi.io/Teachers",
          values
        );
        navigate("/portal/list-teacher");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={myFormik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <label>Name</label>
            <input
              name="t_name"
              values={myFormik.values.t_name}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${
                myFormik.errors.t_name ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.t_name}</span>
          </div>
          <div className="col-lg-4">
            <label>E-mail</label>
            <input
              name="email"
              value={myFormik.values.email}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${
                myFormik.errors.email ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>
          <div className="col-lg-4">
            <label>Contact number</label>
            <input
              name="cellno"
              value={myFormik.values.cellno}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${
                myFormik.errors.cellno ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.cellno}</span>
          </div>
          <div className="col-lg-6">
            <label>Courses</label>
            <select
              name="Course"
              value={myFormik.values.Course}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.Course ? "is-invalid" : "is-valid"
              }`}
            >
              <option value="">-----Select-----</option>
              <option value="FSD">FSD</option>
              <option value="JS">JavaScript</option>
              <option value="UI/UX">Ui/Ux</option>
              <option value="React">React</option>
              <option value="Cyber_security">Cyber security</option>
              <option value="MongoDB">MongoDB</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.Course}</span>
          </div>
          <div className="col-lg-6">
            <label>Batches</label>
            <select
              name="batch"
              value={myFormik.values.batch}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.batch ? "is-invalid" : "is-valid"
              }`}
            >
              <option value="">-----Select-----</option>
              <option value="B01_WD">B01 WD</option>
              <option value="B01_WE">B01 WE</option>
              <option value="B02_WD">B02 WD</option>
              <option value="B02_WE">B02 WE</option>
              <option value="B03_WD">B03 WD</option>
              <option value="B03_WE">B03 WE</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.batch}</span>
          </div>
          <div className="col-lg-12 mt-3 ">
            <input
              disabled={isloading ? true : false}
              type={"submit"}
              value={isloading ? "Loading..." : "Save"}
              className="btn btn-primary float-right"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createteacher;
