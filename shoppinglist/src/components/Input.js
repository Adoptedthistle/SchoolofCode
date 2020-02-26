import React from 'react';

//User Story: As a user I want to be able to add items to my shopping list so that I don't have to remember.

//Functionality of the section, requires the user to input data. This could be anything so text input is required.
//Need to use placeholder text to indicate to the user where they need to input their additional items.
//Input needs to be confirmed by pressing a button to add to the existing list or array.
//Text input needs to be cleared once the add button has been clicked (clean up) so it can be used again.

//create a function addItem that creates an input field DONE
//Display placeholder text in the field, "Add new item"DONE
//Create a button DONE
//Give button functionality through onclick to add input to the list.
//Button needs to connect to the data in app.js
//Add additional functionality to clean ups state so input text can be reused.


function addItem(){
    render(){
    return(
        
        <input name="addItem" type="text">Add a new item</input>   
        <button>+</button>
    )

    }
}

//Feed output from this function back up to App.js