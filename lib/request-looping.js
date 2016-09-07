var defaultHost = '';
var defaultPath = '';
var defaultPort = '';
var defaultTimeReload = 30;

var Request = function(){
	this.setHost(defaultHost);
	this.setPath(defaultPath);
	this.setPort(defaultPort);
	this.setTimeReload(defaultTimeReload);
};

Request.prototype.setHost = function(host){
	Request.host = host;
}

Request.prototype.setPath = function(path){
	Request.path = path.toString();
}

Request.prototype.setPort = function(port){
	Request.port = parseInt(port);
}

Request.prototype.setTimeReload = function(timeReload){
	Request.timeReload = parseInt(timeReload);
}

Request.prototype.start = function(){
	doLopping();
}

function doLopping(){
	if(defaultHost != "" || defaultPath != ""){
		console.log("Wrong host or path\n"+
			"You have to set your host and path\n"+
			"request.setHost(yourHost)\n"+
			"request.setPath(yourPath)\n"+
			"getLooping(yourHost, yourPath)\n");

		console.log("host: " + Request.host + "\n");
		console.log("path: " + Request.path + "\n");
	}

	//var Spinner = require('cli-spinner').Spinner;
	//
	//var spinner = new Spinner('processing.. %s');
	//spinner.setSpinnerString('|/-\\');
	//spinner.start();

	var http = require('http');
	var options = {
	  host: Request.host,
	  path: Request.path,
	  port: Request.port
	};

	var req = http.get(options, function(res) {
	  var bodyChunks = [];
	  res.on('data', function(chunk) {
	    bodyChunks.push(chunk);
	  }).on('end', function() {
	    var body = Buffer.concat(bodyChunks);
	    console.log('\n\nRESULT: ' + body +' - Time: ' + getDateTime());
		setTimeout(function() {
			doLopping();
		}, Request.timeReload * 1000);
		//spinner.stop();
	  })
	});

	req.on('error', function(e) {
	  console.log('ERROR: ' + e.message);
	});
}

function getDateTime(){
	Number.prototype.padLeft = function(base,chr){
	    var  len = (String(base || 10).length - String(this).length)+1;
	    return len > 0? new Array(len).join(chr || '0')+this : this;
	}

	var d = new Date,
    dformat = [d.getDate().padLeft(),
               (d.getMonth()+1).padLeft(),
               d.getFullYear()].join('/') +' ' +
              [d.getHours().padLeft(),
               d.getMinutes().padLeft(),
               d.getSeconds().padLeft()].join(':');
    return dformat;
}

exports.Request = Request;