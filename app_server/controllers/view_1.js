var controllerObject = {};
var logLabel = "view_1: ";

var products = [{
	"img_src": "//i.istockimg.com/file_thumbview_approve/10112670/5/stock-photo-10112670-single-potato.jpg",
	"img_alt": "Potatoes!",
	"title": "Potato!",
	"description": "Product description!",
	"price": "1$/kg",
	"distance": "1km"
},{
	"img_src": "//i.istockimg.com/file_thumbview_approve/10112670/5/stock-photo-10112670-single-potato.jpg",
	"img_alt": "Potatoes 2!",
	"title": "Potato 2!",
	"description": "Product description 2!",
	"price": "2$/kg",
	"distance": "2km"
}];

controllerObject.renderPage = function(req, res, next){
	res.render("views_/view_1.jade", {pageTitle: "Some page title my dear!", productsInfo: products});
};

module.exports = controllerObject;