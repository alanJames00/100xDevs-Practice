const express = require('express');
const app = express();
const port = 3000;

// Custom token based auth ware

function authware(req, res, next){

    if(req.headers.token == '6eQe65io'){
        next();
    }
    else{
        res.json({
            'status':'you are not authenticated with correct token'
            
        })
    }
}

app.use(authware);


app.get('/', (req, res)=>{
    
    res.json({
        'status':'authenticated'
    })
});


app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})