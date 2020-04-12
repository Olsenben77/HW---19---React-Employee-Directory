import React from "react";

function Input({ setInput, setDate, date }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="input-field">
            <input
              className="form-control mr-sm-2"
              type="date"
              name="date1"
              required
              pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                const { name, value } = e.target;
                setDate({ ...date, [name]: value });
              }}
            />
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="input-field">
            <input
              className="form-control mr-sm-2"
              type="date"
              name="date2"
              required
              pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                const { name, value } = e.target;
                setDate({ ...date, [name]: value });
              }}
            />
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="input-field">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setInput(e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
