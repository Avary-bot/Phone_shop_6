/* =========================================================
   SHOPX - Shared JavaScript
   Data: localStorage only
   ========================================================= */

const KEYS = {
  users: "shopx_users",
  products: "shopx_products",
  cart: "shopx_cart",
  orders: "shopx_orders",
  currentUser: "shopx_currentUser",
  theme: "shopx_theme",
};

function getData(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return getData(KEYS.users, []);
}
function getProducts() {
  return getData(KEYS.products, []);
}
function getCart() {
  return getData(KEYS.cart, []);
}
function getOrders() {
  return getData(KEYS.orders, []);
}
function getCurrentUser() {
  return getData(KEYS.currentUser, null);
}

function saveUsers(v) {
  setData(KEYS.users, v);
}
function saveProducts(v) {
  setData(KEYS.products, v);
}
function saveCart(v) {
  setData(KEYS.cart, v);
}
function saveOrders(v) {
  setData(KEYS.orders, v);
}

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[ch],
  );
}

function seedProducts() {
  const products = getProducts();
  if (products.length) return;

  saveProducts([
    {
      id: 1001,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
      stock: 25,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      description:
        "Comfortable wireless headphones with rich sound and long battery life.",
      seller: "SHOPX",
      reviews: [
        {
          user: "Demo User",
          rating: 5,
          comment: "Great sound and comfortable.",
        },
      ],
    },
    {
      id: 1002,
      name: "Premium T-Shirt",
      price: 24.5,
      category: "Fashion",
      stock: 40,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      description: "Soft premium cotton T-shirt for everyday wear.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1003,
      name: "Running Shoes",
      price: 79.0,
      category: "Shoes",
      stock: 18,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      description: "Lightweight running shoes designed for daily training.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1004,
      name: "Smart Watch",
      price: 129.0,
      category: "Accessories",
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      description:
        "Modern smartwatch for fitness, notifications and daily activity.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1005,
      name: "iPhone 15 Pro",
      price: 899.0,
      category: "Electronics",
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
      description:
        "Powerful smartphone with a premium camera and fast performance.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1006,
      name: "Gaming Laptop",
      price: 1299.0,
      category: "Electronics",
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
      description:
        "High-performance laptop for gaming, programming and creative work.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1007,
      name: "Bluetooth Speaker",
      price: 45.0,
      category: "Electronics",
      stock: 30,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1008,
      name: "Mechanical Keyboard",
      price: 69.99,
      category: "Electronics",
      stock: 20,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
      description: "Responsive mechanical keyboard for gaming and programming.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1009,
      name: "Classic Hoodie",
      price: 39.99,
      category: "Fashion",
      stock: 35,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
      description: "Warm and comfortable hoodie with a clean modern design.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1010,
      name: "Denim Jacket",
      price: 64.0,
      category: "Fashion",
      stock: 22,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
      description:
        "Classic denim jacket that works with casual everyday outfits.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1011,
      name: "Sunglasses",
      price: 29.99,
      category: "Accessories",
      stock: 50,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
      description: "Stylish sunglasses with a lightweight frame.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1012,
      name: "Leather Backpack",
      price: 89.0,
      category: "Accessories",
      stock: 16,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      description:
        "Durable backpack with enough space for school, work and travel.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1013,
      name: "Sport Sneakers",
      price: 69.5,
      category: "Shoes",
      stock: 27,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      description: "Comfortable sneakers for walking, sports and everyday use.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1014,
      name: "White Casual Shoes",
      price: 54.99,
      category: "Shoes",
      stock: 24,
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
      description: "Minimal white shoes that match almost any outfit.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1015,
      name: "USB-C Power Bank",
      price: 34.99,
      category: "Accessories",
      stock: 45,
      image:
        "https://images.unsplash.com/photo-1609592424990-6f7c0c9b9f4a?auto=format&fit=crop&w=900&q=80",
      description: "Compact power bank with USB-C fast charging.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1016,
      name: "Wireless Mouse",
      price: 25.0,
      category: "Electronics",
      stock: 32,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
      description: "Smooth wireless mouse with comfortable ergonomic control.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1017,
      name: "Tablet 11-inch",
      price: 299.0,
      category: "Electronics",
      stock: 14,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
      description:
        "Slim tablet for study, entertainment and everyday productivity.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1018,
      name: "Baseball Cap",
      price: 18.99,
      category: "Fashion",
      stock: 60,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
      description: "Simple adjustable cap for casual everyday style.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1019,
      name: "Travel Watch",
      price: 99.0,
      category: "Accessories",
      stock: 15,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
      description: "Elegant everyday watch with a classic design.",
      seller: "SHOPX",
      reviews: [],
    },
    {
      id: 1020,
      name: "Basketball Shoes",
      price: 94.99,
      category: "Samsung",
      stock: 19,
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
      description: "Supportive sports shoes designed for quick movement.",
      seller: "SHOPX",
      reviews: [],
    },
  ]);
}

function hashPassword(password) {
  // Demo-only obfuscation. Do not use this as production password security.
  return btoa(unescape(encodeURIComponent(password)));
}

function signupUser(name, email, password) {
  name = name.trim();
  email = email.trim().toLowerCase();
  password = password.trim();

  if (!name || !email || !password) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters." };
  }

  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, message: "This email is already registered." };
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password: hashPassword(password),
    role: "customer",
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  saveUsers(users);
  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));

  return { ok: true, user };
}

function loginUser(email, password) {
  email = email.trim().toLowerCase();
  const user = getUsers().find(
    (u) => u.email === email && u.password === hashPassword(password),
  );

  if (!user) return { ok: false, message: "Invalid email or password." };

  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));
  return { ok: true, user };
}

function logoutUser() {
  localStorage.removeItem(KEYS.currentUser);
}

function requireLogin() {
  if (!getCurrentUser()) {
    location.href = "../auth/login.html";
    return false;
  }
  return true;
}

function requireAdmin() {
  const user = getCurrentUser();
  if (!user || user.role !== "admin") {
    location.href = "../auth/login.html";
    return false;
  }
  return true;
}

function ensureAdminDemo() {
  const users = getUsers();
  if (!users.some((u) => u.email === "admin@shopx.com")) {
    users.push({
      id: 1,
      name: "SHOPX Admin",
      email: "admin@shopx.com",
      password: hashPassword("admin123"),
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    saveUsers(users);
  }
}

function productRating(product) {
  const reviews = product.reviews || [];
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / reviews.length
  );
}

function stars(rating) {
  const n = Math.round(rating);
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function addToCart(productId) {
  const products = getProducts();
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return { ok: false, message: "Product not found." };
  if (product.stock <= 0)
    return { ok: false, message: "Product is out of stock." };

  const cart = getCart();
  const item = cart.find((i) => i.id === product.id);

  if (item) {
    if (item.qty >= product.stock) {
      return {
        ok: false,
        message: "You cannot add more than available stock.",
      };
    }
    item.qty++;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart(cart);
  return { ok: true, message: `${product.name} added to cart.` };
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + Number(i.qty), 0);
}

function cartTotal() {
  const products = getProducts();
  return getCart().reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function checkout() {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Please login first." };

  const cart = getCart();
  if (!cart.length) return { ok: false, message: "Your cart is empty." };

  const products = getProducts();
  const orderItems = [];

  for (const item of cart) {
    const product = products.find((p) => p.id === item.id);
    if (!product) continue;
    if (product.stock < item.qty) {
      return { ok: false, message: `Not enough stock for ${product.name}.` };
    }

    product.stock -= item.qty;
    orderItems.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      qty: item.qty,
    });
  }

  const orders = getOrders();
  const total = orderItems.reduce((s, i) => s + i.price * i.qty, 0);

  orders.push({
    id: "ORD-" + Date.now(),
    userId: user.id,
    customer: user.name,
    email: user.email,
    items: orderItems,
    total,
    status: "Completed",
    createdAt: new Date().toISOString(),
  });

  saveProducts(products);
  saveOrders(orders);
  saveCart([]);

  return { ok: true, message: "Order completed successfully!" };
}

function createProduct(data) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Please login first." };

  const products = getProducts();
  const product = {
    id: Date.now(),
    name: data.name.trim(),
    price: Number(data.price),
    category: data.category,
    stock: Number(data.stock),
    image: data.image.trim(),
    description: data.description.trim(),
    seller: user.name,
    sellerId: user.id,
    reviews: [],
  };

  if (
    !product.name ||
    product.price <= 0 ||
    product.stock < 0 ||
    !product.image
  ) {
    return { ok: false, message: "Please enter valid product information." };
  }

  products.unshift(product);
  saveProducts(products);
  return { ok: true, product };
}

function deleteProduct(productId) {
  const products = getProducts().filter((p) => p.id !== Number(productId));
  saveProducts(products);
}

function showToast(message, type = "success") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function applyTheme() {
  const theme = localStorage.getItem(KEYS.theme) || "light";
  document.documentElement.dataset.theme = theme;
  const icon = document.getElementById("themeIcon");
  if (icon)
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function toggleTheme() {
  const current = localStorage.getItem(KEYS.theme) || "light";
  localStorage.setItem(KEYS.theme, current === "dark" ? "light" : "dark");
  applyTheme();
}

document.addEventListener("DOMContentLoaded", () => {
  seedProducts();
  ensureAdminDemo();
  applyTheme();
});
