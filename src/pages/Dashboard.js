import React from "react";
import Card from "./components/Card";

function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      <div className="row">
        <Card title="No_of_Teachers" value="50" color="primary" />
        <Card title="No_of_Students" value="2100" color="success" />
        <Card title="No_of_Batches" value="60" color="info" />
        <Card title="No_of_Cources" value="33" color="warning" />
      </div>
    </>
  );
}

export default Dashboard;
