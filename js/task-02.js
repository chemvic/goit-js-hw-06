const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const ingredientsEl = [];
ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li');
ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  ingredientsEl.push(ingredientEl);
  });
list.append(...ingredientsEl);