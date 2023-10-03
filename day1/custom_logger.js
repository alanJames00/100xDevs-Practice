const express = require('express');
const app = express();
const port = 3000;


// Custom middle wares
function logger(req, res, next){

    console.log(req.headers['user-agent']); //logs the user-agents of clients
    next();
}

app.use(logger);



app.get('/', (req, res)=>{
    
    res.json({
        "status" : 'login success'
    })
});


app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})