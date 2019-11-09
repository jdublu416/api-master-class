const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');
const colors = require('colors');
const fileupload = require('express-fileupload');

const errorHandler = require('./middleware/error');

//load env vars by importing
dotenv.config({ path: './config/config.env' });

//need to bring in connectDB below the dotenv bc we need access to the MONGO_URI
//Connect to DB
connectDB();

//create express instance
const app = express();

//Body Parser middleware from express...
app.use(express.json());

//Dev logging middleware: will log the http req to the console just like the logger fn built in logger.js
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// File uploading
app.use(fileupload());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port: ${PORT}`.yellow
      .bold
  )
);

//Handle unhandled promise rejections (This will catch any server errors and force a crash ie:if the db wont connect then app will crash)
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server and exit process
  server.close(() => process.exit(1));
});
