const categoryList = document.getElementById("category-list")

const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(category => {
            displayCategory(category.categories)
        }
        )
}
loadCategory()

const displayCategory = (categories) => {
    categories.forEach(cat => {
        categoryList.innerHTML += `
            <li id="cat-${cat.id}" class="p-2 cursor-pointer hover:bg-[var(--primary)] hover:text-white">${cat.category_name}</li>
        `
        console.log(cat);

    });
}





