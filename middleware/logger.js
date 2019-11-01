//@desc logs request to console
const logger = (req, res, next) => {
  req.hello = 'hello world';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
};
module.exports = logger;

/**This is a custom middleware function built to explain what goes on under the hood with other 3rd party middleware and also exemplifies
 * how to build and use middleware.  It is called in the server.js file by requiring it:
 * 
                            const logger = require('./middleware/logger')

    and then calling it with:

                            app.use(logger);

 * This file exists in this app solely as notes for me...                 
 */
