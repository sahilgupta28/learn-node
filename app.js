const express = require("express");
const app = express();
const morgan = require("morgan");


const {getPosts} = require('./routes/post')

app.use(morgan("dev"))

const middleware =(req, res, next) => {
	console.log("My middleware.");
	next();
}

app.use(middleware)

app.get("/", getPosts);
const port = 3000;

app.listen(port, () => {
	console.log(`Node working on port : ${port}`);
});

