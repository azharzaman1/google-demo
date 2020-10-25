import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Logo from "./logo.png";
import SearchComponent from "../components/SearchComp";

const HomePage = () => {
  return (
    <div className="homePage__wrapper">
      <div className="homePage__header">
        <div className="homePage__headerLeft">
          <Link to="./about"> About </Link>
          <Link to="./store"> Store </Link>
        </div>

        <div className="homePage__headerRight">
          <Link to="./gmail"> Gmail </Link>
          <Link to="./images"> Images </Link>
          <AppsIcon className="appsIcon" />
          <Avatar className="avatar" />
        </div>
      </div>
      <div className="homePage__body">
        <img src={Logo} />
        <SearchComponent
          searchInput__classBased__on__Location="homePage__header__searchBar"
          isHomePage__bar
        />
      </div>
    </div>
  );
};

export default HomePage;
