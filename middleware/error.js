const ErrorResponse = require('../utils/errorResonse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  err.message = err.message;
  //log to console for dev
  console.log(err.stack.red);

  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
