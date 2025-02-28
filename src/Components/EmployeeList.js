import React from "react";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


const EmployeeList = () => {
  
  const [employees, setEmployees] = useState([])
 
 const getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then(data => data.json())
      .then(json => {
        setEmployees(json)
        // console.log(employees)
      })
  }
  useEffect( () => {
    getEmployees()
  })
 
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees.map(({ id, firstName, lastName, prefix, postfix, title }) => {
            return (
              <Employee key={id}
                id ={id}
                firstName={firstName}
                lastName={lastName}
                prefix={prefix}
                postfix={postfix}
                title={title}
              />
            )
          })}
        </section>
      </main>
    )
  }
export default EmployeeList


