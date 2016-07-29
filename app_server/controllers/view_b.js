var renderObject = {};
var listOfThings = [{
	img_url: "//images.media-allrecipes.com/images/52912.jpg",
	url: "http://images.media-allrecipes.com/images/52912.jpg",
	title: "Apple Pie A",
	description: "Best pie on earth!",
	score: 2,
	categories: ["One","Two","Three","Four"]
},{
	img_url: "//images.media-allrecipes.com/images/52912.jpg",
	url: "http://images.media-allrecipes.com/images/52912.jpg",
	title: "Apple Pie A",
	description: "Best pie on earth!",
	score: 5,
	categories: ["One","Two","Three","Four"]
},{
	img_url: "//images.media-allrecipes.com/images/52912.jpg",
	url: "http://images.media-allrecipes.com/images/52912.jpg",
	title: "Apple Pie A",
	description: "Best pie on earth!",
	score: 5,
	categories: ["One","Two","Three","Four"]
},{
	img_url: "//images.media-allrecipes.com/images/52912.jpg",
	url: "http://images.media-allrecipes.com/images/52912.jpg",
	title: "Apple Pie A",
	description: "Best pie on earth!",
	score: 5,
	categories: ["One","Two","Three","Four"]
}];


renderObject.renderPage = function(req, res, next){
	res.render('views_/view_b_content', {TitleOfPage: "Page b", ListOfThings: listOfThings});
};
module.exports = renderObject;