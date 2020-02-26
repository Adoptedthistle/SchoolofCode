import React from "react";
import { render } from "@testing-library/react";

//User story: As a user I want to be able see all my items on my shopping so that I know what to buy

//create an array (test list of shopping items)

let shoppingItems = ["bread", "bananas", "apples", "tea"];

//Create a function to render the above list of items onto the browser

//CONSIDERATIONS
//Needs to take commands from the input button (update list with additional items) [lift up state required due to list being a sibling]
//Needs to take commands from the clear button to remove items from the list [lift up state required due to list being a sibling]
