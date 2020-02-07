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
      resolve("you have waited for all of ${time}");
    }, time);
  });
}
setPromisyTimeOut("1000")
  .then(function(resolution) {
    console.log(resolution);
  })
  .catch(function(error) {
    console.log(error);
  });
