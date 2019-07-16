const {model, Schema} = require("mongoose");
const postSchema = new Schema({
	title : {
		type : String,
		require: 'Title is required.',
		minlength: 4,
		maxlength: 150
	},
	body:{
		type: String,
		require: 'Body is required.',
		minlength: 4,
		maxlength: 150
	},
	_category:{
		ref : Schema.category._id,
		type: string
	}
})

module.exports = model("Post", postSchema);