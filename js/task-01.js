const categoriesRef = document.querySelector("#categories");

const allCategoriesRef = categoriesRef.querySelectorAll("h2");

const numOfCat = allCategoriesRef.length;
console.log("Number of categories: ", numOfCat);

const itemRef = categoriesRef.querySelectorAll(".item");

itemRef.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;
    console.log("Category: ", categoryName);
    const quantityOfElements = item.querySelectorAll("li").length;
    console.log("Elements: ", quantityOfElements);
});
