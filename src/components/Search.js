import React, { useState } from "react";
import "../App.css";

function Search({ onSubmit }) {
  const [search, setsearch] = useState("");
  const handleformsubmit = (event) => {
    event.preventDefault();

    onSubmit(search);
  };

  const handlechange = (event) => {
    setsearch(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleformsubmit}>
        {/* wrapping it inside the form allows to immediately trigger an on enter event*/}
        {/*setting the value to search allows to update text to user input*/}
        <label className="label">Enter search term</label>
        <input
          className="search-bar-form"
          value={search}
          onChange={handlechange}
        />
      </form>
    </div>
  );
}

export default Search;
