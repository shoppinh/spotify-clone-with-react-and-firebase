import React from "react";
import { useDataLayerValue } from "../DataLayer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./Header.css";
const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <ChevronLeftIcon className="header__icon" />
        <ChevronRightIcon className="header__icon" />
      </div>
      <div className="header__right">
        <img src={user?.images[0]?.url} alt="avatar" />
        <span>{user?.display_name}</span>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default Header;
