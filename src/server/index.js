// index.js
const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv'); // this is required to get env variable from .env file
const myEnv = dotenv.config();
const PORT = 3000;

const app = express();

app.use(cookieParser());

app.get('/',(req, res) => {
    res.cookie("env_var", JSON.stringify(process.env)); // appending system env variable +  custom env variable togeather
    res.send(req.cookies);
});

app.listen(PORT, (err) => {
    if(err) console.log(`Error whiile listening on port ${PORT}`); 
});

// console.log(`express server started on PORT ${PORT}`);
console.log(`express server started on PORT ${PORT}`);
