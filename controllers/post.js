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