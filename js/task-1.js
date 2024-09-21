const numberOfCategories = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${numberOfCategories}`);

document.querySelectorAll("li.item").forEach(li => {
    const categoryName = li.querySelector("h2").textContent;
    const numberOfElements = li.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfElements}`);
});