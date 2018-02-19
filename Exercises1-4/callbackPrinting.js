var https = require('https');

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

  var returnData = '';

  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      returnData += data;
    });

    response.on('end', function(){
      return callback(returnData);
    });

  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


// getHTML(requestOptions, printHTML);
getHTML(requestOptions, printHTML);