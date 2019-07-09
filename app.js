const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hey express");
});
const port = 3000;

app.listen(port, () => {
	console.log(`Node working on port : ${port}`);
});

