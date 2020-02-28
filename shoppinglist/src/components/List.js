import React from "react";
import { render } from "@testing-library/react";

//User story: As a user I want to be able see all my items on my shopping so that I know what to buy

//create an array (test list of shopping items)- needs to go in App.js

//Create a function to render a list of items

//CONSIDERATIONS
//Needs to take commands from the input button (update list with additional items) [lift up state required due to list being a sibling]

function List({ list = [] }) {
  return (
    <ul>
      {list.map(function(item) {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

export default List;
