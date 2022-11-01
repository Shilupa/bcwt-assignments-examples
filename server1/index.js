"use strict";

const express = require("express");

const app = express();

const port = 3000;

let requestCounter = 0;

app.use(express.static("public"));
app.set("view engine", "pug");

/*

app.get('/', (req, res) => {

  res.send('Hello World! - Bibek')

});

*/

app.get("/catinfo", (req, res) => {
  const cat = {
    name: "Mayalu",

    birthdate: "2021-12-25",

    weight: 5,
  };

  res.json(cat);
});

app.get("/test", (request, response) => {
  console.log("Someone is trying to test me");
  requestCounter++;
  //Exapmple of using pug
  response.render("test", {
    title: "Pug test page",
    header1: "Pug test page",
    header2: "Counter",
    someText: "Page requested " + requestCounter + " times.",
  });
  //basic html as string
  //response.send('<h1>test is not available</h1> <p>'

  //+ requestCounter + '<p>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
