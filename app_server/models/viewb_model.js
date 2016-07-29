var mongoose = require("mongoose");
//console.log("viewb_model");
var schemaViewB = {
	"img_url": {type: String},
	"url": {type: String},
	"title": {type: String},
	"description": {type: String},
	"score": {type: Number, min: 0, max: 5},
	"categories": [String]
};
mongoose.model("View_SchemaB", schemaViewB);