import React from "react";
import ReactDOM from "react-dom";

import employeeService from "../../be_services";
import "./index.css";


const EmployeeList = ({ onItemSelect, onEmptyList }) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    employeeService
      .findAll()
      .then(employees => {
        if (!employees.length) {
          onEmptyList()
        } else {
          setList(employees);
        }
      })
      .catch(() => {
        alert("Failed to load Employees!");
      });
  });

  return (
    <ul>
      {list.map((emp) => (
        <li key={emp.id}>
          <button className="list-item" onClick={() => onItemSelect(emp)}>
            <span className="username">{emp.username}</span>
            <span>Role: {emp.role}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export { EmployeeList };

export default () => {
  ReactDOM.render(<EmployeeList />, document.getElementById("app"));
};
