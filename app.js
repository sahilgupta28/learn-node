const express = require("express");
const app = express();

const {getPosts} = require('./routes/post')

app.get("/", getPosts);
const port = 3000;

app.listen(port, () => {
	console.log(`Node working on port : ${port}`);
});

