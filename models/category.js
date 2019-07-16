const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
	title : {
		type : String,
		require: 'Title is required.',
		minlength: 4,
		maxlength: 150
	},
	description:{
		type: String,
		require: 'Body is required.',
		minlength: 4,
		maxlength: 150
	}
})

module.exports = mongoose.model("Category", categorySchema);