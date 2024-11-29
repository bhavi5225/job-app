const express = require('express');
const app =express();
const path = require('path');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'public', 'try.html'));
});

app.listen(PORT,() => {
    console.log('server started at port 3000');
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=> {
        console.log('mongodb connected');
    }).catch((err) => {
        console.log(err);
    });
});
