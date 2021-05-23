const express = require('express');

const app = new express();
app.use(express.static("./views"));
app.set('view engine',"ejs");
app.set("views","./views");
app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.listen(process.env.PORT ?? 8000,()=>{
    console.log('server is ready')
})