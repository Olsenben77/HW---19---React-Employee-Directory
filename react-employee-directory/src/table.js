import React from "react";
import "./App.css";

export default ({ users, requestSort }) => {
  console.log(users);
  return (
    <table className="table table-striped table-dark">
      <caption>Products</caption>
      <thead>
        <tr>
          <th scope="col">
            {" "}
            <button
              type="button"
              //   onClick={() => requestSort("Picture")}
              //   className={getClassNamesFor("Picture")}
            >
              Picture
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              onClick={() => requestSort("first")}
              //   className={getClassNamesFor("First")}
            >
              First
            </button>
          </th>
          <th scope="col">
            {" "}
            <button
              type="button"
              onClick={() => requestSort("last")}
              //   className={getClassNamesFor("Last")}
            >
              Last
            </button>
          </th>
          <th scope="col">
            {" "}
            <button
              type="button"
              onClick={() => requestSort("phone")}
              //   className={getClassNamesFor("Phone")}
            >
              Phone
            </button>
          </th>
          <th scope="col">
            {" "}
            <button
              type="button"
              onClick={() => requestSort("email")}
              //   className={getClassNamesFor("Email")}
            >
              Email
            </button>
          </th>
          <th scope="col">
            {" "}
            <button
              type="button"
              onClick={() => requestSort("dob")}
              //   className={getClassNamesFor("DOB")}
            >
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
