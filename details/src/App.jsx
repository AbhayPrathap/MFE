import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const EmployeeDetails = ({ data }) =>
  data ? (
    <div>
      <div>Username: {data.username}</div>
      <div>Role: {data.role}</div>
      <div>Birthday: {data.dob}</div>
    </div>
  ) : (
    "Please Select a User!"
  );

export { EmployeeDetails };

export default () => {
  ReactDOM.render(<EmployeeDetails />, document.getElementById("app"));
};
