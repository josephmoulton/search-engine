import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer"

function Search({ hideButtons = false }) {
  const [{},dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input-icon" />
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttons--hidden" onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
