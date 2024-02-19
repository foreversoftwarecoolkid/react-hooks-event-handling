import React, { useState } from "react";

function ChangeItUp() {
  // State to manage search and filter values
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Function to handle changes in input fields
  function handleChange(event) {
    const { name, value } = event.target;

    // Update state based on input field name
    if (name === "search") {
      setSearchTerm(value);
    } else if (name === "filter") {
      setFilter(value);
    }

    console.log(`${name}: ${value}`);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter search term..."
      />

      <select name="filter" value={filter} onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      {/* Display search term and selected filter */}
      <p>Search Term: {searchTerm}</p>
      <p>Selected Filter: {filter}</p>
    </div>
  );
}

export default ChangeItUp;
