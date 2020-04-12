import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import "./Nav.css";
import Input from "./Input";
import "bootstrap/dist/css/bootstrap.css";
import randomuser from "./Randomuser";
import Table from "./table";
import "./table.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState({ date1: null, date2: null });
  const [order, setOrder] = useState(0);
  useEffect(
    //param1 function that gets called whenever useEffect Hook is triggered
    () => {
      randomuser().then(({ data }) => {
        const modified = data.results.map((a) => {
          return {
            ...a,
            first: a.name.first,
            last: a.name.last,
            picture: a.picture.thumbnail,
            dob: a.dob.date.split("T")[0],
          };
        });
        setUsers(modified);
        setFilteredUsers(modified);
        setSortedUsers(modified);
      });
    }, //param2 array of things that trigger the useEffect function when changed
    []
  );
  useEffect(() => {
    console.log(date);
  }, [date]);
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        (user.first.toLowerCase().includes(input) ||
          user.last.toLowerCase().includes(input)) &&
        (date.date1 && date.date2
          ? user.dob > date.date1 && user.dob < date.date2
          : 1)
    );
    setFilteredUsers(filtered);
    setSortedUsers(filtered);
  }, [input, users, date]);
  console.log(date);

  const handleSort = (param) => {
    const sorted = order
      ? filteredUsers.sort((a, b) =>
          a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0
        )
      : filteredUsers.sort((a, b) =>
          a[param] > b[param] ? -1 : a[param] < b[param] ? 1 : 0
        );
    setOrder(!order);
    setSortedUsers(sorted);
  };

  return (
    <div className="App">
      <Nav />
      <br></br>
      <Input setInput={setInput} setDate={setDate} date={date} />
      <br></br>
      <Table users={sortedUsers} requestSort={handleSort} />
    </div>
  );
}

export default App;
