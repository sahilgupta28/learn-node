// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
// 	res.send("hey express");
// });
// app.listen(3000);

const fs = require('fs')
const file_name = 'target.txt'

fs.readFile(file_name, (err, data) => {
	if(err){
		console.log(err);
	}
	console.log(data.toString());
})

console.log('Async programming...?');