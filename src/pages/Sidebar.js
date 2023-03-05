import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChalkboardTeacher,
  faPager,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import AdminContext from "../context/AdminContext";

function Sidebar() {
  const admin = useContext(AdminContext);
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Admin portal {admin.user.name}
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/dashboard"}>
            <FontAwesomeIcon icon={faPager} />
            <span> Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/list-teacher"}>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span> Teachers</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/list-student"}>
            <FontAwesomeIcon icon={faUserGraduate} />
            <span> Students</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
