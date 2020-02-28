import React, { useState } from "react";
import { render } from "@testing-library/react";

//User Story: As a user I want to be able to clear the list so that I can start again for my next shop
//Clear all should be a self-contained property.
//Device required to clear the list.  Button the easiest method
//Button needs to empty all the data once the button is clicked but can only be used once.

function ClearButton({ clearAll }) {
  return <button onClick={clearAll}> clear all items</button>;
}

export default ClearButton;
