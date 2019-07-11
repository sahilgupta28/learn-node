const Post = require('../models/post')

exports.getPosts =(req, res) => {
	res.json({
		posts:[
			{
				title : "Fist Post"
			},
			{
				title : "Second Post"
			}
		]
	});
}

exports.createPost = (req, res) => {
	const post = new Post(req.body)
	console.log("create post:", req.body)
}