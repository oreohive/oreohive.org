// src/index.js

const express = require("express");
const app     = express();
const port    = 3000;

/*
C for Create: http POST
R for Read:   http GET
U for Update: http PUT
D for Delete: http DELETE
*/

/* root */
app.get("/", (req, res) => {
  return res.send("hello from express! :)\n");
  res.send("hello :)"); // for testing
});
app.post('/', (req, res) => {
  return res.send("did you hear that? we just got a POST http method.\n");
});
app.put('/', (req, res) => {
  return res.send("did ya hear that? we just got a PUT http method!\n");
});
app.delete('/', (req, res) => {
  return res.send("hey, i heard that! we just received a DELETE http method.\n");
});

app.listen(port, () => {
  console.log(`oreohive express server - listening on port ${port}!`);
});
app.get("/about", (req, res) => {
  return res.send("<a href='https://oreohive.org/about'>https://oreohive.org/about</a>")
});

app.get('/users', (req, res) => {
  return res.send("GET http method on user resource!");
});
app.post('/users', (req, res) => {
  return res.send("POST http method on user resource!");
});
app.put('/users/:userId', (req, res) => {
  return res.send(`PUT http method on user/${req.params.userId} resource!\n`);
});
app.delete('/users', (req, res) => {
  return res.send("DELETE http method on user resource!");
});