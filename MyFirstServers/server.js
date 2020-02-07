const http = require("http");
const fs = require("fs");
const { promisify } = require("util");
const PORT = 3000;

const readFilePromise = promisify(fs.readFile);

const server= htt.createServer(function(request, response){
    try{
    const data = await readFilePromise("data.json");
    response.write(data);
    response.end();
    }catch (err){
        response.write("sorry mate that didn't work");
        response.end();
    }
    
    });


/*function readFilePromise() {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(error, data) {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}*/

//Replace above with util Promisify
/*
const server = http.createServer(async function(request, response) {
  const data = await readFilePromise("data.json");
  response.write(data);
  response.end();
});*/

/*Create server takes a callback function(requestlist)
const server = http.createServer(function(request, response) {
  fs.readFile("data.json")
  .then (function(error, data) {
    response.write(data);
    response.end();
  }) 
  .catch(function(err){
      console.error(err);
  });
});*/

server.listen(PORT, () => {
  console.log(`listening on port${PORT}`);
});

//ctrl C to exit

//Turn server into a promise
//New Promise (resolve and reject)
//Resolve write the data
//If it rejects it - catch the error
//Console.log

// Working out:let newPromise=new Promise(resolve, reject) {}

//function readFilePromise() {
 // return new Promise();
//}
