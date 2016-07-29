var mongooseDBview_1 = require("mongoose");
var readLine = require("readline");
var dbUri = "mongodb://localhost:27017/2016_07_29_view1";
var logLabel = "db_view_1.js: ";

mongooseDBview_1.connect(dbUri);


mongooseDBview_1.connection.on("connected", function(){
	console.log(logLabel+" Connected to: "+dbUri);
});
mongooseDBview_1.connection.on("disconnected", function(){
	console.log(logLabel+" Disconnected from: "+dbUri);
});
mongooseDBview_1.connection.on("error", function(err){
	console.log(logLabel+" Error on connection: "+dbUri);
	console.log(err);
});

var rli1 = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
rli1.on("SIGINT", function(){
	//process.emit("SIGINT");
});

process.on('SIGINT', function(){
	mongooseDBview_1.connection.close(function(){
		console.log(logLabel+"gracefullDisconnection1: SigINt called.");
		process.exit(0);
	});
});
process.on('SIGUSR2', function(){
	mongooseDBview_1.connection.close(function(){
		console.log(logLabel+"gracefullDisconnection1: SIGUSR2 called.");
		process.kill(process.pid, "SIGUSR2");
	});
});
process.on("SIGTERM", function(){
	mongooseDBview_1.connection.close(function(){
		console.log(logLabel+"gracefullDisconnection1: SIGTERM called.");
		process.exit(0);
	});
});

require("./view1");