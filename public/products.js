// Defining the variables

const AllProductList = document.getElementById('allItemList'); // This is the product div, all products go inside this
const coinTypeSelect = document.getElementById("coin-type");
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Array of products

const products = [
    {
        id: 1,
        title: "Swimming",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/1_2011-swimming-50p-rev.jpg?width=800"
    },
    {
        id: 2,
        title: "Archery",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/2_2011-archery-50p-rev_1.jpg?width=800"
    },
    {
        id: 3,
        title: "Athletics",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/3_2011-athletics-50p-rev.jpg?width=800"
    },
    {
        id: 4,
        title: "Badminton",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/4_2010-badminton-50p-rev.jpg?width=800"
    },
    {
        id: 5,
        title: "Basketball",
        price: 4.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/5_2011-basketball-football-50p-rev.jpg?width=800"
    },
    {
        id: 6,
        title: "Boxing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/7_2011-boxing-50p-rev.jpg?width=800"
    },
    {
        id: 7,
        title: "Canoeing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/8_2011-kayaking-50p-rev.jpg?width=800"
    },
    {
        id: 8,
        title: "Fencing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/11_2011-fencing-50p-rev.jpg?width=800"
    },
    {
        id: 9,
        title: "Football",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/12_2011-football-50p-rev.jpg?width=800"
    },
    {
        id: 10,
        title: "Boccia",
        price: 8.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/6_2010-boccia-50p-rev.jpg?width=800"
    },
    {
        id: 11,
        title: "Boxing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/7_2011-boxing-50p-rev.jpg?width=800"
    },
    {
        id: 12,
        title: "Cycling",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/9_luk50cyc---cycling_rev.jpg?width=800"
    },
    {
        id: 13,
        title: "Equestrian",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/10_2011-riding-50p-rev.jpg?width=800"
    },
    {
        id: 14,
        title: "Fencing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/11_2011-fencing-50p-rev.jpg?width=800"
    },
    {
        id: 15,
        title: "Goalball",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/13_2011-goalball-50p-rev.jpg?width=800"
    },
    {
        id: 16,
        title: "Gymnastics",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/14_2010-gymnastics-50p-rev.jpg?width=800"
    },
    {
        id: 17,
        title: "Handball",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/15_2011-handball-50p-rev.jpg?width=800"
    },
    {
        id: 18,
        title: "Gymnastics",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/14_2010-gymnastics-50p-rev.jpg?width=800"
    },
    {
        id: 19,
        title: "Hockey",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/16_2011-hockey-50p-rev.jpg?width=800"
    },
    {
        id: 20,
        title: "Olympic Collection",
        price: 149.99,
        image: "https://i.ebayimg.com/images/g/LRoAAOSwlSZeeKYw/s-l1200.webp"
    },
    {
        id: 21,
        title: "Rowing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/19_2011-rowing-50p-rev.jpg?width=800"
    },
    {
        id: 22,
        title: "Sailing",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/20_2011-sailing-50p-rev.jpg?width=800"
    },
    {
        id: 23,
        title: "Shooting",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/21_2011-shooting50p-rev.jpg?width=800"
    },
    {
        id: 24,
        title: "Table Tennis",
        price: 5.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/22_2011-table-tennis-50p-rev.jpg?width=800"
    },
    {
        id: 25,
        title: "Tennis",
        price: 5.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/24_2011-tennis-50p-rev.jpg?width=800"
    },
    {
        id: 26,
        title: "Taekwondo",
        price: 7.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/23_2011-taekwondo-50p-rev.jpg?width=800"
    },
    {
        id: 27,
        title: "Traithlon",
        price: 9.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/25_2011-triathlon-50p-rev.jpg?width=800"
    },
    {
        id: 28,
        title: "Volleyball",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/26_2011-volleyball-50p-rev.jpg?width=800"
    },
    {
        id: 29,
        title: "Weightlifting",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/27_2011-weightlifting-50p-rev.jpg?width=800"
    },
    {
        id: 30,
        title: "Wheelchair Rugby",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/28_2011-wheelchair-rugby-50p-rev.jpg?width=800"
    },
    {
        id: 31,
        title: "Wrestling",
        price: 3.99,
        image: "https://www.royalmintmuseum.org.uk/siteassets/collection/coins/29_2011-wrestling-50p-rev.jpg?width=800"
    },
    {
        id: 32,
        title: "The 150th Anniversary of the Birth of Beatrix Potter",
        price: 2.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2016_50pence_bp_ann.png"
    },
    {
        id: 33,
        title: "Beatrix Potter - Peter Rabbit 2016",
        price: 2.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2016_50pence_bp_pr.png"
    },
    {
        id: 34,
        title: "Beatrix Potter - Jemima Puddle-Duck",
        price: 3.49,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2016_50pence_bp_jp.png"
    },
    {
        id: 35,
        title: "Beatrix Potter - Mrs. Tiggy-Winkle",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2016_50pence_bp_tw.png"
    },
    {
        id: 36,
        title: "Beatrix Potter - Squirrel Nutkin",
        price: 4.49,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2016_50pence_bp_sn.png"
    },
    {
        id: 37,
        title: "Beatrix Potter - The Tale of Peter Rabbit",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/products/u/uk17prbu_02.jpg?width=103&quality=50"
    },
    {
        id: 38,
        title: "Beatrix Potter - Tom Kitten",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/products/u/uk17tkbu_02.jpg?width=103&quality=50"
    },
    {
        id: 39,
        title: "Beatrix Potter - Mr. Jeremy Fisher",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/products/u/uk17jfbu_02.jpg?width=103&quality=50"
    },
    {
        id: 40,
        title: "Beatrix Potter - Benjamin Bunny",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/products/u/uk17bbbu_02.jpg?width=103&quality=50"
    },
    {
        id: 41,
        title: "Beatrix Potter - Peter Rabbit 2018",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2018-peter-rabbit.jpg"
    },
    {
        id: 42,
        title: "Beatrix Potter - Flopsy Bunny",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2018-flopsy-bunny.jpg"
    },
    {
        id: 43,
        title: "Beatrix Potter - Mrs. Tittlemouse",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2018-mrs-tittlemouse.jpg"
    },
    {
        id: 44,
        title: "Beatrix Potter - The Tailor Of Gloucester",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2018-the-tailor-of-gloucester.jpg"
    },
    {
        id: 45,
        title: "Beatrix Potter - Peter Rabbit 2019",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2019-peter-rabbit.jpg"
    },
    {
        id: 46,
        title: "Beatrix Potter - Peter Rabbit 2020",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2020-peter_rabbit.jpg"
    },
    {
        id: 47,
        title: "Innovations in Science - Sir Isaac Newton",
        price: 5.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/products/u/uk17insp_02.jpg?width=103&quality=50"
    },
    {
        id: 48,
        title: "Innovations in Science - Stephen Hawking",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2019-stephen-hawking.jpg"
    },
    {
        id: 49,
        title: "Innovations in Science - Rosalind Franklin",
        price: 4.49,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2020-rosalind-franklin.jpg"
    },
    {
        id: 50,
        title: "Innovations in Science - John Logie Baird",
        price: 3.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2021-john-logie-baird.jpg"
    },
    {
        id: 51,
        title: "Innovations in Science - Charles Babbage",
        price: 3.89,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2021-babbage.jpg"
    },
    {
        id: 52,
        title: "Innovations in Science - Alan Turing",
        price: 5.49,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/discover/uk-coins/coins-designs-and-specifications/fifty-pence-coin/2022-turing.jpg"
    },
    {
        id: 53,
        title: "Angel of the North",
        price: 2.19,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-a.jpg"
    },
    {
        id: 54,
        title: "James Bond",
        price: 2.49,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-b.jpg"
    },
    {
        id: 55,
        title: "Cricket",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-c.jpg"
    },
    {
        id: 56,
        title: "Double Decker Bus",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-d.jpg"
    },
    {
        id: 57,
        title: "English Breakfast",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-e.jpg"
    },
    {
        id: 58,
        title: "Fish and Chips",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-f.jpg"
    },
    {
        id: 59,
        title: "Greenich Mean Time, GMT",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-g.jpg"
    },
    {
        id: 60,
        title: "Houses of Parliament",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-h.jpg"
    },
    {
        id: 61,
        title: "Ice Cream",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-i.jpg"
    },
    {
        id: 62,
        title: "Jubilee",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-j.jpg"
    },
    {
        id: 63,
        title: "King Arthur",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-k.jpg"
    },
    {
        id: 64,
        title: "Loch Ness Monster",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-l.jpg"
    },
    {
        id: 65,
        title: "Mackintosh",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-m.jpg"
    },
    {
        id: 66,
        title: "National Health Service",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-n.jpg"
    },
    {
        id: 67,
        title: "Oak Tree",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-o.jpg"
    },
    {
        id: 68,
        title: "Post Boxes",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-p.jpg"
    },
    {
        id: 69,
        title: "Queuing",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-q.jpg"
    },
    {
        id: 70,
        title: "Robin",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-r.jpg"
    },
    {
        id: 71,
        title: "Stonehenge",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-s.jpg"
    },
    {
        id: 72,
        title: "Teapot",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-t.jpg"
    },
    {
        id: 73,
        title: "Union Flag",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-u.jpg"
    },
    {
        id: 74,
        title: "Villages",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-v.jpg"
    },
    {
        id: 75,
        title: "World Wide Web",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-c.jpg"
    },
    {
        id: 76,
        title: "X - Marks the Spot",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-x.jpg"
    },
    {
        id: 77,
        title: "Yeoman",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-circ-y.jpg"
    },
    {
        id: 78,
        title: "Zebra Crossing",
        price: 2.29,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-packaging/gbch-circ-z.jpg"
    },
    {
        id: 79,
        title: "Alphabet Collection",
        price: 59.99,
        image: "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/early-strike-uncirculated/gbch-26-coin-early-strike.png"
    }
    
]

// Rendering all the products

function renderProducts(productList, productData) {
    productList.innerHTML = productData.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <h5>${product.price}</h5>
            <div class="cart">
                <a><i class="bi bi-cart add-to-cart" data-id="${product.id}"></i></a>
            </div>
        </div>`
    ).join("");

    // Add event listeners to the newly rendered "Add to Cart" buttons
    addEventListenersToCartButtons();
    
}


function addEventListenersToCartButtons() {
    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        const addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener("click", addToCart);
    }
}

function addToCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const product = products.find((product) => product.id === productID);

    if (product) {
        const existingItem = cart.find((item) => item.id === productID);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            };
            cart.push(cartItem);
        }
        updateCartIcon();
        renderCartItems();
        saveToLocalStorage();
        calculateTotal();
    }
}

// Removing an item from the cart

function removeFromCart(event) {
    const productID = parseInt(event.target.dataset.id);
    cart = cart.filter((item) => item.id !== productID);
    saveToLocalStorage();
    renderCartItems();
    calculateTotal();
    updateCartIcon();
}

// Changing the quantity

function changeQuantity(event) {
    const productID = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value);

    if (quantity > 0) {
        const cartItem = cart.find((item) => item.id === productID);
        if (cartItem) {
            cartItem.quantity = quantity;
            saveToLocalStorage();
            calculateTotal();
            updateCartIcon();
        }
    }
}

// Saving to local storage so it saves after refreshing

function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    if (!cartItemsElement) {
        console.error("cartItemsElement not found");
        return;
    }

    // Cart page layout

    cartItemsElement.innerHTML = cart.map(
        (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h2 class="cart-item-title">${item.title}</h2>
                <input 
                    class="cart-item-quantity"
                    type="number" 
                    min="1" 
                    value="${item.quantity}" 
                    data-id="${item.id}" 
                />
            </div>
            <h2 class="cart-item-price">£${item.price}</h2>
            <button data-id="${item.id}" class="remove-from-cart"></button>
        </div>`
    ).join("");

    // Removing item from the cart

    const removeButtons = document.getElementsByClassName('remove-from-cart');
    for (let i = 0; i < removeButtons.length; i++) {
        const removeButton = removeButtons[i];
        removeButton.addEventListener("click", removeFromCart);
    }

    const quantityInputs = document.querySelectorAll(".cart-item-quantity");
    quantityInputs.forEach((input) => {
        input.addEventListener("change", changeQuantity);
    });
}

// Calculating the total

function calculateTotal() {
    const cartTotalElement = document.getElementById('cartTotal');
    if (!cartTotalElement) {
        console.error("cartTotalElement not found");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = `Total: £${total.toFixed(2)}`;
}

// Updating the number on the cart that shows the quantity

function updateCartIcon() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.setAttribute("data-quantity", totalQuantity);
}

function updateCartIconOnCartChange() {
    updateCartIcon();
}

function clearCart() {
    cart = [];
    saveToLocalStorage();
    updateCartIcon();
}


let numOfItems = document.querySelector(".items-found");
let lengthItems;

// Filtering system via the select/options 

function filterProducts(category) {
    let filteredProducts;

    if (category === "all") {
        filteredProducts = products;
    } else if (category === "science") {
        filteredProducts = products.filter(product => product.id >= 47 && product.id <= 52);
    } else if (category === "olympic") {
        filteredProducts = products.filter(product => product.id >= 1 && product.id <= 31);
    } else if (category === "potter") {
        filteredProducts = products.filter(product => product.id >= 32 && product.id <= 46);
    } else if (category === "alphabet") {
        filteredProducts = products.filter(product => product.id >= 53 && product.id <= 78);
    } else if (category === "collection") {
        filteredProducts = products.filter(product => product.id == 20 || product.id == 79);
    }

    // Displaying the number of items

    lengthItems = filteredProducts.length;
    numOfItems.innerHTML = `Items Found: <strong>${lengthItems}</strong>`;

    // Render the filtered products
    renderProducts(AllProductList, filteredProducts);
}

coinTypeSelect.addEventListener("change", () => {
    const selectedCategory = coinTypeSelect.value;
    const filteredProducts = filterProducts(selectedCategory);
    renderProducts(AllProductList, filteredProducts);
});

renderProducts(AllProductList, products);



// search function

let productSearch = document.querySelector(".product-search");
let submitBtn = document.querySelector(".product-submit");
let itemsFound = document.querySelector(".items-found");

function handleSearch() {
    let searchInput = productSearch.value.toLowerCase();
    let foundProducts = products.filter(product => product.title.toLowerCase().includes(searchInput));

    if (foundProducts.length > 0) {
        itemsFound.innerHTML = `Items Found: <strong>${foundProducts.length}</strong>`;
        renderProducts(AllProductList, foundProducts);
    } else if (searchInput) {
        itemsFound.innerHTML = "Items not found. Please try again.";
        AllProductList.innerHTML = "";
    } else {
        renderProducts(AllProductList, products);
    }
}

// As soon as there is a change in input, it will handle the search (search for relevant items)

productSearch.addEventListener("input", handleSearch);

