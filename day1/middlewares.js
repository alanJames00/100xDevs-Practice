const express = require('express');
const app = express();
const port = 3000;

// Custom middle wares



function handleGet(req, res){

    
}

app.get('/', handleGet);


app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})