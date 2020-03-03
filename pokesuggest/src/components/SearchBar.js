import React from "react";

//PokeSuggest
//Search Bar includes input and button
//

function SearchBar({ searchTerm, handleChange }) {
  //const [searchTerm, setSearchTerm] = React.useState;

  return (
    <input type="text" placeholder="search here" onChange={handleChange} />
  );
}

export default SearchBar;
