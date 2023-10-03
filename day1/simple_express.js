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


app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});

