const express = require('express');
const cors = require('cors');
const axios = require('axios');
const http = require('http');
var { brawlhallaAPIKey } = require('./secrets')

const app = express();
var isProduction = process.env.NODE_ENV === 'production';


//For production use:
// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
//app.use(cors(corsOptions));
app.use(cors());
app.use(require('morgan')('dev'));

app.use(require('./routes'));

// Taken from https://github.com/gothinkster/node-express-realworld-example-app/blob/master/app.js
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  /// error handlers
  
  // development error handler
  // will print stacktrace
  if (!isProduction) {
    app.use(function(err, req, res, next) {
      console.log(err.stack);
  
      res.status(err.status || 500);
  
      res.json({'errors': {
        message: err.message,
        error: err
      }});
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });
  
  // finally, let's start our server...
  var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
  });

  app.listen(5000, () => {
    console.log("Listening on port 5000");
});