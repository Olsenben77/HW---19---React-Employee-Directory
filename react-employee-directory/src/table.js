import React from "react";
import "./App.css";

export default ({ users, requestSort }) => {
  console.log(users);
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">
            {" "}
            <button type="button">Picture</button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => requestSort("first")}>
              First
            </button>
          </th>
          <th scope="col">
            {" "}
            <button type="button" onClick={() => requestSort("last")}>
              Last
            </button>
          </th>
          <th scope="col">
            {" "}
            <button type="button" onClick={() => requestSort("phone")}>
              Phone
            </button>
          </th>
          <th scope="col">
            {" "}
            <button type="button" onClick={() => requestSort("email")}>
              Email
            </button>
          </th>
          <th scope="col">
            {" "}
            <button type="button" onClick={() => requestSort("dob")}>
              DOB
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id.value}>
            <td>
              <img src={user.picture} alt="user portrait thumbnail" />
            </td>
            <td>{user.first}</td>
            <td>{user.last}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
