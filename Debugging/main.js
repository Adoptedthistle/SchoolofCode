//make a p tag and attach it to the body

//const p = document.createElement("p");
//document.body.appendChild(p);

//Make a test for each one
//give it an innerText of "doughnuts".

const p = document.createElement("p");
document.body.appendChild(p);
p.innerText = "Doughtnuts";

//give it a classname of "breakfast"

p.classList.add("breakfast");
console.log("breakfast");

//changeits color to hotpink
p.style.color = "hotpink";
