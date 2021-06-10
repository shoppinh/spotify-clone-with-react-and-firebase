import React from "react";
import "./Body.css";
import Header from "./Header";
const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info"></div>
      <div className="body__songs"></div>
    </div>
  );
};

export default Body;
