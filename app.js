// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
// 	res.send("hey express");
// });
// app.listen(3000);

const fs = require('fs')
const file_name = 'target.txt'

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(file_name, (err, data) => {
	if(err){
		errHandler(err);
	}
	dataHandler(data);
})

console.log('Async programming...?');