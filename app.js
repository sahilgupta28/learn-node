const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config()

mongoose.connect('mongodb://localhost:27017/learn_node', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
	console.log('connection open')
})


const postRoutes = require('./routes/post')

app.use(morgan("dev"))

const middleware =(req, res, next) => {
	console.log("My middleware.");
	next();
}

app.use(middleware)

app.use("/", postRoutes);
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Node working on port : ${port}`);
});

