var http = require('http');
var fs = require('fs');

var Response = function(res, filePath) {
  console.log(filePath);
  fs.readFile(filePath, function(err, data) {
    if(err) {
      console.log(err);
      res.writeHead(200, {
        'Content-type': "application/json"
      });
      res.end('err');
    } else {
      var i = filePath.lastIndexOf('.');
      var suffix = filePath.substr(i + 1, filePath.length);
      res.writeHead(200, {
        'Content-type': "text/" + suffix
      });
      res.end(data);
    }
  });
};

http.createServer(function(req, res) {
  var filePath = req.url.match .url.indexOf();
  Response(res, '../../../pack/' + 'html/visitor/selfClaim4CHS/index.html');
}).listen(3000);
