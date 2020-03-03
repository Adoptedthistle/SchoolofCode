const express = require("express");
const fetch = require ("node fetch")
const cors = require("cors");
const app = express();
const PORT = 5000;


app.get('/codewars/:Adoptedthistle', async function(req, res)){
const{username} =req.params
const response = await fetch(`https://www.codewars.com/api/v1/users/Adoptedthistle`);
res.send(`servers working`)
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



