var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  if(asset === '/'){
  	asset = path.join(archive.paths.siteAssets, '/index.html');
	fs.readFile(asset, {encoding: 'utf8'}, function (err, data){
	  res.end(data);
	});    
  }
  if(asset === '/styles.css'){
  	asset = path.join(archive.paths.siteAssets, '/styles.css');
	fs.readFile(asset, {encoding: 'utf8'}, function (err, data){
	  res.end(data);
	});    
  }     
 

}
// As you progress, keep thinking about what helper functions you can put here!




 