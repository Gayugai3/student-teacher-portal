import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

function Studentview() {
  const params = useParams();

  useEffect(() => {
    getStudent();
  }, []);

  const myFormik = useFormik({
    initialValues: {
      s_name: "",
      email: "",
      cellno: "",
      course: "",
      batch: "",
      teacher: "",
    },
  });

  const getStudent = async () => {
    try {
      const student = await axios.get(
        `https://6394ae6686829c49e8243706.mockapi.io/Students/${params.id}`
      );
      myFormik.setValues(student.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary ">
            Student's view - {params.id}
          </h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="50%">
              <tbody>
                <tr>
                  <td>Student Name</td>
                  <td>{myFormik.values.s_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{myFormik.values.email}</td>
                </tr>
                <tr>
                  <td>Contact number</td>
                  <td>{myFormik.values.cellno}</td>
                </tr>
                <tr>
                  <td>Course</td>
                  <td>{myFormik.values.course}</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>{myFormik.values.batch}</td>
                </tr>
                <tr>
                  <td>Assigned Teacher</td>
                  <td>{myFormik.values.teacher}</td>
                </tr>
              </tbody>
            </table>
            <div className="col-lg-12 mt-3">
              <Link
                to={`/portal/list-teacher`}
                className="btn btn-primary btn-sm mr-1 float-right"
              >
                BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentview;
