const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const calculateSum = require('./model');


app.use(bodyParser.json());

app.get('/', (req ,res)=>{
    
    const count = req.body.counter;
    res.json({
        'counter':count
    })
});

app.post('/createUser', (req, res)=>{
    
})


function handlePostOne(req, res){

    // There are multiple ways to input data using post ->
    // 1. using query params ?
    // 2. using headers
    // 3. using body

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

