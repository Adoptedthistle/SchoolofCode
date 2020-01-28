//Make a button that adds a div with a class square onto the page
const button = document.querySelector("button");
button.addeventlistener("click", function() {
  const div = document.createElement("div");
  div.classlist.add("square");
  document.body.appendChild(div);
});

//Make a button that toggles the square button to be a circle
//Select button
//Add eventlistener to change shape of button (transform)

const circlebutton = document.queryselector("#round");
circlebutton.addEventListener("click", function() {
  const div = document.queryselector("div");
  div.classlist.toggle("circle");
});

//Put on transition on shape change - constructor (props) 


//Create a set of squares which contain the list of players below
//Create three square div containers (playerCards)
//Input the info - return?


const people = [
    {
      name: "Cristiano Ronaldo",
      rating: "not as good as chris"
    },
    {
      name: "Lionel Messi",
      rating: "smaller but slower"
    },
    {
      name: "Virgil Van Dijk",
      rating: "taller but not as hench"
    }
  ];


  function generatePlayerCard(name,rating){
      const people
      return
  }
  
//Name and rating into a string

const firstPerson = people[0];
function makeACar{
//var document: Document.createElement("div");
const square = document.createElement('div');
square.classlist.add("square");
const display = `Name: ${firstPerson.name}, Rating: ${firstPerson.rating}`;
square.textContent=display;
return square;
}

const container=document.queryselector(".container");

for (var i=0; i<people.length; i++){
const card = makeACard(people[i]);
container.appendChild();
}