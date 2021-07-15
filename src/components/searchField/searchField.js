import React from "react";
import "./searchField.scss";

const searchField = () => {
  return (
    <form action="">
      <div className="input-container">
        <i className="fas fa-search searchIcon"></i>
        <input
          className="search"
          type="text"
          name="search"
          placeholder="Search"
        />
        <i className="fas fa-times crossIcon"></i>
      </div>
    </form>
  );
};

export default searchField;
