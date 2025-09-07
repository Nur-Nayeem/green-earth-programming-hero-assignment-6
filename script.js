const categoryList = document.getElementById("category-list")
const treeContainer = document.getElementById("tree-container")
const allCategory = document.getElementById("all-category")
const cartSection = document.getElementById("cart-section")
const totalPriceSection = document.getElementById("total-price-section");

let cartArray = [];

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


const loadAllPlants = () => {
    allCategory.classList.add("bg-[var(--primary)]", "text-white")
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            displayAllPlants(data.plants)
        }
        )
}




const loadByCatergoryPlants = (id) => {
    loader('tree-container')
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
            displayAllPlants(data.plants)
        })
}

const displayAllPlants = (allPlants) => {
    treeContainer.innerHTML = ""
    allPlants.forEach(plant => {
        treeContainer.innerHTML += `
            <div id="plant-${plant.id}" class=" p-3 bg-white rounded-lg text-[var(--dark)] h-max py-4 flex flex-col justify-between">
                    <div>
                        <figure class="w-full h-44">
                            <img class="h-full w-full" src="${plant.image}" alt="">
                        </figure>
                        <div class="mt-3">
                            <h4 class="font-semibold">${plant.name}</h4>
                            <p class="my-2 text-sm text-justify">${plant.description.slice(0, 80)}</p>
                        </div>
                    </div>
                    <div>
                           <div class="flex justify-between w-full mb-4 font-semibold">
                                <span class="bg-[#DCFCE7] px-3 py-1 rounded-full">${plant.category}</span>
                                <span>৳<span>${plant.price}</span></span>
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
    loadAllPlants()
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


treeContainer.addEventListener("click", (e) => {
    if (e.target.localName === "button") {
        let id = e.target.parentNode.parentNode.id
        let name = e.target.parentNode.parentNode.children[0].children[1].children[0].innerText;
        let price = Number(e.target.parentNode.children[0].children[1].children[0].innerText);
        console.log(price);

        const isPresent = cartArray.find(obj => id === obj.id)
        if (isPresent === undefined) {
            cartArray.push({
                id: id,
                name: name,
                price: price,
                quantity: 1,
                total: price
            })
        }
        else {
            cartArray.forEach(obj => {
                if (obj.id === id) {
                    obj.quantity++;
                    obj.total += price;
                }

            })
        }


        console.log(cartArray);

        displayAddToCartCards(cartArray)


    }

})


const displayAddToCartCards = (cartArray) => {
    totalPriceSection.innerHTML = ''
    let totalAmount = 0
    cartSection.innerHTML = ""
    cartArray.forEach(cart => {
        cartSection.innerHTML += `
        <div id="${cart.id}" class="flex gap-2 items-center justify-between p-3 bg-[#f0fdf4] rounded-lg">
                <div class="flex flex-col gap-1">
                    <h4 class="font-semibold">${cart.name}</h4>
                    <p class="font-light">৳${cart.price} x ${cart.quantity}</p>
                </div>
            <i onclick="deleteCart('${cart.id}')" class="fa-solid fa-xmark"></i>
        </div>
    
    `
        totalAmount += cart.total;
        totalPriceSection.innerHTML = `
             <h4>Total:</h4>
             <h4>৳${totalAmount}</h4>
        `
    })
}


const deleteCart = (id) => {
    const filterCards = cartArray.filter(del => del.id !== id
    )
    console.log(filterCards);

    cartArray = filterCards;
    displayAddToCartCards(cartArray)
}



const loader = (id) => {
    const container = document.getElementById(id);
    container.innerHTML = `
        <div class="flex justify-center items-center">
            <span class="loading loading-bars loading-xl"></span>
        </div>
    `
}

loader('tree-container')
loadAllPlants()








