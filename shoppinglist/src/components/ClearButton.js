import React, { useState } from "react";
import { render } from "@testing-library/react";

//User Story: As a user I want to be able to clear the list so that I can start again for my next shop
//Clear all should be a self-contained property.
//Device required to clear the list.  Button the easiest method
//Button needs to empty all the data once the button is clicked but can only be used once.
//Button needs to be refreshed and able to repeat the action once a new list is required.
//Does state need to be lifted for button to update list data?

function ClearButton(){
    const [clearList, setClearList] = useState(clearList)
render(){
    return(
        <button onCLick={ClearButton}>Clear All</button>

    )
}
}
