/*console.log("hello");

const kayneQuote= {
    name: "Sarah",
    password: 1234,

}

JSON.stringify

const myFirstJSON = JSON.stringify(kayneQuote);

const myParsedJsonObject = JSON.parse (myfirstJSON);

console.log(myParsedJsonObject);*/

/*const sQuote = {
  Margin: 0,
  Padding: 0
};

const myJSON = JSON.stringify(sQuote);
console.log(sQuote);

const parsed = JSON.parse(sQuote);
console.log(parsed);

//Notes

let quote = document.getElementById("quote");

fetch("https://api.kanye.rest/")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    quote.innerText = data["quote"];
  });

  //PROMISES (bottom console log returns promise)
  

  const something = fetch("https://api.kanye.rest/")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    quote.innerText = data["quote"];
  });
  console.log(something);


  new Promise(function(resolve, reject) {
    setTimeout(function() {
    resolve ("ive resolved");
  }, 1000);
  setTimeout (function(){
    reject("NO");
  }, 500);
}).then (function(data)) {
  console.log("returned data:",data);
});


//ALL Together function 
//Make a function to take in time 
//Return a promise
// if time is invalid - reject promise
//else resolve in specified time*/

function setPromisyTimeOut(time) {
  return new Promise(function(resolve, reject) {
    if (typeof time !== "number") {
      reject("invalid time, time was not a number");
    }
    setTimeout(function() {
      resolve(`you have waited for all of ${time}`);
    }, time);
  });
}
setPromisyTimeOut("1000").then(function(resolution) {
  console.log(resolution);
});
