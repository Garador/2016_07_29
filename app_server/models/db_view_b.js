var mongoose_view_b = require("mongoose");
var readLine_viewB = require("readline");
var mongoDBUri_2 = "mongodb://localhost:27017/db_view_b";
var logLabel_vb = "db_view_b.js ";

var int_b = readLine_viewB.createInterface({
	input: process.stdin,
	output: process.stdout
});
int_b.on("SIGINT", function(){
	//process.emit("SIGINT");
});


mongoose_view_b.connection.on("connected", function(){
	console.log(logLabel_vb+" Mongoose connected to: "+mongoDBUri_2);
});

mongoose_view_b.connection.on("disconnected", function(){
	console.log(logLabel_vb+" Disconnected from: "+mongoDBUri_2);
});


mongoose_view_b.connection.on("error", function(err){
	console.log(logLabel_vb+" Error on connection "+mongoDBUri_2+": ");
	console.log(err);
});

process.on("SIGINT", function(){
	console.log(logLabel_vb+"SIGINT detected. Closing Mongoose connections to "+mongoDBUri_2);
	mongoose_view_b.connection.close(function(){
		console.log(logLabel_vb+"Mongoose connections successfully closed due SIGINT signal.");
		process.exit(0);
	});

});

process.on("SIGUSR2", function(){
	console.log(logLabel_vb+"SIGUSR2 detected (Nodemon restart). Closing MongoDB connections.");
	mongoose_view_b.connection.close(function(){
		console.log(logLabel_vb+"Mongoose connections successfully closed due SIGUSR2 signal.");
		process.kill(process.pid, "SIGUSR2");
	});
});

process.on("SIGTERM", function(){
	console.log(logLabel_vb+"SIGTERM detected (Heroku closing app). Closing MongoDB connections.");
	mongoose_view_b.connection.close(function(){
		console.log(logLabel_vb+"Mongoose connections successfully closed due SIGTERM signal.");
		process.exit(0);
	});
});

require('./viewb_model');