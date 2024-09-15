document.querySelectorAll("li.item").length 
document.querySelectorAll("li.item").forEach(li => {
    console.log(
        li.querySelector("h2").textContent,
        li.querySelectorAll("li").length
    );
    
});

// // Count the number of <li> elements with the class "item"
// const itemCount = document.querySelectorAll("li.item").length;
// console.log(`Total items: ${itemCount}`);

// // Iterate over each <li> element with the class "item"
// document.querySelectorAll("li.item").forEach(li => {
//     console.log(
//         li.querySelector("h2").textContent, // Log the text content of the <h2> tag
//         li.querySelectorAll("li").length    // Log the number of nested <li> elements
//     );
// });