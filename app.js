let filteredStarters = dishes.filter(dish => dish.course === 'Starters');
let filteredEntrees = dishes.filter(dish => dish.course === 'Entrees');
let filteredDesserts = dishes.filter(dish => dish.course === 'Desserts');

let startersDiv = document.getElementById("startersMenu")
let entreesDiv = document.getElementById("entreesMenu")
let dessertsDiv = document.getElementById("dessertsMenu")

let starterSwitch = document.getElementById("starterSwitch")
let entreeSwitch = document.getElementById("entreeSwitch")
let dessertSwitch = document.getElementById("dessertSwitch")

let starters = filteredStarters.map(dish => `<div class="starter">
                                                <img class="tasty-food-pic" src="${dish.imageURL}"/>
                                                <div class="text">
                                                    <div class="title-and-price">
                                                        <h3 class="title">${dish.title}</h3>
                                                        <span class="price">$${dish.price}<span>
                                                    </div>
                                                    <span class="description">${dish.description}<span>
                                                </div>
                                            </div>`);
                                            
starters.forEach(dish => {startersDiv.insertAdjacentHTML('beforeend', dish);})

let entrees = filteredEntrees.map(dish => `<div class="entree">
                                                <img class="tasty-food-pic" src="${dish.imageURL}"/>
                                                <div class="text">
                                                    <div class="title-and-price">
                                                        <h3 class="title">${dish.title}</h3>
                                                        <span class="price">$${dish.price}<span>
                                                    </div>
                                                    <span class="description">${dish.description}<span>
                                                </div>
                                            </div>`);

entrees.forEach(dish => {entreesDiv.insertAdjacentHTML('beforeend', dish);})

let desserts = filteredDesserts.map(dish => `<div class="dessert">
                                                <img class="tasty-food-pic" src="${dish.imageURL}"/>
                                                <div class="text">
                                                    <div class="title-and-price">
                                                        <h3 class="title">${dish.title}</h3>
                                                        <span class="price">$${dish.price}<span>
                                                    </div>
                                                    <span class="description">${dish.description}<span>
                                                </div>
                                            </div>`);

desserts.forEach(dish => {
    dessertsDiv.insertAdjacentHTML('beforeend', dish);
})

starterSwitch.addEventListener('change', function() {
    if(this.checked) {
        startersDiv.style.display = "flex"
    } else {
        startersDiv.style.display = "none"
    }
})

entreeSwitch.addEventListener('change', function() {
    if(this.checked) {
        entreesDiv.style.display = "flex"
    } else {
        entreesDiv.style.display = "none"
    }
})

dessertSwitch.addEventListener('change', function() {
    if(this.checked) {
        dessertsDiv.style.display = "flex"
    } else {
        dessertsDiv.style.display = "none"
    }
})