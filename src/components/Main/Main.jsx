import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "../Main/main.scss";

function Main({}) {
  const [input, setInput] = useState("");

  function onInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="menu">
        <Navigation />
        <div className="input-group">
          <input type="search" placeholder="Поиск" onChange={onInputChange} />
        </div>
      </div>
      {input ? <SearchResults input={input} /> : <Home />}
    </>
  );
}

export default Main;
