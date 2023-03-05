import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Teacherlist() {
  const [teacherlist, setTeacherlist] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getTeachers();
  }, []);

  let getTeachers = async () => {
    try {
      const teachers = await axios.get(
        "https://6394ae6686829c49e8243706.mockapi.io/Teachers"
      );
      setTeacherlist(teachers.data);
      console.log(teachers.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmData = window.confirm("Are you sure you want to delete");
      if (confirmData) {
        await axios.delete(
          `https://6394ae6686829c49e8243706.mockapi.io/Teachers/${id}`
        );
      }
      getTeachers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      console.log("bye");
    };
  }, []);

  // const data = [
  //   {
  //     id: 1,
  //     t_name: "Gayathri",
  //     email: "gai3@gmail.com",
  //     cellno: 9586584525,
  //     Course: "FSD",
  //     batch: "B02 WD",
  //   },
  //   {
  //     id: 2,
  //     t_name: "Hari",
  //     email: "hari@gmail.com",
  //     cellno: 9586485244,
  //     Course: "Ui/Ux",
  //     batch: "B03 WD",
  //   },
  //   {
  //     id: 3,
  //     t_name: "Arul Mozhi",
  //     email: "arul@gmail.com",
  //     cellno: 8568542512,
  //     Course: "FSD",
  //     batch: "B01 WD",
  //   },
  // ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teachers List</h1>
        <Link
          to={"/portal/create-teacher"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Teacher
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                //   cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {teacherlist.map((teacher, index) => {
                    return (
                      <tr key={index}>
                        <td>{teacher.id}</td>
                        <td>{teacher.t_name}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.cellno}</td>
                        <td>{teacher.Course}</td>
                        <td>{teacher.batch}</td>
                        <th>
                          <Link
                            to={`/portal/view-teacher/${teacher.id}`}
                            className="btn btn-primary mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/edit-teacher/${teacher.id}`}
                            className="btn btn-info mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(teacher.id)}
                            type="button"
                            className="btn btn-danger mr-1"
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Teacherlist;
