const express = require("express")
const app = express()

app.get('/', (req,res) => {
  res.send("Hello ASC")
})

app.get('/promise', async (req, res) => {
    sleep(5000);
    res.send("hello sleeping")
})


function sleep(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("finished after sleeping")
        resolve(`Resolved after ${milliseconds} milliseconds`);
      }, milliseconds);
    });
  }
  

app.listen(5000)