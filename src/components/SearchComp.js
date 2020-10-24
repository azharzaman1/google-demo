import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../files/StateProvider";
import { actionTypes } from "../files/reducer";
import Mic from "./mic.svg";

const SearchComp = ({
  hideButtons = false,
  isSearchPageBar,
  noNeed__searchIcon,
}) => {
  const [{}, dispatch] = useStateValue();

  let [input, setInput] = useState("");
  const history = useHistory();

  const searchFun = (e) => {
    e.preventDefault();

    console.log("Querry Entered >>>", input);

    if (input != "") {
      history.push("/search");
    } else {
    }

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };
  //
  return (
    <form className="search__component">
      <div
        className={`homePage__header__searchBar ${
          isSearchPageBar && "searchPage__header__searchBar"
        }`}
      >
        <SearchIcon
          className={`input__Icon ${noNeed__searchIcon && "hide__searchIcon"}`}
        />
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <img className="mic__icon" src={Mic} />
      </div>

      {!hideButtons ? (
        <div className="search__Btns">
          <Button type="submit" onClick={searchFun} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky </Button>
        </div>
      ) : (
        <div className="search__Btns">
          <Button
            className="noNeed__searchBtns"
            type="submit"
            onClick={searchFun}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="noNeed__searchBtns" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchComp;
