import React from "react";

//User Story: As a user I want to be able to add items to my shopping list so that I don't have to remember.

//Functionality of the section, requires the user to input data. This could be anything so text input is required.
//Need to use placeholder text to indicate to the user where they need to input their additional items.
//Input needs to be confirmed by pressing a button to add to the existing list or array.
//Text input needs to be cleared once the add button has been clicked (clean up) so it can be used again.
//Store new items in list

function Input({ addToList, item }) {
  return (
    <div>
      <input type="text" placeholder="add items here"></input>
      <button onClick={addToList}>+</button>
    </div>
  );
}

//Feed output from this function back up to App.js

export default Input;
