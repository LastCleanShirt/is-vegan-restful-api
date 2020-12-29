const express = require("express");
const data = require("./data.js");
const app = express();

app.get("/api/isVeganCheckIngredients", (req, res) => {
	ingredients = req.query.ingredients;
	res.send(data.isVeganCheckIngredients(ingredients));
});

app.get("/api/isVeganCheckVeganIngredients", (req, res) => {
	ingredients = req.query.ingredients;
	res.send(data.isVeganCheckVeganIngredients(ingredients));
});

app.listen(3000);

console.log("Listening at port 3000");
