const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//load env vars by importing
dotenv.config({ path: './config/config.env' });

const app = express();

//Dev logging middleware: will log the http req to the console just like the logger fn built in logger.js
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

//Route files
const bootcamps = require('./routes/bootcamps');

//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port: ${PORT}`)
);
