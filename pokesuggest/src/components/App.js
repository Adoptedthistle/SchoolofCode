import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./SearchBar";
import Autocomplete from "./Autocomplete";
import PokemonDisplay from "./PokemonDisplay";
import SearchBar from "./SearchBar";
import Proptypes from "prop-types";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  //want searchTerm state to allow text input to pull search results which will be seen by Options
  //Searchbar needs to know when an input has been made
  //options need sto be clickable (onClick)
  //searchfield needs to know when an input has been made and call results
  function searchTerm(){
    
    }
  }

  return (
    <div>
      <h1>Pokemon Test</h1>
      <Searchbar SearchBar={SearchBar} />
      <button>Get Pokemon Here</button>
      <Autocomplete input="t" />
      {/* <PokemonDisplay PokemonDisplay={PokemonDisplay} /> */}
    </div>
  );
}

/*return to this area, needs fixing as nothing has been pulled through yet.
  Option.proptype={
    onClick: Proptypes.function.isRequired,
    image_url: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired

  }
/*
  Option.defaultProps={
    onClick:
  }*/

export default App;
