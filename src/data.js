const isVegan = require("is-vegan");

function isVeganCheckVeganIngredients(ingredients) {
	const vegan = isVegan.isVeganIngredient(ingredients)
	const complete_data = {
		isVegan: vegan,
		ingredients: ingredients
	};
	return complete_data
};

function isVeganCheckIngredients(ingredients) {
	const vegan = isVegan.checkIngredients(ingredients);
	const complete_data = {
		data: vegan,
		ingredients: ingredients
	};
	return complete_data
};

module.exports.isVeganCheckVeganIngredients = isVeganCheckVeganIngredients;
module.exports.isVeganCheckIngredients = isVeganCheckIngredients;
