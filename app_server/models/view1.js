var mongoose = require("mongoose");
//Model definition for DataBase
var view1_schema_a = {
	"img_src": {type: String},
	"img_alt": {type: String},
	"title": {type: String, required: true},
	"description": {type: String, required: true},
	"price": {type: String, required: true},
	"location":{type: Number, index: "2dsphere"}
};

mongoose.model('View1_schema_a', view1_schema_a);