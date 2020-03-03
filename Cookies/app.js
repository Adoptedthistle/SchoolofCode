const express = require("express");
const app = express();
const PORT = 5000;
var cookieParser = require("cookie-parser");
//express will hide cookies in the req for us to find
app.use(cookieParser());
//this is a cookie logger
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});
const posts = {
  Bird: "Crumbs, there's cookies",
  Bug: "Ugghh, nae bothered mate!"
};

app.get("/login", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.send({ success: true });
});
app.get("/posts", (req, res) => {
  const name = req.cookies.name;
  const post = posts[name];
  res.send(post);
});
app.get("/logout", (req, res) => {
  res.clearCookie("name");
  res.send("logged out");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
