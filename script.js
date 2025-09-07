const categoryList = document.getElementById("category-list")
const treeContainer = document.getElementById("tree-container")
const allCategory = document.getElementById("all-category")



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
            <li id="${cat.id}" class="p-2 cursor-pointer hover:bg-[var(--primary)] hover:text-white">${cat.category_name}</li>
        `


    });
}


const loadPlants = () => {
    allCategory.classList.add("bg-[var(--primary)]", "text-white")
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            displayAllPlants(data.plants)
        }
        )
}

loadPlants()



const loadByCatergoryPlants = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
            displayAllPlants(data.plants)
        })
}

const displayAllPlants = (allPlants) => {
    treeContainer.innerHTML = ""
    allPlants.forEach(plant => {
        // console.log(plant);
        treeContainer.innerHTML += `
            <div class=" p-3 bg-white rounded-lg text-[var(--dark)] h-96 py-4 flex flex-col justify-between">
                    <div>
                        <figure class="w-full h-44">
                            <img class="h-full w-full" src="${plant.image}" alt="">
                        </figure>
                        <div class="mt-3">
                            <h4 class="font-semibold">${plant.name}</h4>
                            <p class="my-2 text-sm text-justify">${plant.description.slice(0, 98)}</p>
                        </div>
                    </div>
                    <div>
                           <div class="flex justify-between w-full mb-4 font-semibold">
                                <span class="bg-[#DCFCE7] px-3 py-1 rounded-full">${plant.category}</span>
                                <span>৳${plant.price}</span>
                             </div>
                             <button class="w-full py-3 font-medium text-white rounded-full bg-[var(--primary)]">Add to
                            Cart</button>
                    </div>
                </div>
        `

    })

}

allCategory.addEventListener("click", () => {
    for (let li of categoryList.children) {
        li.classList.remove("bg-[var(--primary)]", "text-white")
    }
    loadPlants()
})



categoryList.addEventListener("click", (e) => {
    if (e.target.localName === 'li') {
        allCategory.classList.remove("bg-[var(--primary)]", "text-white")
        for (let li of categoryList.children) {
            li.classList.remove("bg-[var(--primary)]", "text-white")
        }

        e.target.classList.add("bg-[var(--primary)]", "text-white")
        const catId = e.target.id
        loadByCatergoryPlants(catId)
    }

})

// console.log(categoryList.children);








