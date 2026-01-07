// Select all feature boxes
const featureCards = document.querySelectorAll(".feature-card");

// Details container
const detailsBox = document.getElementById("feature-details-box");

// Map box type to detail paragraph
const detailsMap = {
    contact: document.getElementById("contact-details"),
    about: document.getElementById("about-details"),
    reviews: document.getElementById("reviews-details")
};

featureCards.forEach(card => {
    card.addEventListener("click", () => {

        // Remove active state from all cards
        featureCards.forEach(c => c.classList.remove("active"));

        // Add active state to clicked card
        card.classList.add("active");

        const type = card.dataset.type;

        detailsBox.style.display = "block";

        Object.values(detailsMap).forEach(detail => {
            detail.classList.remove("show");
        });

        detailsMap[type].classList.add("show");
    });
});


// Login popup elements
const loginBtn = document.getElementById("login-btn");
const loginOverlay = document.getElementById("login-overlay");
const loginPopup = document.getElementById("login-popup");

const loginTitle = document.getElementById("login-title");
const loginSubmitBtn = document.getElementById("login-submit-btn");
const loginToggleLink = document.getElementById("login-toggle-link");

let isSignupMode = false;

// Open login popup
loginBtn.addEventListener("click", () => {
    loginOverlay.style.display = "block";
    loginPopup.classList.add("show");
});

// Close popup when clicking outside
loginOverlay.addEventListener("click", () => {
    loginOverlay.style.display = "none";
    loginPopup.classList.remove("show");
});

// Toggle Login / Sign Up
loginToggleLink.addEventListener("click", () => {
    isSignupMode = !isSignupMode;

    if (isSignupMode) {
        loginTitle.innerText = "Sign Up";
        loginSubmitBtn.innerText = "Create Account";
        loginToggleLink.innerText = "Login";
        loginToggleLink.parentElement.firstChild.textContent = "Already a user? ";
    } else {
        loginTitle.innerText = "Login";
        loginSubmitBtn.innerText = "Login";
        loginToggleLink.innerText = "Sign up";
        loginToggleLink.parentElement.firstChild.textContent = "New user? ";
    }
});

const landingSections = [
    document.querySelector('h1'),
    document.querySelector('#shop-section'),
    document.querySelector('#features-section')
];

const shopPage = document.getElementById('shop-page');

document.getElementById('start-shopping-btn').addEventListener('click', () => {
    landingSections.forEach(el => el.classList.add('hidden'));
    shopPage.classList.remove('hidden');
    shopPage.classList.add('fade');

    shopPage.scrollIntoView({behavior: 'smooth'});
});

document.getElementById('back-home').addEventListener('click', () => {
    shopPage.classList.add('hidden');
    landingSections.forEach(el => el.classList.remove('hidden'));
});

const products = [
    { id: 1, name: "Leather Travel Bag", price: 12500 , image: "images/products/travelBag.jpg"},
    { id: 2, name: "Urban Jacket", price: 8999 , image: "images/products/jacket.jpg"},
    { id: 3, name: "Sneakers", price: 6999 , image: "images/products/sneaker.jpg"},
    {id: 4, name: "Rabanne Million Gold", price: 12900, image: "images/products/perfume.jpg"}
];

const grid = document.getElementById('product-grid');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button>Add to Cart</button>
`;

    grid.appendChild(card);
});

let cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = `Total: ₹${total}`;
}

grid.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const productName = e.target.parentElement.querySelector('h3').innerText;
        const product = products.find(p => p.name === productName);
        cart.push(product);
        updateCart();
    }
});


document.querySelector('body > h1')
