const express = require("express");
const data = require("./data.js");
const readline = require("readline");
const fs = require("fs");
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view options", {layout: false});
app.use(express.static(__dirname + "/page/"));

const readInterface = readline.createInterface({
	input: fs.createReadStream("page/index.html"),
	output: process.stdout,
	console: false
})

app.get("/", (req, res) => {
	res.render("/page/index.html");
})

app.get("/api/isVeganCheckIngredients", (req, res) => {
	ingredients = req.query.ingredients;
	res.send(data.isVeganCheckIngredients(ingredients));
})

app.get("/api/isVeganCheckVeganIngredients", (req, res) => {
	ingredients = req.query.ingredients;
	res.send(data.isVeganCheckVeganIngredients(ingredients));
})

app.listen(3000);

console.log("Listening at port 3000");
