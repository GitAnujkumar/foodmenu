const menuData = [
    // 🌍 INTERNATIONAL
    {name: "Burger", category: "international", price: 120, img: "https://via.placeholder.com/300x200?text=Burger"},
    {name: "Pizza", category: "international", price: 250, img: "https://via.placeholder.com/300x200?text=Pizza"},
    {name: "Pasta", category: "international", price: 200, img: "https://via.placeholder.com/300x200?text=Pasta"},

    // 🇮🇳 NATIONAL POPULAR DISHES
    {name: "Biryani", category: "national", price: 180, img: "https://via.placeholder.com/300x200?text=Biryani"},
    {name: "Masala Dosa", category: "national", price: 90, img: "https://via.placeholder.com/300x200?text=Dosa"},
    {name: "Paneer Butter Masala", category: "national", price: 160, img: "https://via.placeholder.com/300x200?text=Paneer"},

    // 🏞️ REGIONAL DISHES
    {name: "Rasgulla (West Bengal)", category: "regional", price: 50, img: "https://via.placeholder.com/300x200?text=Rasgulla"},
    {name: "Hyderabadi Haleem (Telangana)", category: "regional", price: 220, img: "https://via.placeholder.com/300x200?text=Haleem"},
    {name: "Sarson da Saag (Punjab)", category: "regional", price: 140, img: "https://via.placeholder.com/300x200?text=Saag"},

    // 🍢 SNACKS
    {name: "Momos", category: "snacks", price: 90, img: "https://via.placeholder.com/300x200?text=Momos"},
    {name: "Samosa", category: "snacks", price: 20, img: "https://via.placeholder.com/300x200?text=Samosa"},
    {name: "Egg Roll", category: "snacks", price: 60, img: "https://via.placeholder.com/300x200?text=Egg+Roll"},
    {name: "Veg Roll", category: "snacks", price: 50, img: "https://via.placeholder.com/300x200?text=Veg+Roll"},
];

const menuList = document.getElementById("menuList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Display Menu
function displayMenu(data) {
    menuList.innerHTML = "";
    data.forEach(dish => {
        menuList.innerHTML += `
            <div class="card">
                <img src="${dish.img}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p class="price">₹ ${dish.price}</p>
            </div>
        `;
    });
}

displayMenu(menuData);

// Search Function
searchInput.addEventListener("keyup", () => {
    filterMenu();
});

// Category Filter Function
categoryFilter.addEventListener("change", () => {
    filterMenu();
});

function filterMenu() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredData = menuData.filter(dish => {
        const matchName = dish.name.toLowerCase().includes(searchText);
        const matchCategory = (category === "all" || dish.category === category);
        return matchName && matchCategory;
    });

    displayMenu(filteredData);
}
// Demo restaurant data
const restaurants = [
    {
        name: "Hyderabadi Biryani House",
        cuisine: "Indian",
        img: "images/biryani.jpg"
    },
    {
        name: "South Taste Dosa Corner",
        cuisine: "South Indian",
        img: "images/dosa.jpg"
    },
    {
        name: "Momo Hut",
        cuisine: "Chinese",
        img: "images/momo.jpg"
    },
    {
        name: "Italiano Pizza",
        cuisine: "Italian",
        img: "images/pizza.jpg"
    }
];

// Load Restaurants
function loadRestaurants() {
    const container = document.getElementById("restaurantList");
    container.innerHTML = "";

    restaurants.forEach(res => {
        const card = `
            <div class="restaurant-card">
                <img src="${res.img}" alt="${res.name}">
                <div class="info">
                    <h4>${res.name}</h4>
                    <p>${res.cuisine}</p>
                </div>
                <button onclick="order('${res.name}')">Order Now</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Search food or restaurant
function searchFood() {
    const value = document.getElementById("searchBox").value.toLowerCase();
    const filtered = restaurants.filter(r =>
        r.name.toLowerCase().includes(value) ||
        r.cuisine.toLowerCase().includes(value)
    );

    const container = document.getElementById("restaurantList");
    container.innerHTML = "";

    filtered.forEach(res => {
        container.innerHTML += `
            <div class="restaurant-card">
                <img src="${res.img}">
                <div class="info">
                    <h4>${res.name}</h4>
                    <p>${res.cuisine}</p>
                </div>
                <button onclick="order('${res.name}')">Order Now</button>
            </div>
        `;
    });
}

function order(name) {
    alert("Ordering from " + name);
}

window.onload = loadRestaurants;
