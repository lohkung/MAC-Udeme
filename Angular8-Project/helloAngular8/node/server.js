//backend
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.get('/', (req,res)=>{
    res.end("welcome to root path");
});

app.get('/home', (req,res)=>{
    res.end("welcome to home path");
});

app.post('/api', (req,res)=>{
    conts feedback = req.body.feedback;
    res.end("Feedback : " + feedback);
});

app.listen(3000, ()=>{
    console.log("Server Node running...");
});