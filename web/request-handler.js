var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var helper = require('./http-helpers.js');

exports.handleRequest = function (req, res) {
  var uri = req.url;


  if(uri === '/' || uri === '/styles.css'){
  	res.writeHead(200, helper.headers);
  	helper.serveAssets(res, uri);
  }

  if(req.method === 'POST'){ // refactor fx below into helper file 'geturl'
  	var postData = '';
  	req.on('data', function(datum){
  		postData += datum;
  	}).on('end', function(){
  	  	var site = (postData.slice(4)); // check to see if site is in file
  	  	archive.readListOfUrls();
  	});

  }
  
};
