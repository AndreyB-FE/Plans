import React from "react";
import "./header.scss";
// import HeaderList from "../headerLinks/headerLinks";
import BurgerButton from "../burgerButton/burgerButton";
import SearchField from "../searchField/searchField";
import HeaderControls from "../headerControls/headerControls";
import OpenControls from "../openControls/openControls";

const header = () => {
  return (
    <header>
      <div className="left-controls">
        <BurgerButton></BurgerButton>
        <i className="fas fa-home homeIcon"></i>
        <SearchField></SearchField>
      </div>
      <OpenControls></OpenControls>
      <HeaderControls></HeaderControls>
    </header>
  );
};

export default header;
