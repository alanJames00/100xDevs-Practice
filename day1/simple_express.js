const express = require('express');
const app = express();
const port = 3000;

const calculateSum = require('./model');

app.get('/', (req ,res)=>{
    const n = req.query.n;
    console.log(n);
    
    res.json({
        "input" : n,
        "sum" : calculateSum(n)
    })
});

app.post('/createUser', (req, res)=>{
    
})


function handlePostOne(req, res){

    // There are multiple ways to input data using post ->
    // 1. using query params ?
    // 2. using headers

    const counter = req.header('counter'); // used for accessing the header from a http request
                                            // where the header is named counter


    res.json({
        'counter':counter
    })
}

app.post("/t",handlePostOne);


app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});

