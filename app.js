const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
	console.log('connection open')
})


const postRoutes = require('./routes/post')

app.use(morgan("dev"))
app.use(bodyParser.json())

const middleware =(req, res, next) => {
	console.log("My middleware.");
	next();
}

app.use(middleware)

app.use(expressValidator())

app.use("/", postRoutes);
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Node working on port : ${port}`);
});

