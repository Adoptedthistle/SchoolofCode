import React, { useState, useEffect } from "react";

//Options includes:
//OptionsList
//Option

//options
//needs to be seen by autocomplete > options list
//is dependent on searchTerm
//lives in AutoComplete

//fetch here
// const options = [
//   { id: 1, name: "pikachu" },
//   { id: 2, name: "randomchu" },
//   { id: 3, name: "question" }
// ];
function Autocomplete({ input }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?search=${input}`)
      .then(res => res.json())
      .then(data => setOptions(data));
  }, [input]);

  console.log(options);

  return options.map(function(item) {
    return (
      <ul>
        <li>{item.img_url}</li>
        <li>{item.id}</li>
        <h1>{item.name}</h1>
      </ul>
    );
  });
}

export default Autocomplete;
