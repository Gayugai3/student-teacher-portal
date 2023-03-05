import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Studentlist() {
  const [studentlist, setStudentlist] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStudents();
  }, []);

  let getStudents = async () => {
    try {
      const students = await axios.get(
        "https://6394ae6686829c49e8243706.mockapi.io/Students"
      );
      setStudentlist(students.data);
      console.log(students.data);
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
          `https://6394ae6686829c49e8243706.mockapi.io/Students/${id}`
        );
      }
      getStudents();
    } catch (error) {}
  };
  useEffect(() => {
    return () => {
      console.log("bye");
    };
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     s_name: "Raghu",
  //     email: "raghu@gmail.com",
  //     cellno: 8546856582,
  //     course: "FSD",
  //     batch: "B01 WD",
  //     teacher: "Arul Mozhi",
  //   },
  //   {
  //     id: 2,
  //     s_name: "Ram",
  //     email: "ram@gmail.com",
  //     cellno: 8547595846,
  //     course: "FSD",
  //     batch: "B02 WD",
  //     teacher: "Gayathri",
  //   },
  //   {
  //     id: 3,
  //     s_name: "Charu",
  //     email: "pcharu@gmail.com",
  //     cellno: 9568754865,
  //     course: "FSD",
  //     batch: "B01 WD",
  //     teacher: "Arul Mozhi",
  //   },
  // ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Student List</h1>
        <Link
          to="/portal/create-student"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create Student
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
                // cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Teacher</th>
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
                    <th>Teacher</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {studentlist.map((stud, index) => {
                    return (
                      <tr key={index}>
                        <td>{stud.id}</td>
                        <td>{stud.s_name}</td>
                        <td>{stud.email}</td>
                        <td>{stud.cellno}</td>
                        <td>{stud.course}</td>
                        <td>{stud.batch}</td>
                        <td>{stud.teacher}</td>
                        <th>
                          <Link
                            to={`/portal/view-student/${stud.id}`}
                            className="btn btn-primary mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/edit-student/${stud.id}`}
                            className="btn btn-info mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(stud.id)}
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

export default Studentlist;
