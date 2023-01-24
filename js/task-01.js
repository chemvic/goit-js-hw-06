// const categoriesEl = document.querySelector('#categories');
// const arrayOfCategories = categoriesEl.children;
// console.log(`Number of categories: ${arrayOfCategories.length}`);

// const itemsEl = document.querySelector('li>ul');
// const category = document.querySelector('li>h2');
// console.log(`Category: ${category.textContent}`);
// console.log(`Elements: ${itemsEl.children.length}`);

const listOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategories.length}`);
listOfCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length }`);
   
});