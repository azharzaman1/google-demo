import React from "react";
import { useStateValue } from "../files/StateProvider";
import useGoogleSearch from "../files/useGoogleSearch";
import Response from "../files/response";
import SearchComp from "../components/SearchComp";
import Logo from "../pages/logo.png";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import {
  Search,
  Image,
  Description,
  Apps,
  Room,
  MoreVert,
} from "@material-ui/icons";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // let data = Response;

  console.log(data);

  return (
    <div className="searchPage__wrapper">
      <div className="searchPage__header">
        <div className="searchPage__headerTop">
          <a href="http://localhost:3000/">
            <img
              className="google__searchPage__logo"
              src={Logo}
              alt="Google_Logo"
            />
          </a>
          <SearchComp hideButtons isSearchPageBar noNeed__searchIcon />
          <div className="searchPage__headerTop__thirdSec">
            <Apps className="appsIcon searchBar__appsIcon" />
            <Avatar className="avatar" />
          </div>
        </div>
        <div className="searchPage__headerLower">
          <div className="lowerHeader__left">
            <div className="searchPage__headerOption firstOption">
              <Search className="option__Icon" />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__headerOption">
              <Image className="option__Icon" />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__headerOption">
              <Description className="option__Icon" />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__headerOption">
              <Room className="option__Icon" />
              <Link to="/videos">Maps</Link>
            </div>
            <div className="searchPage__headerOption">
              <MoreVert className="option__Icon" />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="lowerHeader__right">
            <Link className="searchPage__headerOption" to="/settings">
              Settings
            </Link>
            <Link className="searchPage__headerOption" to="/tools">
              Tools
            </Link>
          </div>
        </div>
      </div>
      <div className="searchPage__body">
        {term && (
          <div className="searchPage__results">
            <p className="searchPage__resultsCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds)
            </p>
            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a className="searchResult__link" href={item.link}>
                  {/* <img
                    className="searchResult__imageIcon"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                  /> */}
                  {item.displayLink}
                </a>
                <h2 className="searchResult__title">{item.title}</h2>
                <p className="searchResult__description">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
